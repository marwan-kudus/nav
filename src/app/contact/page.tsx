'use client';

export default function ContactPage() {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
      {/* Main Content */}
      <main className='  flex-grow max-w-xl mx-auto px-6 py-10'>
        <h1 className='text-4xl font-bold mb-8 text-center'>Contact Me</h1>

        <div className=' '>
          <label className=' block mb-1 font-medium'>Email</label>
          <input
            type='email'
            name='email'
            placeholder='alamat email'
            className='w-full border px-3 py-2 rounded-md'
            required
          />
        </div>

        <div>
          <label className='block mb-1 font-medium'>Pesan</label>
          <textarea
            name='pesan'
            placeholder='Tulis pesan anda...'
            className='w-full border px-3 py-2 rounded-md h-32 resize-none'
            required
          />
        </div>

        <button
          type='submit'
          className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700'
        >
          Kirim
        </button>
      </main>

      {/* Footer */}
      <footer className='py-4 text-center text-gray-600 border-t'>
        Copyright 2020 @ Nama pemilik.
      </footer>
    </div>
  );
}
