import productData from '@/assets/productData.json';
import { ProductInterface } from '@/components/products/ProductCard';

export const getProducts = (): ProductInterface[] => {
  return productData;
};

export const getProduct = (id: number): ProductInterface | null => {
  return productData.find((product) => product.id === id) || null
};