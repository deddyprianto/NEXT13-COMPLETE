import { NextResponse } from 'next/server';
import { COOKIE_NAME, ID_OUTLET } from './constant';

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const ispublicPath = path === '/outlet';
  const token = request.cookies.get(COOKIE_NAME)?.value || '';
  const IdOutlet = request.cookies.get(ID_OUTLET)?.value || '';

  if (!ispublicPath && !token && !IdOutlet) {
    return NextResponse.redirect(new URL('/outlet', request.nextUrl));
  }
}

export const config = {
  matcher: ['/', '/outlet', '/cart'],
};
