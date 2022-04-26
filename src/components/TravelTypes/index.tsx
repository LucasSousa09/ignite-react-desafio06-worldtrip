import { SimpleGrid, useMediaQuery, Text, Icon } from "@chakra-ui/react";
import { TravelIcon } from '../TravelIcon'

import { BsFillCircleFill } from 'react-icons/bs'

export function TravelTypes(){
    const [isSmallerThan720] = useMediaQuery('(max-width: 768px)')
    return (
        <SimpleGrid columns={[1,1,5]} w='100%' maxW='1160px' gap='8rem' px='1rem'>
            {
                isSmallerThan720 ?
                (           
                    <SimpleGrid w='100%' pl='3rem' columns={2} rowGap='1.75rem' my='2.25rem'>
                        <Text as='a' href='#' fontSize='1.125rem' fontWeight='500' color='gray.dark-text'>
                            <Icon color='yellow.highlight' fontSize='8px' mr='8px' as={BsFillCircleFill}/> 
                            vida noturna
                        </Text>
                        <Text as='a' href='#' fontSize='1.125rem' fontWeight='500' color='gray.dark-text'>
                            <Icon color='yellow.highlight' fontSize='8px' mr='8px' as={BsFillCircleFill}/> 
                            praia 
                        </Text>
                        <Text as='a' href='#' fontSize='1.125rem' fontWeight='500' color='gray.dark-text'>
                            <Icon color='yellow.highlight' fontSize='8px' mr='8px' as={BsFillCircleFill}/> 
                            moderno 
                        </Text>
                        <Text as='a' href='#' fontSize='1.125rem' fontWeight='500' color='gray.dark-text'>
                            <Icon color='yellow.highlight' fontSize='8px' mr='8px' as={BsFillCircleFill}/> 
                            clássico
                        </Text>
                        <Text as='a' href='#' fontSize='1.125rem' fontWeight='500' color='gray.dark-text'>
                            <Icon color='yellow.highlight' fontSize='8px' mr='8px' as={BsFillCircleFill}/> 
                            e mais... 
                        </Text>
                    </SimpleGrid>             
                )
                :
                (
                    <>
                        <TravelIcon hrefLink='#' iconSrc='/icons/cocktail.svg' iconText='vida noturna'/>
                        <TravelIcon hrefLink='#' iconSrc='/icons/surf.svg' iconText='praia'/>
                        <TravelIcon hrefLink='#' iconSrc='/icons/building.svg' iconText='moderno'/>
                        <TravelIcon hrefLink='#' iconSrc='/icons/museum.svg' iconText='clássico'/>
                        <TravelIcon hrefLink='#' iconSrc='/icons/surf.svg' iconText='e mais...'/>
                    </>
                )
            }
            
        </SimpleGrid>
    )
}