import { SimpleGrid, useMediaQuery } from "@chakra-ui/react";
import { TravelIcon } from '../TravelIcon'

import { TravelDots } from "../TravelDots";

export function TravelTypes(){
    const [isSmallerThan720] = useMediaQuery('(max-width: 768px)')
    return (
        <SimpleGrid columns={[1,2,5]} w='100%' justifyItems='center' maxW='1160px' py={['2rem']} gap={['1.5rem','1.5rem','6rem']} px='2rem'>
            {
                isSmallerThan720 ?
                (           
                    <>
                        <TravelDots title='praia' />
                        <TravelDots title='vida noturna' />
                        <TravelDots title='moderno' />
                        <TravelDots title='clássico' />
                        <TravelDots title='e mais...' />
                    </>
            
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