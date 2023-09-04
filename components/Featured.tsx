import { featuredProducts } from "@/data/data";
import Image from "next/image";

const Featured = () => {
  return (
    <div className=" w-full overflow-x-scroll text-red-500">
      <div className="w-max flex ">
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className=" flex flex-col
             h-[60vh] w-screen items-center
              justify-around p-4
              hover:bg-gray-50 transition-all
               duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh] shadow-md
              "
          >
            <div className=" relative flex-1 w-full">
              {item.img && (
                <Image
                  src={item.img}
                  alt="slider"
                  fill
                  className=" object-contain hover:rotate-[60deg] transition-all duration-500"
                />
              )}
            </div>
            <div className="flex flex-1 flex-col gap-y-2  pt-2 items-center justify-center">
              <h1 className=" uppercase font-bold text-xl text-orange-600 shadow-sm p-2">
                {item.title}
              </h1>
              <p>{item.desc}</p>
              <span className="font-semibold">${item.price}</span>
              <button
                className="bg-red-500
             text-white font-semibold p-2 
             rounded-md cursor-pointer hover:scale-110 transition-all "
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
