// Client Component dibutuhkan karena kita akan menggunakan event handler (onClick).
'use client';

// ✅ Import React agar bisa membuat komponen dan menggunakan fitur seperti props dan event.
import React from 'react';

// Komponen ini otomatis mengoptimasi gambar (lazy load, resize, dll).
import Image from 'next/image';

// ✅ Definisikan tipe data untuk props yang akan diterima oleh komponen.
// Props adalah data yang dikirim dari parent ke child component.
type ProductCardProps = {
  title: string; // Nama produk
  price: number; // Harga produk
  image: string; // Path gambar produk
  onAdd: () => void; // Fungsi yang akan dipanggil saat tombol 'Add to Cart' diklik
};

// ✅ Membuat komponen ProductCard dengan tipe props yang sudah didefinisikan.
// React.FC = Functional Component, dan kita beri tahu bahwa props-nya bertipe ProductCardProps.
const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  image,
  onAdd,
}) => {
  // ✅ Return JSX yang akan dirender ke browser.
  return (
    // ✅ Container utama card produk, diberi styling Tailwind untuk border, shadow, padding, dan lebar maksimum.
    <div className='border rounded-lg shadow-md p-4 max-w-xs'>
      {/* ✅ Container gambar dengan posisi relatif agar Image bisa menggunakan prop 'fill'. */}
      <div className='relative w-full h-40'>
        {/* ✅ Komponen Image dari Next.js untuk menampilkan gambar produk.
            - src: path gambar
            - alt: teks alternatif untuk aksesibilitas
            - fill: membuat gambar memenuhi container
            - className: styling Tailwind untuk crop gambar dan rounded */}
        <Image
          src={image}
          alt={title}
          fill
          className='object-cover rounded-md'
        />
      </div>

      {/* ✅ Menampilkan nama produk dengan styling teks besar dan tebal */}
      <h2 className='text-lg font-semibold mt-2'>{title}</h2>

      {/* ✅ Menampilkan harga produk dengan format lokal Indonesia (misalnya: 45.000) */}
      <p className='text-gray-600'>Rp {price.toLocaleString('id-ID')}</p>

      {/* ✅ Tombol untuk menambahkan produk ke keranjang.
          - onClick: saat tombol diklik, panggil fungsi 'onAdd' yang dikirim dari parent.
          - className: styling Tailwind untuk warna, hover, padding, dan rounded */}
      <button
        onClick={onAdd}
        className='mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'
      >
        {/* ✅ Teks tombol yang ditampilkan */}
        Add to Cart
      </button>
    </div>
  );
};

// ✅ Export komponen agar bisa digunakan di file lain (misalnya di ProductList atau halaman utama).
export default ProductCard;
