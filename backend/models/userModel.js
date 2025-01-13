//import mongoose from 'mongoose';
const mongoose = require('mongoose');

// User Schema

const UserSchema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    avatar_url: String,
    url: String,
    html_url: String,
    followers_url: String,
    following_url: String,
    repos_url: String,
    location: String,
    blog: String,
    bio: String,
    public_repos: Number,
    public_gists: Number,
    followers: Number,
    following: Number,
    friends: [String],
    softDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// User Model

const UserModel = mongoose.model('User', UserSchema);

module.exports={
  UserModel
}
