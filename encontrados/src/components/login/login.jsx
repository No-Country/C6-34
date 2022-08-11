import { FormControl, Input, Heading, Text, Flex, Box, Button} from '@chakra-ui/react';
import {Link} from 'react-router-dom'

export const ChooseUser = () => {
    return (
      <Box  w="100wh" h="90vh">
          <Flex direction="column" align="center" w="100%" h="100%" justify="center" alignItems="center">
          <Heading>Encontrados</Heading>
          <Text>Selecciona tu tipo de usuario</Text>
          <Button colorScheme='gray' w={"104px"} h={"32px"} my={6}>EMPRESA</Button>
          <Button colorScheme='gray' w={"104px"} h={"32px"} my={6}>USUARIO</Button>
          </Flex>
      </Box>
    )
  }

export const Login = () => {
  return (
    <Box  w="100wh" h="90vh">
        <Flex direction="column" align="center" w="100%" h="100%" justify="center" alignItems="center">
        <Heading>Encontrados</Heading>
        <FormControl mt={6} px={5}>
            <Input variant='filled'  type='email' placeholder='Email o usuario' size='md'  _placeholder={{ color: 'black'}}/>
        </FormControl>
        <FormControl my={6} px={5}> 
            <Input variant='filled'  type='password' placeholder='Contraseña' size='md'  _placeholder={{ color: 'black'}}/>
        </FormControl>
        <Text as='ins'>¿Olvidaste tu contraseña?  Ingresa aquí</Text>
        <Button colorScheme='gray' w={"104px"} h={"32px"} my={6} textTransform="uppercase">Ingresar</Button>
        <Text as='ins'>¿No tienes cuenta? <Link to="ChooseUser">Registrate</Link></Text>
        </Flex>
    </Box>
  )
}



