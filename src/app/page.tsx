import { SummaryCards } from '@/components/summary/SummaryCards';

export default function Home() {
  return (
    <main className='container mx-auto p-8 min-h-screen bg-background text-foreground'>
      <h1 className='text-4xl font-bold text-center mb-12'>Products Dashboard</h1>
      <SummaryCards />
    </main>
  );
}
