import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch(
    'https://my-backend-infra.mhaidarhanif.com/api/articles',
    {
      headers: {
        'Content-Type': 'application/json',
        Authentication:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjbGl6b3gwczQwMDA0bXYwaHA2YjdtdHk2IiwiaWF0IjoxNjg3NjA1MjQ1LCJleHAiOjE2ODc2MDU1NDV9.SSZEEJmaLof_wG5LAaOYog3Iw1zmv0Mv9oIPdTgzcy8',
      },
    }
  );
  const data = await res.json();
  return NextResponse.json({ data });
}
