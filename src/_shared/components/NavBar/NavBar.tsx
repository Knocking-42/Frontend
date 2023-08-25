import Link from 'next/link';

interface Props {
  isLogin: boolean;
}

export const NavBar = ({ isLogin }: Props) => {
  return (
    <nav className='bg-white flex justify-between items-center px-12 py-4'>
      <Link href='/'>
        <span>Knocking</span>
      </Link>
      {isLogin ? (
        <div className='flex flex-row items-center'>
          <button type='button'>내 이력서</button>
          <button type='button'>내 계정</button>
        </div>
      ) : (
        <button
          type='button'
          className=''
        >
          <span>로그인</span>
        </button>
      )}
    </nav>
  );
};
