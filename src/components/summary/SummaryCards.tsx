import { ProductsService } from '@/lib/services/products';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { CategoryChart } from './CategoryChart';

export async function SummaryCards() {
  const summary = await ProductsService.getSummary();

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      <Card className='border-orange-200 bg-orange-50/50'>
        <CardHeader>
          <CardTitle className='text-orange-950'>Total Products</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-4xl font-bold text-orange-600'>{summary.totalProducts}</p>
        </CardContent>
      </Card>

      <Card className='border-orange-200 bg-orange-50/50'>
        <CardHeader>
          <CardTitle className='text-orange-950'>Average Price</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-4xl font-bold text-orange-600'>${summary.averagePrice}</p>
        </CardContent>
      </Card>

      <Card className='border-orange-200 bg-orange-50/50'>
        <CardHeader>
          <CardTitle className='text-orange-950'>Average Rating</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-4xl font-bold text-orange-600 flex items-center gap-2'>
            {summary.averageRating}
            <Star className='h-6 w-6 fill-orange-600 text-orange-600' />
          </p>
        </CardContent>
      </Card>

      <Card className='border-orange-200 bg-orange-50/50'>
        <CardHeader>
          <CardTitle className='text-orange-950'>Total Stock</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-4xl font-bold text-orange-600'>{summary.totalStock}</p>
        </CardContent>
      </Card>

      {summary.topRatedProducts.length > 0 && (
        <Card className='border-orange-200 bg-orange-50/50 md:col-span-2'>
          <CardHeader>
            <CardTitle className='text-orange-950'>Top Rated Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              {summary.topRatedProducts.map((product) => (
                <div
                  key={product.id}
                  className='flex flex-col sm:flex-row sm:items-center justify-between border-b border-orange-200 pb-2 last:border-0 last:pb-0'
                >
                  <p className='font-semibold text-lg text-orange-900 truncate sm:max-w-[200px]'>
                    {product.title}
                  </p>
                  <div className='flex items-center gap-2 mt-1 sm:mt-0'>
                    <Badge className='bg-orange-100 text-orange-800 hover:bg-orange-200 flex items-center gap-1'>
                      {product.rating} <Star className='h-3 w-3 fill-orange-800' />
                    </Badge>
                    <span className='text-sm text-orange-700'>${product.price}</span>
                    <span className='text-sm text-orange-700 ml-2'>Stock: {product.stock}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Card className='md:col-span-2 lg:col-span-3 border-orange-200 bg-orange-50/50'>
        <CardHeader>
          <CardTitle className='text-orange-950'>
            Categories ({summary.categories.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CategoryChart data={summary.categories} />
        </CardContent>
      </Card>
    </div>
  );
}
