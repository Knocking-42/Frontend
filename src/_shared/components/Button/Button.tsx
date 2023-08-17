interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

// TODO: Add support for different sizes, variants
export function Button(props: ButtonProps) {
  const { children, variant, size, disabled, icon, onClick } = props;
  return (
    <button
      className='flex bg-primary w-fit h-fit py-1 px-2 items-center justify-center rounded-md'
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
}
