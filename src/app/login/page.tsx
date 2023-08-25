import { NavBar } from '@/_shared/components/NavBar';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <NavBar isLogin={false} />
      <main className='flex flex-col w-screen h-full relative'>
        <Image
          src='/knocking_bg.png'
          alt='knocking background'
          width={1920}
          height={1080}
          className='w-full h-full object-cover'
        />
        <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex flex-col justify-center items-center'>
          <div className='flex flex-col justify-center items-center bg-white px-20 py-12 rounded-md'>
            <span className='text-text-light-primary text-xl'>
              Knocking과 함께 더 쉬워진 이력서 쓰러가기
            </span>
            <button
              type='button'
              className='bg-primary text-white w-40 h-12 mt-10 rounded-md hover:bg-secondary transition-colors'
            >
              {/* TODO: Button */}
              <span>로그인</span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
