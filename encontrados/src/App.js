import './App.css';
import { Routes, Route} from "react-router-dom";
import { Register } from './components/Register/Register';
import Usuario from './components/Usuariotipo/Usuariotipo';

function App() {
  return (
        <Routes>
          <Route path="register" element={<Register/>} />
          <Route path="usuario" element={<Usuario/>} />
        </Routes>
  );
}

export default App;
