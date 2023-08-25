import { LandingLayout } from '@/_shared/components/LandingLayout';
import { NavBar } from '@/_shared/components/NavBar';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <NavBar isLogin={false} />
      <LandingLayout>
        <a href=''>
          <Image
            src='/google_signin.png'
            alt='google login button'
            width={200}
            height={120}
            className='mb-5'
          />
        </a>
        <a href=''>
          <Image
            src='/kakao_signin.png'
            alt='kakao login button'
            width={200}
            height={120}
          />
        </a>
      </LandingLayout>
    </>
  );
}
