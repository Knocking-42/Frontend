import { XIcon } from '@/_shared/assets';

interface Props {
  onClose: () => void;
}

export const DrawerCloseButton = ({ onClose }: Props) => {
  return (
    <button
      type='button'
      onClick={onClose}
    >
      <XIcon />
    </button>
  );
};
