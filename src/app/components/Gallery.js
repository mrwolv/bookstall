import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <section className="md:mt-10">
      <div className="flex flex-col items-center gap-2 ">
        <h1 className="mt-4 capitalize text-[#333369] text-[1.8rem] md:text-[2.1rem] font-bold">
          Checkout our gallery
        </h1>
        <p className="text-[1rem] text-[#707070]">
          Checkout the highlight of this galley or our past events
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-rows-3 gap-4 md:mt-8 md:px-10">
        <div className="grid gap-3">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg object-cover"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              alt=""
              height={300}
              width={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt=""
              height={500}
              width={400}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt=""
              height={200}
              width={400}
            />
          </div>
        </div>
        <div className="grid gap-3">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              alt=""
              height={300}
              width={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt=""
              height={500}
              width={400}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt=""
              height={200}
              width={400}
            />
          </div>
        </div>
        <div className="grid gap-3">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              alt=""
              height={300}
              width={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt=""
              height={500}
              width={400}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt=""
              height={200}
              width={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
