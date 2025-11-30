import { NextResponse } from 'next/server';
import { ProductsService } from '@/lib/services/products';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  const search = searchParams.get('search') || undefined;
  const category = searchParams.get('category') || undefined;

  try {
    const products = await ProductsService.getProducts({
      search,
      category,
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

