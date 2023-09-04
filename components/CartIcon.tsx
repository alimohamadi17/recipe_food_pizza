import Image from "next/image";
import Link from "next/link";

const CartIcon = () => {
  return (
    <Link href={"/cart"} className="flex items-center gap-2 shadow-lg p-1">
      <div className=" relative w-8 h-8">
        <Image src={"/cart.png"} alt="cartIcon" fill />
      </div>
      <span>Cart(3)</span>
    </Link>
  );
};

export default CartIcon;
