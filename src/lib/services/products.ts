import { fetchAllProducts, fetchProductById, Product } from '../dummyjson/client';

export interface ProductFilters {
  search?: string;
  category?: string;
}

export interface CategorySummary {
  name: string;
  count: number;
  averagePrice: number;
}

export interface ProductsSummary {
  totalProducts: number;
  averagePrice: number;
  averageRating: number;
  totalStock: number;
  categories: CategorySummary[];
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

  static async getProduct(id: number): Promise<Product> {
    return fetchProductById(id);
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

    const categoryMap = new Map<string, Product[]>();
    products.forEach((p) => {
      if (!categoryMap.has(p.category)) {
        categoryMap.set(p.category, []);
      }
      categoryMap.get(p.category)!.push(p);
    });

    const categories: CategorySummary[] = Array.from(categoryMap.entries())
      .map(([name, categoryProducts]) => {
        const count = categoryProducts.length;
        const totalCatPrice = categoryProducts.reduce((sum, p) => sum + p.price, 0);
        const avgPrice = parseFloat((totalCatPrice / count).toFixed(2));
        return {
          name,
          count,
          averagePrice: avgPrice,
        };
      })
      .sort((a, b) => a.name.localeCompare(b.name));

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
