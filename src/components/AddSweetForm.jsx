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
    <form onSubmit={handleSubmit} className="bg-white shadow rounded p-4 flex flex-col gap-2 mb-4">
      <input
        className="border p-2 rounded"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        className="border p-2 rounded"
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
        required
      />
      <input
        className="border p-2 rounded"
        name="price"
        type="number"
        step="0.01"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        required
      />
      <input
        className="border p-2 rounded"
        name="quantity"
        type="number"
        placeholder="Quantity"
        value={form.quantity}
        onChange={handleChange}
        required
      />
      <button className="bg-purple-600 text-white px-4 py-2 rounded" type="submit">
        Add Sweet
      </button>
    </form>
  );
} 