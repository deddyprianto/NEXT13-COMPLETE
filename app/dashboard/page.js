import Main from '../../components/Main';

async function getData() {
  const res = await fetch(
    'https://api-chickyfun.proseller-demo.com/ordering/api/cart/getcart',
    {
      next: { revalidate: 10 },
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5OGZlMmQ3OC00Y2EyLTQzNmQtYjUyNi1jYzViOTE1MTc5MjYiLCJjb21wYW55SWQiOiJjb21wYW55OjpjMjY4ODY5OC1hY2JmLTQ1ODctOTlmZS04ZjExYzBhM2FjNGEiLCJldmVudF9pZCI6ImZmYzUzZmYxLTQyZDAtNDAzNC05NTM0LWUyNTcxOGUxZDRhYSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjg3OTQ3NDAwLCJuYW1lIjoidGVzc3MiLCJwaG9uZV9udW1iZXIiOiIrNjUxMjMxMjMiLCJleHAiOjE2ODgwMzM4MDAsImlhdCI6MTY4Nzk0NzQwMCwic2lnbkFzIjoiY3VzdG9tZXI6Ojk4ZmUyZDc4LTRjYTItNDM2ZC1iNTI2LWNjNWI5MTUxNzkyNiIsImVtYWlsIjoidGVzdDk5QHRlc3QuY29tIiwiZG9tYWluTmFtZSI6ImFwaS1jaGlja3lmdW4ucHJvc2VsbGVyLWRlbW8uY29tIiwiY29tcGFueU5hbWUiOiJDaGlja3lGdW5EZW1vIn0.T0msfD8YxKTYulAVbCB_KfKMvfbV1uL5OG4aBhjVLBo',
        'Content-Type': 'application/json',
      },
    }
  );

  return res.json();
}
export default async function Page() {
  const data = await getData();
  return <Main data={data.data} />;
}
