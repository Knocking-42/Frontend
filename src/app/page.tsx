import { NavBar } from '@/_shared/components/NavBar';
import { LandingLayout } from '@/_shared/components/LandingLayout';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <NavBar isLogin={false} />
      <LandingLayout>
        <span className='text-text-light-primary text-xl'>
          Knocking과 함께 더 쉬워진 이력서 쓰러가기
        </span>
        <Link href='/login'>
          <button
            type='button'
            className='bg-primary text-white w-40 h-12 mt-10 rounded-md hover:bg-secondary transition-colors'
          >
            {/* TODO: Button */}
            <span>로그인</span>
          </button>
        </Link>
      </LandingLayout>
    </>
  );
}
