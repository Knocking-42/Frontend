import { ModalWrapper } from './ModalWrapper';
import { cn } from '@/_shared/utils/cn';

interface Props {
  text: string;
  buttonPrimaryText: string;
  onClickPrimary: () => void;
  buttonSecondaryText?: string;
  onClickSecondary?: () => void;
  onClickOutside: () => void;
}

export const Modal = ({
  text,
  buttonPrimaryText,
  onClickPrimary,
  buttonSecondaryText,
  onClickSecondary,
  onClickOutside,
}: Props) => {
  return (
    <ModalWrapper onClickOutside={onClickOutside}>
      <div className='px-5 py-3 w-80 text-center'>
        <span>{text}</span>
      </div>
      <div className={cn('flex flex-row')}>
        {buttonSecondaryText && (
          <button
            onClick={onClickSecondary}
            className='flex-1 bg-secondary py-1'
          >
            {buttonSecondaryText}
          </button>
        )}
        <button
          onClick={onClickPrimary}
          className='flex-1 bg-primary py-1'
        >
          {buttonPrimaryText}
        </button>
      </div>
    </ModalWrapper>
  );
};
