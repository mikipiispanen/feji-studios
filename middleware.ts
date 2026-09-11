import { NextResponse, type NextRequest } from 'next/server';

// Preserve the path and query string when consolidating the public domains.
// Leave preview and development origins alone.
export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  if (url.hostname === 'www.feji.fi') {
    url.protocol = 'https:';
    url.host = 'feji.fi';
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}
