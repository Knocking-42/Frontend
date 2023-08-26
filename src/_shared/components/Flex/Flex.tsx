import { cn } from '@/_shared/utils/hooks/cn';
import { cva } from 'class-variance-authority';

interface FlexProps extends React.PropsWithChildren {
  direction?: 'row' | 'column';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  align?: 'start' | 'center' | 'end' | 'stretch';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: 'none' | 'sm' | 'md' | 'lg';
}

const flexVariants = cva(['flex'], {
  variants: {
    direction: {
      row: 'flex-row',
      column: 'flex-col',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    },
    wrap: {
      nowrap: 'flex-nowrap',
      wrap: 'flex-wrap',
      'wrap-reverse': 'flex-wrap-reverse',
    },
    gap: {
      none: '',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-8',
    },
  },
  defaultVariants: {
    direction: 'row',
    justify: 'start',
    align: 'start',
    wrap: 'nowrap',
    gap: 'none',
  },
});

export default function Flex(props: FlexProps) {
  const { children, ...prop } = props;
  return <div className={cn(flexVariants({ ...prop }))}>{children}</div>;
}
