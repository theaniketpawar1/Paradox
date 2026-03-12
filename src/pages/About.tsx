import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Users, Target, Award, Bot } from 'lucide-react'
import { Hero } from '../components/Hero'
import { Section } from '../components/Section'
import { Container } from '../components/Container'
import { Text } from '../components/Text'
import { Grid } from '../components/Grid'
import { Card } from '../components/Card'

const About: React.FC = () => {
  const team = [
    {
      name: 'Aniket Pawar',
      role: 'CEO & Founder',
      bio: 'Visionary leader with a passion for AI and modern web technologies. Drives the strategic direction of PARADOX.',
    },
    {
      name: 'Maya Singh',
      role: 'Senior Manager',
      bio: 'Experienced project leader ensuring delivery excellence and client satisfaction across all engagements.',
    },
    {
      name: 'Bhakti Shelar',
      role: 'Frontend Developer',
      bio: 'Specialist in performance, accessibility, and pixel-perfect React implementations. Maintains highest code standards.',
    },
  ]

  const values = [
    { title: 'Precision', desc: 'Every line of code, every pixel matters. We obsess over details.', icon: <Award size={24} strokeWidth={2} aria-hidden="true" /> },
    { title: 'Transparency', desc: 'Clear communication, honest timelines, and open collaboration.', icon: <Users size={24} strokeWidth={2} aria-hidden="true" /> },
    { title: 'Innovation', desc: 'We leverage AI and modern tools to stay ahead of the curve.', icon: <Bot size={24} strokeWidth={2} aria-hidden="true" /> },
    { title: 'Quality', desc: 'No compromises on accessibility, performance, or maintainability.', icon: <Target size={24} strokeWidth={2} aria-hidden="true" /> },
  ]

  return (
    <>
      <Helmet>
        <title>About | PARADOX</title>
        <meta name="description" content="About PARADOX: AI-first frontend company, mission, team, values, and timeline." />
      </Helmet>
      <Hero
        headline="About PARADOX"
        subhead="We are an AI research lab building the future of web experiences. Founded by Aniket Pawar, PARADOX blends cutting-edge AI with human expertise to deliver exceptional digital solutions for Indian businesses."
        align="left"
        background="light"
      />

      <Section>
        <Container>
          <Grid cols={1} lg={2} gap="xl" className="items-center">
            <div>
              <Text variant="h4" weight="semibold" className="mb-4">
                Our Mission
              </Text>
              <Text variant="body" color="muted" className="mb-6">
                To empower Indian businesses with world-class web experiences, democratizing AI-driven development. We believe technology should be accessible, performant, and a joy to use—for everyone.
              </Text>
              <Text variant="body" color="muted">
                Founded in 2022 by Aniket Pawar, PARADOX began with a simple idea: combine AI speed with human craftsmanship. Today, we deliver projects that consistently exceed expectations in quality, accessibility, and business impact.
              </Text>
            </div>
            <div className="bg-surface p-8 rounded-lg border border-border">
              <Text variant="h5" weight="semibold" className="mb-4">
                Core Values
              </Text>
              <ul className="space-y-4">
                {values.map((v, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 text-primary">{v.icon}</div>
                    <div>
                      <Text variant="body" weight="semibold" className="text-primary">{v.title}</Text>
                      <Text variant="body-sm" color="muted">{v.desc}</Text>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
        </Container>
      </Section>

      <Section variant="alternate">
        <Container>
          <Text variant="h2" weight="bold" className="mb-12 text-center">
            Leadership Team
          </Text>
          <Grid cols={1} md={2} lg={3} gap="lg">
            {team.map((member, idx) => (
              <Card key={idx} padding="lg" className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-surface-hover flex items-center justify-center text-4xl text-primary font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <Text variant="h5" weight="semibold" className="mb-1">
                  {member.name}
                </Text>
                <Text variant="body-sm" color="accent" className="mb-3">
                  {member.role}
                </Text>
                <Text variant="body" color="muted">
                  {member.bio}
                </Text>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <Text variant="h2" weight="bold" className="mb-6 text-center">
            Our Timeline
          </Text>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { year: '2022', title: 'Founded', desc: 'PARADOX established by Aniket Pawar as an AI research lab focused on intelligent web solutions.' },
              { year: '2023', title: 'First AI Products', desc: 'Developed proprietary AI integration frameworks and delivered first enterprise automation project.' },
              { year: '2024', title: 'Component Library', desc: 'Launched internal design system with accessibility and performance baked in, accelerating development.' },
              { year: '2025', title: 'Local Expansion', desc: 'Partnered with multiple Indian SMEs, delivering AI-powered digital transformations.' },
            ].map((event, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <Text variant="body" weight="bold" className="text-primary">
                    {event.year}
                  </Text>
                </div>
                <div>
                  <Text variant="h6" weight="semibold" className="mb-1">
                    {event.title}
                  </Text>
                  <Text variant="body" color="muted">
                    {event.desc}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}

export default About