'use client';

import ReactDOM from 'react-dom';

interface Props {
  text: string;
}

export const ToastWrapper = ({ text }: Props) => {
  const element = document.getElementById('toast-root');
  if (!element) return null;
  return ReactDOM.createPortal(
    <div className='fixed top-0 right-0  w-fit h-fit'>
      <ul>
        <li>{text}</li>
      </ul>
    </div>,
    element,
  );
};
