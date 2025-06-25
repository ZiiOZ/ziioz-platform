import { NextResponse } from 'next/server';

const sampleVideos = [
  {
    id: 'v1',
    url: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
  },
  {
    id: 'v2',
    url: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
  },
];

export async function GET() {
  return NextResponse.json(sampleVideos);
}
