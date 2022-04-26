import { Subtitle } from '../Subtitle'

import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { CitiesCard } from '../CitiesCard';

interface FamousCities{
    city: string,
    country: string,
    flag: string,
    image: string
}


interface OneHundredCitiesProps{
    famousCities?: FamousCities[]
}

export function OneHundredCities({famousCities}: OneHundredCitiesProps){
    return(
        <Flex
            flexDir={'column'}
            maxW='1160px'
            w='80%'
            m='0 auto 5rem'
        >
        <Text
            fontSize={['1.5rem', '1.87rem', '2.25rem']}
            fontWeight='500'
            color='gray.dark-text'
        >
            Cidades +100
        </Text>
            <SimpleGrid minChildWidth='256px' mt='2.5rem' gap='3rem 1rem' justifyItems='center' >
                {
                    famousCities?.map(city => <CitiesCard key={city.city}  image={city.image} city={city.city} flag={city.flag} country={city.country} />)
                }
            </SimpleGrid>
        </Flex>
    )
}