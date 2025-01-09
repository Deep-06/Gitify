const express = require('express') ;
const { 
  saveGitHubUser, 
  fetchUserRepos,
  fetchRepoDetails,
  fetchUserFollowers
} = require('../services/gitservices');

const userRouter = express.Router();

userRouter.get('/users/:username', saveGitHubUser);
userRouter.get('/users/:username/repos', fetchUserRepos);
userRouter.get('/users/:username/followers', fetchUserFollowers);
userRouter.get('/repos/:username/:repoName', fetchRepoDetails);

module.exports = userRouter;
