import { SimpleGrid } from '@chakra-ui/react'

import { BannerContentText } from './BannerContentText'
import { BannerContentAirplane } from './BannerContentAirplane'

interface BannerContentProps {
    bannerTitle?: string,
}

export function BannerContent({bannerTitle}: BannerContentProps){
    return (
        <SimpleGrid
                position='absolute'
                top='0'
                left='0'
                right='0'
                bottom='0'
                columns={[1,1,1,2]}
                alignContent={bannerTitle ? 'flex-end' : 'center'}
                justifyItems='center'

                px={['0px','0px','0px','4rem']}

                maxW="1540px"
                mx='auto'
            >
                <BannerContentText bannerTitle={bannerTitle}/>
                <BannerContentAirplane bannerTitle={bannerTitle}/>
            </SimpleGrid>
    )
}