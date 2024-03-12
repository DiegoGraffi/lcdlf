export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};


import Image from 'next/image';

export default async function HomePage() {
  return (
    <div className="min-h-screen w-[100%] items-center justify-center overflow-hidden">
    <section className="relative h-screen min-h-screen w-screen items-center justify-center">
      <div className="absolute top-0 h-[100%] w-[100%]">
        <Image
          src={"https://p4.wallpaperbetter.com/wallpaper/144/225/101/chianti-classico-vineyards-in-autumn-tuscany-italy-wallpaper-preview.jpg"}
          alt="fondo"
          fill
          className=""
        />
        <div className="absolute h-[100%] w-[100%] bg-black opacity-50"></div>
      </div>
      <div className="absolute left-1/2 top-1/2 z-10 flex w-[600px] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-[50px]">
        <h2 className="text-center text-[64px] font-extrabold uppercase text-white">
          LA CASA DE LOS FRANCESES
        </h2>
        <h3 className="text-center text-[15px] text-white">
          En nuestra exclusiva selección, cada botella es una invitación a explorar los sabores intensos y las historias únicas de los viñedos más distinguidos de Argentina. Aquí, la tradición se funde con la innovación para ofrecerte una experiencia de degustación sin igual. Ya seas un aficionado buscando ampliar tu paladar o un conocedor en la búsqueda de tu próxima joya enológica, "La Casa De Los Franceses" es tu destino. Descubre con nosotros el alma del vino argentino, curada con un toque francés.
        </h3>
        <div className="flex gap-[15px]">
          <a
            href="#"
            className="rounded-full border border-white px-[25px] py-[15px] transition-all duration-200 ease-in-out hover:bg-white hover:text-black"
          >
            Ver Vinos
          </a>
          <a
            href="#"
            className="rounded-full border border-white px-[25px] py-[15px] transition-all duration-200 ease-in-out hover:bg-white hover:text-black"
          >
            Contacto
          </a>
        </div>
      </div>
    </section>

    {/* <section className="min-h-screen items-center justify-center bg-white p-[50px]">
      <div className="container mx-auto flex flex-col gap-[50px]">
        <div className="flex w-[50%] flex-col gap-[25px]">
          <h3 className="text-[32px] font-bold text-black">
            Vinos con tradición, elaborados con pasión
          </h3>
          <p className="text-[16px] font-normal text-black">
            asdasd
          </p>
        </div>

        <div className="relative h-[600px] w-[100%]">
          <Image src="" alt="imagen" fill className="object-cover" />
        </div>
      </div>
    </section>

    <section className="min-h-screen items-center justify-center bg-white p-[50px]">
      <div className="container mx-auto flex flex-col gap-[50px]">
        <div className="flex w-[50%] flex-col gap-[25px]">
          <h3 className="text-[32px] font-bold text-black">Conoce nuestros productos</h3>
          <p className="text-[16px] font-normal text-black">
            Aliquam lectus urna, pharetra a enim et, fringilla aliquet massa. Donec congue ligula
            nunc, nec feugiat erat laoreet ut. Nullam laoreet, odio quis sodales pharetra, dolor
            risus pulvinar augue, sed auctor nisi odio id.
          </p>
        </div>

        <div className="flex gap-[20px]">
          <div className="flex basis-1/3 flex-col border">
            <p className="text-black">sdjkfhskdjfhsk</p>
          </div>
          <div className="grid basis-3/4 gap-3 md:grid-cols-2 lg:grid-cols-3 ">
              <h4 className="text-black">
              asdasd
              </h4>
          </div>
        </div>
      </div>
    </section> */}
  </div>
);
}