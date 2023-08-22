import { useContext } from 'react';

import { XIcon } from '@/_shared/assets';
import { DrawerContext } from './DrawerContext';

export const DrawerCloseButton = () => {
  const { onClose } = useContext(DrawerContext);
  return (
    <div className='w-full flex flex-row items-center justify-end'>
      <button
        type='button'
        onClick={onClose}
        className='w-8 h-8'
      >
        <XIcon className='w-8 h-8 fill-black' />
      </button>
    </div>
  );
};
