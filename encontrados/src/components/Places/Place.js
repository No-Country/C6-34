import React, { useEffect, useState }  from 'react';
import { getPlaceById} from '../../service/places';
import { useParams} from 'react-router-dom'
import {Box,Image, Flex} from "@chakra-ui/react";
import {StarIcon} from '@chakra-ui/icons'
import Comments from '../Comments/Comments';

function Place() {
    const { id } = useParams()
    const [place, setPlace] = useState("")

    useEffect(() => {
        loadPlaceData()
      },[])
    
      const loadPlaceData = async () => {
        const res = await getPlaceById(id);  
        setPlace(res[0])
      }



  return (
    <Flex justifyContent="center">
          <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' >
    <Image src={place.imageUrl} alt={place.imageAlt} />

    <Box p='6'>
      <Box display='flex' alignItems='baseline'>

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
        {place.title}
      </Box>

      <Box>
        {place.description}
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
              color={i < place.rating ? 'black.500' : 'gray.300'}
            />
          ))}
        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
          {place.reviewCount} reviews
        </Box>
      </Box>
    </Box>
    <Box maxW="90vw" mx="auto">
        <Comments currentUserId="1"/>
    </Box>
    </Box>
    </Flex>
  )
}

export default Place