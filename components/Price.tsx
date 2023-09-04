"use client";

import { PriceProps } from "@/types/type";
import React, { useEffect, useState } from "react";

const Price = ({ id, options, price }: PriceProps) => {
  const [total, setTotal] = useState(price);
  const [selected, setSelected] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // for change price with change quantity
  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  return (
    <div className="flex flex-col gap-4 ">
      <span className="font-semibold text-2xl">${total.toFixed(2)}</span>
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="p-2 ring-1 ring-red-500 rounded-md"
            style={{
              background: selected === index ? "rgb(250 50 50)" : "white",
              color: selected === index ? "white" : "red",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      <div className="flex justify-between items-center ring-1 ring-red-400">
        <div className="flex justify-between w-full p-2 ">
          <span>Quantity</span>
          <div className=" flex items-center gap-4">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        <button className="bg-red-500   p-2 text-white font font-semibold">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Price;
