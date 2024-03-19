import Link from 'next/link';
import ProductCard from './product-card';

{/**@ts-ignore */}
export default async function ProductsGrid({products}) {
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {/**@ts-ignore */}
            {products.map((product, index) => (
                <Link key={index} href={`/product/${product.handle}`}>
                    <div className='group'>
                        <ProductCard
                            key={product.id}
                            imageUrl={product.images.nodes[0]?.url}
                            imageUrlHover={product.images.nodes[1]?.url}
                            productName={product.title}
                            price={product.priceRange.maxVariantPrice.amount}
                            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
                        />
                    </div>
                </Link>
            ))}
        </div>
    );
}
