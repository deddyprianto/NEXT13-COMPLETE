import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { COOKIE_NAME } from '@/constant';

export async function GET(request) {
  const cookieStore = cookies();
  const token = cookieStore.get(COOKIE_NAME);
  const path = request.nextUrl.searchParams.get('path');

  if (!path) {
    return NextResponse.json(
      { message: 'Missing path param' },
      { status: 400 }
    );
  }
  const data = await fetch(
    `https://api-ximenjie.proseller-demo.com/ordering/api/cart/getcart`,
    {
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.value}`,
      },
    }
  );
  revalidatePath(path);

  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
    data: data.json(),
  });
}
