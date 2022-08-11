import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import List from './pages/List/List';
import Post from './pages/Post/Post';
import Detail from './pages/Detail/Detail';
import Login from './pages/Login/Login';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<List />} />
        <Route path="/post" element={<Post />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/kakaoLogin" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
