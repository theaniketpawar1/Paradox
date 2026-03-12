import React from 'react'
import clsx from 'clsx'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'flat' | 'elevated' | 'outlined'
  padding?: 'sm' | 'md' | 'lg' | 'none'
  hover?: boolean
  children: React.ReactNode
}

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

const variantStyles = {
  flat: 'bg-surface border border-border',
  elevated: 'bg-surface border border-transparent shadow-md',
  outlined: 'bg-transparent border border-border',
}

export const Card: React.FC<CardProps> = ({
  variant = 'flat',
  padding = 'md',
  hover = false,
  className,
  children,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        'rounded-lg',
        variantStyles[variant],
        paddingStyles[padding],
        hover && 'transition-shadow duration-200 hover:shadow-lg',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}