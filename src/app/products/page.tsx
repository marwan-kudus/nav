'use client'; // ✅ Karena kita menggunakan useState, halaman ini harus jadi Client Component

import React, { useState } from 'react';
import ProductList from '@/app/components/ProductList'; // ✅ Import komponen daftar produk

// ✅ Data dummy produk untuk ditampilkan
const dummyProducts = [
  { title: 'Kopi Arabica', price: 45000, image: '/coffee.jpg' },
  { title: 'Teh Hijau', price: 30000, image: '/tea.jpg' },
  { title: 'Coklat Premium', price: 55000, image: '/chocolate.jpg' },
];

// ✅ Komponen halaman ProductsPage
export default function ProductsPage() {
  // ✅ State cart disimpan di level halaman (global untuk komponen di bawahnya)
  // Ini disebut lifting state up: state dipindah ke parent agar bisa dikontrol lebih luas
  const [cart, setCart] = useState<typeof dummyProducts>([]);

  // ✅ Fungsi untuk menambahkan produk ke cart
  // Fungsi ini akan dikirim ke ProductList → lalu ke ProductCard
  const addToCart = (product: (typeof dummyProducts)[number]) => {
    setCart((prev) => [...prev, product]); // ✅ Tambahkan produk ke array cart
  };

  return (
    <main className='p-6'>
      {/* ✅ Judul halaman */}
      <h1 className='text-2xl font-bold mb-4'>Daftar Produk</h1>

      {/* ✅ Kirim array produk dan fungsi addToCart ke ProductList */}
      <ProductList products={dummyProducts} onAddToCart={addToCart} />

      {/* ✅ Tampilkan isi keranjang di bawah daftar produk */}
      <div className='mt-6 bg-green-300 rounded-e-full'>
        <h2 className='text-lg font-semibold bg-blue-400 rounded-e-full pl-'>
          Keranjang:
        </h2>
        <ul className='list-disc ml-6'>
          {/* ✅ Mapping isi cart → list item */}
          {cart.map((item, index) => (
            <li key={index}>
              {item.title} - Rp {item.price.toLocaleString('id-ID')}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
