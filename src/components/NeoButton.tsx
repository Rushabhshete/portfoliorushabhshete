import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'muted' | 'outline';
}

const NeoButton = forwardRef<HTMLButtonElement, NeoButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center h-12 px-6 sm:h-14 sm:px-8 py-2 sm:py-3 w-full sm:w-fit md:w-auto",
          "border-4 border-black dark:border-white",
          "font-bold text-xs sm:text-sm uppercase tracking-wider text-black",
          "shadow-neo-sm dark:shadow-neo-light-sm",
          "hover:shadow-neo-md dark:hover:shadow-neo-light-md",
          "active:translate-x-[4px] active:translate-y-[4px] active:shadow-none dark:active:shadow-none",
          "transition-all duration-100 ease-linear",
          {
            "bg-neo-accent": variant === 'primary',
            "bg-neo-secondary": variant === 'secondary',
            "bg-neo-muted": variant === 'muted',
            "bg-white dark:bg-black dark:text-white": variant === 'outline',
          },
          className
        )}
        {...props}
      />
    );
  }
);
NeoButton.displayName = "NeoButton";

export { NeoButton };
