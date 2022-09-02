import React, { useEffect, useState }  from 'react';
import { editUser, getUserById } from '../../service/api';
import {useNavigate, useParams} from 'react-router-dom'

import {Form, Formik} from 'formik'
import { CameraIcon } from '../../tools/svg/Svg';
import {
  Image,
  Circle,
  Flex,  
  Button,
  Input,
  FormControl,
  Select,
  Heading,
} from '@chakra-ui/react';


export function EditUser() {
  const navigate = useNavigate()
  const [user, setUser] = useState("")
  const [image, setImage] = useState(null)
  const {name, email, phone, avatar, username, country} = user
  const base64 = avatar?.includes("base64")

  const { id } = useParams()

  useEffect(() => {
    loadUserData()
  },[])

  const loadUserData = async () => {
    const response = await getUserById(id);
    setUser(response.data)
  }

   const fileSelectedHandler = event => {
     const preview = document.querySelector(".PreviewImage");
     console.log(event)

     const fileData = event.target.files[0]
     console.log(fileData)
     setImage(fileData)

     const reader = new FileReader()

     reader.addEventListener("load", () => {
       preview.src = reader.result;
     }, false);

     if (fileData) {
       reader.readAsDataURL(fileData);
     }    

    // preview.classList.add("showPreview")

   }

   const  onValueChange = (e) =>
   {
     setUser({...user, [e.target.name]: e.target.value});
     console.log(user)
     console.log(e.target.name)
   }

  const editUserDetails = async (values) => {
    const image64 = document.querySelector(".PreviewImage").getAttribute('src')
    console.log(image64)
    const user = {
      email: email,
      name: name,
      phone: phone,
      country: country,
      avatar: image64,
      username: username,
    }
    await editUser(id, user)
    console.log(user)
    navigate('/')
  }

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
        }}
        onSubmit={editUserDetails}
      >
        <Form className="flex flex-col space-y-4">
        <Flex display="flex" flexDirection="column"  textAlign="center" justifyContent='center' rounded='md' bg='white' p="24px" w="100vh" maxW="280px" borderRadius="24px" >
          <Heading as='h1' mb="32px" fontSize='24px' fontWeight="normal" textAlign="left" color='#000000'>Actualiza tus datos</Heading>
          <FormControl>
            <Input onChange={(e) => onValueChange(e)} name="name" value={name} type="text" pl="8px" mb="16px" variant="flushed" />

            <Input onChange={(e) => onValueChange(e)} name="email" value={email} type="text" pl="8px" mb="16px" variant="flushed" />

            <Input onChange={(e) => onValueChange(e)} name="phone" value={phone} type="text" pl="8px" mb="16px" variant="flushed" />          


            <Select onChange={(e) => onValueChange(e)} value={country} name="country" id='country' type="text" mb="16px" alignSelf="flex-end" w="max-content" bg='blackAlpha.200' placeholder='¿De dónde eres?'
            _placeholder={{ color: 'black', fontSize: "14px" }}>
                <option _focus={{ boxShadow: 'outline' }}  value='Argentina'>Argentina</option>
                <option _focus={{ boxShadow: 'outline' }}  value='Bolivia'>Bolivia</option>
                <option _focus={{ boxShadow: 'outline' }} value='Brasil'>Brasil</option>
                <option _focus={{ boxShadow: 'outline' }}  value='Chile'>Chile</option>
                <option _focus={{ boxShadow: 'outline' }}  value='Colombia'>Colombia</option>
                <option _focus={{ boxShadow: 'outline' }}  value='Ecuador'>Ecuador</option>
            </Select>


              <FormControl display="flex" pos="relative">
                <Input name="avatar" type="file" onChange={fileSelectedHandler} accept='image/*' opacity="0" h="96px" w="96px" mb="24px" bg='blackAlpha.200' variant='filled' placeholder='avatar' borderRadius="100%" _placeholder={{ color: 'black', fontSize: "14px", paddingLeft: "14px"}}/>
                <Circle size='96px' bg='blackAlpha.200' color="white" pos='absolute' zIndex="auto" pointerEvents="none">
                  <CameraIcon w={6} h={6}/>
                </Circle>

                {/* {base64 ? <Image src={avatar}  boxSize='96px' className="PreviewImage showPreview"  borderRadius='full'  alt="Image preview"/> : null } */}

                <Image src={avatar}  boxSize='96px' className="PreviewImage showPreview"  borderRadius='full'  alt="Image preview"/>
                

              </FormControl>           


          <Input onChange={(e) => onValueChange(e)} name="username" value={username} type="text" pl="8px" mb="16px" variant="flushed" />

          <Button colorScheme='gray' fontSize="14px" textTransform="uppercase" mx="auto" width='136px' fontWeight="500" rounded='md' px="16px" mt="54px" size='lg' type='submit'>Actualizar</Button>
          </FormControl>
          </Flex>
        </Form>
      </Formik>
    </Flex>
  )

}