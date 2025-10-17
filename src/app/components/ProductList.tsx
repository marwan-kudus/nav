'use client'; // ✅ Karena kita pakai useState dan useEffect, komponen ini harus jadi Client Component

import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard'; // ✅ Import komponen untuk menampilkan satu produk

// ✅ Tipe data produk
type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
};

// ✅ Komponen utama ProductList
const ProductList: React.FC = () => {
  // ✅ State untuk menyimpan array produk hasil fetch dari API
  const [products, setProducts] = useState<Product[]>([]);

  // ✅ State untuk loading dan error (opsional tapi berguna untuk UX)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // ✅ useEffect digunakan untuk menjalankan kode saat komponen pertama kali dimount
  // Di sini kita fetch data dari API `/api/products`
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products'); // ✅ Ambil data dari API
        if (!res.ok) throw new Error('Gagal mengambil data produk');

        const data = await res.json(); // ✅ Ubah response menjadi JSON
        setProducts(data); // ✅ Simpan data ke state
      } catch (err: unknown) {
        // ✅ Gunakan 'unknown' agar aman, lalu cek apakah error adalah instance dari Error
        if (err instanceof Error) {
          setError(err.message); // ✅ Ambil pesan error dari objek Error
        } else {
          setError('Terjadi kesalahan tak dikenal'); // ✅ Fallback jika tipe error tidak diketahui
        }
      } finally {
        setLoading(false); // ✅ Matikan loading setelah selesai
      }
    };

    fetchProducts(); // ✅ Panggil fungsi fetch saat komponen dimount
  }, []); // ✅ Array kosong artinya hanya dijalankan sekali saat awal

  // ✅ Jika masih loading, tampilkan pesan loading
  if (loading) return <p>Memuat produk...</p>;

  // ✅ Jika terjadi error, tampilkan pesan error
  if (error) return <p className='text-red-500'>Error: {error}</p>;

  // ✅ Render daftar produk menggunakan ProductCard
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          onAdd={() => console.log('Tambah ke cart:', product.title)} // ✅ Dummy handler
        />
      ))}
    </div>
  );
};

export default ProductList;
