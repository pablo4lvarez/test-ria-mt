import { ProductsService } from '@/lib/services/products';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, AlertCircle } from 'lucide-react';
import { CategoryChart } from './CategoryChart';

export async function SummaryCards() {
  const summary = await ProductsService.getSummary();

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
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

      {summary.topRatedProducts.length > 0 && (
        <Card className='border-orange-200 bg-orange-50/50 md:col-span-3'>
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
                  <p className='font-semibold text-lg text-orange-900'>{product.title}</p>
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

      {summary.unavailableProducts.length > 0 && (
        <Card className='border-red-200 bg-red-50/50 md:col-span-3'>
          <CardHeader>
            <CardTitle className='text-red-950 flex items-center gap-2'>
              <AlertCircle className='h-5 w-5 text-red-600' />
              Unavailable Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              {summary.unavailableProducts.map((product) => (
                <div
                  key={product.id}
                  className='flex flex-col sm:flex-row sm:items-center justify-between border-b border-red-200 pb-2 last:border-0 last:pb-0'
                >
                  <p className='font-semibold text-lg text-red-900'>{product.title}</p>
                  <div className='flex items-center gap-2 mt-1 sm:mt-0'>
                    <Badge variant='destructive' className='flex items-center gap-1'>
                      {product.availabilityStatus}
                    </Badge>
                    <span className='text-sm text-red-700'>${product.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Card className='md:col-span-3 border-orange-200 bg-orange-50/50'>
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
