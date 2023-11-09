import { NextResponse } from 'next/server';
import { serialize } from 'cookie';
import { ID_OUTLET } from '@/constant';
const MAX_AGE = 60 * 60 * 24 * 30;

export async function POST(request) {
  const body = await request.json();
  const { idOutlet } = body;
  if (!idOutlet) {
    return NextResponse.json(
      {
        message: 'unauthorized',
      },
      {
        status: 401,
      }
    );
  }
  const seralized = serialize(ID_OUTLET, idOutlet, {
    httpOnly: false,
    sameSite: 'strict',
    maxAge: MAX_AGE,
    path: '/',
  });
  const responseMessage = {
    message: 'Authenticated!',
  };
  return new Response(JSON.stringify(responseMessage), {
    status: 200,
    headers: { 'Set-Cookie': seralized },
  });
}
