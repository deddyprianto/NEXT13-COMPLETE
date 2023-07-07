import Card from '@/components/Card';

export default async function Page() {
  const res = await fetch(
    'https://64a7ca17dca581464b84c889.mockapi.io/students/family',
    {
      method: 'GET',
      cache: 'no-cache',
      next: {
        tags: ['family'],
      },
    }
  );
  const data = await res.json();
  return (
    <div className='h-full w-full overflow-y-auto p-3'>
      <Card items={data} />
    </div>
  );
}
