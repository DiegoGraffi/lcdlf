import Grid from 'components/grid';
import ProductCard from 'components/nuestros/product-card';
import { Product } from 'lib/shopify/types';
import Link from 'next/link';

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.handle} className="animate-fadeIn">
          <Link className="relative h-full w-full" href={`/product/${product.handle}`}>
            <ProductCard
              productName={product.title}
              imageUrl={product.featuredImage?.url}
              price={product.priceRange.maxVariantPrice.amount}
              currencyCode={product.priceRange.maxVariantPrice.currencyCode}
            />
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
