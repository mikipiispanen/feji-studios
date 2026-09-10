import { ImageResponse } from 'next/og';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '90px',
          background: '#f7f8f0',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '48px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '72px',
              height: '72px',
              borderRadius: '20px',
              background: '#064d3b',
              color: '#f7f8f0',
              fontSize: '44px',
              fontWeight: 700,
            }}
          >
            f
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: '36px',
              fontWeight: 600,
              color: '#073d30',
              letterSpacing: '-0.01em',
            }}
          >
            feji studios
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: '68px',
            fontWeight: 700,
            color: '#073d30',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          Simple apps.
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: '68px',
            fontWeight: 700,
            color: '#073d30',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '36px',
          }}
        >
          For real life.
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: '28px',
            color: '#58695c',
          }}
        >
          Orka & Styrka — built by Miki Piispanen
        </div>
      </div>
    ),
    { ...size },
  );
}
