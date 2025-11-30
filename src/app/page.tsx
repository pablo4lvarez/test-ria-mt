import { SummaryCards } from '@/components/summary/SummaryCards';
import { ProductList } from '@/components/products/ProductList';
import { SearchInput } from '@/components/products/SearchInput';
import { ProductListSkeleton } from '@/components/products/ProductListSkeleton';
import { SummaryCardsSkeleton } from '@/components/summary/SummaryCardsSkeleton';
import { Suspense } from 'react';

interface HomeProps {
  searchParams: Promise<{
    search?: string;
  }>;
}

export default async function Home(props: HomeProps) {
  const searchParams = await props.searchParams;
  const search = searchParams.search;

  return (
    <main className='container mx-auto p-8 min-h-screen bg-background text-foreground'>
      <h1 className='text-4xl font-bold text-center mb-12'>Products Dashboard</h1>

      <section className='mb-16'>
        <h2 className='text-2xl font-semibold mb-6'>Summary</h2>
        <Suspense fallback={<SummaryCardsSkeleton />}>
          <SummaryCards />
        </Suspense>
      </section>

      <section>
        <h2 className='text-2xl font-semibold mb-6'>All Products</h2>
        <div className='flex flex-col items-center'>
          <Suspense
            fallback={
              <div className='w-full max-w-sm mb-8 h-10 bg-gray-100 animate-pulse rounded-md' />
            }
          >
            <SearchInput />
          </Suspense>

          <Suspense key={search} fallback={<ProductListSkeleton />}>
            <ProductList search={search} />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
