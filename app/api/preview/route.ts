import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  if (!slug) {
    return NextResponse.json({ message: 'Slug is required' }, { status: 400 });
  }

  const response = NextResponse.redirect(new URL(`/blog/post/${slug}`, request.url));
  response.cookies.set('__prerender_bypass', 'true');
  
  return response;
} 