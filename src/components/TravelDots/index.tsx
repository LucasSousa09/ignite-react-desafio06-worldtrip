import { Icon, Text } from "@chakra-ui/react";
import { BsFillCircleFill } from "react-icons/bs";

interface TravelDotsProps {
  title: string
}

export function TravelDots({title}: TravelDotsProps){
  return (
    <Text as='a' href='#' fontSize='1.125rem' fontWeight='500' color='gray.dark-text'>
    <Icon color='yellow.highlight' fontSize='8px' mr='8px' as={BsFillCircleFill}/> 
      {title}
    </Text>
  )
}