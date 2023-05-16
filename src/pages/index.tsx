import Image from "next/image"
import { HomeContainer, Product } from "./home"

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import shirt1 from '../assets/shirt1.png';
import shirt2 from '../assets/shirt2.png';
import shirt3 from '../assets/shirt3.png';

export default function Home() {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48
    }
  })

  return (

    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={shirt1} width={520} height={480} alt="camisa" />

        <footer>
          <strong>Camisa x</strong>
          <span>R$ 79,99</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt2} width={520} height={480} alt="camisa" />

        <footer>
          <strong>Camisa 2X</strong>
          <span>R$ 69,99</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt3} width={520} height={480} alt="camisa" />

        <footer>
          <strong>Camisa 3X</strong>
          <span>R$ 99,99</span>
        </footer>
      </Product>
    </HomeContainer>

  )
}
