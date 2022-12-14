import { Container, FormControl, Input, Text, Flex, Button} from '@chakra-ui/react';
import {Link, useNavigate} from 'react-router-dom'
import {useFormik} from 'formik';

const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length < 6) {
        errors.lastName = 'Must be 6 characters at least';
    }
    return errors;
  };

export const Login = () => {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues:{
            email:'',
            password:'',
        },
        validate,
        onSubmit: values => {
            navigate('/')
          },
    });

  return (
    <Container maxW="sm">
       <Flex direction="column" justify="center" alignItems="center" mb="0" pb="0">
        <form onSubmit={formik.handleSubmit}>
            <Flex w="100vw" h="90vh" justify="center" alignItems="center">
                <Flex direction="column" align="center" maxW='100%' h="90vh" justify="center" alignItems="center">
                    <FormControl mt={6} px={5}>
                        <Input variant='filled' id="email" name="email"  type='email' 
                        placeholder='Email o usuario' size='md'  _placeholder={{ color: 'black'}}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        />
                         {formik.errors.email ? <Text color='tomato' p={2}>{formik.errors.email}</Text> : null}
                    </FormControl>
                    <FormControl my={6} px={5}> 
                        <Input variant='filled' id="password" name="password"  type='password' 
                        placeholder='Contraseña' size='md'  _placeholder={{ color: 'black'}}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        />
                        {formik.errors.email ? <Text color='tomato' p={2}>{formik.errors.password}</Text> : null}
                    </FormControl>
                    
                    <Button type="submit" colorScheme='gray' w={"104px"} h={"32px"} my={6} textTransform="uppercase">Ingresar</Button>
                    <Text as='ins'>¿No tienes cuenta? <Link to="/user">Registrate</Link></Text>
                </Flex>
            </Flex>
        </form>
        
        </Flex>
      </Container>
  )
}



