import { SimpleGrid, useMediaQuery } from "@chakra-ui/react";
import { TravelIcon } from '../TravelIcon'

import { TravelDots } from "../TravelDots";

export function TravelTypes(){
    const [isSmallerThan720] = useMediaQuery('(max-width: 768px)')
    return (
        <SimpleGrid columns={[1,1,5]} w='100%' maxW='1160px' gap='6rem' px='2rem'>
            {
                isSmallerThan720 ?
                (           
                    <SimpleGrid w='100%' pl='3rem' columns={2} rowGap='1.75rem' my='2.25rem'>
                        <TravelDots title='vida noturna' />
                        <TravelDots title='praia' />
                        <TravelDots title='moderno' />
                        <TravelDots title='clássico' />
                        <TravelDots title='e mais...' />
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