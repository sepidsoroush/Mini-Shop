import HomePage from "./Home";
import CartProvider from "@/context/CartProvider";

export default function Home() {
  return (
    <CartProvider>
      <HomePage />
    </CartProvider>
  );
}
