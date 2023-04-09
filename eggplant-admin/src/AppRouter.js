import React ,{Component} from 'react';
import {HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./routes/Home";
import Users from "./routes/Users";
import Reports from"./routes/Reports";
import Questions from "./routes/Questions";
import ProduInfo from "./routes/ProductInfo";
import Posts from "./routes/Posts";
import Confirm from "./routes/Confirm";
import Menu from "./components/Menu"; 
import Chatroom from './routes/Chatroom';


const AppRouter = () => {

  return(
  <div className="app">
  <Menu />
  <Routes className="pages">
    <Route path="/" element={<Home />} />
    <Route path="/users" element={<Users />} />
    <Route path="/posts" element={<Posts />} />
    <Route path="/reports" element={<Reports />} />
    <Route path="/confirm" element={<Confirm />} />
    <Route path="/question" element={<Questions />} />
    <Route path="/productinfo" element={<ProduInfo />} />
    <Route path="/chatroom" element={<Chatroom />} />
  </Routes>

  </div>
  )
}

export default AppRouter;