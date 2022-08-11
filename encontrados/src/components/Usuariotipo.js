import './Usuariotipo.css';
import { Box, Button} from '@chakra-ui/react'
const Usuariotipo = () =>{
    
    return(
        <Box>
            <h1 className='tittle'>Encontrados</h1>
            <p className='select'>Selecciona tu tipo de usuario</p>
            <Button className='btn-sup' bg='brand.secondary'>EMPRESA</Button>
            <Button className='btn-inf' bg='brand.secondary'>USUARIO</Button>
        </Box>
    )
}
export default Usuariotipo;