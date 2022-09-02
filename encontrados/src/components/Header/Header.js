import { Container, Flex, Heading, Divider} from "@chakra-ui/react";
import { UserIcon } from "../../tools/svg/Svg";
import { Link } from "react-router-dom";
const Header = () =>{

    return (
        <>
        <Container maxW='sm' p='0' pt='2'>
          <Flex
            alignItems="center"
            p={3}
            justifyContent="space-between"
            bottom="0"
            w='100%'
          >

            <Link to="/">
            <Heading size="md" id='titleid'>ENCONTRADOS</Heading>
            </Link>

            <Link to='/login'>
            <UserIcon w={6} h={6} />
            </Link>
          </Flex>
          <Divider />
          </Container>
        </>
      );
}
export default Header;