import './Usuariotipo.css';
import { Button} from '@chakra-ui/react'
import { Link } from "react-router-dom";
const Usuariotipo = () =>{
    
    return(
        <>
       
            <div className='boxcenter'>
                <h1 className='tittle'>Encontrados</h1>
                <p className='select'>Selecciona tu tipo de usuario</p>
                <Link to="/register">
                    <Button className='btn-sup' bg='brand.secondary'>EMPRESA</Button>
                </Link>
                <Link to="/register">
                    <Button className='btn-inf' bg='brand.secondary'>USUARIO</Button>
                </Link>
            </div>
        </>
    )
}
export default Usuariotipo;