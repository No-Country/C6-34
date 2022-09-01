import { Flex } from "@chakra-ui/react";
import { UserIcon, HomeIcon, AddIcon, LocationIcon } from "../../tools/svg/Svg";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
    
      <Flex
        alignItems="center"
        bg="brand.secondary"
        p={3}
        justifyContent="space-between"
        bottom="0"
        w='100%'
      >
        <Link to="/home" >
        <HomeIcon w={6} h={6} />
        </Link>
        <LocationIcon w={6} h={6} />
        <AddIcon w={6} h={6} />
        <Link to='/login'>
        <UserIcon w={6} h={6} />
        </Link>
      </Flex>
      
    </>
  );
};
export default Menu;