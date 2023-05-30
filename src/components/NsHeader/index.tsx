import React, { useState, Dispatch, SetStateAction } from 'react'
import Link from "next/link";
import { Header } from '../../styles/components/nsHeader';
import { HiOutlineShoppingBag, HiLogout } from 'react-icons/hi'
import logoImg from '../../assets/Logo.svg'
import { ProductCartArray } from '../../store/types';
import { IRootState } from '../../store/store';
import { useSelector } from 'react-redux';

import { signOut } from 'next-auth/react'


interface PropsHeader {
    setToggleModal: Dispatch<SetStateAction<boolean>>;
    toggleModal: boolean;
}

export default function NsHeader({ setToggleModal, toggleModal }: PropsHeader) {



    const { products } = useSelector<IRootState, ProductCartArray>(x => x.cart);

    return (
        <Header>
            <Link href="/">
                <img src={logoImg.src} alt='' style={{ cursor: "pointer" }} />
            </Link>
            <div style={{ display: 'flex', gap: '0.785rem' }}>
                <div className="containerCart" onClick={() => setToggleModal(!toggleModal)}>
                    <div className="containerIconCart">
                        <HiOutlineShoppingBag size={24} className="iconCart" />
                    </div>
                    {products.length > 0 && (
                        <span>{products.length}</span>
                    )}
                </div>
                <div className="containerCart" >
                    <div className="containerIconCart">
                        <HiLogout size={24} className="iconCart" onClick={() => signOut()} />
                    </div>
                </div>
            </div>
        </Header>
    )
}

