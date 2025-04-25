//RestaurantCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon, ClockIcon } from '@heroicons/react/solid';

const RestaurantCard = ({ restaurant }) => {
  const {
    id,
    name,
    cuisineType,
    imageUrl,
    rating,
    deliveryTime,
    minOrderAmount,
    featured
  } = restaurant;

  return (
    <Link 
      to={`/restaurant/${id}`}
      className="block group"
    >
      <div className="bg-white dark:bg-darkcard rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:transform group-hover:scale-[1.02]">
        {/* Image */}
        <div className="relative h-48">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover"
          />
          {featured && (
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              Featured
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg mb-1">{name}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{cuisineType}</p>
            </div>
            <div className="flex items-center bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded">
              <StarIcon className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">{rating.toFixed(1)}</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <ClockIcon className="h-4 w-4 mr-1" />
              <span>{deliveryTime} min</span>
            </div>
            <div>
              Min: ${minOrderAmount.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;