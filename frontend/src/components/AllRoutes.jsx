import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Dashboard } from '../pages/Dashboard';
import { RepoList } from '../pages/RepoList';
import { RepoDescription } from '../pages/RepoDescription';
import  FollowerList  from '../pages/FollowerList';

export const AllRoutes = () => {
  return (
    <Routes>

      <Route path='/' element={<Dashboard />} />
      <Route path='/repo_list' element={<RepoList />} />
      <Route path='/repo_desc' element={<RepoDescription />} />
      <Route path='/followers/:username' element={<FollowerList />} />

    </Routes>
  )
}
