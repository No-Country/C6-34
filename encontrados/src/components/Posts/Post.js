import { Box, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const Post = ({}) => {
  return (
    <>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        {/* <Image src={property.imageUrl} alt={property.imageAlt} /> */}

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="gray">
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            ></Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {post.title}
          </Box>

          <Box>
            {post.body}
            <Box as="span" color="gray.600" fontSize="sm"></Box>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  name="star"
                  key={i}
                  color={i < post.rating ? "black.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {post.reviewCount} reviews
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Post;
