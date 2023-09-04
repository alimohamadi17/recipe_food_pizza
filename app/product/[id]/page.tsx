import Price from "@/components/Price";
import { singleProduct } from "@/data/data";
import Image from "next/image";
import React from "react";

const ProductPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:items-center">
      {/* IMAGE CONTAINER */}
      {singleProduct.img && (
        <div className=" relative w-full h-1/2">
          <Image
            src={singleProduct.img}
            alt="Product Item"
            fill
            className="object-contain"
          />
        </div>
      )}
      <div className=" h-1/2 flex flex-col gap-4 mb-4 md:justify-center md:pl-3 md:gap-6 lg:gap-8">
        <h1 className="font-semibold text-3xl text-orange-500 border-b-2  uppercase">
          {singleProduct.title}
        </h1>
        <p>{singleProduct.desc}</p>
        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
      </div>
    </div>
  );
};

export default ProductPage;
