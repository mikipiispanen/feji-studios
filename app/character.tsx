import Image from 'next/image';
const faces = ['wink', 'happy', 'wondering', 'cool'];
export default function Character({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className={`living-character${compact ? ' compact' : ''}`}
      aria-hidden="true"
    >
      {faces.map((face) => (
        <Image
          unoptimized
          key={face}
          className={`face face-${face}`}
          src={`/images/${face}.webp`}
          width={120}
          height={120}
          alt=""
        />
      ))}
    </span>
  );
}
