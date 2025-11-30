import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function SummaryCardsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Basic Stats Cards */}
      {[1, 2, 3].map((i) => (
        <Card key={i} className="border-orange-200 bg-orange-50/50">
          <CardHeader>
            <Skeleton className="h-6 w-32 bg-orange-200/50" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-10 w-24 bg-orange-200/50" />
          </CardContent>
        </Card>
      ))}

      {/* Detailed Cards (Top Rated & Most Expensive) */}
      {[4, 5].map((i) => (
        <Card key={i} className="border-orange-200 bg-orange-50/50">
          <CardHeader>
            <Skeleton className="h-6 w-40 bg-orange-200/50" />
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <Skeleton className="h-7 w-full bg-orange-200/50" />
              <div className="flex items-center gap-2">
                <Skeleton className="h-5 w-20 rounded-full bg-orange-200/50" />
                <Skeleton className="h-4 w-16 bg-orange-200/50" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Categories Card */}
      <Card className="md:col-span-2 lg:col-span-3 border-orange-200 bg-orange-50/50">
        <CardHeader>
          <Skeleton className="h-6 w-32 bg-orange-200/50" />
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} className="h-5 w-20 rounded-full bg-orange-200/50" />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

