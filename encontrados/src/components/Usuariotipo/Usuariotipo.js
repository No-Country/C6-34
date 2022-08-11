import './Usuariotipo.css';
import { Flex, Box, Button} from '@chakra-ui/react'
import { Link } from "react-router-dom";
const Usuariotipo = () =>{
    
    return(
            <Box>
                <h1 className='tittle'>Encontrados</h1>
                <p className='select'>Selecciona tu tipo de usuario</p>
                <Link to="/register">
                    <Button className='btn-sup' bg='brand.secondary'>EMPRESA</Button>
                </Link>
                <Link to="/register">
                    <Button className='btn-inf' bg='brand.secondary'>USUARIO</Button>
                </Link>
            </Box>
    )
}
export default Usuariotipo;