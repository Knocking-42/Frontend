'use client';

import { cva } from 'class-variance-authority';
import { useEffect, useState } from 'react';

const DrawerInnerVariants = cva('bg-bg-light', {
  variants: {
    placement: {
      top: 'top-0 animation-slide-down',
      right: 'right-0',
      bottom: 'bottom-0',
      left: 'left-0',
    },
    size: {
      sm: 'w-64',
      md: 'w-96',
    },
  },
});

interface Props {
  placement: 'top' | 'right' | 'bottom' | 'left';
  size: 'sm' | 'md';
  isOpen: boolean;
}

export const Drawer = ({ placement, size, isOpen }: Props) => {
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setElement(document.getElementById('drawer-root'));
  }, []);

  if (!element || !isOpen) return <></>;

  return (
    <div className='fixed top-0 left-0 w-full h-full overflow-hidden bg-black bg-opacity-10'>
      {isOpen && (
        <div className={DrawerInnerVariants({ placement, size })}>하이</div>
      )}
    </div>
  );
};
