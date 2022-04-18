import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface SliderImageProps{
    continentRef: string
    continentName: string,
    imgSrc: string,
    smallDescription: string
}

export function SliderImage({continentRef, continentName, imgSrc, smallDescription}: SliderImageProps){    
    return (
        <Flex
            as='a'
            href={`/continents/${continentRef}`}
            position='relative'
            w='100%'
        >
            <Image 
                src={imgSrc} 
                alt={continentName}
                h="100%"
                w="100%"
                objectFit='cover'
                objectPosition='center'
                filter='brightness(60%)'
            />
            <Box
                position='absolute'
                top='50%'
                left='50%'
                transform='translate(-50%, -50%)'
                color='#fff'
                fontWeight='700'
                textAlign='center'
            >
                <Text fontSize='3rem' marginBottom='0.5rem'> {continentName} </Text>
                <Text fontSize='1.25rem'> {smallDescription} </Text>
            </Box>
        </Flex>
    )
}