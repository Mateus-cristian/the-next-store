import Image from "next/image";
import { BodyCart, ConstainerConfirmSale, ContainerCart, ContainerProducts, ImageCartContainer, ProductCart } from "../../styles/components/nsCartCheckout";


import shirt1 from '../../assets/shirt1.png';
import shirt2 from '../../assets/shirt2.png';
import shirt3 from '../../assets/shirt3.png';
import NsButton from "../NsButton";
import { Dispatch, SetStateAction } from "react";

interface CheckoutProps {
    open: boolean;
    setToggleModal: Dispatch<SetStateAction<boolean>>;
}

export default function NsCartCheckout({ open, setToggleModal }: CheckoutProps) {
    return (
        <ContainerCart style={{ right: `${open ? '0' : '-540px'}` }}>
            <BodyCart>
                <div>
                    <span className="closeContainer" onClick={() => setToggleModal(false)}>X</span>

                    <span className="titleCart">Sacola de compras:</span>

                    <ContainerProducts>
                        <ProductCart>
                            <ImageCartContainer>
                                <Image src={shirt1.src} width={101} height={93} alt="" />
                            </ImageCartContainer>

                            <div className="descriptionProduct">
                                <p>Camisa x1</p>
                                <strong>R$ 79,99</strong>

                                <span>Remover</span>
                            </div>

                        </ProductCart>

                        <ProductCart>
                            <ImageCartContainer>
                                <Image src={shirt2.src} width={101} height={93} alt="" />
                            </ImageCartContainer>

                            <div className="descriptionProduct">
                                <p>Camisa x2</p>
                                <strong>R$ 89,99</strong>

                                <span>Remover</span>
                            </div>

                        </ProductCart>

                        <ProductCart>
                            <ImageCartContainer>
                                <Image src={shirt3.src} width={101} height={93} alt="" />
                            </ImageCartContainer>

                            <div className="descriptionProduct">
                                <p>Camisa x3</p>
                                <strong>R$ 99,99</strong>

                                <span>Remover</span>
                            </div>

                        </ProductCart>

                        <ProductCart>
                            <ImageCartContainer>
                                <Image src={shirt3.src} width={101} height={93} alt="" />
                            </ImageCartContainer>

                            <div className="descriptionProduct">
                                <p>Camisa x3</p>
                                <strong>R$ 99,99</strong>

                                <span>Remover</span>
                            </div>

                        </ProductCart>

                        <ProductCart>
                            <ImageCartContainer>
                                <Image src={shirt3.src} width={101} height={93} alt="" />
                            </ImageCartContainer>

                            <div className="descriptionProduct">
                                <p>Camisa x3</p>
                                <strong>R$ 99,99</strong>

                                <span>Remover</span>
                            </div>

                        </ProductCart>
                    </ContainerProducts>

                </div>
                <div>
                    <ConstainerConfirmSale>

                        <div className="descriptionFooter">
                            <span>Quantidade</span>
                            <span>3 itens</span>
                        </div>

                        <div className="descriptionFooterValue">
                            <p>Valor Total</p>
                            <span>R$ 270,00</span>
                        </div>

                        <NsButton title="Finalizar compra" />

                    </ConstainerConfirmSale>
                </div>
            </BodyCart >
        </ContainerCart >
    )

}

