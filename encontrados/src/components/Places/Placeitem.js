import React from 'react'
import {Box,Image,Badge} from "@chakra-ui/react";
import {StarIcon} from '@chakra-ui/icons'
import { Link } from "react-router-dom";
import {Flex} from '@chakra-ui/react';


function Placeitem({places}) {
  return (
    <div>
         {places.map((place)=>(  
              <Link to={{pathname: `/place/${place.id}`}} key={place.id} >              
                <Flex justifyContent="center">                
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' mt="12px" overflow='hidden' >
                 <Image src={place.imageUrl} alt={place.imageAlt} />
           
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
               </Box>
                </Flex>
               </Link>  
            ))}
    </div>
  )
}

export default Placeitem