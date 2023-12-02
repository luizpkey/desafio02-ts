import {
   Center,
   Input,
} from '@chakra-ui/react'
import { login } from '../../services/login';
import { BoxApp } from '../BoxApp/BoxApp';
import { ButtonApp } from '../ButtonApp/ButtonApp';
import React from 'react';


export const Login = () => {
   const [email, setEmail]= React.useState('');
   const [password, setPassword] =React.useState('');
   const clearFields = () => {
      setEmail('');
      setPassword('');
   }

   const loginSend = () => {
      login({ email, password });
      clearFields();
   }

   return(
         <BoxApp>
            <Center>
               <h1>Faça o login</h1>
            </Center>
            <Input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            <Center>
               <ButtonApp login={loginSend}>Login Account</ButtonApp>
            </Center>
         </BoxApp>
   )
}
