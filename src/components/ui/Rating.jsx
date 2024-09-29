import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";


const Rating = ({rating}) => {
    const totalStar = 5;
  return (
    <div className='flex space-x-1'>
      {Array.from({ length: totalStar }, (_, index) => {
        const starIndex = index + 1;
        return starIndex <= rating ? (
          <FaStar key={index} className='text-yellow-500' />
        ) : (
          <FaRegStar key={index} className='text-gray-400' />
        );
      })}
    </div>
  )
}

export default Rating
