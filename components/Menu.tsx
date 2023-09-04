"use client";
import { route } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = false;
  return (
    <>
      <div className=" relative">
        {!isOpen ? (
          <Image
            src={"/open.png"}
            alt="menu"
            width={20}
            height={20}
            onClick={() => setIsOpen(true)}
            className=" cursor-pointer hover:scale-110 transition"
          />
        ) : (
          <Image
            src={"/close.png"}
            alt="menu"
            width={20}
            height={20}
            onClick={() => setIsOpen(false)}
            className=" cursor-pointer hover:scale-110 transition"
          />
        )}
        {isOpen && (
          <div
            className=" absolute flex flex-col
       bg-red-500 right-0 top-9
        h-[400px] w-[300px]
        text-white items-start
        justify-start font-semibold
        gap-8 shadow-md
        border-none p-8
         capitalize
        z-10
        rounded-md
        "
          >
            {route.map((item) => (
              <Link
                href={item.href}
                key={item.id}
                onClick={() => setIsOpen(false)}
              >
                {item.Label}
              </Link>
            ))}
            {!user ? (
              <Link href={"/login"} onClick={() => setIsOpen(false)}>
                login
              </Link>
            ) : (
              <Link href={"/order"} onClick={() => setIsOpen(false)}>
                Order
              </Link>
            )}
            <Link href={"/cart"} onClick={() => setIsOpen(false)}>
              <CartIcon />
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Menu;
