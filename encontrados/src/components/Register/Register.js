import React, { useState }  from 'react';
import {useNavigate} from 'react-router-dom'

import {FastField, Form, Formik} from 'formik'
import { CameraIcon } from '../../tools/svg/Svg';
import {
  Image,
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
  const [image, setImage] = useState(null)
  
  const fileSelectedHandler = event => {
    const preview = document.querySelector(".PreviewImage");

    const fileData = event.target.files[0]    
    setImage(fileData)
    
    const reader = new FileReader()

    reader.addEventListener("load", () => {
      preview.src = reader.result;
    }, false);
  
    if (fileData) {
      reader.readAsDataURL(fileData);
    }

    preview.classList.add("showPreview")

  }

  const  onSubmitValues = async (values) =>
  {
    const image64 = document.querySelector(".PreviewImage").getAttribute('src')
    console.log(image64)
    const data = {
      email: values.email,
      name: values.name,
      phone: values.phone,
      country: values.country,
      avatar: image64,
      username: values.user,
    }
    //await addUser(data)
    navigate('/')
  }

  return (
    <Flex
    direction={'row'} 
    borderRadius='24px' 
    spacing='0' 
    my="1vh" 
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
        onSubmit={onSubmitValues}
      >
        <Form className="flex flex-col space-y-4">
        <FormControl id="chatel" display="flex" flexDirection="column" w='390px' textAlign="center" justifyContent='center'  rounded='md' bg='white' width="390px" p="24px" borderRadius="24px" >
          <Heading as='h1' mb="32px" fontSize='24px' fontWeight="normal" textAlign="left" color='#000000'>Introduce tus datos</Heading>
          <FastField name="name" >
            {({field, meta}) => (
              <>
               <FormLabel color='#000000' pl="8px" htmlFor='name'></FormLabel>
                <Input id="name" {...field} type="text" mb="16px" variant="flushed" placeholder='Nombre y Apellido' _placeholder={{ color: 'black', fontSize: "14px", paddingLeft: "14px" }} />                
              </>
            )}
          </FastField>
          <FastField name="email">
            {({field, meta}) => (
              <>
                <FormLabel ccolor='#000000' pl="8px" htmlFor='email'></FormLabel>
                <Input id="email" {...field} type="email" mb="16px" variant="flushed"  placeholder='Correo' _placeholder={{ color: 'black', fontSize: "14px", paddingLeft: "14px"}}/>                
              </>
            )}
          </FastField>
          <FastField name="phone">
            {({field, meta}) => (
              <>
                <FormLabel ccolor='#000000' pl="8px" htmlFor='phone'></FormLabel>
                <Input id="phone" {...field} type="text" mb="16px"  variant="flushed"  placeholder='Teléfono' _placeholder={{ color: 'black', fontSize: "14px", paddingLeft: "14px"}}/>                
              </>
            )}
          </FastField>
          <FastField name="country"  >
            {({field, meta}) => (
              <>
                <FormLabel color='#000000' pl="8px" htmlFor='country'></FormLabel>
                <Select id='country' {...field} type="text" mb="16px" alignSelf="flex-end" mr="10px" w="max-content" bg='blackAlpha.200' placeholder='¿De dónde eres?' 
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
                <Input type="file" id="avatar" onChange={fileSelectedHandler} accept='image/*' opacity="0" h="96px" w="96px" mb="24px" bg='blackAlpha.200' variant='filled' placeholder='avatar' borderRadius="100%" _placeholder={{ color: 'black', fontSize: "14px", paddingLeft: "14px"}}/> 
                
                <Circle size='96px' bg='blackAlpha.200' color="white" pos='absolute' zIndex="auto" pointerEvents="none">
                  <CameraIcon w={6} h={6}/>
                </Circle>            
              
                <Image src=""  boxSize='96px' className="PreviewImage"  borderRadius='full'  alt="Image preview"/>
              
              </Box>
            </>
            )}
          </FastField>
        <FastField name="user">
            {({field, meta}) => (
              <>
                <FormLabel ccolor='#000000' pl="8px" htmlFor='user'></FormLabel>
                <Input id='user' {...field} type="text" mb="16px" variant="flushed" placeholder='Usuario' _placeholder={{ color: 'black', fontSize: "14px", paddingLeft: "14px"}}/>                
              </>
            )}
          </FastField>
        <FastField name="password">
            {({field, meta}) => (
              <>
                <FormLabel ccolor='#000000' pl="8px" htmlFor='password'></FormLabel>
                <Input id='password' {...field} type="password" mb="16px" variant="flushed" placeholder='Contraseña' _placeholder={{ color: 'black', fontSize: "14px", paddingLeft: "14px"}}/>                
              </>
            )}
          </FastField>
          <FastField name="passwordConfirm">
            {({field, meta}) => (
              <>
              <FormLabel color='#000000' pl="8px" htmlFor='passwordConfirm'></FormLabel>
                <Input id='passwordConfirm' {...field} type="password" variant="flushed"  placeholder='Repetir contraseña' _placeholder={{ color: 'black', fontSize: "14px", paddingLeft: "14px"}} />                
              </>
            )}
          </FastField>
          
          <Button colorScheme='gray' fontSize="14px" textTransform="uppercase" mx="auto" width='136px' fontWeight="500" rounded='md' px="16px" mt="54px" size='lg' type='submit'>Registrarme</Button>   
          </FormControl> 
        </Form>
      </Formik>
    </Flex>
  )
}