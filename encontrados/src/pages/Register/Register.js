import {FastField, Form, Formik} from 'formik'
import {useNavigate} from 'react-router-dom'
import {
  Flex,
  Button,
  Input,
  FormControl,
  Select,
  FormLabel,
  Heading,
} from '@chakra-ui/react';


export function Register() {
  const navigate = useNavigate()

  return (
    <Flex
    direction={'row'} 
    borderRadius='24px' 
    spacing='0' 
    w="98%" 
    my="1vh" 
    mx='auto' 
    minH='98vh'
    justifyContent='center'
    alignItems='center'
    >  
      <Formik
        initialValues={{
          email: '',
          name: '',
          phone: '',
          country: '',
          avatar: '',
          user: '',
          password: '',          
          passwordConfirm: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col space-y-4">
        <FormControl display="flex" flexDirection="column"  textAlign="center" justifyContent='center' rounded='md' bg='white' p="24px" w="80vh" borderRadius="24px" >
          <Heading as='h1' mb="10px" fontSize='24px' fontWeight="normal" textAlign="left" color='#000000'>Introduce tus datos</Heading>
          <FastField name="name">
            {({field, meta}) => (
              <>
               <FormLabel color='#000000' pl="8px" htmlFor='name'></FormLabel>
                <Input {...field} type="text" mb="16px"  placeholder='Nombre y Apellido' _placeholder={{ color: 'black' }} />                
              </>
            )}
          </FastField>
          <FastField name="email">
            {({field, meta}) => (
              <>
                <FormLabel ccolor='#000000' pl="8px" htmlFor='email'></FormLabel>
                <Input {...field} type="email" mb="16px" placeholder='Correo' _placeholder={{ color: 'black' }}/>                
              </>
            )}
          </FastField>
          <FastField name="phone">
            {({field, meta}) => (
              <>
                <FormLabel ccolor='#000000' pl="8px" htmlFor='phone'></FormLabel>
                <Input {...field} type="text" mb="16px" placeholder='Teléfono' _placeholder={{ color: 'black' }}/>                
              </>
            )}
          </FastField>
          <FastField name="country">
            {({field, meta}) => (
              <>
                <FormLabel color='#000000' pl="8px" htmlFor='country'></FormLabel>
                <Select {...field} type="text" mb="16px" bg='gray 500' placeholder='¿De dónde eres?' 
                _placeholder={{ color: 'black'}}>
                    <option value='Argentina'>Argentina</option>     
                    <option value='Bolivia'>Bolivia</option>     
                    <option value='Brasil'>Brasil</option>     
                    <option value='Chile'>Chile</option>     
                    <option value='Colombia'>Colombia</option> 
                    <option value='Ecuador'>Ecuador</option> 
                </Select>           
              </>
            )}
          </FastField>
          <FastField name="avatar">
            {({field, meta}) => (
              <>
                <FormLabel ccolor='#000000' pl="8px" htmlFor='avatar'></FormLabel>
                <Input {...field} type="file" mb="16px" placeholder='Teléfono' _placeholder={{ color: 'black' }}/>                
              </>
            )}
          </FastField>
        <FastField name="user">
            {({field, meta}) => (
              <>
                <FormLabel ccolor='#000000' pl="8px" htmlFor='user'></FormLabel>
                <Input {...field} type="text" mb="16px" placeholder='Usuario' _placeholder={{ color: 'black' }}/>                
              </>
            )}
          </FastField>
        <FastField name="password">
            {({field, meta}) => (
              <>
                <FormLabel ccolor='#000000' pl="8px" htmlFor='password'></FormLabel>
                <Input {...field} type="password" mb="16px" placeholder='Contraseña' _placeholder={{ color: 'black' }}/>                
              </>
            )}
          </FastField>
          <FastField name="passwordConfirm">
            {({field, meta}) => (
              <>
              <FormLabel ccolor='#000000' pl="8px" htmlFor='passwordConfirm'></FormLabel>
                <Input {...field} type="password" placeholder='Repetir contraseña' _placeholder={{ color: 'black' }} />                
              </>
            )}
          </FastField>
          
          <Button colorScheme='gray' fontSize="14px" textTransform="uppercase" mx="auto" width='136px' rounded='md' px="16px" mt="54px" size='lg' type="submit">Registrarme</Button>   
          </FormControl> 
        </Form>
      </Formik>
    </Flex>
  )

  function handleSubmit(values, formikBag) {
    console.log(values)

    //navigate('/')
  }
}