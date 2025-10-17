'use client'; // karena pakai interaksi (nanti bisa tambah event)

import React from 'react';

// Props = cartCount dikirim dari parent untuk ditampilkan
type NavbarProps = {
  cartCount: number;
};

const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
  return (
    <nav className='flex justify-between items-center px-6 py-4 bg-white shadow-md'>
      <h1 className='text-xl font-bold'>My E-Commerce</h1>
      {/* 
        Props digunakan untuk menampilkan jumlah item di keranjang.
        Data ini dikirim dari parent (misalnya halaman utama).
      */}
      <div className='relative'>
        <span className='text-sm font-medium'>Cart: {cartCount} item</span>
      </div>
    </nav>
  );
};

export default Navbar;
