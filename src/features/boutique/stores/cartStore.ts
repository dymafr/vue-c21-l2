import { defineStore } from 'pinia';
import { ProductCartInterface } from '../../../shared/interfaces';

interface CartState {
  cart: ProductCartInterface[];
}

export const useCart = defineStore('cart', {
  state: (): CartState => ({
    cart: [],
  }),
});
