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
            w={['auto','auto','524px']}
            padding={['0 1rem','0 1rem', '0']}
            mb={bannerTitle ? '3.75rem' : 0}
        >
            {
                bannerTitle 
                ?
                <Heading position='absolute' bottom={['1rem','1rem', '3rem']} left={['1rem','1rem','4rem','8rem']} color='#fff' fontWeight='600' fontSize={['1.75rem','2rem', '2.5rem']}  >{bannerTitle}</Heading>
                :
                (
                    <>
                        <Heading
                            marginBottom="1rem"
                            fontWeight='500'
                            fontSize={['1.25rem','1.5rem', '2.5rem']}                       
                        >
                            <Text> 5 Continentes, </Text> 
                            <Text> infinitas possibilidades. </Text>                 
                        </Heading>
                        <Text
                            fontSize={['.9rem','1rem', '1.25rem']}                       
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