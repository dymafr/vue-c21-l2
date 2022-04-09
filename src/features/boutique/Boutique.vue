<script setup lang="ts">
import Shop from './components/Shop/Shop.vue';
import Cart from './components/Cart/Cart.vue';
import {
  computed,
  reactive,
  watchEffect,
  watch,
  provide,
  toRef,
  toRefs,
} from 'vue';
import type {
  FiltersInterface,
  ProductCartInterface,
  ProductInterface,
  FilterUpdate,
} from '../../shared/interfaces';
import { DEFAULT_FILTERS } from './data/filters';
import { fetchProducts } from '../../shared/services/product.service';
import { pageKey } from '../../shared/injectionKeys/pageKey';
import { useCart } from './stores/cartStore';
import { useProducts } from './stores/productStore';

const productStore = useProducts();
const cartStore = useCart();

// watch([() => state.filters.priceRange, () => state.filters.category], () => {
//   state.page = 1;
//   state.products = [];
// });

</script>

<template>
  <div class="d-flex flex-column">
    <Shop
      @update-filter="updateFilter"
      @add-product-to-cart="addProductToCart"
      @inc-page="state.page++"
      :products="filteredProducts"
      :filters="state.filters"
      :more-results="state.moreResults"
      class="shop"
    />
    <Cart
      v-if="!cartEmpty"
      :cart="state.cart"
      class="cart"
      @remove-product-from-cart="removeProductFromCart"
    />
  </div>
</template>

<style scoped lang="scss"></style>
