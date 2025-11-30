import { ProductsService } from '@/lib/services/products';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

import Link from 'next/link';

interface ProductListProps {
  search?: string;
}

export async function ProductList({ search }: ProductListProps) {
  const products = await ProductsService.getProducts({ search });

  if (products.length === 0) {
    return <div className='text-center py-10 text-muted-foreground'>No products found.</div>;
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
      {products.map((product) => (
        <Link key={product.id} href={`/product/${product.id}`} className='block h-full'>
          <Card className='flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow border-orange-100'>
            <div className='relative h-48 w-full bg-gray-100'>
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className='object-contain p-4'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </div>
            <CardHeader className='p-4 pb-2'>
              <div className='flex justify-between items-start gap-2'>
                <Badge variant='outline' className='mb-2 text-xs border-orange-200 text-orange-700'>
                  {product.category}
                </Badge>
                <div className='flex items-center text-sm text-orange-600 font-medium'>
                  ★ {product.rating}
                </div>
              </div>
              <CardTitle className='text-lg line-clamp-1 text-gray-900' title={product.title}>
                {product.title}
              </CardTitle>
            </CardHeader>
            <CardContent className='p-4 pt-0 flex-grow'>
              <p className='text-sm text-gray-500 line-clamp-2 mb-2'>{product.description}</p>
            </CardContent>
            <CardFooter className='p-4 pt-0 flex justify-between items-center mt-auto'>
              <span className='text-xl font-bold text-orange-600'>${product.price}</span>
              <span className='text-xs text-gray-400'>Stock: {product.stock}</span>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}

