import React from "react";

export default function SweetsList({ sweets, onDelete, onPurchase, onRestock }) {
  if (!sweets.length) {
    return (
      <div className="text-center text-gray-500 mt-12 text-lg">
        No sweets found 🍬
      </div>
    );
  }

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-4">
      {sweets.map((sweet) => (
        <div
          key={sweet.id}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-purple-100"
        >
          {/* Card Header */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-500 text-white text-center py-4">
            <h2 className="text-xl font-semibold">{sweet.name}</h2>
            <p className="text-sm italic opacity-90">{sweet.category}</p>
          </div>

          {/* Card Body */}
          <div className="px-6 py-4 flex-1 text-gray-800">
            <p className="mb-2">
              <span className="font-semibold">Price:</span> ${sweet.price}
            </p>
            <p className="mb-2">
              <span className="font-semibold">In Stock:</span>{" "}
              <span className={sweet.quantity === 0 ? "text-red-500 font-bold" : ""}>
                {sweet.quantity}
              </span>
            </p>
          </div>

          {/* Card Footer */}
          <div className="bg-gray-50 px-4 py-3 flex flex-wrap justify-between items-center gap-2">
            <button
              onClick={() => onDelete(sweet.id)}
              className="bg-red-500 hover:bg-red-600 text-white text-xs px-4 py-1 rounded-md shadow"
            >
              Delete
            </button>
            <button
              onClick={() => {
                const qty = parseInt(prompt("Enter purchase quantity:"), 10);
                if (qty > 0) onPurchase(sweet.id, qty);
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-4 py-1 rounded-md shadow"
            >
              Purchase
            </button>
            <button
              onClick={() => {
                const qty = parseInt(prompt("Enter restock quantity:"), 10);
                if (qty > 0) onRestock(sweet.id, qty);
              }}
              className="bg-green-500 hover:bg-green-600 text-white text-xs px-4 py-1 rounded-md shadow"
            >
              Restock
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
