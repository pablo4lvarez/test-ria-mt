import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function ProductListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
      {Array.from({ length: 8 }).map((_, i) => (
        <Card key={i} className="flex flex-col h-full overflow-hidden border-orange-100">
          <div className="h-48 w-full bg-gray-100 p-4">
            <Skeleton className="h-full w-full" />
          </div>
          <CardHeader className="p-4 pb-2">
            <div className="flex justify-between items-start gap-2">
              <Skeleton className="h-5 w-20 rounded-full" />
              <Skeleton className="h-4 w-12" />
            </div>
            <Skeleton className="h-6 w-3/4 mt-2" />
          </CardHeader>
          <CardContent className="p-4 pt-0 flex-grow">
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-2/3" />
          </CardContent>
          <CardFooter className="p-4 pt-0 flex justify-between items-center mt-auto">
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-4 w-16" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

