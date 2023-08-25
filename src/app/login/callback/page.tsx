import { LandingLayout } from '@/_shared/components/LandingLayout';
import { NavBar } from '@/_shared/components/NavBar';

export default function LoginCallback() {
  return (
    <>
      <NavBar isLogin={false} />
      <LandingLayout>
        <span>로그인 중...</span>
      </LandingLayout>
    </>
  );
}
