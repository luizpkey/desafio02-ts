
import {
   Button,
} from '@chakra-ui/react'

export const ButtonApp = ({ children, login }: any) => {
   return (
      < Button onClick={login} bgGradient='linear(to-l, #ffa500, #9413dc)' size='sm' width='100%' marginTop='5px' >
         {children}
      </Button >
   )
}



