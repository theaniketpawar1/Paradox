import React from 'react'
import clsx from 'clsx'
import { Container } from './Container'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'alternate' | 'dark'
  padding?: 'sm' | 'md' | 'lg'
  background?: 'transparent' | 'surface' | 'primary'
  children: React.ReactNode
}

const sectionPadding = {
  sm: 'py-12 sm:py-16',
  md: 'py-16 sm:py-24',
  lg: 'py-24 sm:py-32',
}

const sectionBackground = {
  transparent: 'bg-transparent',
  surface: 'bg-surface',
  primary: 'bg-primary text-white',
}

export const Section: React.FC<SectionProps> = ({
  variant = 'default',
  padding = 'lg',
  background = 'transparent',
  className,
  children,
  ...rest
}) => {
  return (
    <section
      className={clsx(sectionPadding[padding], sectionBackground[background], className)}
      {...rest}
    >
      <Container>
        {children}
      </Container>
    </section>
  )
}