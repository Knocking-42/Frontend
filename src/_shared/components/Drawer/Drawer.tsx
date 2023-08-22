'use client';

import { cva } from 'class-variance-authority';
import { PropsWithChildren, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import useClickOutside from '@/_shared/utils/hooks/useClickOutside';
import { DrawerContext } from './DrawerContext';

const DrawerWrapperVariants = cva(
  'fixed top-0 left-0 w-full h-full overflow-hidden bg-black bg-opacity-10',
  {
    variants: {
      closing: {
        none: 'animate-fade-in',
        true: 'animate-fade-out',
      },
    },
  },
);

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
    closing: {
      none: '',
      top: 'animate-slide-out-up',
      right: 'animate-slide-out-right',
      bottom: 'animate-slide-out-down',
      left: 'animate-slide-out-left',
    },
  },
});

interface Props extends PropsWithChildren {
  placement: 'top' | 'right' | 'bottom' | 'left';
  size: 'sm' | 'md';
  isOpen: boolean;
  onClose: () => void;
}

export const Drawer = ({
  placement,
  size,
  isOpen,
  onClose,
  children,
}: Props) => {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const ref = useClickOutside(handleClose);

  useEffect(() => {
    setElement(document.getElementById('drawer-root'));
  }, []);

  function handleClose() {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 200);
  }

  if (!element || !isOpen) return <></>;

  return (
    <DrawerContext.Provider value={{ onClose: handleClose }}>
      {/* TODO: useMemo */}
      <div
        className={DrawerWrapperVariants({
          closing: isClosing ? true : 'none',
        })}
      >
        {isOpen && (
          <div
            ref={ref}
            className={twMerge(
              DrawerInnerVariants({
                placement,
                size,
                closing: isClosing ? placement : 'none',
              }),
            )}
          >
            {children}
          </div>
        )}
      </div>
    </DrawerContext.Provider>
  );
};
