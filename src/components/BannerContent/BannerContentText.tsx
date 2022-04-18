import { Flex, Heading, Text } from "@chakra-ui/react";

interface BannerContentTextProps {
    bannerTitle?: string,
}

export function BannerContentText({bannerTitle}: BannerContentTextProps){
    return (
        <Flex
            flexDir='column'
            alignItems='flex-start'
            justifyContent={bannerTitle ? 'flex-end' : 'center'}
            w='524px'
            mb={bannerTitle ? '3.75rem' : 0}
        >
            {
                bannerTitle 
                ?
                <Heading color='#fff' fontWeight='600' fontSize='2.5rem'>{bannerTitle}</Heading>
                :
                (
                    <>
                        <Heading
                            marginBottom="1rem"
                            fontWeight='500'                       
                        >
                            <Text> 5 Continentes, </Text> 
                            <Text> infinitas possibilidades. </Text>                 
                        </Heading>
                        <Text
                            fontSize='1.25rem'
                            fontWeight='400'
                        > 
                            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                        </Text>
                    </>
                )
            }
        </Flex>
    )
}