import { Text } from "@chakra-ui/react";

interface SubtitleProps{
    text: string
}

export function Subtitle({text}: SubtitleProps){
    return (
        <Text
            fontSize='1.5rem'
            fontWeight='500'
            color='gray.dark-text'
        >
            {text}
        </Text>
    )
}