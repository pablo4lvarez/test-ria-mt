export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface DummyJsonResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export const fetchAllProducts = async (): Promise<Product[]> => {
  const res = await fetch('https://dummyjson.com/products?limit=0');

  if (!res.ok) {
    throw new Error('Failed to fetch products from DummyJSON');
  }

  const data: DummyJsonResponse = await res.json();
  return data.products;
};

export const fetchProductById = async (id: number): Promise<Product> => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    if (res.status === 404) {
      throw new Error('Product not found');
    }
    throw new Error('Failed to fetch product from DummyJSON');
  }

  return res.json();
};
