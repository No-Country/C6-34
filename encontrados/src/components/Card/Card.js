import {
Box,Image,Badge
} from "@chakra-ui/react";
import {StarIcon} from '@chakra-ui/icons'


const Card = () =>{
    const property = {
        imageUrl: 'https://i.ibb.co/6nbVHh1/caba.jpg',
        imageAlt: 'Obelisco de Buenos Aires',
        title: 'Obelisco de Buenos Aires',
        description: 'Monumento histórico considerado un ícono de la Ciudad Autónoma de Buenos Aires',
        reviewCount: 50,
        rating: 4,
      }

    return (
    <>
    
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='gray'>
            New
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
           
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {property.title}
        </Box>

        <Box>
          {property.description}
          <Box as='span' color='gray.600' fontSize='sm'>
            
          </Box>
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                name="star"
                key={i}
                color={i < property.rating ? 'black.500' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
    </>
)
}
export default Card