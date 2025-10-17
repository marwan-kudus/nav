import { notFound } from 'next/navigation';
import Image from 'next/image';

// Dummy data produk
const dummyProducts = [
  { id: '1', title: 'Kopi Arabica', price: 45000, image: '/coffee.jpg' },
  { id: '2', title: 'Teh Hijau', price: 30000, image: '/tea.jpg' },
  { id: '3', title: 'Coklat Premium', price: 55000, image: '/chocolate.jpg' },
];

// ✅ Komponen detail produk berdasarkan ID dari URL params adalah kunci untuk membuka detail product
export default function ProductDetail({ params }: { params: { id: string } }) {
  // Ambil data produk berdasarkan ID dari params
  const product = dummyProducts.find((p) => p.id === params.id);

  // Jika tidak ditemukan, tampilkan halaman 404
  if (!product) return notFound();

  return (
    <main className='p-6 bg-amber-800'>
      <h1 className=' bg-amber-300 text-2xl font-bold mb-2'>{product.title}</h1>
      <Image
        src={product.image} // ✅ Path gambar
        alt={product.title} // ✅ Teks alternatif untuk aksesibilitas
        fill // ✅ Gambar memenuhi container div
        className='object-cover rounded' // ✅ Styling Tailwind
        sizes='(max-width: 768px) 100vw, 256px' // ✅ Optimasi responsif
      />
      <p className='mt-2 bg-red-500 text-gray-600'>
        Harga: Rp {product.price.toLocaleString('id-ID')}
      </p>
    </main>
  );
}
