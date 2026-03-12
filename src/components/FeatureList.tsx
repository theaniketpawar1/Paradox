import React from 'react'
import { Container } from './Container'
import { Text } from './Text'
import { Grid } from './Grid'
import { Card } from './Card'
import { Section } from './Section'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

interface FeatureListProps {
  features: Feature[]
  cols?: 2 | 3 | 4
}

export const FeatureList: React.FC<FeatureListProps> = ({ features, cols = 4 }) => {
  return (
    <Section>
      <Container>
        <Grid cols={cols} gap="lg">
          {features.map((feature, idx) => (
            <Card key={idx} padding="lg" hover>
              <div className="flex flex-col items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  {feature.icon}
                </div>
                <Text variant="h5" weight="semibold">
                  {feature.title}
                </Text>
                <Text variant="body" color="muted">
                  {feature.description}
                </Text>
              </div>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}