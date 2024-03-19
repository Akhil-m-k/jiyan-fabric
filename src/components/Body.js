import React from 'react'
import MainCarousel from './subComponents/MainCarousel';
import CardCarousel from './subComponents/CardCarousel';
import jeans from '../Data/jeans';
import { mens_kurta } from '../Data/menKurthas';
import { saree } from '../Data/saree';

const Body = () => {
  return (
    <div className='mt-16'>
        <MainCarousel/>
        <div className='space-y-10 py-10 flex flex-col justify-center'>
         <CardCarousel data={jeans} sectionName={"MEN JEANS"}/>
         <CardCarousel data={saree} sectionName={"LAHANKA COLLECTIONS"}/>
         <CardCarousel data={mens_kurta} sectionName={"MENS KURTHA"}/>
        </div>
    </div>
  )
}

export default Body;