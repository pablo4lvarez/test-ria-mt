import { ProductsService } from '@/lib/services/products';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Package, Star, DollarSign, Tag, Building2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage(props: ProductPageProps) {
  const params = await props.params;
  const id = parseInt(params.id);

  if (isNaN(id)) {
    notFound();
  }

  let product;
  try {
    product = await ProductsService.getProduct(id);
  } catch {
    notFound();
  }

  return (
    <main className="container mx-auto p-8 min-h-screen bg-background text-foreground">
      <div className="mb-8">
        <Link href="/">
          <Button variant="outline" className="gap-2 hover:text-orange-600 hover:bg-orange-50 hover:border-orange-200">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Images and Basic Info */}
        <div className="space-y-8">
          <Card className="border-orange-100">
            <CardContent className="p-6">
              <div className="aspect-square relative w-full max-w-md mx-auto mb-4 overflow-hidden rounded-lg border border-orange-100 bg-white">
                <Image
                  src={product.images[0] || product.thumbnail}
                  alt={product.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-2 mt-4">
                {product.images.slice(0, 4).map((image, index) => (
                  <div key={index} className="relative aspect-square border border-orange-100 rounded-md overflow-hidden bg-white">
                    <Image
                      src={image}
                      alt={`${product.title} view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Details and Metrics */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-gray-900">{product.title}</h1>
            <p className="text-muted-foreground text-lg mb-4">{product.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary" className="text-sm bg-orange-100 text-orange-800 hover:bg-orange-200">
                {product.category}
              </Badge>
              <Badge variant="outline" className="text-sm border-orange-200 text-orange-700">
                {product.brand}
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="border-orange-100">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-orange-800">Price</CardTitle>
                <DollarSign className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</div>
              </CardContent>
            </Card>

            <Card className="border-orange-100">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-orange-800">Stock</CardTitle>
                <Package className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{product.stock}</div>
                <p className="text-xs text-muted-foreground">Units available</p>
              </CardContent>
            </Card>

            <Card className="border-orange-100">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-orange-800">Rating</CardTitle>
                <Star className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{product.rating}</div>
                <p className="text-xs text-muted-foreground">Average customer rating</p>
              </CardContent>
            </Card>

            <Card className="border-orange-100">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-orange-800">Category</CardTitle>
                <Tag className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold capitalize text-gray-900">{product.category}</div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-orange-100">
            <CardHeader>
              <CardTitle className="text-orange-900">Product Details</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center justify-between border-b border-orange-100 pb-2">
                <span className="text-muted-foreground flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-orange-500" /> Brand
                </span>
                <span className="font-medium text-gray-900">{product.brand}</span>
              </div>
              <div className="flex items-center justify-between border-b border-orange-100 pb-2">
                <span className="text-muted-foreground flex items-center gap-2">
                  <Tag className="h-4 w-4 text-orange-500" /> SKU ID
                </span>
                <span className="font-medium text-gray-900">{product.id}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}

