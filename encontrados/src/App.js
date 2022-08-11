import logo from './logo.svg';
import './App.css';
//tools
import { Routes, Route} from "react-router-dom";
//components
import { Login } from './components/login/login.jsx';
import { Register } from './components/Register/Register';
import Usuariotipo from './components/Usuario/Usuariotipo';
function App() {
  return (
        <Routes>
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
          <Route path="usuario" element={<Usuariotipo/>} />
        </Routes>
  );
}
export default App;
