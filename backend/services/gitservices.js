const axios =  require('axios') ;
const { UserModel } = require('../models/userModel') ;


const fetchGitHubData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch data from GitHub API: ${error.message}`);
  }
};



//  Save GitHub User
const saveGitHubUser = async (req, res) => {
  const { username } = req.params;
  if (!username) {
    return res.status(400).json({ message: 'Username is required' });
  }
  try {
    const existingUser = await UserModel.findOne({ username, softDeleted: false });
    if (existingUser) return res.status(200).json(existingUser);

    const githubData = await fetchGitHubData(`https://api.github.com/users/${username}`);

    const user = await UserModel.create({
      username: githubData.login,
      avatar_url: githubData.avatar_url,
      url: githubData.url,
      html_url: githubData.html_url,
      followers_url: githubData.followers_url,
      following_url: githubData.following_url,
      repos_url: githubData.repos_url,
      location: githubData.location || null,
      blog: githubData.blog || null,
      bio: githubData.bio || null,
      public_repos: githubData.public_repos || 0,
      public_gists: githubData.public_gists || 0,
      followers: githubData.followers || 0,
      following: githubData.following || 0,
    });

    res.status(201).json({ message: 'User saved successfully', user });
  } catch (error) {
    console.error('Error in saveGitHubUser:', error.message);
    res.status(500).json({ message: 'Error saving user', error:error.message });
  }
};

//  Fetch Repositories
const fetchUserRepos = async (req, res) => {
  const { username } = req.params;
  try {
    const repos = await fetchGitHubData(`https://api.github.com/users/${username}/repos`);
    res.status(200).json(repos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching repositories', error: error.message });
  }
};

// Fetch Repository Details
const fetchRepoDetails = async (req, res) => {
  const { username, repoName } = req.params;
  try {
    const repoDetails = await fetchGitHubData(`https://api.github.com/repos/${username}/${repoName}`);
    res.status(200).json(repoDetails);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching repository details', error: error.message });
  }
};

//  Fetch Followers
const fetchUserFollowers = async (req, res) => {
  const { username } = req.params;
  try {
    const followers = await fetchGitHubData(`https://api.github.com/users/${username}/followers`);
    res.status(200).json(followers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching followers', error: error.message });
  }
};


module.exports={
  saveGitHubUser,
  fetchUserRepos,
  fetchRepoDetails,
  fetchUserFollowers
}