import { Button, Flex, Text, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Usertype = () => {
  return (
    <>
      <Container maxw="sm" h="90vh">
        <Flex alignItems="center" flexDirection="column" justifyContent="center" h="90vh">
          <Text pb='4' fontSize='20px' alignItems='center'>Selecciona tu tipo de usuario</Text>
          <Link to="/register">
            <Button p='2' m='2' bg="brand.secondary">EMPRESA</Button>
          </Link>
          <Link to="/register">
            <Button p='2' pb='2' bg="brand.secondary">USUARIO</Button>
          </Link>
        </Flex>
      </Container>
    </>
  );
};
export default Usertype;
