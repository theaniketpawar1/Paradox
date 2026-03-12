import React from 'react'
import clsx from 'clsx'

export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'body-lg' | 'body-sm' | 'caption' | 'caption-sm'

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TextVariant
  as?: React.ElementType
  weight?: 'regular' | 'medium' | 'semibold' | 'bold'
  align?: 'left' | 'center' | 'right'
  color?: 'default' | 'muted' | 'accent' | 'error' | 'success'
  children: React.ReactNode
}

const variantStyles: Record<TextVariant, string> = {
  h1: 'text-4xl md:text-5xl lg:text-6xl leading-tight',
  h2: 'text-3xl md:text-4xl lg:text-5xl leading-tight',
  h3: 'text-2xl md:text-3xl lg:text-4xl leading-tight',
  h4: 'text-xl md:text-2xl lg:text-3xl leading-snug',
  h5: 'text-lg md:text-xl leading-snug',
  h6: 'text-base md:text-lg leading-snug',
  body: 'text-base leading-relaxed',
  'body-lg': 'text-lg leading-relaxed',
  'body-sm': 'text-sm leading-relaxed',
  caption: 'text-sm leading-normal',
  'caption-sm': 'text-xs leading-normal',
}

const weightStyles = {
  regular: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
}

const colorStyles = {
  default: 'text-text',
  muted: 'text-text-muted',
  accent: 'text-accent',
  error: 'text-error',
  success: 'text-success',
}

const variantToTag: Record<TextVariant, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'p',
  'body-lg': 'p',
  'body-sm': 'p',
  caption: 'span',
  'caption-sm': 'span',
}

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  as,
  weight = 'regular',
  align = 'left',
  color = 'default',
  className,
  children,
  ...rest
}) => {
  const Component = as || variantToTag[variant]

  return (
    <Component
      className={clsx(
        variantStyles[variant],
        weightStyles[weight],
        `text-${align}`,
        colorStyles[color],
        className
      )}
      {...(rest as any)}
    >
      {children}
    </Component>
  )
}