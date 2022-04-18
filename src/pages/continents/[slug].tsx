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
    const newData = data.map(data => {
        if(data.continentRef === continentUrl){
            return data
        }
    }).filter( data => data !== undefined)

    return (
        <>
            <Header />
            {
                <Banner 
                 bannerImgSrc={newData[0]?.continentBannerImage} 
                 bannerImgAlt={newData[0]?.continentRef} 
                 bannerTitle={newData[0]?.continentName}
                />
            }
            <SimpleGrid w='80%' m='5rem auto' columns={2}>
                <Text
                 color='gray.dark-text'
                 fontSize='1.5rem'
                >
                    {newData[0]?.continentDescription}
                </Text>
                <ContinentDetails continentDetails={newData[0]?.continentDetails}/>
            </SimpleGrid>
            <OneHundredCities famousCities={newData[0]?.famousCities}/>
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