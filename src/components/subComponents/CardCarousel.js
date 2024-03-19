import React, { useState, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const Card = ({ product }) => {
  return (
    <div className='mt-3 border cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden sm:mx-10'>
      <div className='w-[14rem] sm:w-[10rem] h-[13rem]'>
        <img className='object-cover object-top w-full h-full' src={product.imageUrl} alt="" />
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
        <p className='mt-2 text-sm text-gray-500'>{product.title}</p>
      </div>
    </div>
  );
};



const CardCarousel = ({data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(false);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    650: { items: 2 },
    1024: { items: 3 },
    1200: { items: 4 },
    1500: { items: 5 }
  };

  const items = data.map((item, index) => <Card key={index} product={item} />);

  const handleSlideChanged = (event) => {
    setActiveIndex(event.item);
    setIsNextDisabled(event.item === items.length - 5);
    setIsPrevDisabled(event.item === 0);
  };

  const slidePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      setIsNextDisabled(false);
      setIsPrevDisabled(activeIndex - 1 === 0);
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (activeIndex < items.length - 1) {
      setActiveIndex(activeIndex + 1);
      setIsPrevDisabled(false);
      setIsNextDisabled(activeIndex + 1 === items.length - 5);
      carouselRef.current.slideNext();
    }
  };

  return (
    <div className='px-4 lg:px-8'>
      <div className='relative mx-10 sm:mx-6 xl:mx-3 '>
        <h1 className='text-3xl mb-4 font-bold text-center'>{sectionName}</h1>
        <AliceCarousel
          ref={carouselRef}
          disableButtonsControls
          items={items}
          responsive={responsive}
          disableDotsControls
          startIndex={activeIndex}
          slideToIndex={activeIndex}
          onSlideChanged={handleSlideChanged}
        />
        {!isPrevDisabled && (
          <button onClick={slidePrev} className='bg-white shadow-custom rounded-md py-8 px-4 absolute top-1/2 -left-8 transform -translate-y-1/2'>
            <i className="fas fa-angle-left"></i>
          </button>
        )}
        {!isNextDisabled && (
          <button onClick={slideNext} className='bg-white shadow-custom rounded-md py-8 px-4 absolute top-1/2 -right-8 transform -translate-y-1/2'>
            <i className="fas fa-angle-right"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default CardCarousel;
