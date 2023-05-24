import { AppProps } from "next/app";
import { useState } from 'react';
import { globalStyles } from "../styles/global";
import { HiOutlineShoppingBag } from 'react-icons/hi'

import logoImg from '../assets/Logo.svg'
import { Container, Header } from "../styles/pages/app";
import NsCartCheckout from "../components/NsCartCheckout";
import store, { persistor } from "../store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Link from "next/link";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  const [toggleModal, setToggleModal] = useState(false);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div>
          <Container style={{ position: 'relative' }}>
            <Header>
              <Link href="/">
                <img src={logoImg.src} alt='' style={{ cursor: "pointer" }} />
              </Link>
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
      </PersistGate>
    </Provider>
  )
}


