import { ProductsService } from '@/lib/services/products';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export async function SummaryCards() {
  const summary = await ProductsService.getSummary();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Total Products</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">{summary.totalProducts}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Average Price</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">${summary.averagePrice}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Total Stock</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">{summary.totalStock}</p>
        </CardContent>
      </Card>

      {summary.topRatedProduct && (
        <Card>
          <CardHeader>
            <CardTitle>Top Rated Product</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-lg">{summary.topRatedProduct.title}</p>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Rating: {summary.topRatedProduct.rating}</Badge>
                <span className="text-sm text-muted-foreground">${summary.topRatedProduct.price}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {summary.mostExpensiveProduct && (
        <Card>
          <CardHeader>
            <CardTitle>Most Expensive</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-lg">{summary.mostExpensiveProduct.title}</p>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Price: ${summary.mostExpensiveProduct.price}</Badge>
                <span className="text-sm text-muted-foreground">Stock: {summary.mostExpensiveProduct.stock}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="md:col-span-2 lg:col-span-3">
        <CardHeader>
          <CardTitle>Categories ({summary.categories.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {summary.categories.map((category) => (
              <Badge key={category} variant="outline">
                {category}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

