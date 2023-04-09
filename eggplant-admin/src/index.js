import {createRoot}from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import styles from "./css/styles.css"
import "animate.css";
const element = document.getElementById('root')
const root = createRoot(element);

root.render(
  <BrowserRouter>
    <App />  
  </BrowserRouter>
);
