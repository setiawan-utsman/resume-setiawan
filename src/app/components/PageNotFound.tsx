import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {
    const navigate = useNavigate();
  return (
    <div className="flex flex-1 items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-xl text-center">
        <div className="flex flex-col items-center gap-6">
        <div className=''>
            <img src="/static/404.gif" alt=""  />
        </div>
          <div className="flex max-w-md flex-col items-center gap-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#111418] dark:text-white">
              Halaman Tidak Ditemukan
            </h1>
            <p className="text-base text-gray-600 dark:text-gray-400">
              Maaf, kami tidak dapat menemukan halaman yang Anda cari.
            </p>
          </div>
          <div>
            <button className="bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-600" onClick={() => navigate("/") }>Kembali Ke beranda</button>
          </div>
        </div>
      </div>
    </div>
  );
}
