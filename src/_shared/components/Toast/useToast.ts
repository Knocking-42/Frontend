import { useState } from 'react';

import { ToastData } from './toast.d';
import { TOAST_DURATION } from './constants';

export function useToast() {
  const [toasts, setToasts] = useState<ToastData[]>([]);
  const [toastID, setToastID] = useState(0);

  function handleClickButton() {
    const id = toastID;
    setToasts((prev) => [
      ...prev,
      { id: toastID, text: `test-${toastID} `, type: 'common' },
    ]);
    setToastID((prev) => (prev === 100 ? 0 : prev + 1));
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, TOAST_DURATION);
  }

  return { toasts, handleClickButton };
}
