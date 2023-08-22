'use client';

import { useEffect, useState } from 'react';
import { cva } from 'class-variance-authority';

import { ToastType } from './toast.d';
import { TOAST_DURATION } from './constants';

interface Props {
  text: string;
  type: ToastType;
}

const ToastOuterVariants = cva('px-5 py-2 w-60', {
  variants: {
    intents: {
      common: 'bg-slate-300',
      success: 'bg-success',
      error: 'bg-danger',
      warning: 'bg-warning',
    },
    animations: {
      fadeInLeftRight: 'animate-fade-in-left-right',
      fadeOutRightLeft: 'animate-fade-out-right-left',
    },
  },
});

const ToastInnerVariants = cva('select-none', {
  variants: {
    intents: {
      common: 'text-black',
      success: 'text-white',
      error: 'text-white',
      warning: 'text-black',
    },
  },
});

export const Toast = ({ text, type }: Props) => {
  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsRemoving(true);
    }, TOAST_DURATION - 100);
  }, []);

  return (
    <li
      className={ToastOuterVariants({
        intents: type,
        animations: isRemoving ? 'fadeOutRightLeft' : 'fadeInLeftRight',
      })}
    >
      <span
        className={ToastInnerVariants({
          intents: type,
        })}
      >
        {text}
      </span>
    </li>
  );
};
