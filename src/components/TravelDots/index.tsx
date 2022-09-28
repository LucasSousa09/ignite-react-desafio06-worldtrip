import { Flex, Icon, Text } from "@chakra-ui/react";
import { BsFillCircleFill } from "react-icons/bs";

interface TravelDotsProps {
  title: string
}

export function TravelDots({title}: TravelDotsProps){
  return (
    <Flex as='a' flexDir='row' alignItems='center' href='#'>
      <Icon color='yellow.highlight' fontSize='8px' mr='8px' as={BsFillCircleFill}/> 
      <Text fontSize='1.125rem' fontWeight='500' color='gray.dark-text' m='0'>
        {title}
      </Text>
    </Flex>
  )
}