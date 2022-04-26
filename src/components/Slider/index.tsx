import { Box, useMediaQuery } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectFade, Pagination, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

import { SliderImage } from './SliderImage'

interface ContinentInfo {
    continentRef: string,
    continentName: string,
    smallDescription: string,
    continentBannerImage: string
}

interface ContinentInfoData {
    continentInfoData: ContinentInfo[]
}


export function Slider({ continentInfoData }: ContinentInfoData){
    const isSmallerThan768 = useMediaQuery('(max-width: 768px)')

    return (
        <Box width={['100%','100%','80%']} h={['250px', 'auto']}  backgroundColor='gray.700' mb='5rem'>
            <Swiper
                modules={[Navigation, EffectFade, Pagination, Autoplay]}
                navigation
                pagination
                effect={'fade'}
                loop
                autoplay={{delay: 5000}}
                slidesPerView={1}
                className='myswiper'
            >
                {
                    continentInfoData.map(continent => {

                        return (
                            <SwiperSlide key={continent.continentName} className='myswiperslide'>
                                <SliderImage 
                                    continentRef={continent.continentRef}
                                    continentName={continent.continentName} 
                                    smallDescription={continent.smallDescription}
                                    imgSrc={continent.continentBannerImage}
                                    /> 
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </Box>
    )
}
