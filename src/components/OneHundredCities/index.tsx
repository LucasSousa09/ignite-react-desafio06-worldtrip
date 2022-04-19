import { Subtitle } from '../Subtitle'

import { Flex, SimpleGrid } from "@chakra-ui/react";
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
            flexDir='column'
            w='80%'
            m='0 auto 5rem'
        >
            <Subtitle text='Cidades +100'/>
            <SimpleGrid columns={4} mt='2.5rem' rowGap='3rem'>
                {
                    famousCities?.map(city => <CitiesCard key={city.city}  image={city.image} city={city.city} flag={city.flag} country={city.country} />)
                }
            </SimpleGrid>
        </Flex>
    )
}