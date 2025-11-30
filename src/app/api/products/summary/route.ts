import { NextResponse } from 'next/server';
import { ProductsService } from '@/lib/services/products';

export async function GET() {
  try {
    const summary = await ProductsService.getSummary();
    return NextResponse.json(summary);
  } catch (error) {
    console.error('Error fetching product summary:', error);
    return NextResponse.json(
      { error: 'Failed to fetch product summary' },
      { status: 500 }
    );
  }
}

