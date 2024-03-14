import { fetchGraphql, graphql } from 'lib/graphql';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function Bodega() {
  const query = graphql(`
    query RobertoPage {
      collection(handle: "roberto-bonfanti") {
        title
        description
        image {
          url
        }
        products(first: 10) {
          nodes {
            id
            title
            description
            images(first: 1) {
              nodes {
                id
                url
              }
            }
          }
        }
      }
    }
  `);

  const data = await fetchGraphql(query, {});

  const collection = data.collection;

  if (!collection) {
    notFound();
  }

  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold uppercase ">{collection.title}</h1>
      <p className="text-md mt-9 text-center opacity-70">{collection.description}</p>
      {collection.image && (
        <div className="relative  aspect-video w-80">
          <Image src={collection.image.url} alt="imagen" fill className="object-contain" />
        </div>
      )}

      <div className="my-5 grid grid-cols-2 gap-4">
        {collection.products.nodes.map((product) => {
          return (
            <div
              key={product.id}
              className="group grid w-[100%] grid-cols-2 gap-4 rounded-lg border border-white border-opacity-30 p-4 transition-all duration-200 ease-in-out hover:bg-white"
            >
              <div className="relative overflow-hidden rounded-lg bg-white">
                {product.images.nodes.map((image, index) => {
                  return (
                    <Image
                      key={index}
                      src={image.url}
                      alt="imagen"
                      fill
                      className="object-contain  p-4 transition-all duration-200 ease-in-out group-hover:scale-105"
                    />
                  );
                })}
              </div>
              <div className="transition-all duration-200 ease-in-out group-hover:text-black">
                <p className="mb-4 font-bold " key={product.id}>
                  {product.title}
                </p>
                <p className="text-sm opacity-80" key={product.id}>
                  {product.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
