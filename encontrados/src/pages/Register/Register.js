import {FastField, Form, Formik} from 'formik'
import {useNavigate} from 'react-router-dom'
import { CameraIcon } from '../../utils/svg/Svg';
import {
  Circle,
  Flex,
  Box,
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
        <FormControl display="flex" flexDirection="column"  textAlign="center" justifyContent='center' rounded='md' bg='white' p="24px" w="100vh" maxW="520px" borderRadius="24px" >
          <Heading as='h1' mb="32px" fontSize='24px' fontWeight="normal" textAlign="left" color='#000000'>Introduce tus datos</Heading>
          <FastField name="name">
            {({field, meta}) => (
              <>
               <FormLabel color='#000000' pl="8px" htmlFor='name'></FormLabel>
                <Input  {...field} type="text" mb="16px" variant="flushed" placeholder='Nombre y Apellido' _placeholder={{ color: 'black', fontSize: "14px", paddingLeft: "14px" }} />                
              </>
            )}
          </FastField>
          <FastField name="email">
            {({field, meta}) => (
              <>
                <FormLabel ccolor='#000000' pl="8px" htmlFor='email'></FormLabel>
                <Input {...field} type="email" mb="16px" variant="flushed"  placeholder='Correo' _placeholder={{ color: 'black', fontSize: "14px", paddingLeft: "14px"}}/>                
              </>
            )}
          </FastField>
          <FastField name="phone">
            {({field, meta}) => (
              <>
                <FormLabel ccolor='#000000' pl="8px" htmlFor='phone'></FormLabel>
                <Input {...field} type="text" mb="16px"  variant="flushed"  placeholder='Teléfono' _placeholder={{ color: 'black', fontSize: "14px", paddingLeft: "14px"}}/>                
              </>
            )}
          </FastField>
          <FastField name="country"  >
            {({field, meta}) => (
              <>
                <FormLabel color='#000000' pl="8px" htmlFor='country'></FormLabel>
                <Select {...field} type="text" mb="16px" alignSelf="flex-end" mr="10px" w="max-content" bg='blackAlpha.200' placeholder='¿De dónde eres?' 
                _placeholder={{ color: 'black', fontSize: "14px"}}>
                    <option _focus={{ boxShadow: 'outline' }} value='Argentina'>Argentina</option>     
                    <option _focus={{ boxShadow: 'outline' }} value='Bolivia'>Bolivia</option>     
                    <option _focus={{ boxShadow: 'outline' }} value='Brasil'>Brasil</option>     
                    <option _focus={{ boxShadow: 'outline' }} value='Chile'>Chile</option>     
                    <option _focus={{ boxShadow: 'outline' }} value='Colombia'>Colombia</option> 
                    <option _focus={{ boxShadow: 'outline' }} value='Ecuador'>Ecuador</option> 
                </Select>           
              </>
            )}
          </FastField>
          <FastField name="avatar">
            {({field, meta}) => (
            <>
              <Box display="flex" pos="relative">
                <FormLabel color='#000000' display="none" pl="8px" htmlFor='avatar'></FormLabel>
                <Input {...field}  type="file" borderRadius="50%" opacity="0" h="96px" w="96px" mb="24px" bg='blackAlpha.200' variant='filled' placeholder='avatar' _placeholder={{ color: 'black', fontSize: "14px", paddingLeft: "14px"}}/>
                <Circle size='96px' bg='blackAlpha.200' color="white" pos='absolute' zIndex="docked" pointerEvents="none">
                  <CameraIcon w={6} h={6}/>
                </Circle>                        
              </Box>
            </>
            )}
          </FastField>
        <FastField name="user">
            {({field, meta}) => (
              <>
                <FormLabel ccolor='#000000' pl="8px" htmlFor='user'></FormLabel>
                <Input {...field} type="text" mb="16px" variant="flushed" placeholder='Usuario' _placeholder={{ color: 'black', fontSize: "14px", paddingLeft: "14px"}}/>                
              </>
            )}
          </FastField>
        <FastField name="password">
            {({field, meta}) => (
              <>
                <FormLabel ccolor='#000000' pl="8px" htmlFor='password'></FormLabel>
                <Input {...field} type="password" mb="16px" variant="flushed" placeholder='Contraseña' _placeholder={{ color: 'black', fontSize: "14px", paddingLeft: "14px"}}/>                
              </>
            )}
          </FastField>
          <FastField name="passwordConfirm">
            {({field, meta}) => (
              <>
              <FormLabel ccolor='#000000' pl="8px" htmlFor='passwordConfirm'></FormLabel>
                <Input {...field} type="password" variant="flushed"  placeholder='Repetir contraseña' _placeholder={{ color: 'black', fontSize: "14px", paddingLeft: "14px"}} />                
              </>
            )}
          </FastField>
          
          <Button colorScheme='gray' fontSize="14px" textTransform="uppercase" mx="auto" width='136px' fontWeight="500" rounded='md' px="16px" mt="54px" size='lg' type="submit">Registrarme</Button>   
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