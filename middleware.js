import { NextResponse } from 'next/server';

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/')) {
    return NextResponse.rewrite(new URL('/main', request.url));
  }
}

export const config = {
  matcher: '/',
};
