import Login from './components/Login';

// async function getData() {
//   const res = await fetch(
//     'https://my-backend-infra.mhaidarhanif.com/api/articles',
//     {
//       next: { revalidate: 1 },
//       headers: {
//         Authentication:
//           'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjbGl6b3gwczQwMDA0bXYwaHA2YjdtdHk2IiwiaWF0IjoxNjg2OTk0ODc0LCJleHAiOjE2ODY5OTUxNzR9.j4h4DMltzAQrFIrjyTwqoesWUO2LGtWO_BEjXv4nv2o',
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

export default async function Page() {
  return <Login />;
}
