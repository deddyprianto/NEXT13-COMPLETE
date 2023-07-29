import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export async function GET() {
  const headersList = headers();
  const token = headersList.get('Authorization');
  return NextResponse.json({ data: 'authorization' });
}
