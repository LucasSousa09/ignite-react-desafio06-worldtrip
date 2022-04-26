import { SimpleGrid} from "@chakra-ui/react";
import { ContinentDetailsCard } from './ContinentDetailsCard'

interface ContinentDetailsProps{
    continentDetails?: {
        famousCitiesNumber: number,
        languagesNumber: number,
        countriesNumber: number
    }
}

export function ContinentDetails({continentDetails}: ContinentDetailsProps){
    return (
        <SimpleGrid 
            mt={['3rem', '3rem', '3rem', '0']} 
            columns={3}
            justifyItems={['flex-start','center']}
        >
            <ContinentDetailsCard cardName='países' cardNumber={continentDetails?.countriesNumber}/>
            <ContinentDetailsCard cardName='línguas' cardNumber={continentDetails?.languagesNumber}/>
            <ContinentDetailsCard cardName='cidades +100' cardNumber={continentDetails?.famousCitiesNumber}/>
        </SimpleGrid>
    )
}