import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function GET(request) {
  const secret = request.nextUrl.searchParams.get('secret');
  const tag = request.nextUrl.searchParams.get('tag');
  if (!secret) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }
  if (!tag) {
    return NextResponse.json(
      { message: 'Missing path param' },
      { status: 400 }
    );
  }

  try {
    const dataResponse = await fetch(
      `https://64a7ca17dca581464b84c889.mockapi.io/students/family`,
      {
        headers: {
          Accept: 'application/json', // Corrected header
          'Content-Type': 'application/json',
        },
      }
    );
    if (!dataResponse.ok) {
      throw new Error('Failed to fetch data');
    }

    // Parse the JSON response
    const data = await dataResponse.json();

    // Call the revalidateTag function here if needed
    revalidateTag(tag);

    // Return the object data
    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      data: data,
    });
  } catch (error) {
    // Handle errors
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
