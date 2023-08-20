'use client';

import ReactDOM from 'react-dom';

import { Toast } from './Toast';
import { ToastData } from '@/_shared/types/toast';
import { useEffect, useRef, useState } from 'react';

interface Props {
  toastList: ToastData[];
  onRemoveToast: (index: number) => void;
}

export const ToastList = ({ toastList, onRemoveToast }: Props) => {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const ref = useRef(null);

  useEffect(() => {
    setElement(document.getElementById('toast-root'));
  }, []);

  if (!element) return <></>;

  return ReactDOM.createPortal(
    <ul
      className='fixed top-0 right-0  w-fit h-fit max-h-full'
      ref={ref}
    >
      {toastList.map((toast) => (
        <Toast
          key={`toast-${toast.id}`}
          type={toast.type}
          text={toast.text}
        />
      ))}
    </ul>,
    element,
  );
};
