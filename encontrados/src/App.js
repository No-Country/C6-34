import './App.css';
import { Routes, Route} from "react-router-dom";
import { Register } from './pages/Register/Register.js';
import Usuario from './components/Usuariotipo';

function App() {
  return (
        <Routes>
          <Route path="register" element={<Register/>} />
          <Route path="usuario" element={<Usuario/>} />
        </Routes>
  );
}

export default App;
