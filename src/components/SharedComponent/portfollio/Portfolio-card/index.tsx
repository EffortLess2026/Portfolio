'use client'
import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import Link from 'next/link'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { portfolioinfo } from '@/app/api/data'

const PortfolioCard = () => {
  return (
    <div id='portfolio' className='dark:bg-darkmode'>
      <div className='lg:px-9 m-auto px-4 max-w-[1400px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14'>
          {portfolioinfo.map((item, index) => (
            <div key={index} className='group flex flex-col h-full'>
              {/* Contenedor de Imagen con Overlay (Solo Desktop) */}
              <div className='relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 aspect-[4/3]'>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className='object-cover group-hover:scale-110 transition-all duration-700 ease-in-out'
                />
                
                {/* Overlay Premium (Hidden on Mobile, Visible on Desktop Hover) */}
                <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center p-4 text-center z-10'>
                  <Link 
                    href={item.url || '#'} 
                    target='_blank' 
                    className='px-6 py-3 bg-white text-midnight_text hover:bg-primary hover:text-white font-bold rounded-lg transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 flex items-center gap-2'
                  >
                    Ver proyecto
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className='pt-6 flex flex-col flex-grow'>
                <div className='flex items-center gap-2 mb-2'>
                  <span className='px-3 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full bg-primary/10 text-primary border border-primary/20'>
                    {item.type}
                  </span>
                </div>
                
                <h4 className='text-2xl text-midnight_text font-bold dark:text-white mb-2 group-hover:text-primary transition-colors'>
                  {item.title}
                </h4>
                
                <p className='text-sm text-secondary dark:text-white/60 mb-6 line-clamp-2 leading-relaxed'>
                  {item.shortDescription}
                </p>
                
                {/* Botón Visible (Solo Mobile) */}
                <div className='mt-auto md:hidden'>
                  <Link 
                    href={item.url || '#'} 
                    target='_blank' 
                    className='w-full justify-center inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg active:scale-95'
                  >
                    Ver proyecto
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
