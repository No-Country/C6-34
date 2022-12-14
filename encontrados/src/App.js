//styles
import './App.css';
//tools
import { Routes, Route} from "react-router-dom";
//components
import { Login } from './components/login/login.jsx';
import { Register } from './components/Register/Register';
import { EditUser } from './components/Register/EditUser';
import Usertype from './components/User/Usertype';
import Home from './components/Home/Home';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import PlaceList from './components/Places/PlaceList';
import Place from './components/Places/Place';

function App() {
  return (
    <div>
        
        <ScrollToTop />
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
          <Route path="editUser/:id" element={<EditUser/>} />
          <Route path="user" element={<Usertype/>} />    
          <Route path='places' element={<PlaceList/>} />  
          <Route path='place/:id' element={<Place/>} />  
        </Routes>
        <Menu/>
    </div>
  );
}
export default App;