import { NextResponse } from 'next/server';

export async function GET(request) {
  // const token = request.headers.authorization;
  console.log('malam', request);
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return NextResponse.json({ data });
}
