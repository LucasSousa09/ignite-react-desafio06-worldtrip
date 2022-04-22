import { Button, Image, Flex, SimpleGrid, Text, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter} from "@chakra-ui/react";


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
                >
                    cidades +100

                        <Popover>
                            <PopoverTrigger>
                                <Button
                                    minW='16px'
                                    maxW='16px'
                                    height='16px'
                                    borderRadius='50%'
                                    padding='0'
                                    ml='8px'
                                    backgroundColor='transparent'
                                > 
                                    <Image src='/icons/info.svg'/> 
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent
                                textAlign='left'
                            >
                                <PopoverHeader
                                    fontWeight='600'
                                    fontSize='1.25rem'
                                > cidades +100 
                                </PopoverHeader>
                                <PopoverBody
                                    fontWeight='500'
                                    fontSize='1rem'
                                > 
                                    As 100 cidades mais visitadas do mundo! 
                                </PopoverBody>
                                <PopoverFooter
                                    fontWeight='400'
                                    fontSize='.8rem'
                                    opacity='.7'
                                >
                                    Fontes de 2017
                                </PopoverFooter>
                            </PopoverContent>
                        </Popover>

                </Text>
            </Flex>
        </SimpleGrid>
    )
}