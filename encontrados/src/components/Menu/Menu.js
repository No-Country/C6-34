import { Button, Container, Flex } from "@chakra-ui/react";
import { HomeIcon, AddIcon, LocationIcon } from "../../tools/svg/Svg";
import { Link } from "react-router-dom";
import ModalPosts from "../Posts/ModalPosts";
import { useState } from "react";

const Menu = () => {

  const [modal, setModal] = useState(false);
  console.log('modal', modal)

  return (
    <>
    <Container maxW='sm'  p='0'>
      <Flex
        alignItems="center"
        bg="brand.secondary"
        p={3}
        justifyContent="space-between"
        bottom="0"
        w='100%'
      >
        <Link to="/" >
        <HomeIcon w={6} h={6} />
        </Link>
        
        <div onClick={()=>setModal(true)}>       
        <AddIcon w={6} h={6} />
        </div>
        <ModalPosts isOpen={modal} onClose={()=>setModal(false)}></ModalPosts>
        <LocationIcon w={6} h={6} />
        
      </Flex>
      </Container>
    </>
  );
};
export default Menu;