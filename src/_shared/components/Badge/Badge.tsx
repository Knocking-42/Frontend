import { PropsWithChildren } from 'react';
import { cva } from 'class-variance-authority';

interface Props extends PropsWithChildren {
  text: string;
  type: 'common' | 'green' | 'red';
}

const BadgeVariants = cva(
  'absolute top-0 right-0 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium',
  {
    variants: {
      type: {
        common: 'bg-gray-100 text-black',
        green: 'bg-success text-white',
        red: 'bg-danger text-white',
      },
    },
  },
);

export const Badge = ({ text, type, children }: Props) => {
  return (
    <div className='relative w-fit px-4 py-2'>
      <span className={BadgeVariants({ type })}>{text}</span>
      {children}
    </div>
  );
};
