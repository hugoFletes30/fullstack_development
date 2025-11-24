import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Store Product Management System</h1>

      <Link href="/products">View Products</Link><br /><br />
      <Link href="/add">Add Product</Link>
    </div>
  );
}

