import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ContactForm } from '../components/ContactForm'
import { Hero } from '../components/Hero'
import { Section } from '../components/Section'
import { Container } from '../components/Container'
import { Text } from '../components/Text'
import { Grid } from '../components/Grid'
import { Card } from '../components/Card'

const Contact: React.FC = () => {
  const handleSubmit = async (data: { name: string; email: string; company: string; message: string }) => {
    // In production, this would send to an API endpoint
    console.log('Form submitted:', data)
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000))
  }

  return (
    <>
      <Helmet>
        <title>Contact | PARADOX</title>
        <meta name="description" content="Get in touch with PARADOX for your frontend project. We'll respond within 24 hours." />
      </Helmet>
      <Hero
        headline="Get in Touch"
        subhead="Tell us about your project and we'll get back to you within 24 hours."
        align="center"
      />

      <Section>
        <Container>
          <Grid cols={1} lg={2} gap="xl">
            <div>
              <Text variant="h4" weight="semibold" className="mb-6">
                Contact Information
              </Text>
              <div className="space-y-4 mb-8">
                <div>
                  <Text variant="body-sm" weight="semibold" className="text-primary mb-1 block">
                    Email
                  </Text>
                  <Text variant="body" color="muted">
                    hello@paradox.ai
                  </Text>
                </div>
                <div>
                  <Text variant="body-sm" weight="semibold" className="text-primary mb-1 block">
                    Phone
                  </Text>
                  <Text variant="body" color="muted">
                    +91 98765 43210
                  </Text>
                </div>
                <div>
                  <Text variant="body-sm" weight="semibold" className="text-primary mb-1 block">
                    Location
                  </Text>
                  <Text variant="body" color="muted">
                    Pune, Maharashtra, India
                  </Text>
                </div>
              </div>

              <Text variant="h5" weight="semibold" className="mb-4">
                FAQ
              </Text>
              <div className="space-y-4">
                {[
                  { q: 'What technologies do you use?', a: 'We primarily use React, TypeScript, Next.js, and modern CSS. We choose the best tool for the job.' },
                  { q: 'Do you offer ongoing support?', a: 'Yes, we offer retainer packages for ongoing maintenance, updates, and improvements.' },
                  { q: 'How long does a typical project take?', a: 'Timelines vary by scope. A simple site can take 2-4 weeks; larger applications may take 2-3 months.' },
                  { q: 'Do you work with international clients?', a: 'Absolutely. We work with clients globally and can accommodate timezone differences.' },
                ].map((faq, idx) => (
                  <Card key={idx} padding="md" className="border-l-4 border-primary">
                    <Text variant="body-sm" weight="semibold" className="mb-2">
                      {faq.q}
                    </Text>
                    <Text variant="body-sm" color="muted">
                      {faq.a}
                    </Text>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <ContactForm onSubmit={handleSubmit} />
            </div>
          </Grid>
        </Container>
      </Section>

      {/* Map placeholder */}
      <Section padding="sm">
        <Container>
          <div className="w-full h-64 bg-surface border border-border rounded-lg flex items-center justify-center">
            <Text variant="body" color="muted">
              Map placeholder (Google Maps / OpenStreetMap)
            </Text>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default Contact