'use client';

import { ToastList } from '@/_shared/components/Toast/ToastList';
import { ToastData } from '@/_shared/types/toast';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastData[]>([]);
  const [autoClose, setAutoClose] = useState(true);
  const [autoCloseDuration, setAutoCloseDuration] = useState(5);

  function handleClickButton() {
    setToasts((prev) => [...prev, { text: 'test', type: 'common' }]);
  }

  function handleRemoveToast(index: number) {
    setToasts((prev) => prev.filter((_, i) => i !== index));
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
