import { Flex, Link, Image } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export function Header(){
    const router = useRouter()

    return (
        <Flex
            as='header'
            position='relative'
            w='100%'
            h='100px'
            justifyContent='center'
            alignItems='center'
        >
            { 
                router.asPath !== '/' &&
                <Link 
                    href='/'
                    cursor='pointer'
                    position='absolute'
                    top='50%'
                    left='3rem'
                    transform='translateY(-50%)'
                >
                <Image src='/icons/back-button.svg'/>
                </Link> 
            }
            <Image src="/logo.svg" alt="Logo Worldtrip" />
        </Flex>
    )
}