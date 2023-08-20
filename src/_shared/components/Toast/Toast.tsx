import { cn } from '@/_shared/utils/hooks/cn';
import { ToastType } from '@/_shared/types/toast';

interface Props {
  text: string;
  type: ToastType;
}

export const Toast = ({ text, type }: Props) => {
  return (
    <li
      className={cn('px-5 py-2 animate-fade-in', {
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
    </li>
  );
};
