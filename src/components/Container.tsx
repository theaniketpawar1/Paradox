import React from 'react'
import clsx from 'clsx'

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'narrow' | 'wide'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const sizeStyles = {
  default: 'max-w-7xl',
  narrow: 'max-w-3xl',
  wide: 'max-w-screen-2xl',
}

const paddingStyles = {
  none: '',
  sm: 'py-8',
  md: 'py-12',
  lg: 'py-16',
}

export const Container: React.FC<ContainerProps> = ({
  size = 'default',
  padding = 'md',
  className,
  children,
  ...rest
}) => {
  return (
    <div
      className={clsx('mx-auto px-4 sm:px-6 lg:px-8', sizeStyles[size], paddingStyles[padding], className)}
      {...rest}
    >
      {children}
    </div>
  )
}