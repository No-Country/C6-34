//styles
import './App.css';
//tools
import {  Routes, Route, } from "react-router-dom";
//components
import {Login,} from './components/login/login.jsx';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}>
      </Route>
    </Routes>
  );
}

export default App;
