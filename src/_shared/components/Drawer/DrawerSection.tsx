import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends PropsWithChildren {
  className?: string;
}

export const DrawerSection = ({ className, children }: Props) => {
  return (
    <section className={twMerge('px-4 py-2', className)}>{children}</section>
  );
};
