// src/App.js
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BlogList from './components/ListBlog';
import EditBlog from './components/EditBlog';
import CreateBlog from './components/AddBlog';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';


function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/edit-blog/:id" element={<EditBlog />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
    </>
  );
}

export default App;
