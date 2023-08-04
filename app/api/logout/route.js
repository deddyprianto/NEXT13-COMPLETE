import { COOKIE_NAME } from '@/constant';
import { NextResponse } from 'next/server';
export async function GET() {
  try {
    const response = NextResponse.json({
      message: 'Logout successful',
      success: true,
    });
    response.cookies.set(COOKIE_NAME, '', {
      httpOnly: true,
      expires: new Date(0),
    });
    return response;
  } catch (error) {
    return NextResponse.json({
      error: error.message,
    });
  }
}
