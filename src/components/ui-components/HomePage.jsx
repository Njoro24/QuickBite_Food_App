//HomePage.jsx
// Import necessary libraries and components


import React, { useState, useEffect } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import Loader from '../components/Loader';
import { useFetchRestaurants } from '../hooks/useFetchRestaurants';
import { SearchIcon, AdjustmentsIcon } from '@heroicons/react/outline';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cuisineFilter, setCuisineFilter] = useState('');
  const { restaurants, loading, error } = useFetchRestaurants();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // Cuisines for filter
  const cuisines = ['All', 'Nyama Choma', 'Italian', 'Chinese', 'Mexican', 'Arabian', 'Authentic Kenyan Food', 'Fast Food'];

  useEffect(() => {
    if (restaurants) {
      let filtered = [...restaurants];
      
      // Apply search filter
      if (searchTerm) {
        filtered = filtered.filter(restaurant => 
          restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          restaurant.cuisineType.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      
      // Apply cuisine filter
      if (cuisineFilter && cuisineFilter !== 'All') {
        filtered = filtered.filter(restaurant => 
          restaurant.cuisineType === cuisineFilter
        );
      }
      
      setFilteredRestaurants(filtered);
    }
  }, [restaurants, searchTerm, cuisineFilter]);

  if (loading) return <Loader />;
  
  if (error) return (
    <div className="text-center py-12">
      <p className="text-red-500">Error loading restaurants. Please try again later.</p>
    </div>
  );

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary-light rounded-lg shadow-md p-6 mb-8 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Hungry? We've got you covered!</h1>
        <p className="text-lg mb-6">Order food from the finest restaurants in your area.</p>
        
        {/* Search Bar */}
        <div className="relative max-w-md">
          <input
            type="text"
            placeholder="Search for restaurants or cuisines..."
            className="w-full pl-10 pr-4 py-2 rounded-full border-0 focus:ring-2 focus:ring-primary text-gray-800"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <button 
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setShowFilters(!showFilters)}
          >
            <AdjustmentsIcon className="h-5 w-5 text-gray-400" />
          </button>
        </div>
      </div>
      
      {/* Filters */}
      {showFilters && (
        <div className="mb-6 p-4 bg-white dark:bg-darkcard rounded-lg shadow-md">
          <h2 className="font-semibold mb-3">Filter by Cuisine:</h2>
          <div className="flex flex-wrap gap-2">
            {cuisines.map((cuisine) => (
              <button
                key={cuisine}
                className={`px-4 py-1 rounded-full text-sm ${
                  cuisineFilter === cuisine 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 dark:bg-darkaccent text-gray-800 dark:text-gray-200'
                }`}
                onClick={() => setCuisineFilter(cuisine === 'All' ? '' : cuisine)}
              >
                {cuisine}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Featured Restaurants */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Featured Restaurants</h2>
        {filteredRestaurants.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants
              .filter(restaurant => restaurant.featured)
              .map(restaurant => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">No featured restaurants available.</p>
        )}
      </section>
      
      {/* All Restaurants */}
      <section>
        <h2 className="text-2xl font-bold mb-4">All Restaurants</h2>
        {filteredRestaurants.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.map(restaurant => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">No restaurants found matching your criteria.</p>
        )}
      </section>
    </div>
  );
};

export default HomePage;