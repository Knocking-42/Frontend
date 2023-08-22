'use client';

import { ToastList, useToast } from '@/_shared/components/Toast';

export default function Home() {
  const { toasts, handleClickButton } = useToast();

  return (
    <div>
      <button onClick={handleClickButton}>Open</button>
      <ToastList toastList={toasts} />
    </div>
  );
}