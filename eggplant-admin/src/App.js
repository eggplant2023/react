import React ,{ useEffect, useState } from 'react';
import {Route, Routes, Navigate } from 'react-router-dom';
import Home from "./routes/Home";
import Users from "./routes/Users";
import Reports from"./routes/Reports";
import Questions from "./routes/Questions";
import ProduInfo from "./routes/ProductInfo";
import Posts from "./routes/Posts";
import Confirm from "./routes/Confirm";
import Menu from "./components/Menu"; 
import Chatroom from './routes/Chatroom';
import AppRouter from './AppRouter';
import { BrowserView, MobileView } from 'react-device-detect'
const App = () => {
  const id = "admin"
  const pwd = "1111"


  return(
  <div>
    <AppRouter isLoggedIn={true}/>
  </div>
  )
}

export default App;