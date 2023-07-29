import { NextResponse } from 'next/server';
import axios from 'axios';
import { serialize } from 'cookie';

const MAX_AGE = 60 * 60 * 24 * 30;
export async function POST(request) {
  const body = await request.json();
  const { codeOTP, phoneNumber } = body;
  if (!codeOTP || !phoneNumber) {
    return NextResponse.json(
      {
        message: 'unauthorized',
      },
      {
        status: 401,
      }
    );
  }
  const { data } = await axios.post(
    'https://api-ximenjie.proseller-demo.com/crm/api/customer/login',
    {
      codeOTP,
      phoneNumber,
    },
    {
      headers: {
        'Content-type': 'application/json',
      },
    }
  );
  const token = data.data.accessToken.token;
  const seralized = serialize('mytoken', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
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
