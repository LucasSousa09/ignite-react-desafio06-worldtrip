import { Button, Flex, Image, Popover, PopoverBody, PopoverContent, PopoverFooter, PopoverTrigger, Text } from "@chakra-ui/react";

interface ContinentDetailsCardProps{
    cardName: string;
    cardNumber?: number;
}

export function ContinentDetailsCard({cardName, cardNumber}: ContinentDetailsCardProps){
    return (
        <Flex
            flexDir='column'
            textAlign='center'
            alignItems={['flex-start','center']}
            justifyContent='center'
        >
            <Text
                fontWeight='600'
                fontSize={['1.5rem','2.25rem','3rem']}
                color='yellow.highlight'
            >
                {cardNumber}
            </Text>
            
            <Flex
                alignItems='center'
            >
                    <Text
                        textAlign='left'
                        fontWeight={['400','500','600']}
                        color='gray.dark-text'
                        fontSize={['1rem','1.25rem','1.5rem']}
                        noOfLines={1}
                    >
                        {cardName}
                    </Text>
                    {
                    cardName === 'cidades +100' && (
                        <Popover>
                            <PopoverTrigger>
                                <Button
                                    minW={['10px','16px']}
                                    maxW={['10px','16px']}
                                    height={['10px','16px']}
                                    borderRadius='50%'
                                    padding='0'
                                    ml='8px'
                                    backgroundColor='transparent'
                                > 
                                    <Image src='/icons/info.svg' alt='Info Icon: The letter i inside a circle'/> 
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent
                                textAlign='left'
                            >
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
                    )
                }
            </Flex>
    </Flex>
    )
}