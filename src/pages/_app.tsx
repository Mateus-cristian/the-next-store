import { AppProps } from "next/app";
import { useState } from 'react';
import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";
import NsCartCheckout from "../components/NsCartCheckout";
import store, { persistor } from "../store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SessionProvider, useSession } from "next-auth/react"

import NsHeader from "../components/NsHeader";
import { useRouter } from "next/router";
import Login from "./login";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {

    const [toggleModal, setToggleModal] = useState(false);
    const { pathname } = useRouter();

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <SessionProvider session={pageProps.session}>
                    <Container style={{ position: 'relative' }}>
                        {pathname !== '/login' && (
                            <>
                                <NsHeader toggleModal={toggleModal} setToggleModal={setToggleModal} />
                                <NsCartCheckout open={toggleModal} setToggleModal={setToggleModal} />
                            </>
                        )}
                        <Component {...pageProps} />
                    </Container>
                </SessionProvider>
            </PersistGate>
        </Provider>
    )
}


