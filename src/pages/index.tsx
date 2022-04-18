import type { GetStaticProps, NextPage } from 'next'

import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { Subtitle } from '../components/Subtitle'
import { Slider } from '../components/Slider'
import { TravelTypes } from '../components/TravelTypes'

import { Box, Divider, Flex } from '@chakra-ui/react'

import api from './api/api'

interface ContinentInfo {
  continentRef: string
  continentName: string,
  smallDescription: string,
  continentBannerImage: string
}

interface ContinentInfoData {
  data: ContinentInfo[]
}

const Home = ({data}: ContinentInfoData) => {
  return (
    <Flex
      flexDir='column'
      justifyContent='center'
      alignItems='center'
    >
      <Header/>
      <Banner/>
      <TravelTypes/>
      <Divider 
       orientation='horizontal'
       width='90px'
       borderColor='gray.dark-text'
       borderTop='0'
       borderLeft='0'
       borderRight='0'
       borderWidth='2px'
       mb='4rem'
      />
       <Box 
        textAlign='center'
        mb='4rem'
       >
         <Subtitle text="Vamos nessa?"/>
         <Subtitle text="Então escolha o seu continente"/>
       </Box>
       <Box width="80%" backgroundColor='gray.700' mb='5rem'>
        <Slider continentInfoData={data}/>
       </Box>
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get<ContinentInfo[]>(`continents`)
  const data =  response.data

  return {
    props: {
      data
    }
  }
}

export default Home
