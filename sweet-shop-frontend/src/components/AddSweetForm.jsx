import React, { useState } from "react";

export default function AddSweetForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      ...form,
      price: parseFloat(form.price),
      quantity: parseInt(form.quantity, 10),
    });
    setForm({ name: "", category: "", price: "", quantity: "" });
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-6"
      >
        <h2 className="text-2xl font-bold text-purple-700 text-center">
          Add New Sweet
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter sweet name"
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Category
            </label>
            <input
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="e.g. sugar, nut"
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Price ($)
            </label>
            <input
              name="price"
              type="number"
              step="0.01"
              value={form.price}
              onChange={handleChange}
              placeholder="Enter price"
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Quantity
            </label>
            <input
              name="quantity"
              type="number"
              value={form.quantity}
              onChange={handleChange}
              placeholder="Enter quantity"
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg shadow text-lg self-center"
        >
          Add Sweet
        </button>
      </form>
    </div>
  );
}
