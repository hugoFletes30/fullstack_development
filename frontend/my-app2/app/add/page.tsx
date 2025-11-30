"use client";

import { useState } from "react";
import { API_URL } from "../lib/api";

export default function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const handleImage = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setForm({ ...form, image: reader.result?.toString() || "" });
    };

    if (file) reader.readAsDataURL(file);
  };

  const submitForm = async (e: any) => {
    e.preventDefault();
    await fetch(`${API_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("Product added!");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Add Product</h1>

      <form onSubmit={submitForm} style={{ width: 400 }}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        /><br /><br />

        <input
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
        /><br /><br />

        <input
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          required
        /><br /><br />

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        /><br /><br />

        <input type="file" onChange={handleImage} /><br />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
