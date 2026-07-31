import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface NeoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'white' | 'dark' | 'yellow' | 'violet' | 'red';
  liftOnHover?: boolean;
}

const NeoCard = forwardRef<HTMLDivElement, NeoCardProps>(
  ({ className, variant = 'white', liftOnHover = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "border-4 border-black dark:border-white",
          "shadow-neo-md dark:shadow-neo-light-md",
          "transition-all duration-200 ease-out",
          {
            "hover:-translate-y-2 hover:shadow-neo-lg dark:hover:shadow-neo-light-lg": liftOnHover,
            "bg-white text-black": variant === 'white',
            "bg-black text-white": variant === 'dark',
            "bg-neo-secondary text-black": variant === 'yellow',
            "bg-neo-muted text-black": variant === 'violet',
            "bg-neo-accent text-black": variant === 'red',
          },
          className
        )}
        {...props}
      />
    );
  }
);
NeoCard.displayName = "NeoCard";

export { NeoCard };
