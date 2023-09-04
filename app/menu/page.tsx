import { menu } from "@/data/data";
import Link from "next/link";

const MenuPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-full gap-y-2 md:h-1/3 lg:h-1/4  flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-1/3 bg-cover p-8 md:h-[550px]"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-1/2`}>
            <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
            <p className="text-sm my-8">{category.desc}</p>
            <button
              className={`hidden md:block bg-${
                category.color === "white" ? "red-500" : "black"
              } text-white py-2 px-4 rounded-md`}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
