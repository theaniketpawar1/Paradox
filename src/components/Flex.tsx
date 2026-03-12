import React from 'react'
import clsx from 'clsx'

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  wrap?: 'wrap' | 'nowrap'
  gap?: 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
}

const directionStyles = {
  row: 'flex-row',
  col: 'flex-col',
  'row-reverse': 'flex-row-reverse',
  'col-reverse': 'flex-col-reverse',
}

const justifyStyles = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
}

const alignStyles = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
}

const gapStyles = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
  xl: 'gap-10',
}

export const Flex: React.FC<FlexProps> = ({
  direction = 'row',
  justify = 'start',
  align = 'stretch',
  wrap = 'wrap',
  gap,
  className,
  children,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        'flex',
        directionStyles[direction],
        justifyStyles[justify],
        alignStyles[align],
        wrap === 'wrap' ? 'flex-wrap' : 'flex-nowrap',
        gap && gapStyles[gap],
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}