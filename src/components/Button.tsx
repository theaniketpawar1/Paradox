import React from 'react'
import clsx from 'clsx'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends Omit<React.ComponentPropsWithoutRef<'button'>, 'as'> {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  isLoading?: boolean
  as?: React.ElementType
  children: React.ReactNode
  [key: string]: any
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-hover focus:ring-primary',
  secondary: 'bg-transparent border border-border text-text hover:bg-surface-hover focus:ring-accent',
  ghost: 'bg-transparent text-text hover:bg-surface-hover focus:ring-accent',
  destructive: 'bg-error text-white hover:bg-red-600 focus:ring-error',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}

export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  ({ as: As = 'button', variant = 'primary', size = 'md', fullWidth = false, isLoading = false, disabled, className, children, ...rest }, ref) => {
    const Component = As as any
    return (
      <Component
        ref={ref}
        className={clsx(
          'inline-flex items-center justify-center font-semibold rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
          variantStyles[variant as ButtonVariant],
          sizeStyles[size as ButtonSize],
          fullWidth && 'w-full',
          disabled || isLoading ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer',
          className
        )}
        disabled={disabled || isLoading}
        aria-disabled={disabled || isLoading}
        {...rest}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading...
          </>
        ) : (
          children
        )}
      </Component>
    )
  }
)
Button.displayName = 'Button'
