import Image from "next/image";
import { BodyCart, ConstainerConfirmSale, ContainerCart, ContainerProducts, ImageCartContainer, ProductCart } from "../../styles/components/nsCartCheckout";
import NsButton from "../Button/NsButton";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IRootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, decreaseProductToCart, increaseProductToCart, removeProductToCart } from "../../store/cartSlice";
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { formattedPrice } from "../../utils/utils";
import { StoreProps } from "../../store/types";


interface CheckoutProps {
    open: boolean;
    setToggleModal: Dispatch<SetStateAction<boolean>>;
}

export default function NsCartCheckout({ open, setToggleModal }: CheckoutProps) {

    const { products, valueTotal, quantity } = useSelector<IRootState, StoreProps>(x => x.cart);

    const dispatch = useDispatch();


    return (
        <ContainerCart style={{ right: `${open ? '0' : '-540px'}` }}>
            <BodyCart>
                <div>
                    <span className="closeContainer" onClick={() => setToggleModal(false)}>X</span>

                    <span className="titleCart">Sacola de compras:</span>

                    <ContainerProducts>
                        {products.map((product) => (
                            <ProductCart key={product.id}>
                                <ImageCartContainer>
                                    <Image src={product.imageUrl} width={101} height={93} alt="" />
                                </ImageCartContainer>

                                <div className="descriptionProduct">
                                    <p>{product.name}</p>
                                    <strong>{formattedPrice(product.price)}</strong>
                                    <div className="quantityProduct">
                                        <strong style={{ marginRight: 5 }}>Quantidade:</strong>
                                        <p ><MdArrowBackIosNew
                                            onClick={() => dispatch(decreaseProductToCart(product))}
                                            style={{ cursor: 'pointer' }}
                                        /> </p>
                                        <strong>{product.quantity}</strong>
                                        <p ><MdArrowForwardIos
                                            onClick={() => dispatch(increaseProductToCart(product))}
                                            style={{ cursor: 'pointer' }}
                                        /></p>
                                    </div>

                                    <span onClick={() => dispatch(removeProductToCart(product))}>Remover</span>
                                </div>

                            </ProductCart>
                        ))}
                    </ContainerProducts>

                </div>
                <div>
                    <ConstainerConfirmSale>

                        <div className="descriptionFooter">
                            <span>Quantidade</span>
                            <span>{quantity} itens</span>
                        </div>

                        <div className="descriptionFooterValue">
                            <p>Valor Total</p>
                            <span>{formattedPrice(valueTotal)}</span>
                        </div>

                        <NsButton title="Finalizar compra" />

                    </ConstainerConfirmSale>
                </div>
            </BodyCart >
        </ContainerCart >
    )

}

