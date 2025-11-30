import { ProductsService } from '@/lib/services/products';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
          <CardTitle className='text-orange-950'>Total Stock</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-4xl font-bold text-orange-600'>{summary.totalStock}</p>
        </CardContent>
      </Card>

      {summary.topRatedProduct && (
        <Card className='border-orange-200 bg-orange-50/50'>
          <CardHeader>
            <CardTitle className='text-orange-950'>Top Rated Product</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col gap-2'>
              <p className='font-semibold text-lg text-orange-900'>
                {summary.topRatedProduct.title}
              </p>
              <div className='flex items-center gap-2'>
                <Badge className='bg-orange-100 text-orange-800 hover:bg-orange-200'>
                  Rating: {summary.topRatedProduct.rating}
                </Badge>
                <span className='text-sm text-orange-700'>${summary.topRatedProduct.price}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {summary.mostExpensiveProduct && (
        <Card className='border-orange-200 bg-orange-50/50'>
          <CardHeader>
            <CardTitle className='text-orange-950'>Most Expensive</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col gap-2'>
              <p className='font-semibold text-lg text-orange-900'>
                {summary.mostExpensiveProduct.title}
              </p>
              <div className='flex items-center gap-2'>
                <Badge className='bg-orange-100 text-orange-800 hover:bg-orange-200'>
                  Price: ${summary.mostExpensiveProduct.price}
                </Badge>
                <span className='text-sm text-orange-700'>
                  Current stock: {summary.mostExpensiveProduct.stock}
                </span>
              </div>
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
          <div className='flex flex-wrap gap-2'>
            {summary.categories.map((category) => (
              <Badge
                key={category}
                variant='outline'
                className='border-orange-200 text-orange-700 hover:bg-orange-100'
              >
                {category}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
