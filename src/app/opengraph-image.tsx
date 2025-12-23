import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Luciano Tourn - Personal Homepage';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #3b82f6 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 120,
            height: 120,
            background: 'white',
            borderRadius: 20,
            marginBottom: 40,
            fontSize: 56,
            fontWeight: 'bold',
            color: '#2563eb',
          }}
        >
          LT
        </div>
        <div
          style={{
            fontSize: 40,
            color: 'white',
          }}
        >
          Personal Homepage
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
