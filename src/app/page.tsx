import Link from 'next/link';
import { cookies } from 'next/headers';

import { NavBar } from '@/_shared/components/NavBar';
import { LandingLayout } from '@/_shared/components/LandingLayout';
import { httpClient } from '@/_shared/services/httpClient';

export default async function Home() {
  const data = await httpClient({
    path: '/auth/test',
    method: 'GET',
    headers: {
      Cookie: cookies().toString(),
    },
  });
  console.log(data);

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
