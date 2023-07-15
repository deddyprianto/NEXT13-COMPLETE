import Popup from '@/components/Login/Popup';

export default async function Login() {
  const res = await fetch(
    'https://api-newmujicafe.proseller-demo.com/crm/api/customer/login/check-account',
    {
      next: {
        tags: ['check-account'],
      },
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await res.json();
  console.log(data);
  return (
    <div className='h-1/2'>
      <Popup />
    </div>
  );
}
