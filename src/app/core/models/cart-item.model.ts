import { Product } from './product.model';

export type CartItem = Product & { amount: number };
