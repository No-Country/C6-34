import { Container, Flex } from "@chakra-ui/react";
import { HomeIcon, AddIcon, LocationIcon } from "../../tools/svg/Svg";
import { Link } from "react-router-dom";

const Menu = () => {
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
        <AddIcon w={6} h={6} />
        <LocationIcon w={6} h={6} />
        
      </Flex>
      </Container>
    </>
  );
};
export default Menu;