import { Flex, SimpleGrid, Text } from "@chakra-ui/react";

interface ContinentDetailsProps{
    continentDetails?: {
        famousCitiesNumber: number,
        languagesNumber: number,
        countriesNumber: number
    }
}

export function ContinentDetails({continentDetails}: ContinentDetailsProps){
    return (
        <SimpleGrid columns={3}>
            <Flex
                flexDir='column'
                textAlign='center'
                alignItems='center'
                justifyContent='center'
            >
                <Text
                 fontWeight='600'
                 fontSize='3rem'
                 color='yellow.highlight'
                >
                    {continentDetails?.countriesNumber}
                </Text>
                <Text
                 fontWeight='600'
                 color='gray.dark-text'
                 fontSize='1.5rem'
                >
                    países
                </Text>
            </Flex>
            <Flex
                flexDir='column'
                textAlign='center'
                alignItems='center'
                justifyContent='center'
            >
                <Text
                 fontWeight='600'
                 fontSize='3rem'
                 color='yellow.highlight'
                >
                    {continentDetails?.languagesNumber}
                </Text>
                <Text
                 fontWeight='600'
                 color='gray.dark-text'
                 fontSize='1.5rem'
                >línguas</Text>
            </Flex>
            <Flex
                flexDir='column'
                textAlign='center'
                alignItems='center'
                justifyContent='center'
            >
                <Text
                 fontWeight='600'
                 fontSize='3rem'
                 color='yellow.highlight'
                >
                    {continentDetails?.famousCitiesNumber}
                </Text>
                <Text
                 fontWeight='600'
                 color='gray.dark-text'
                 fontSize='1.5rem'
                >cidades +100</Text>
            </Flex>
        </SimpleGrid>
    )
}