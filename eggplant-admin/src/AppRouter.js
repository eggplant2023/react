import React ,{Component} from 'react';
import {HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./routes/Home";
import Users from "./routes/Users";
import Reports from"./routes/Reports";
import Questions from "./routes/Questions";
import ProduInfo from "./routes/ProductInfo";
import Posts from "./routes/Posts";
import Confirm from "./routes/Confirm";
import Chatroom from './routes/Chatroom';
import Classify from './routes/Classify';
import Map from './mobiles/Map';
import NearMap from './mobiles/Nearmap';
import SellerMap from './mobiles/Sellermap';
const AppRouter = () => {

  return(
    
  <div className="app">
  <Routes className="pages">
    <Route path="/" element={<Home />} />
    <Route path="/users" element={<Users />} />
    <Route path="/posts" element={<Posts />} />
    <Route path="/reports" element={<Reports />} />
    <Route path="/confirm" element={<Confirm />} />
    <Route path="/question" element={<Questions />} />
    <Route path="/productinfo" element={<ProduInfo />} />
    <Route path="/chatroom" element={<Chatroom />} />
    <Route path="/classify" element={<Classify />}/>
    <Route path="/map" element={<Map />} />
    <Route path="/nearmap" element={<NearMap />} />
    <Route path="/sellermap" element={<SellerMap />} />
  </Routes>

  </div>
  )
}

export default AppRouter;