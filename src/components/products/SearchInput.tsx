'use client';

import { Input } from '@/components/ui/input';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search') || '');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (search) {
        params.set('search', search);
      } else {
        params.delete('search');
      }
      router.push(`/?${params.toString()}`, { scroll: false });
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [search, router, searchParams]);

  return (
    <div className='w-full max-w-sm mb-8'>
      <Input
        type='search'
        placeholder='Search by name or category...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='w-full border-orange-200 focus-visible:ring-orange-500'
      />
    </div>
  );
}
