import Link from 'next/link';

export default function Home() {
  return (
    <main className='p-6 bg-amber-100'>
      <h1 className='text-3xl font-bold'>Selamat Datang di Toko Kami</h1>
      <p className='mt-2 text-gray-600'>Temukan produk terbaik untuk Anda.</p>

      <div className=' flex gap-5 bg-green-400 p-4'>
        <Link href='/products'>
          <button className='mt-4 bg-blue-500 text-white hover:bg-amber-300 px-4 py-2 rounded'>
            Lihat Produk
          </button>
        </Link>

        <Link href='/products'>
          <button className='  mt-4 bg-amber-500 text-black hover:bg-blue-400 rounded-md px-4 py-2'>
            Coba lihat
          </button>
        </Link>
      </div>
    </main>
  );
}
