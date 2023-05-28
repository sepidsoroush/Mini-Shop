import { createContext } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  deleteItem: (id) => {},
  clearCart: () => {},
});
export default CartContext;
export const AppContext = createContext();
