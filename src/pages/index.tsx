import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"

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
    price: string;
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

    <HomeContainer ref={sliderRef} className="keen-slider">
      {props.products.map((product) => (
        <Link
          href={`/product/${product.id}`}
          key={product.id}>
          <Product
            className="keen-slider__slide" >
            <Image src={product.imageUrl} width={520} height={480} alt="camisa" />

            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        </Link>
      ))
      }
    </HomeContainer >

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
      price: priceFormatted
    }
  })

  return {
    props: {
      products
    }
  }
}