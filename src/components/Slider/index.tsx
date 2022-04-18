import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectFade, Pagination, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

import styles from './swiper.module.scss'

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
    return (
            <Swiper
                modules={[Navigation, EffectFade, Pagination, Autoplay]}
                navigation
                pagination
                effect={'fade'}
                loop
                autoplay={{delay: 5000}}
                slidesPerView={1}
                className={styles.myswiper}
            >
                {
                    continentInfoData.map(continent => {
                        return (
                            <SwiperSlide key={continent.continentName} className={styles.myswiperslide}>
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
    )
}
