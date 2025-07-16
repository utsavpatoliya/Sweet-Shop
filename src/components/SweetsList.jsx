import React from "react";

export default function SweetsList({ sweets, onDelete, onPurchase, onRestock }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sweets.map((sweet) => (
        <div
          key={sweet.id}
          className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-2 transition-transform hover:scale-105 hover:shadow-2xl"
        >
          <div className="font-bold text-xl text-purple-700">{sweet.name}</div>
          <div className="text-gray-500">Category: <span className="font-semibold">{sweet.category}</span></div>
          <div className="text-gray-500">Price: <span className="font-semibold">${sweet.price}</span></div>
          <div className="text-gray-500">In Stock: <span className="font-semibold">{sweet.quantity}</span></div>
          <div className="flex gap-2 mt-4">
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded shadow"
              onClick={() => onDelete(sweet.id)}
            >
              Delete
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded shadow"
              onClick={() => {
                const qty = parseInt(prompt("Purchase quantity?"), 10);
                if (qty > 0) onPurchase(sweet.id, qty);
              }}
            >
              Purchase
            </button>
            <button
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded shadow"
              onClick={() => {
                const qty = parseInt(prompt("Restock quantity?"), 10);
                if (qty > 0) onRestock(sweet.id, qty);
              }}
            >
              Restock
            </button>
          </div>
        </div>
      ))}
    </div>
  );
} 