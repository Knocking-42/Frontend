import { useContext } from 'react';

import { XIcon } from '@/_shared/assets';
import { DrawerContext } from './DrawerContext';

export const DrawerCloseButton = () => {
  const { onClose } = useContext(DrawerContext);
  return (
    <button
      type='button'
      onClick={onClose}
      className='w-4 h-4'
    >
      <XIcon />
    </button>
  );
};
