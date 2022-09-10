import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='py-10 container mx-auto max-w-[37.5rem]'>
      <div className='mx-4'>
        <p className='text-3xl text-center text-gray-700 font-bold leading-[2rem]'>
          Jutaan Supplier & Pabrik di China Untuk Usaha ada di 1 Platform
        </p>
        <p className='text-center text-gray-700 mt-2 text-md mx-2 py-2'>
          Pernah Import China Tapi{' '}
          <b>
            Kapok Harus Ikut Seminar, Bayar Biaya Member Dengan Proses Import
            Yang Ribet?
          </b>
        </p>
        <p className='mt-2 font-black text-orange-500 text-center text-xl'>
          OCISTOK.COM SOLUSINYA !
        </p>
        <div className='flex justify-center py-4'>
          <img
            src='https://cdn.shopify.com/s/files/1/0268/7480/6307/files/image_1_794e0cfc-93fa-4a30-94ee-fd6506dee641.jpg?v=1640930805'
            className='w-96'
          />
        </div>
      </div>

      <div className='mx-4'>
        <p className='text-orange-500 font-bold text-xl py-2 mb-4'>
          Apa itu OCISTOK ?
        </p>
        <p className='text-gray-700 text-justify'>
          <b className='text-orange-500'>OCISTOK.COM</b> adalah platform belanja
          import China, dimana Customer bisa langsung mencari dan memilih barang
          dari<b> Pabrik & Supplier China Tangan Pertama di website</b>{' '}
          <b className='text-orange-500'>OCISTOK.COM</b>
        </p>
      </div>

      <div className='mx-4 mt-10'>
        <div className='flex justify-center'>
          <Image
            src='https://ocistok.co.id/control-panel/foto/Group 14.svg'
            alt='test'
            width={220}
            height={220}
          />
        </div>
        <p className='text-center mt-2'>
          <b>
            {' '}
            “Eitss, Tapi emangnya kenapa sih pebisnis offline ataupun online
            harus banget import barang dari China?
          </b>{' '}
          Kenapa ga cari barang disini aja?”
        </p>
      </div>

      <div className='mx-4 mt-2'>
        <div className='flex justify-center'>
          <Image
            src='https://ocistok.co.id/control-panel/foto/Group 357.svg'
            alt='test'
            width={220}
            height={220}
          />
        </div>
        <div className='text-center'>
          <div className='w-80 mx-auto mt-2 font-bold'>
            <p>Jawabannya Cuma 1 !</p>
            <p className='text-md font-bold mt-2'>
              <b>
                karena rata-rata para penjual di offline dan online itu udah
                kena “PERANG HARGA”
              </b>
            </p>
          </div>
          <div className='text-justify mt-4'>
            <p>
              Makanya ga heran, kalau 1 barang di Marketplace, bisa dijual oleh
              puluhan seller atau bahkan lebih. alhasil{' '}
              <b> PRODUK yang di jual dapat bersaing di pasar.</b>
            </p>
            <p className='mt-4'>
              Maka dari itu, udah banyak pebisnis yang cari produk dengan cara
              import langsung dari China.
            </p>
          </div>
        </div>
        <div className='bg-amber-500 rounded-md mt-6 pb-4'>
          <p className='text-center text-lg px-8 font-black py-2 pt-4'>
            Alasan kenapa WAJIB banget Import China dari sekarang
          </p>
          <ul className='w-[350px] mx-auto pl-8 space-y-0 mt-0'>
            <li>
              <p className='text-md -pt-6'>
                <b>Berkesempatan Jadi Penjual Tunggal</b> produk unik di
                Indonesia
              </p>
            </li>
            <li>
              <span className='text-md'>
                Mendapatkan{' '}
                <b>Produk Impor Langsung Dari Supplier Tangan Pertama</b> &
                Pabrik
              </span>
            </li>
            <li>
              <span className='text-md'>
                Jutaan produk <b>Anti Perang Harga</b> dari Ribuan Supplier di
                China
              </span>
            </li>
            <li>
              <span className='text-md'>
                Bisa buat <b>Merk Usaha Sendiri Tanpa Ribet</b> urus produksi
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className='mx-2 mt-8'>
        <p className='text-lg text-center font-black'>
          TUNGGU APA LAGI? KLIK TOMBOL DI BAWAH!
        </p>
        <div className='flex justify-center mt-2'>
          <Image
            src='https://ocistok.co.id/control-panel/foto/down-arrow-svgrepo-com.svg'
            alt=''
            width={100}
            height={80}
          />
        </div>
      </div>

      <div className='flex items-center animate-bounce justify-center mt-6'>
        <Link href={'/register'}>
          <a className='bg-amber-500 text-lg font-semibold w-3/4 text-center text-white px-2 py-3 rounded-md mt-2'>
            Akses GRATIS SEKARANG!
          </a>
        </Link>
      </div>
    </div>
  );
}
