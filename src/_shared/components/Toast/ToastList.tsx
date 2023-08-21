'use client';

import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import { Toast } from './Toast';
import { ToastData } from './toast.d';

interface Props {
  toastList: ToastData[];
}

export const ToastList = ({ toastList }: Props) => {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const ref = useRef(null);

  useEffect(() => {
    setElement(document.getElementById('toast-root'));
  }, []);

  if (!element) return <></>;

  return ReactDOM.createPortal(
    <ul
      className='fixed top-0 right-0 flex flex-col-reverse w-fit h-fit max-h-full'
      ref={ref}
    >
      {toastList.map(({ id, type, text }) => (
        <Toast
          key={`toast-${id}`}
          type={type}
          text={text}
        />
      ))}
    </ul>,
    element,
  );
};
