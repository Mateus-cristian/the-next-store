import { AppProps } from "next/app";
import { useState } from 'react';
import { globalStyles } from "../styles/global";
import { HiOutlineShoppingBag } from 'react-icons/hi'

import logoImg from '../assets/Logo.svg'
import { Container, Header } from "../styles/pages/app";
import NsCartCheckout from "../components/NsCartCheckout";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  const [toggleModal, setToggleModal] = useState(false);

  return (
    <div>
      <Container style={{ position: 'relative' }}>
        <Header>
          <img src={logoImg.src} alt='' />
          <div className="containerCart" onClick={() => setToggleModal(!toggleModal)}>
            <div className="containerIconCart">
              <HiOutlineShoppingBag size={24} className="iconCart" />
            </div>
            <span>1</span>
          </div>
        </Header>



        <NsCartCheckout open={toggleModal} setToggleModal={setToggleModal} />


        <Component {...pageProps} />
      </Container>
    </div>
  )
}


