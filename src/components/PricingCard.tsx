import React from 'react'
import clsx from 'clsx'
import { Container } from './Container'
import { Button } from './Button'
import { Text } from './Text'
import { Card } from './Card'
import { Grid } from './Grid'
import { Section } from './Section'

interface PricingTier {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  highlighted?: boolean
  ctaLabel: string
  onCtaClick?: () => void
}

interface PricingCardProps {
  tier: PricingTier
}

export const PricingCard: React.FC<PricingCardProps> = ({ tier }) => {
  return (
    <Card
      padding="lg"
      variant={tier.highlighted ? 'elevated' : 'flat'}
      className={clsx(
        tier.highlighted && 'border-2 border-accent shadow-lg relative'
      )}
    >
      {tier.highlighted && (
        <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          POPULAR
        </div>
      )}
      <Text variant="h4" weight="bold" className="mb-2">
        {tier.name}
      </Text>
      <div className="mb-4">
        <Text variant="h3" weight="bold" className="text-primary">
          {tier.price}
          {tier.period && (
            <Text variant="body-sm" color="muted" className="font-normal">
              {' '}/{tier.period}
            </Text>
          )}
        </Text>
      </div>
      <Text variant="body" color="muted" className="mb-6">
        {tier.description}
      </Text>
      <ul className="space-y-3 mb-8">
        {tier.features.map((feat, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <svg className="w-5 h-5 text-success flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <Text variant="body-sm">{feat}</Text>
          </li>
        ))}
      </ul>
      <Button
        variant={tier.highlighted ? 'primary' : 'secondary'}
        fullWidth
        onClick={tier.onCtaClick}
      >
        {tier.ctaLabel}
      </Button>
    </Card>
  )
}

interface PricingGridProps {
  tiers: PricingTier[]
}

export const PricingGrid: React.FC<PricingGridProps> = ({ tiers }) => {
  return (
    <Section>
      <Container>
        <Text variant="h2" weight="bold" className="mb-4 text-center">
          Simple, Transparent Pricing
        </Text>
        <Text variant="body-lg" color="muted" className="mb-12 text-center max-w-2xl mx-auto">
          Choose the plan that fits your needs. All plans include our core quality guarantees.
        </Text>
        <Grid cols={1} md={3} gap="lg" className="items-start">
          {tiers.map((tier, idx) => (
            <PricingCard key={idx} tier={tier} />
          ))}
        </Grid>
      </Container>
    </Section>
  )
}