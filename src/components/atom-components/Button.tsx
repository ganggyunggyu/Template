import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, FC } from 'react';
import { cn } from '../../utils/cn';

export const ButtonVariants = cva(`hover:text-main-color`, {
  variants: {
    variant: {},
    size: {},
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  label?: string;
  children?: React.ReactElement;
  additionalClass?: string;
}

const Button: FC<ButtonProps> = ({ variant, size, children, label, additionalClass, ...props }) => {
  return (
    <button className={cn(ButtonVariants({ variant, size }), additionalClass)} {...props}>
      {children && children}
      {label && label}
    </button>
  );
};

export default Button;
