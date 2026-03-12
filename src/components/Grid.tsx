import React from 'react'
import clsx from 'clsx'

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12
  sm?: 1 | 2 | 3 | 4 | 5 | 6 | 12
  md?: 1 | 2 | 3 | 4 | 5 | 6 | 12
  lg?: 1 | 2 | 3 | 4 | 5 | 6 | 12
  xl?: 1 | 2 | 3 | 4 | 5 | 6 | 12
  gap?: 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
}

const gapStyles = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
  xl: 'gap-10',
}

export const Grid: React.FC<GridProps> = ({
  cols = 4,
  sm,
  md,
  lg,
  xl,
  gap = 'md',
  className,
  children,
  ...rest
}) => {
  const classes = clsx(
    'grid',
    `grid-cols-${cols}`,
    sm && `sm:grid-cols-${sm}`,
    md && `md:grid-cols-${md}`,
    lg && `lg:grid-cols-${lg}`,
    xl && `xl:grid-cols-${xl}`,
    gapStyles[gap],
    className
  )

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}