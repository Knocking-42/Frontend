import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends PropsWithChildren {
  className?: string;
}

export const DrawerHeader = ({ className, children }: Props) => {
  return (
    <header className={twMerge('px-4 py-2 text-2xl', className)}>
      {children}
    </header>
  );
};
