'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { createUrl } from 'lib/utils';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set('q', search.value);
    } else {
      newParams.delete('q');
    }

    router.push(createUrl('/search', newParams));
  }

  return (
    <form onSubmit={onSubmit} className="w-max-[900px] relative">
      <input
        key={searchParams?.get('q')}
        type="text"
        name="search"
        placeholder="Search for products..."
        autoComplete="off"
        defaultValue={searchParams?.get('q') || ''}
        className="rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-white dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <MagnifyingGlassIcon className="h-4" />
      </div>
    </form>
  );
}

export default function Navbar() {
  return (
    <div className="absolute left-0 right-0 top-0 flex justify-center">
      <div className="container z-50 mx-auto flex items-center justify-between bg-transparent px-[25px] py-[20px]">
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
          <div className=" group flex cursor-pointer items-center justify-center rounded-md border border-[rgba(0,0,0,.3)] bg-white p-2 transition-all duration-200 ease-in-out hover:bg-[#cccccc]">
            <ShoppingCart color="rgba(0,0,0,.5)" />
          </div>
        </div>
      </div>
    </div>
  );
}
