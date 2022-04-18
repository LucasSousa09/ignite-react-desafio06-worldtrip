import { Flex, Image, Link, Text } from "@chakra-ui/react";

interface TravelIconProps{
    iconText: string,
    iconSrc: string,
    hrefLink: string
}

export function TravelIcon({iconText, iconSrc, hrefLink}: TravelIconProps){
    return (
        <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            maxWidth='1160px'
            margin='5rem 0'
        >
            <Link 
                href={hrefLink}
                display='flex'
                flexDir='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
            >
                <Image src={iconSrc}/>
                <Text
                    color='gray.dark-text'
                    fontWeight='600'
                    marginTop='1.5rem'
                >{iconText}</Text>
            </Link>
        </Flex>
    )
}