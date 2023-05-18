import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "../../lib/stripe";
import Stripe from "stripe";
import { formattedPrice } from "../../utils/utils";
import Image from "next/image"

interface ProductsProps {
    product: {
        id: string;
        name: string;
        imageUrl: string;
        price: string;
        description: string,
    }
}

export default function Product({ product }: ProductsProps) {

    return (
        <ProductContainer>
            <ImageContainer>
                <Image src={product.imageUrl} width={520} height={480} alt="camisa" />
            </ImageContainer>

            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{product.price}</span>

                <p>{product.description}</p>

                <button>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { id: 'prod_NuNWpdoBVlBOgl' } },
        ],
        fallback: false,
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
                description: product.description
            }
        },
        revalidate: 60 * 60 * 1, //1 hour
    }
}