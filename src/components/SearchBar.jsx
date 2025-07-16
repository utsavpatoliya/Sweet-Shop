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
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-2 mb-4">
      <input
        className="border p-2 rounded"
        name="name"
        placeholder="Search by name"
        value={filters.name}
        onChange={handleChange}
      />
      <input
        className="border p-2 rounded"
        name="category"
        placeholder="Category"
        value={filters.category}
        onChange={handleChange}
      />
      <input
        className="border p-2 rounded"
        name="minPrice"
        type="number"
        step="0.01"
        placeholder="Min Price"
        value={filters.minPrice}
        onChange={handleChange}
      />
      <input
        className="border p-2 rounded"
        name="maxPrice"
        type="number"
        step="0.01"
        placeholder="Max Price"
        value={filters.maxPrice}
        onChange={handleChange}
      />
      <button className="bg-gray-700 text-white px-4 py-2 rounded" type="submit">
        Search
      </button>
    </form>
  );
} 