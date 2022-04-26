import { Header } from '../../components/Header'
import { Banner } from '../../components/Banner'

import { SimpleGrid, Text } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'

import { ContinentDetails } from '../../components/ContinentDetails'
import { OneHundredCities } from '../../components/OneHundredCities'
import api from '../api/api'

interface FamousCities{
    city: string,
    country: string,
    flag: string,
    image: string
}

interface CurrentContinentInfo{
    continentRef: string,
    continentName: string,
    continentBannerImage: string,
    continentDescription: string,
    continentDetails: {
        famousCitiesNumber: number,
        languagesNumber: number,
        countriesNumber: number
    }
    famousCities: FamousCities[]
}

interface CurrentContinentInfoData{
    data: CurrentContinentInfo[],
    continentUrl: string
}


export default function Continents({data, continentUrl}: CurrentContinentInfoData){
    const contientInfo = data.map(data => {
        if(data.continentRef === continentUrl){
            return data
        }
    }).filter( data => data !== undefined)

    return (
        <>
            <Header />
            {
                <Banner 
                 bannerImgSrc={contientInfo[0]?.continentBannerImage} 
                 bannerImgAlt={contientInfo[0]?.continentRef} 
                 bannerTitle={contientInfo[0]?.continentName}
                />
            }
            <SimpleGrid w={['90%','90%','80%']} m='5rem auto' columns={[1,1,1,2]}>
                <Text
                 color='gray.dark-text'
                 fontSize={['1rem','1.25rem','1.5rem']}
                >
                    {contientInfo[0]?.continentDescription}
                </Text>
                <ContinentDetails continentDetails={contientInfo[0]?.continentDetails}/>
            </SimpleGrid>
            <OneHundredCities famousCities={contientInfo[0]?.famousCities}/>
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async ({req}) => {
    const response = await api.get(`continents`)
    const data  = response.data
    const continentUrl = req.url?.replace('/continents/', '')

    return{
        props: {
            data,
            continentUrl
        }
    }
}