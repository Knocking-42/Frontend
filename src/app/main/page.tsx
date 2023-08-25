import { LandingLayout } from '@/_shared/components/LandingLayout';
import { NavBar } from '@/_shared/components/NavBar';

export default function Main() {
  return (
    <>
      <NavBar isLogin={false} />
      <LandingLayout>
        <span>로그인 완료됐다구!!!</span>
      </LandingLayout>
    </>
  );
}
