'use client';

import useClickOutside from '@/_shared/utils/hooks/useClickOutside';
import { cva } from 'class-variance-authority';
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { twMerge } from 'tailwind-merge';

const DrawerInnerVariants = cva('bg-bg-light fixed', {
  variants: {
    size: {
      sm: 'w-64 h-64',
      md: 'w-96 h-96',
    },
    placement: {
      top: 'top-0 w-full animate-slide-down',
      right: 'right-0 h-full animate-slide-left',
      bottom: 'bottom-0 w-full animate-slide-up',
      left: 'left-0 h-full animate-slide-right',
    },
  },
});

interface Props extends PropsWithChildren {
  placement: 'top' | 'right' | 'bottom' | 'left';
  size: 'sm' | 'md';
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const Drawer = ({
  placement,
  size,
  isOpen,
  setIsOpen,
  children,
}: Props) => {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const ref = useClickOutside(() => setIsOpen(false));

  useEffect(() => {
    setElement(document.getElementById('drawer-root'));
  }, []);

  if (!element || !isOpen) return <></>;

  return (
    <div className='fixed top-0 left-0 w-full h-full overflow-hidden bg-black bg-opacity-10 animate-fade-in'>
      {isOpen && (
        <div
          ref={ref}
          className={twMerge(DrawerInnerVariants({ placement, size }))}
        >
          {children}
        </div>
      )}
    </div>
  );
};
