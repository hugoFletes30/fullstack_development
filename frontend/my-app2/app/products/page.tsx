"use client";

import { useEffect, useState } from "react";
import { API_URL } from "@/lib/api";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch(`${API_URL}/products`);
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products (Table View)</h1>

      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p: any) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>${p.price}</td>
              <td>{p.category}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />

      <h1>Card View</h1>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {products.map((p: any) => (
          <div
            key={p.id}
            style={{
              width: 200,
              border: "1px solid #ccc",
              padding: 10,
              borderRadius: 6,
            }}
          >
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <p>{p.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
