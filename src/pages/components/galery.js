import Image from "next/image";

const Galery = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 pt-5 pb-20 mx-auto flex flex-wrap">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
            Galeria de Fotos <br />
            <span class="inline-block h-1 w-48 rounded bg-indigo-500"></span>
          </h1>
          {/* <p class="lg:w-2/3 mx-auto -mt-10 leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom.
          </p> */}
        </div>
        <div class="flex flex-wrap -mt-24">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2">
              <Image
                alt="Medidor"
                width={500}
                height={300}
                src="/medidor.jpg"
                objectFit="cover"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <Image
                alt="Vision"
                width={500}
                height={300}
                src="/vision.jpg"
                objectFit="cover"
              />
            </div>
            <div class="md:p-2 p-1 w-full">
              <Image
                alt="Test"
                width={600}
                height={360}
                src="/test.jpg"
                objectFit="cover"
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <Image
                alt="Diplomas"
                width={600}
                height={360}
                src="/diplomas.jpg"
                objectFit="cover"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <Image
                alt="Daltonismo"
                width={500}
                height={300}
                src="/daltonismo.jpg"
                objectFit="cover"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <Image
                alt="Camara"
                width={500}
                height={300}
                src="/camara.jpg"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galery;
