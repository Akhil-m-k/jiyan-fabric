import React from 'react';
import { Button, IconButton } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md mb-5'>
        <div className='flex items-center'>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img className='w-full h-full object-cover object-top' src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg" alt="" />
            </div>
            <div className="ml-5 space-y-1">
                <p className='font-semibold'>Men Slim Mid Rise Black Jeans</p>
                <p className='opacity-70'>Size: L,White</p>
                <p className='opacity-70 mt-2'>Seller:Akhil mk</p>
                <div className='flex items-center space-x-2 text-gray-600 mt-6 mb-5'>
                    <p className='font-semibold'>₹199</p>
                    <p className='line-through opacity-50'>₹211</p>
                    <p className='text-green-600 font-semibold'>70% off</p>
                </div>
            </div>
        </div>
        <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex item-center space-x-2'>
                    <IconButton>
                        <RemoveCircleOutlineIcon/>
                    </IconButton>
                    <span className='py-1 px-7 border rounded-sm'>
                    <IconButton sx={{color:"RGB(145 85 253)"}}>
                        <AddCircleOutlineIcon/>
                    </IconButton>
                    </span>
                </div>
                <div>
                    <Button sx={{color:"RGB(145 85 253)"}}>remove</Button>
                </div>
            </div>
    </div>
  )
}

export default CartItem