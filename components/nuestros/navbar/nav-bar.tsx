import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import Link from 'next/link';
import { Suspense } from 'react';
import Search from './search';

export default function Navbar() {
  return (
    <div className="absolute left-0 right-0 top-0 flex justify-center">
      <div className="container z-50 mx-auto flex w-full items-center justify-between bg-transparent px-[25px] py-[20px]">
        <p className="text-[20px] font-black text-white">LCDLF</p>
        <Search />
        <div className="flex items-center gap-[35px] ">
          <Link
            href="/"
            className="cursor-pointer border-b border-b-transparent p-1 text-[16px] font-light text-white transition-all duration-200 ease-in-out hover:border-b-white hover:text-[#cccccc]"
          >
            Inicio
          </Link>
          <Link
            href="/bodega"
            className="cursor-pointer border-b border-b-transparent p-1 text-[16px] font-light text-white transition-all duration-200 ease-in-out hover:border-b-white hover:text-[#cccccc]"
          >
            Bodega
          </Link>
          <div className="rounded-md border border-white">
            <Suspense fallback={<OpenCart />}>
              <Cart />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
