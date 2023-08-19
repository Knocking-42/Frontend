'use client';

import ReactDOM from 'react-dom';

import { Toast } from './Toast';
import { ToastData } from '@/_shared/types/toast';
import { useRef } from 'react';

interface Props {
  toastList: ToastData[];
  onRemoveToast: (index: number) => void;
}

export const ToastList = ({ toastList, onRemoveToast }: Props) => {
  const element = document.getElementById('toast-root');
  const ref = useRef(null);

  if (!element) return null;

  return ReactDOM.createPortal(
    <ul
      className='fixed top-0 right-0  w-fit h-fit max-h-full'
      ref={ref}
    >
      {toastList.map((toast, index) => (
        <Toast
          key={`toast-${index}`}
          type={toast.type}
          text={toast.text}
          onClose={() => onRemoveToast(index)}
        />
      ))}
    </ul>,
    element,
  );
};
