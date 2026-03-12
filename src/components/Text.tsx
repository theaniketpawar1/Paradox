import React from 'react'
import clsx from 'clsx'

export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'display' | 'display-lg' | 'hero' | 'hero-lg' | 'body' | 'body-lg' | 'body-sm' | 'caption' | 'caption-sm'

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TextVariant
  as?: React.ElementType
  weight?: 'regular' | 'medium' | 'semibold' | 'bold'
  align?: 'left' | 'center' | 'right'
  color?: 'default' | 'muted' | 'accent' | 'error' | 'success' | 'primary'
  children: React.ReactNode
}

const variantStyles: Record<TextVariant, string> = {
  display: 'font-heading text-display font-bold tracking-tight',
  'display-lg': 'font-heading text-display-lg font-bold tracking-tight',
  hero: 'font-heading text-hero font-bold tracking-tight',
  'hero-lg': 'font-heading text-hero-lg font-bold tracking-tight',
  h1: 'font-heading text-4xl md:text-5xl lg:text-6xl leading-tight font-bold',
  h2: 'font-heading text-3xl md:text-4xl lg:text-5xl leading-tight font-bold',
  h3: 'font-heading text-2xl md:text-3xl lg:text-4xl leading-tight font-semibold',
  h4: 'font-heading text-xl md:text-2xl lg:text-3xl leading-snug font-semibold',
  h5: 'font-heading text-lg md:text-xl leading-snug font-semibold',
  h6: 'font-heading text-base md:text-lg leading-snug font-semibold',
  body: 'text-base leading-relaxed font-normal',
  'body-lg': 'text-lg leading-relaxed font-normal',
  'body-sm': 'text-sm leading-relaxed font-normal',
  caption: 'text-sm leading-normal font-medium',
  'caption-sm': 'text-xs leading-normal font-medium',
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
  primary: 'text-primary',
}

const variantToTag: Record<TextVariant, keyof JSX.IntrinsicElements> = {
  display: 'h1',
  'display-lg': 'h1',
  hero: 'h1',
  'hero-lg': 'h1',
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