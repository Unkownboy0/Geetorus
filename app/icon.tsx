import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const contentType = 'image/png';
export const size = {
  width: 32,
  height: 32,
};

export default function Icon() {
  return new ImageResponse(
    <img
      src="/my-favicon.png"
      alt="Site icon"
      style={{ width: '100%', height: '100%' }}
    />,
    {
      ...size,
    }
  );
}
