import Login from './components/Login';

async function getData() {
  const res = await fetch('http://worldtimeapi.org/api/timezone/Asia/Jakarta', {
    next: {
      revalidate: 5,
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch d ata');
  }

  return res.json();
}
export default async function Page(context) {
  return <Login />;
}