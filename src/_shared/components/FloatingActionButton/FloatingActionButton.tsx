import { PropsWithChildren } from 'react';
import { cva } from 'class-variance-authority';

interface Props extends PropsWithChildren {
  onClick?: () => void;
  size: 'sm' | 'md' | 'lg';
}

const FABVariants = cva(
  'bg-primary hover:bg-secondary select-none active:scale-95  transition-all text-white fixed bottom-10 right-10 rounded-full shadow-lg',
  {
    variants: {
      size: {
        sm: 'w-14 h-14',
        md: 'w-16 h-16',
        lg: 'w-20 h-20',
      },
    },
  },
);

export const FloatingActionButton = ({ onClick, size, children }: Props) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={FABVariants({ size })}
    >
      {children}
    </button>
  );
};
