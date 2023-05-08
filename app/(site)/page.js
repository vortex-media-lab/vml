import Image from 'next/image';

export default function Home() {
  return (
    <main className='container  '>
      <div className='relative  flex place-items-center justify-center'>
        <Image
          className='relative'
          src='/logo.png'
          alt='Next.js Logo'
          width={253}
          height={112}
          priority
        />
      </div>
    </main>
  );
}
