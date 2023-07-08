import Card from '@/components/Card';

export default async function Page() {
  const res = await fetch(
    'https://api-chickyfun.proseller-demo.com/ordering/api/cart/getcart',
    {
      next: {
        revalidate: 10,
      },
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5OGZlMmQ3OC00Y2EyLTQzNmQtYjUyNi1jYzViOTE1MTc5MjYiLCJjb21wYW55SWQiOiJjb21wYW55OjpjMjY4ODY5OC1hY2JmLTQ1ODctOTlmZS04ZjExYzBhM2FjNGEiLCJldmVudF9pZCI6ImRhMTNiOTNhLTEyZDQtNGQ0Ni1hNjFkLWU1ZGQ2NGYyZDg0ZiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjg4NzI2NDk0LCJuYW1lIjoidGVzc3MiLCJwaG9uZV9udW1iZXIiOiIrNjUxMjMxMjMiLCJleHAiOjE2ODg4MTI4OTQsImlhdCI6MTY4ODcyNjQ5NCwic2lnbkFzIjoiY3VzdG9tZXI6Ojk4ZmUyZDc4LTRjYTItNDM2ZC1iNTI2LWNjNWI5MTUxNzkyNiIsImVtYWlsIjoidGVzdDk5QHRlc3QuY29tIiwiZG9tYWluTmFtZSI6ImFwaS1jaGlja3lmdW4ucHJvc2VsbGVyLWRlbW8uY29tIiwiY29tcGFueU5hbWUiOiJDaGlja3lGdW5EZW1vIn0._afRyHLuUjFfLUnye9f8-jYEz-HONjuKxrbrY4K6pAE',
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await res.json();
  return (
    <div className='h-full w-full overflow-y-auto p-3'>
      <Card items={data.data} />
    </div>
  );
}
