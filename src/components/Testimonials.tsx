import React from 'react'
import { Container } from './Container'
import { Grid } from './Grid'
import { Text } from './Text'
import { Card } from './Card'
import { Section } from './Section'

interface Testimonial {
  quote: string
  author: string
  role: string
  company?: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <Section variant="alternate">
      <Container>
        <Text variant="h2" weight="bold" className="text-center mb-12">
          What Clients Say
        </Text>
        <Grid cols={1} md={2} lg={3} gap="lg">
          {testimonials.map((t, idx) => (
            <Card key={idx} padding="lg" variant="elevated">
              <blockquote className="mb-4">
                <Text variant="body" className="italic">
                  “{t.quote}”
                </Text>
              </blockquote>
              <footer>
                <Text variant="body-sm" weight="semibold">
                  {t.author}
                </Text>
                <Text variant="caption" color="muted">
                  {' '}
                  <cite className="font-normal not-italic">{t.role}{t.company && `, ${t.company}`}</cite>
                </Text>
              </footer>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}