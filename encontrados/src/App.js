import './App.css';
import { Routes, Route} from "react-router-dom";
import { Register } from './components/Register/Register';
import Usuariotipo from './components/Usuario/Usuariotipo';

function App() {
  return (
        <Routes>
          <Route path="register" element={<Register/>} />
          <Route path="usuario" element={<Usuariotipo/>} />
        </Routes>
  );
}

export default App;
