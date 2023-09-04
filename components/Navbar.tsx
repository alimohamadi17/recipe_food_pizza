import { route } from "@/data/data";
import Link from "next/link";
import Menu from "./Menu";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const user = false;
  return (
    <>
      <div className=" h-12 text-red-500 bg-gray-50 shadow-md border-b-2 flex items-center justify-between uppercase p-4">
        {/* logo */}
        <div className=" text-xl italic font-bold border-b-2 border-yellow-400 ">
          <Link href={"/"}>Fire pizza</Link>
        </div>
        {/* link */}
        <div className="hidden md:flex gap-4 capitalize">
          {route.map((item) => (
            <Link href={item.href} key={item.id}>
              {item.Label}
            </Link>
          ))}
        </div>
        {/* mobileMenu */}
        <div className=" md:hidden">
          <Menu />
        </div>
        <div className=" hidden md:flex gap-4  items-center capitalize font-semibold">
          {!user ? (
            <Link href={"/login"}>Login</Link>
          ) : (
            <Link href={"/order"}>Orders</Link>
          )}
          <CartIcon />
        </div>
      </div>
    </>
  );
};

export default Navbar;
