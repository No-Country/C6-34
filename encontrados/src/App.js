//styles
import './App.css';
//tools
import { Routes, Route} from "react-router-dom";
//components
import { Login } from './components/login/login.jsx';
import { Register } from './components/Register/Register';
import Usertype from './components/User/Usertype';
import Home from './components/Home/Home';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
          <Route path="user" element={<Usertype/>} />      
        </Routes>
    </div>
  );
}
export default App;
