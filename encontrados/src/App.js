//styles
import './App.css';
//tools
import { Routes, Route} from "react-router-dom";
//components
import { Login } from './components/login/login.jsx';
import { Register } from './components/Register/Register';
import Usuariotipo from './components/Usuario/Usuariotipo';
import Home from './components/Home/Home'; 


function App() {
  return (
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
          <Route path="usuario" element={<Usuariotipo/>} />
        </Routes>
  );
}
export default App;
