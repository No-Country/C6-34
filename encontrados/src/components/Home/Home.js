import { Container, Flex, VStack, Text, Box} from "@chakra-ui/react";
import { Map } from "../Map/Map";
import { UserIcon, IconMessage, LocationIcon } from "../../tools/svg/Svg";
import Card from "../Card/Card";
import Comments from "../Comments/Comments";

const Home = () => {
  return (
    <>
      <Container maxW="sm">
        <Flex flexDirection="column">
          <VStack w="full" h="full" p={3} alignItems="flex-start">
           
            <Flex alignItems="center" w="100%" justifyContent="space-between">
              <Box display="flex" alignItems="center">
                <UserIcon w={6} h={6} />
                <Text p={2}>Usuario 1</Text>
              </Box>
              <IconMessage w={6} h={6} />
            </Flex>
            <Text py={2}>Cerca de tu zona</Text>
            <Map />
          </VStack>
          <VStack w="full" h="full" p={3} alignItems="flex-start">
            <Flex alignItems="center" w="100%" justifyContent="space-between">
              <Box display="flex" alignItems="center">
                <UserIcon w={6} h={6} />
                <Text p={2}>Usuario 2</Text>
              </Box>
              <IconMessage w={6} h={6} />
            </Flex>
            <Box display="flex" alignItems="center">
              <LocationIcon w={4} h={4} />
              <Text p={2}>CABA, Buenos Aires, Argentina</Text>
            </Box>
            <Card />
            <Comments currentUserId="1"/>
          </VStack>
        </Flex>
        
      </Container>
    </>
  );
};
export default Home;
