import {
    Modal, ModalOverlay, ModalContent, ModalCloseButton,ModalHeader,ModalBody,ModalFooter,Button, FormControl,Input, Square
  } from '@chakra-ui/react'
import { CameraIcon } from '../../tools/svg/Svg';
import {createPortal} from 'react-dom';
import { useState }  from 'react';
import {
  Image, Box
} from '@chakra-ui/react';


const ModalPosts = ({isOpen, onClose}) => {

   
    const [image, setImage] = useState(null)
  
    const fileSelectedHandler = event => {
      const preview = document.querySelector(".PreviewImage2");
  
      const fileData = event.target.files[0]    
      setImage(fileData)
      
      const reader = new FileReader()
  
      reader.addEventListener("load", () => {
        preview.src = reader.result;
      }, false);
    
      if (fileData) {
        reader.readAsDataURL(fileData);
      }
  
      preview.classList.add("showPreview2")
  
    }
  
    const  onSubmitValues = async (values) =>
    {
      const image64 = document.querySelector(".PreviewImage2").getAttribute('src')
      console.log(image64)
      const data = {
        avatar: image64,
      }
    
    }
    
    if(!isOpen){
      return null;
  }


    return createPortal(
        <div>
         <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crea una nueva publicación</ModalHeader>
          <ModalCloseButton onClick={onClose}/>
          <ModalBody>
            
             <FormControl onSubmit={onSubmitValues}>
             <Box display='flex' pos="relative" justifyContent='center' pb='5'>
             <Input type="file" id="avatar" onChange={fileSelectedHandler} accept='image/*' opacity="0" h='300px' w="300px"  bg='blackAlpha.200' variant='filled' placeholder='avatar' justifyContent='center' _placeholder={{ color: 'black', fontSize: "14px", paddingLeft: "14px"}}/>  
                <Square size='300px' bg='blackAlpha.200' justifyContent='center' color="white" pos='absolute' zIndex="auto" pointerEvents="none">
                  <CameraIcon w={6} h={6}/>
                </Square>            
              
                <Image src=""  boxSize='300px' className="PreviewImage2"  alt="Image preview"/>
                </Box>
             </FormControl>
             
             <Input type='text'/>
          </ModalBody>
          <ModalFooter pt='6'>
          <Button colorScheme='gray' mr={3}>
              Compartir
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </div>,document.getElementById('modal') 
    )
}
export default ModalPosts;