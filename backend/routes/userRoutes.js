const express = require('express') ;
const { 
  saveGitHubUser, 
  fetchUserRepos,
  fetchRepoDetails,
  fetchUserFollowers,
  fetchUsers,
  softDelete,
  updateUser
} = require('../services/gitservices');

const userRouter = express.Router();

userRouter.get('/users/:username', saveGitHubUser);
userRouter.get('/users/:username/repos', fetchUserRepos);
userRouter.get('/users/:username/followers', fetchUserFollowers);
userRouter.get('/repos/:username/:repoName', fetchRepoDetails);
userRouter.get('/users', fetchUsers)
userRouter.delete('/users/:username', softDelete);
userRouter.patch('/users/:username', updateUser);

module.exports = userRouter;
