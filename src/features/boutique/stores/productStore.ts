import { defineStore } from 'pinia';
import { ProductInterface, FiltersInterface } from '../../../shared/interfaces';
import { DEFAULT_FILTERS } from '../data/filters';

interface ProductState {
  products: ProductInterface[];
  filters: FiltersInterface;
  page: number;
  isLoading: boolean;
  moreResults: boolean;
}

export const useProducts = defineStore('products', {
  state: (): ProductState => ({
    products: [],
    filters: { ...DEFAULT_FILTERS },
    page: 1,
    isLoading: true,
    moreResults: true,
  }),
});
