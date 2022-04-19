import { Box, Flex, Text, Image } from "@chakra-ui/react";

interface FamousCities{
    city: string,
    country: string,
    flag: string,
    image: string
}

export function CitiesCard({city, country, flag, image}: FamousCities){
    return(
        <Flex
         flexDir='column'
         w='256px'
         h='271px'
         border='1px solid rgba(255, 186, 8, 0.5)'
         borderRadius='4px'
        >
            <Image src={image} width='100%' height='170px' minH='170px' objectFit='cover' borderRadius='4px 4px 0 0 '/>
            <Flex 
             alignItems='center' 
             justifyContent='space-between' 
             h='100%' 
             w='80%'
             m='0 auto'
            >
                <Box>
                    <Text fontSize='1.25rem' fontWeight='600' color='gray.dark-text'>{city}</Text>
                    <Text fontSize='1rem' fontWeight='500' color='gray.dark-info'>{country}</Text>
                </Box>
                <Box>
                    <Image src={flag} width='30px' height='30px' borderRadius='50%'/>
                </Box>
            </Flex>
        </Flex>
    )
}
