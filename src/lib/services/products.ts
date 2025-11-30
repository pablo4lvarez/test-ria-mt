import { fetchAllProducts, Product } from '../dummyjson/client';

export interface ProductFilters {
  search?: string;
  category?: string;
}

export interface ProductsSummary {
  totalProducts: number;
  averagePrice: number;
  averageRating: number;
  totalStock: number;
  categories: string[];
  topRatedProducts: Product[];
}

export class ProductsService {
  static async getProducts(filters: ProductFilters = {}): Promise<Product[]> {
    let products = await fetchAllProducts();

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      products = products.filter(
        (p) =>
          p.title.toLowerCase().includes(searchLower) ||
          p.description.toLowerCase().includes(searchLower) ||
          p.category.toLowerCase().includes(searchLower)
      );
    }

    if (filters.category) {
      products = products.filter((p) => p.category === filters.category);
    }

    return products;
  }

  static async getSummary(): Promise<ProductsSummary> {
    const products = await fetchAllProducts();

    if (products.length === 0) {
      return {
        totalProducts: 0,
        averagePrice: 0,
        averageRating: 0,
        totalStock: 0,
        categories: [],
        topRatedProducts: [],
      };
    }

    const totalProducts = products.length;
    const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
    const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
    const averagePrice = parseFloat((totalPrice / totalProducts).toFixed(2));

    const totalRating = products.reduce((sum, p) => sum + p.rating, 0);
    const averageRating = parseFloat((totalRating / totalProducts).toFixed(2));

    const categories = Array.from(new Set(products.map((p) => p.category))).sort();

    const topRatedProducts = [...products].sort((a, b) => b.rating - a.rating).slice(0, 3);

    return {
      totalProducts,
      averagePrice,
      averageRating,
      totalStock,
      categories,
      topRatedProducts,
    };
  }
}
