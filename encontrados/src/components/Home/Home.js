import { Container, Flex, Heading, VStack, Text,Image, Box} from "@chakra-ui/react";
import { UserIcon, IconMessage } from "../../tools/svg/Svg";

const Home = () => {
   
  return (
    <Container maxW="360px" p={0}>
      <Flex h="100vh" py={25} flexDirection="column">
        <VStack
          w="full"
          h="full"
          p={3}
          alignItems="flex-start"
        >
          <Heading size="md">ENCONTRADOS</Heading>
          <Flex alignItems="center">
            <UserIcon w={6} h={6} />
            <Text p={2}>Usuario 1</Text>
            <Box pl="12rem">
            <IconMessage w={6} h={6}/>
            </Box>
          </Flex>
          <Text py={2}>Cerca de tu zona</Text>
          <Image
            w='312px'
            h='200px'
            objectFit='cover'
            src="https://i.ibb.co/sJMjgdT/map.png"
            alt='map'
            borderRadius={10}
            />
        </VStack>
        <VStack
          w="full"
          h="full"
          p={3}
          alignItems="flex-start"
        >
          
          <Flex alignItems="center">
            <UserIcon w={6} h={6} />
            <Text p={2}>Usuario 2</Text>
            <Box pl="12rem">
            <IconMessage w={6} h={6}/>
            </Box>
          </Flex>
          <Text py={2}>Cerca de tu zona</Text>
          <Image
            w='312px'
            h='200px'
            objectFit='cover'
            src="https://i.ibb.co/6nbVHh1/caba.jpg"
            alt='caba'
            borderRadius={10}
            />
        </VStack>     
      </Flex>
    </Container>
  );

}
export default Home;
