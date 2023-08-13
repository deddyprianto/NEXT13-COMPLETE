import { NextResponse } from 'next/server';
import { COOKIE_NAME } from './constant';

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const ispublicPath = path === '/outlet';
  const token = request.cookies.get(COOKIE_NAME)?.value || '';
  if (ispublicPath && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }
  if (!ispublicPath && !token) {
    return NextResponse.redirect(new URL('/outlet', request.nextUrl));
  }
}

export const config = {
  matcher: ['/cart'],
};