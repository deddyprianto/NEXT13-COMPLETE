import { NextResponse } from 'next/server';
import { COOKIE_NAME } from './constant';

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const ispublicPath = path === '/login';
  const token = request.cookies.get(COOKIE_NAME)?.value || '';
  if (ispublicPath && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }
  if (!ispublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }
}

//  path yg akan di pake untuk tiap kondisi
export const config = {
  matcher: ['/', '/cta', '/login'],
};