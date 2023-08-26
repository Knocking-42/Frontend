import { cn } from '@/_shared/utils/hooks/cn';
import { cva } from 'class-variance-authority';

/**
 * Paper component
 *
 * elevation: 0 | 1 | 2 (default) | 3 | 4
 */
interface PaperProps extends React.PropsWithChildren {
  variant?: 'none' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  shadow?: 'md' | 'lg' | 'xl' | '2xl';
  onClick?: (event?: React.MouseEvent<HTMLDivElement>) => void;
}

const paperVariants = cva([''], {
  variants: {
    intent: {
      none: 'bg-white',
      outlined: 'border border-gray-300',
    },
    fontColor: {
      light: 'text-text-light-primary',
      dark: 'text-text-dark-primary',
    },
    size: {
      sm: ['w-24 h-24', 'text-sm', 'p-2'],
      md: ['w-32 h-32', 'text-md', 'p-4'],
      lg: ['w-48 h-48', 'text-lg', 'p-6'],
    },
  },
  defaultVariants: {
    intent: 'none',
    fontColor: 'light',
    size: 'md',
  },
});

const paperOuterVariants = cva(['border', 'border-red-300'], {
  variants: {
    shadow: {
      md: 'drop-shadow-md',
      lg: 'drop-shadow-lg',
      xl: 'drop-shadow-xl',
      '2xl': 'drop-shadow-2xl',
    },
  },
  defaultVariants: {
    shadow: 'md',
  },
});

export function Paper(props: PaperProps) {
  const {
    children,
    variant = 'none',
    size = 'md',
    shadow = 'md',
    onClick,
  } = props;
  return (
    <div className={cn(paperOuterVariants({ shadow }))}>
      <div className={cn(paperVariants({ size, intent: variant }))}>
        {children}
      </div>
    </div>
  );
}
