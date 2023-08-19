import { ReactNode } from 'react';

import ModalPortal from './ModalPortal';
import useClickOutside from '@/_shared/utils/hooks/useClickOutside';

interface Props {
  children: ReactNode;
  onClickOutside: () => void;
}

export const ModalWrapper = ({ children, onClickOutside }: Props) => {
  const ref = useClickOutside(onClickOutside);

  return (
    <ModalPortal>
      <div className='fixed top-0 left-0 bg-black dark:bg-white bg-opacity-10 w-screen h-screen flex items-center justify-center backdrop-blur-sm'>
        <div
          ref={ref}
          className='bg-bg-light dark:bg-bg-dark rounded-sm overflow-hidden'
        >
          {children}
        </div>
      </div>
    </ModalPortal>
  );
};
