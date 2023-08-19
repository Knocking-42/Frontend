import { cn } from '@/_shared/utils/hooks/cn';

interface Props {
  text: string;
  type: 'common' | 'success' | 'error' | 'warning';
  onClose: () => void;
}

export const Toast = ({ text, type, onClose }: Props) => {
  return (
    <li
      className={cn('px-5 py-2', {
        'bg-slate-300': type == 'common', // TODO: design wip
        'bg-success': type == 'success',
        'bg-danger': type == 'error',
        'bg-warning': type == 'warning',
      })}
    >
      <span
        className={cn('text-white', {
          'text-black': type == 'warning' || type == 'common',
        })}
      >
        {text}
      </span>
      <button
        type='button'
        onClick={onClose}
      >
        {/* TODO: X Icon */}X
      </button>
    </li>
  );
};
