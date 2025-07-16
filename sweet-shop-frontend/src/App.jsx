import React, { useEffect, useState } from "react";
import { getSweets, addSweet, deleteSweet, purchaseSweet, restockSweet } from "./api/sweets";
import SweetsList from "./components/SweetsList";
import AddSweetForm from "./components/AddSweetForm";
import SearchBar from "./components/SearchBar";

function App() {
  const [sweets, setSweets] = useState([]);
  const [filters, setFilters] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const fetchSweets = async (params = {}) => {
    try {
      const res = await getSweets(params);
      setSweets(res.data);
    } catch (err) {
      setError("Failed to fetch sweets.");
    }
  };

  useEffect(() => {
    fetchSweets(filters);
  }, [filters]);

  const handleAdd = async (sweet) => {
    try {
      await addSweet(sweet);
      setSuccess("Sweet added!");
      setError("");
      fetchSweets(filters);
    } catch {
      setError("Failed to add sweet.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteSweet(id);
      setSuccess("Sweet deleted!");
      setError("");
      fetchSweets(filters);
    } catch {
      setError("Failed to delete sweet.");
    }
  };

  const handlePurchase = async (id, quantity) => {
    try {
      await purchaseSweet(id, quantity);
      setSuccess("Purchase successful!");
      setError("");
      fetchSweets(filters);
    } catch (err) {
      const errorMsg = err.response?.data?.error || "Purchase failed.";
      if (errorMsg.toLowerCase().includes("not enough stock")) {
        window.alert("Not enough stock available for this purchase!");
      }
      setError(errorMsg);
    }
  };

  const handleRestock = async (id, quantity) => {
    try {
      await restockSweet(id, quantity);
      setSuccess("Restocked successfully!");
      setError("");
      fetchSweets(filters);
    } catch {
      setError("Restock failed.");
    }
  };

  const handleSearch = (params) => {
    setFilters(params);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex flex-col items-center justify-start py-8">
      <div className="w-full max-w-3xl flex flex-col items-center">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-purple-800 drop-shadow animate-bounce">
          🍬 Sweet Shop Inventory
        </h1>
        {error && !error.toLowerCase().includes("not enough stock") && (
          <div className="bg-red-200 text-red-800 p-2 mb-2 rounded shadow w-full text-center">{error}</div>
        )}
        {success && (
          <div className="bg-green-200 text-green-800 p-2 mb-2 rounded shadow w-full text-center">{success}</div>
        )}
        <AddSweetForm onAdd={handleAdd} />
        <SearchBar onSearch={handleSearch} />
        <SweetsList
          sweets={sweets}
          onDelete={handleDelete}
          onPurchase={handlePurchase}
          onRestock={handleRestock}
        />
      </div>
    </div>
  );
}

export default App;