// app/api/protected-route/route.ts
import { NextResponse } from 'next/server';
import { auth } from '@/lib/firebaseAdmin';

export async function GET(request: Request) {
  const token = request.headers.get('Authorization')?.split(' ')[1];

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Verify the JWT using Firebase Admin SDK
    const decodedToken = await auth.verifyIdToken(token);
    const uid = decodedToken.uid;
    
    // Continue with your protected logic
    return NextResponse.json({ message: `Welcome, user ${uid}` });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 403 });
  }
}
