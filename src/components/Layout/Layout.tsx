import { ContainerApp } from '../ContainerApp/ContainerApp';

import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"

export const Layout = ({ children }: any) => {
  return(
    <>
      <ContainerApp>
        <Header />
        {children}
        <Footer />
      </ContainerApp>
    </>
  )
}
