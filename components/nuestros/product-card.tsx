import Image, { StaticImageData } from 'next/image';

type ProductCardProps = {
  imageUrl: StaticImageData;
  productName: string;
  price: number;
  currencyCode: string;
};

function ProductCard({ imageUrl, productName, price, currencyCode }: ProductCardProps) {
  return (
    <div className="group relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 p-4 transition-all duration-200 ease-in-out hover:border-neutral-400">
      <div className="relative flex aspect-square w-[100%] overflow-hidden rounded-xl border border-neutral-200 bg-white">
        <Image
          className="cursor-pointer object-contain p-4 transition-all duration-200 ease-in-out group-hover:scale-110"
          fill
          src={imageUrl}
          alt="product image"
        />
      </div>
      <div className="my-4 mt-4 flex w-[100%]">
        <h5 className="line-clamp-1 text-xl tracking-tight text-slate-900">{productName}</h5>
      </div>
      <a
        href="#"
        className="mx-2 mb-2 flex items-center justify-center rounded-md bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-neutral-700 focus:outline-none focus:ring-4 focus:ring-purple-500"
      >
        {currencyCode}
        {price}
      </a>
    </div>
  );
}

export default ProductCard;
