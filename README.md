# Gitify
Gitify is a React-based web application that replicates some features of GitHub, allowing users to search for profiles with help of username, view repositories, and explore followers.

## Features

# Search User
- An initial page with a input box that accepts a GitHub username and a submit/search button.
<img src='./frontend/public/Images/Dashboard.png' alt='Dashboard'/>

# User Profiles
- Fetch and display user data with help of username, including avatar, bio, location, followers, and repositories.
- View a list of repositories for any GitHub user.
- Navigate to repository details.
<img src='./frontend/public/Images/Repolist.png' alt='Repolist'/>

# Repository Details
- On clicking any of the repositories, it will take us to a page which shows description about that repository.
<img src='./frontend/public/Images/Repodetails.png' alt='Repodetails'/>

# Followers List
- Display followers for any user.
<img src='./frontend/public/Images/followers.png' alt='Followers'/>

- Click on a follower to view their repository list.
<img src='./frontend/public/Images/Repolist2.png' alt='Repolist'/>

# Navigation
- Dynamic routing using React Router for seamless navigation.

## Tech Stack
- Frontend: React.js, Redux, React Router, CSS, HTML, JavaScript, Axios
- Backend: Node.js, Express.js, MongoDB, Mongoose

## Deployment
- Frontend deploy link: https://gitify-gamma.vercel.app
- Backend deploy link: https://gitify.onrender.com