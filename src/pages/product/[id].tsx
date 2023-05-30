import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "../../lib/stripe";
import Stripe from "stripe";
import { formattedPrice, priceStringToDecimal } from "../../utils/utils";
import Image from "next/image"
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";
import Head from "next/head";
import NsButton from "../../components/Button/NsButton";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/store";
import { ProductCartArray } from "../../store/types";
import { addProductToCart } from "../../store/cartSlice";

interface ProductsProps {
    product: {
        id: string;
        name: string;
        imageUrl: string;
        price: string;
        description: string,
        defaultPriceId?: string
    }
}

export default function Product({ product }: ProductsProps) {
    const { isFallback } = useRouter();

    const dispatch = useDispatch();

    // para retornar os produtos
    // const { products } = useSelector<IRootState, ProductCartArray>(x => x.cart);

    const [inCheckout, setInCheckout] = useState(false);

    async function handlerBuyPoduct() {
        try {
            setInCheckout(true);
            const response = await axios.post('/api/checkout', {
                priceId: product.defaultPriceId,
            })

            const { checkoutUrl } = response.data;

            window.location.href = checkoutUrl;
        } catch (err) {
            setInCheckout(false)
            alert("xiii deu erro");
        }
    }

    const addProductToCartCheckout = (product: ProductsProps) => {
        const { id, description, name, imageUrl, price } = product.product;

        const priceFormatted = priceStringToDecimal(price);

        const productFormatted = {
            id: id,
            name: name,
            imageUrl: imageUrl,
            price: priceFormatted,
            description: description,
            quantity: 1
        }

        dispatch(addProductToCart(productFormatted));
    }

    if (isFallback) {
        return <p>Carregando</p>
    }

    return (
        <>
            <Head>
                <title>{product.name}</title>
            </Head>
            <ProductContainer >
                <ImageContainer>
                    <Image src={product.imageUrl} width={520} height={480} alt="camisa" />
                </ImageContainer>

                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span>{product.price}</span>

                    <p>{product.description}</p>

                    <NsButton disabled={inCheckout} handlerPoduct={() => addProductToCartCheckout({ product })} title="Adicionar ao carrinho" />

                </ProductDetails>
            </ProductContainer>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { id: 'prod_NuNWpdoBVlBOgl' } },
        ],
        fallback: true,
    }

}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const productId = params.id;

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price'],
    });

    const price = product.default_price as Stripe.Price;
    const amountPrice = price.unit_amount / 100;
    const priceFormatted = formattedPrice(amountPrice);

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: priceFormatted,
                description: product.description,
                defaultPriceId: price.id
            }
        },
        revalidate: 60 * 60 * 1, //1 hour
    }
}