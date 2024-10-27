import type { Product } from "./products";

export interface CartItem extends Product {
  cartId: string;
  quantity: number;
}
