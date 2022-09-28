import { Flex, Image} from "@chakra-ui/react";

import { BannerContent } from '../BannerContent'


interface BannerProps {
        bannerImgSrc?: string
        bannerImgAlt?: string
        bannerTitle?: string
}

export function Banner({bannerImgSrc, bannerImgAlt, bannerTitle}: BannerProps ){
    return (
        <Flex
            position='relative'
            width='100%'
            height={[ '163px', '220px' , bannerImgSrc ? '500px' : '370px']}
            flexDir='column'
            backgroundRepeat='no-repeat'
            backgroundPosition='center'
            backgroundSize='cover'
            color='#fff'
        >
            <Image 
             src={bannerImgSrc ? bannerImgSrc : '/images/background.svg'}
             alt={bannerImgAlt ? bannerImgAlt : 'Céu estrelado'}
             height={['163px', '220px' ,bannerImgSrc ? '500px' : '370px']}
             width='100%'
             objectFit='cover'
             filter='brightness(0.85)'
            />
            <BannerContent bannerTitle={bannerTitle}  />
        </Flex>
    )
}