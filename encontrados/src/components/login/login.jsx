import { FormControl, Input, Heading, Text, Flex, Button} from '@chakra-ui/react';
import {Link} from 'react-router-dom'

export const Login = () => {
  return (
        <Flex w="100vw" h="90vh" justify="center" alignItems="center">
            <Flex direction="column" align="center" w="509px" h="90vh" justify="center" alignItems="center">
                <Heading>Encontrados</Heading>
                <FormControl mt={6} px={5}>
                    <Input variant='filled'  type='email' placeholder='Email o usuario' size='md'  _placeholder={{ color: 'black'}}/>
                </FormControl>
                <FormControl my={6} px={5}> 
                    <Input variant='filled'  type='password' placeholder='Contraseña' size='md'  _placeholder={{ color: 'black'}}/>
                </FormControl>
                <Text as='ins'>¿Olvidaste tu contraseña?  Ingresa aquí</Text>
                <Button colorScheme='gray' w={"104px"} h={"32px"} my={6} textTransform="uppercase">Ingresar</Button>
                <Text as='ins'>¿No tienes cuenta? <Link to="/usuario">Registrate</Link></Text>
            </Flex>
        </Flex>
  )
}



