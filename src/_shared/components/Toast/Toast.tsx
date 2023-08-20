'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/_shared/utils/hooks/cn';
import { ToastType } from './toast.d';
import { TOAST_DURATION } from './constants';

interface Props {
  text: string;
  type: ToastType;
}

export const Toast = ({ text, type }: Props) => {
  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsRemoving(true);
    }, TOAST_DURATION - 100);
  }, []);

  return (
    <li
      className={cn('px-5 py-2 w-60', {
        'bg-slate-300': type == 'common', // TODO: design wip
        'bg-success': type == 'success',
        'bg-danger': type == 'error',
        'bg-warning': type == 'warning',
        'animate-fade-in-left-right': !isRemoving,
        'animate-fade-out-right-left': isRemoving,
      })}
    >
      <span
        className={cn('text-white select-none', {
          'text-black': type == 'warning' || type == 'common',
        })}
      >
        {text}
      </span>
    </li>
  );
};
