'use client'
import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { portfolioinfo } from '@/app/api/data'

const SlickSlider = () => {
  const settings = {
    autoplay: true,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 479, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 1, // Change slidesToShow for smaller screens
        },
      },
      {
        breakpoint: 1024, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 2, // Change slidesToShow for smaller screens
        },
      },
    ],
  }

  return (
    <Slider {...settings}>
      {portfolioinfo.map((item, index) => (
        <div className={`px-2`} key={index}>
          <div className='relative overflow-hidden rounded-lg aspect-[16/9]'>
            <Image
              src={item.image}
              alt={item.alt}
              fill
              className='object-cover hover:scale-105 transition-all duration-500'
            />
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default SlickSlider
