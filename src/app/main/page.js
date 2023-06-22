import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
// import { store } from '../store';
// import { headers } from 'next/headers';

// async function getData() {
//   const res = await fetch(
//     'https://my-backend-infra.mhaidarhanif.com/api/articles',
//     {
//       next: { revalidate: 1 },
//       headers: {
//         Authentication: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjbGl6b3gwczQwMDA0bXYwaHA2YjdtdHk2IiwiaWF0IjoxNjg3MTg1NTQyLCJleHAiOjE2ODcxODU4NDJ9.iaG6z5W_i_4RzpBam_SxkQk6gAByoAxRJFWHZjwS1nQ`,
//         'Content-Type': 'application/json',
//       },
//     }
//   );
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
//   // Recommendation: handle errors
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch d ata');
//   }

//   return res.json();
// }
// async function getUser() {
//   const headersInstance = headers()
//   const authorization = headersInstance.get('authorization')
//   // Forward the authorization header
//   const res = await fetch('https://my-backend-infra.mhaidarhanif.com/api/articles', {
//     headers: { authorization },
//   })
//   return res.json()
// }

export default async function Page(context) {
  return (
    <div className='h-screen w-screen grid grid-cols-15 gap-x-2 overflow-x-auto'>
      <Sidebar />
      <Main />
    </div>
  );
}
