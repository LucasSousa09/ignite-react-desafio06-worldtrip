import { Flex, Image } from "@chakra-ui/react";

interface BannerContentAirplaneProps {
    bannerTitle?: string,
}

export function BannerContentAirplane({bannerTitle}: BannerContentAirplaneProps){
    return (
        <Flex
            display={['none','none','none', 'flex']}
            h='370px'
            alignItems='flex-end'
        >
            {
                bannerTitle ?
                (
                    <Flex></Flex>
                ) :
                (
                    <Image 
                        src="/images/airplane.svg" 
                        alt="Avião Amarelo"
                        w='417px'
                        h='270px'
                        marginLeft='5rem'
                        marginBottom='-2rem'
                    />
                )
            }
            
        </Flex>
    )
}