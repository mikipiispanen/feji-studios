import Image from 'next/image';
export default function Sticker({
  className = '',
  initial = 'happy',
}: {
  className?: string;
  initial?: string;
}) {
  return (
    <span
      className={`character-sticker ${className}`}
      data-sticker
      data-mood={initial}
      data-initial={initial}
      aria-hidden="true"
    >
      {['wink', 'happy', 'wondering', 'cool'].map((face) => (
        <Image
          unoptimized
          key={face}
          className={`sticker-face sticker-${face}`}
          src={`/images/${face}.webp`}
          width={155}
          height={155}
          alt=""
        />
      ))}
    </span>
  );
}
