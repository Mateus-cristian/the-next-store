import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"

import Head from 'next/head';

import { useKeenSlider } from 'keen-slider/react'
import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";


import 'keen-slider/keen-slider.min.css'
import Stripe from "stripe";
import { formattedPrice } from "../utils/utils";
import Link from "next/link";


interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    priceFormatted: string;
  }[]
}

export default function Home(props: HomeProps) {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48
    }
  })

  return (
    <>
      <Head>
        <title>Home - The next store</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">


        {props.products.map((product) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            prefetch={false}>
            <Product
              className="keen-slider__slide" >
              <Image src={product.imageUrl} width={520} height={480} alt="camisa" />

              <footer>
                <strong>{product.name}</strong>
                <span>{product.priceFormatted}</span>
              </footer>
            </Product>
          </Link>
        ))
        }
      </HomeContainer >
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {

  const response = await stripe.products.list({
    expand: ['data.default_price']
  })


  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;
    const amountPrice = price.unit_amount / 100;
    const priceFormatted = formattedPrice(amountPrice);

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      priceFormatted: priceFormatted,
      price: price
    }
  })

  return {
    props: {
      products
    }
  }
}