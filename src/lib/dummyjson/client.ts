export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
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
  // Fetching all products (limit=0 gets all in dummyjson usually, or we pick a high number)
  // DummyJSON default limit is 30. Let's get 100 to have some data.
  const res = await fetch('https://dummyjson.com/products?limit=100');
  
  if (!res.ok) {
    throw new Error('Failed to fetch products from DummyJSON');
  }

  const data: DummyJsonResponse = await res.json();
  return data.products;
};

