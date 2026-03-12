import React from 'react'
import clsx from 'clsx'

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const Spinner: React.FC<SpinnerProps> = ({ size = 'md', className }) => {
  const sizeClasses = {
    sm: 'h-6 w-6 border-2',
    md: 'h-12 w-12 border-2',
    lg: 'h-16 w-16 border-3',
  }

  return (
    <div
      className={clsx(
        'animate-spin rounded-full border-primary border-t-transparent',
        sizeClasses[size],
        className
      )}
    />
  )
}

export default Spinner