import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="absolute left-0 right-0 top-0 flex justify-center">
      <div className="container z-50 mx-auto flex w-screen items-center justify-between bg-transparent px-[25px] py-[20px]">
        <p className="text-[20px] font-black text-white">LCDLF</p>

        <div className="flex items-center gap-[35px]">
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
          <div className=" group flex cursor-pointer items-center justify-center rounded-md border border-[rgba(0,0,0,.3)] bg-white p-2 transition-all duration-200 ease-in-out hover:bg-[#cccccc]">
            <ShoppingCart color="rgba(0,0,0,.5)" />
          </div>
        </div>
      </div>
    </div>
  );
}
