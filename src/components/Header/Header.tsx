import {
  Center,
} from '@chakra-ui/react'

import './Header.css'
import {Logo} from '../Logo/Logo'

export const Header  = () => {
  return(
    <div className='header'>
      <Center>
        <Logo/>
        Dio Bank
      </Center>
    </div>
  )
}
