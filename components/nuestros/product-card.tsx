import Image from 'next/image';

type ProductCardProps = {
  imageUrl: string;
  imageUrlHover?: string;
  productName: string;
  price: string;
  currencyCode: string;
};

function ProductCard({
  imageUrl,
  imageUrlHover,
  productName,
  price,
  currencyCode
}: ProductCardProps) {
  return (
    <div className="group relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 p-4 transition-all duration-200 ease-in-out hover:border-neutral-400">
      <div className="relative flex aspect-square w-[100%] overflow-hidden rounded-xl border border-neutral-200 bg-white">
        {imageUrlHover ? (
          <>
            <div className="overflow-hidden rounded-xl">
              <Image
                className="scale-125 cursor-pointer rounded-xl object-cover p-4 opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100"
                fill
                src={imageUrlHover}
                alt="product image"
              />
            </div>
            <Image
              className="cursor-pointer object-contain p-4 transition-all duration-200 ease-in-out group-hover:opacity-0"
              fill
              src={imageUrl}
              alt="product image"
            />
          </>
        ) : (
          <Image
            className="cursor-pointer object-contain p-4 transition-all duration-200 ease-in-out "
            fill
            src={imageUrl}
            alt="product image"
          />
        )}
      </div>
      <div className="my-4 mt-4 flex w-[100%]">
        <h5 className="line-clamp-1 text-xl tracking-tight text-slate-900">{productName}</h5>
      </div>
      <a
        href="#"
        className="mx-2 mb-2 flex items-center justify-center gap-5 rounded-md bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-neutral-700 focus:outline-none focus:ring-4 focus:ring-purple-500"
      >
        {price} {currencyCode}
      </a>
    </div>
  );
}

export default ProductCard;
