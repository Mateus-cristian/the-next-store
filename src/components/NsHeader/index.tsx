import React, { useState, Dispatch, SetStateAction } from 'react'
import Link from "next/link";
import { Header } from '../../styles/components/nsHeader';
import { HiOutlineShoppingBag } from 'react-icons/hi'
import logoImg from '../../assets/Logo.svg'
import { ProductCartArray } from '../../store/types';
import { IRootState } from '../../store/store';
import { useSelector } from 'react-redux';


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
            <div className="containerCart" onClick={() => setToggleModal(!toggleModal)}>
                <div className="containerIconCart">
                    <HiOutlineShoppingBag size={24} className="iconCart" />
                </div>
                {products.length > 0 && (
                    <span>{products.length}</span>
                )}
            </div>
        </Header>
    )
}

