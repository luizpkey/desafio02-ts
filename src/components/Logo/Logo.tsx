import {
   Circle
} from '@chakra-ui/react'

export const Logo = () => {
   return (
      <Circle size='40px' bgGradient='linear(to-l, #ffa500, #9413dc)' border={'0.5px solid #e0a500'} color='white' padding={'15px'} margin={'5px 10px 5px 0'}>
         <strong>D</strong>
         <span>i</span>
         <span>o</span>
      </Circle>
   )
}
