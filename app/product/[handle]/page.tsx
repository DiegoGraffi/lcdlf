import { AddToCart } from 'components/cart/add-to-cart';
import { GridTileImage } from 'components/grid/tile';
import { Gallery } from 'components/product/gallery';
import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { getProduct, getProductRecommendations } from 'lib/shopify';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export const runtime = 'edge';

export async function generateMetadata({
  params
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable
      }
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt
            }
          ]
        }
      : null
  };
}

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      <div className="mx-auto flex min-h-screen flex-col items-center justify-center bg-black pt-28">
        <div className="max-w-screen-2xl rounded-lg px-4 md:p-12 lg:flex-row lg:gap-8">
          <div className="flex basis-full flex-col justify-center rounded-lg align-middle lg:basis-4/6">
            <Gallery
              images={product.images.map((image) => ({
                src: image.url,
                altText: image.altText
              }))}
            />
          </div>
          <div className="mt-[120px] flex w-full flex-col lg:flex-row">
            <div className="flex flex-1 flex-col gap-4 p-4">
              <p className="w-max rounded-full bg-white px-4 py-3 text-[12px] font-semibold text-black">
                {product.vendor}
              </p>
              <h1 className="text-[36px] font-bold">{product.title}</h1>
              <p className="text-balance text-[16px] font-normal">{product.description}</p>
            </div>
            <div className="flex flex-1 flex-col items-end justify-start gap-[15px]">
              <p className="font-light">
                Stock: <span className="font-bold">{product.totalInventory}</span>
              </p>
              <div className="flex gap-3 text-[40px] font-light">
                <p>{product.priceRange.maxVariantPrice.amount}</p>
                <p>{product.priceRange.maxVariantPrice.currencyCode}</p>
              </div>
              <div className="flex rounded-md border text-[16px] font-semibold">
                <p className="cursor-pointer bg-white p-[15px] text-black transition-all duration-200 ease-in-out hover:bg-neutral-300">
                  -
                </p>
                <p className="cursor-pointer border-x border-[#D7D7D7] bg-white p-[15px] text-black transition-all duration-200 ease-in-out hover:bg-neutral-300">
                  01
                </p>
                <p className="cursor-pointer bg-white p-[15px] text-black transition-all duration-200 ease-in-out hover:bg-neutral-300">
                  +
                </p>
              </div>

              <AddToCart availableForSale={product.availableForSale} variants={product.variants} />
            </div>
          </div>
        </div>
        <Suspense>
          <RelatedProducts id={product.id} />
        </Suspense>
      </div>
    </>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <div className="w-full bg-white px-4 py-8 md:px-12">
      <div className="container mx-auto">
        <h2 className="mb-4 text-[36px] font-bold text-black ">Productos Relacionados</h2>
        <ul className="flex w-full gap-4 overflow-x-auto pt-1">
          {relatedProducts.map((product) => (
            <li
              key={product.handle}
              className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
            >
              <Link className="relative h-full w-full" href={`/product/${product.handle}`}>
                <GridTileImage
                  alt={product.title}
                  label={{
                    title: product.title,
                    amount: product.priceRange.maxVariantPrice.amount,
                    currencyCode: product.priceRange.maxVariantPrice.currencyCode
                  }}
                  src={product.featuredImage?.url}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
