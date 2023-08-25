import { PropsWithChildren } from 'react';
import Image from 'next/image';

export const LandingLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className='flex flex-col w-screen h-full relative'>
      <Image
        src='/knocking_bg.png'
        alt='knocking background'
        priority
        width={1920}
        height={1080}
        className='w-full h-full object-cover'
      />
      <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center bg-white px-20 py-12 rounded-md'>
          {children}
        </div>
      </div>
    </main>
  );
};
