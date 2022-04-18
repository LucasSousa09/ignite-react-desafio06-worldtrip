import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        yellow: {
            "highlight": "#FFBA08",    
        },
        gray: {
            "light-text": "#F5F8FA",
            "light-info": "DADADA",
            "dark-info": "#999999",
            "dark-text": "#47585B" ,
        }
    },
    fonts:{
        html: 'Poppins',
        body: 'Poppins',
        heading: 'Poppins'
    }
})