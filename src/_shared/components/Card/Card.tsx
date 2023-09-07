import { cn } from '@/_shared/utils/cn';
import { cva } from 'class-variance-authority';

interface CardProps extends React.PropsWithChildren {
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const cardVariants = cva(
  [
    'flex flex-col',
    'items-center justify-center',
    'w-auto h-auto',
    'p-4 m-4',
    'hover:transition hover:duration-300 hover:ease-in-out',
  ],
  {
    variants: {
      intents: {
        default:
          'bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-100',
        primary: 'bg-blue-500 hover:bg-blue-600 text-white',
      },
      size: {
        sm: 'w-48 h-56',
        md: 'w-56 h-64',
        lg: 'w-64 h-72',
      },
    },
    defaultVariants: {
      intents: 'default',
    },
  },
);

function Card(props: CardProps) {
  const { children, onClick, size } = props;
  return (
    <section
      className={cardVariants({ size })}
      onClick={onClick}
    >
      {children}
    </section>
  );
}

export default Card;
