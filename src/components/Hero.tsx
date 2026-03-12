import React from 'react'
import clsx from 'clsx'
import { Container } from './Container'
import { Text } from './Text'
import { Flex } from './Flex'

export interface HeroProps {
  headline: string
  subhead?: string
  actions?: React.ReactNode
  media?: React.ReactNode
  align?: 'center' | 'left'
  minHeight?: 'sm' | 'md' | 'lg'
  background?: 'light' | 'dark' | 'gradient'
}

const heroMinHeight = {
  sm: 'min-h-[60vh]',
  md: 'min-h-[75vh]',
  lg: 'min-h-[90vh]',
}

const heroBackground = {
  light: 'bg-background',
  dark: 'bg-slate-900 text-white',
  gradient: 'bg-gradient-to-br from-primary/10 via-accent/5 to-background',
}

export const Hero: React.FC<HeroProps> = ({
  headline,
  subhead,
  actions,
  media,
  align = 'center',
  minHeight = 'md',
  background = 'light',
}) => {
  return (
    <section
      className={clsx(
        'flex items-center justify-center',
        heroMinHeight[minHeight],
        heroBackground[background]
      )}
    >
      <Container>
        <div
          className={clsx(
            'max-w-4xl mx-auto',
            align === 'center' ? 'text-center' : 'text-left'
          )}
        >
          <Text variant="h1" weight="bold" className="mb-6">
            {headline}
          </Text>
          {subhead && (
            <Text variant="body-lg" color="muted" className="mb-8 max-w-2xl mx-auto">
              {subhead}
            </Text>
          )}
          {actions && (
            <Flex gap="md" justify={align === 'center' ? 'center' : 'start'} className="mb-12">
              {actions}
            </Flex>
          )}
          {media && <div className="mt-8">{media}</div>}
        </div>
      </Container>
    </section>
  )
}