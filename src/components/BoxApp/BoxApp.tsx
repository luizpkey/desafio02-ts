import {
   Center,
   Box
} from '@chakra-ui/react'

export const BoxApp = ({ children }: any) => {
   return (
           <Center ><Box maxWidth={'500px'} bg='#FFFFFF' borderRadius='25px' padding='15px' >{children}</Box></Center>
           )
         }
