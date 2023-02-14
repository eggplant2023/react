import {Route, Routes, Navigate } from 'react-router-dom';
import Home from "./components/Home";
import Users from "./components/Users";
import Reports from"./components/Reports";
import Questions from "./components/Questions";
import ProduInfo from "./components/ProductInfo";
import Posts from "./components/Posts";
import Confirm from "./components/Confirm";
import Menu from "./components/Menu"; 


const App = () => (
  <>
  <Menu />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/users" element={<Users />} />
    <Route path="/posts" element={<Posts />} />
    <Route path="/reports" element={<Reports />} />
    <Route path="/confirm" element={<Confirm />} />
    <Route path="/question" element={<Questions />} />
    <Route path="/productinfo" element={<ProduInfo />} />
  </Routes>
  </>
)

export default App;