import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [filters, setFilters] = useState({
    name: "",
    category: "",
    minPrice: "",
    maxPrice: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end"
      >
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
          <input
            name="name"
            value={filters.name}
            onChange={handleChange}
            placeholder="Search by name"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Category</label>
          <input
            name="category"
            value={filters.category}
            onChange={handleChange}
            placeholder="e.g. nut, sugar"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Min Price */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Min Price</label>
          <input
            name="minPrice"
            type="number"
            step="0.01"
            value={filters.minPrice}
            onChange={handleChange}
            placeholder="0"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Max Price */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Max Price</label>
          <input
            name="maxPrice"
            type="number"
            step="0.01"
            value={filters.maxPrice}
            onChange={handleChange}
            placeholder="100"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Search Button */}
        <div className="md:col-span-2 lg:col-span-4 flex justify-center">
          <button
            type="submit"
            className="mt-4 bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-2 rounded-lg shadow-md"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
