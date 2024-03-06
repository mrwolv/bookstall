import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <section className="mt-10 container">
      <div className="flex flex-col items-center gap-2 ">
        <h1 className="mt-4 capitalize text-[#333369] text-[1.8rem] md:text-[2.1rem] font-bold">
          Checkout our gallery
        </h1>
        <p className="text-[1rem] text-[#707070]">
          Checkout the highlight of this galley or our past events
        </p>
      </div>

      <div className="grid  md:grid-cols-3 gap-3 mt-5 ">
        <div className="grid gap-5 ">
          <Image
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
            alt="clothe image"
            height={500}
            width={500}
            className="h-auto w-full object-contain rounded-md shadow-sm"
          />

          <Image
            src="/headerImage.jpg"
            alt="clothe image"
            height={500}
            width={500}
            className="h-auto w-full object-contain rounded-md shadow-sm"
          />

          <Image
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt="clothe image"
            height={500}
            width={500}
            className="h-auto w-full object-contain rounded-md shadow-sm"
          />
        </div>
        <div className="grid gap-5 ">
          <Image
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
            alt="clothe image"
            height={500}
            width={500}
            className="h-auto w-full object-contain rounded-md shadow-sm"
          />

          <Image
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt="clothe image"
            height={500}
            width={500}
            className="h-auto w-full object-contain rounded-md shadow-sm"
          />

          <Image
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
            alt="clothe image"
            height={500}
            width={500}
            className="h-auto w-full object-contain rounded-md shadow-sm"
          />
        </div>
        <div className="grid gap-5 ">
          <Image
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
            alt="clothe image"
            height={500}
            width={500}
            className="h-auto w-full object-contain rounded-md shadow-sm"
          />

          <Image
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
            alt="clothe image"
            height={500}
            width={500}
            className="h-auto w-full object-contain rounded-md shadow-sm"
          />

          <Image
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
            alt="clothe image"
            height={500}
            width={500}
            className="h-auto w-full object-contain rounded-md shadow-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;

// export async function getStaticProps(){
// const reponse = await fetch("")
// }
