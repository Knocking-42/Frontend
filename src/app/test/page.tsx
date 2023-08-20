'use client';

import { useState } from 'react';

import { ToastList } from '@/_shared/components/Toast/ToastList';
import { ToastData } from '@/_shared/types/toast';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastData[]>([]);
  const [toastID, setToastID] = useState<number>(0);

  function handleClickButton() {
    const id = toastID;
    setToasts((prev) => [
      ...prev,
      { id: toastID, text: `test-${toastID} `, type: 'common' },
    ]);
    setToastID((prev) => (prev === 100 ? 0 : prev + 1));
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 1000);
  }

  function handleRemoveToast(id: number) {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }

  return (
    <div>
      <button onClick={handleClickButton}>Open</button>
      {toasts.length > 0 && (
        <ToastList
          toastList={toasts}
          onRemoveToast={handleRemoveToast}
        />
      )}
    </div>
  );
}
