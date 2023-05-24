import { AppProps } from "next/app";
import { useState } from 'react';
import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";
import NsCartCheckout from "../components/NsCartCheckout";
import store, { IRootState, persistor } from "../store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { useSelector } from "react-redux";
import { ProductCartArray } from "../store/types";
import NsHeader from "../components/NsHeader";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  const [toggleModal, setToggleModal] = useState(false);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div>
          <Container style={{ position: 'relative' }}>
            <NsHeader toggleModal={toggleModal} setToggleModal={setToggleModal} />
            <NsCartCheckout open={toggleModal} setToggleModal={setToggleModal} />

            <Component {...pageProps} />
          </Container>
        </div>
      </PersistGate>
    </Provider>
  )
}


