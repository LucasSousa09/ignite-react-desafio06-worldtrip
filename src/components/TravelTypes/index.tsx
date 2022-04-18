import { SimpleGrid } from "@chakra-ui/react";
import { TravelIcon } from '../TravelIcon'

export function TravelTypes(){
    return (
        <SimpleGrid columns={5} maxW='1160px' gap='8rem'>
            <TravelIcon hrefLink='#' iconSrc='icons/cocktail.svg' iconText='vida noturna'/>
            <TravelIcon hrefLink='#' iconSrc='icons/surf.svg' iconText='praia'/>
            <TravelIcon hrefLink='#' iconSrc='icons/building.svg' iconText='moderno'/>
            <TravelIcon hrefLink='#' iconSrc='icons/museum.svg' iconText='clássico'/>
            <TravelIcon hrefLink='#' iconSrc='icons/surf.svg' iconText='e mais...'/>
        </SimpleGrid>
    )
}