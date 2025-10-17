import { NextResponse } from 'next/server';

// ✅ Dummy data produk
const products = [
  { id: '1', title: 'Kopi Arabica', price: 45000, image: '/coffee.jpg' },
  { id: '2', title: 'Teh Hijau', price: 30000, image: '/tea.jpg' },
  { id: '3', title: 'Coklat Premium', price: 55000, image: '/chocolate.jpg' },
];

// ✅ Fungsi handler untuk GET request
export async function GET() {
  // ✅ Kembalikan response dalam format JSON
  return NextResponse.json(products);
}
