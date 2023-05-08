import Image from 'next/image';

export default function Home() {
  return (
    <main className='container  '>
      <div className='relative  flex place-items-center justify-center'>
        <Image
          className='relative'
          src='/images/logo.png'
          alt='Vortex Media lab Logo'
          width={253}
          height={112}
          priority
        />
      </div>
    </main>
  );
}
