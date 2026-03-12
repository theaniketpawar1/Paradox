import React from 'react'
import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { FeatureList } from '../components/FeatureList'
import { Testimonials } from '../components/Testimonials'
import { Button } from '../components/Button'
import { Text } from '../components/Text'
import { Container } from '../components/Container'
import { Section } from '../components/Section'

// Icons (will switch to lucide-react later)
const Icons = {
  zap: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  shield: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  performance: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  robot: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <circle cx="8" cy="16" r="1" fill="currentColor" />
      <circle cx="16" cy="16" r="1" fill="currentColor" />
    </svg>
  ),
}

const features = [
  {
    icon: Icons.zap,
    title: 'AI-Enhanced Workflows',
    description: 'We integrate AI tools into our development process to accelerate delivery without sacrificing quality or maintainability.',
  },
  {
    icon: Icons.shield,
    title: 'Accessibility First',
    description: 'Every project meets WCAG 2.1 AA standards, ensuring your application is usable by everyone.',
  },
  {
    icon: Icons.performance,
    title: 'Performance Obsessed',
    description: 'We optimize for Core Web Vitals, Lighthouse scores >90, and real-user experience metrics.',
  },
  {
    icon: Icons.robot,
    title: 'Modern Stack',
    description: 'React, TypeScript, Next.js, and cutting-edge tools ensure your codebase is future-ready.',
  },
]

const testimonials = [
  {
    quote: 'PARADOX delivered a site that loads instantly and passes every accessibility audit. Their attention to detail is unmatched.',
    author: 'Sarah Chen',
    role: 'VP Product',
    company: 'TechFlow',
  },
  {
    quote: 'Working with PARADOX felt like having an internal frontend team that truly cared about our product.',
    author: 'Marcus Johnson',
    role: 'CTO',
    company: 'StartupXYZ',
  },
  {
    quote: 'The speed and polish they brought to our web app directly improved our conversion rates.',
    author: 'Elena Rodriguez',
    role: 'Marketing Director',
    company: 'GrowthInc',
  },
]

const Home: React.FC = () => {
  return (
    <>
      <Hero
        headline="Frontend Excellence, Accelerated by AI."
        subhead="PARADOX combines human expertise with AI-driven workflows to build modern, accessible, high-performance web applications. We ship production-ready code that scales."
        actions={
          <>
            <Button as={Link} to="/contact" variant="primary" size="lg">
              Get Started
            </Button>
            <Button as={Link} to="/work" variant="secondary" size="lg">
              View Our Work
            </Button>
          </>
        }
      />

      <Section>
        <Container>
          <Text variant="h2" weight="bold" className="mb-12 text-center">
            Why PARADOX
          </Text>
          <FeatureList features={features} cols={4} />
        </Container>
      </Section>

      <Testimonials testimonials={testimonials} />

      <Section background="primary" className="text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Text variant="h2" weight="bold" className="mb-6">
              Ready to transform your digital presence?
            </Text>
            <Text variant="body-lg" className="mb-8 opacity-90">
              Let's discuss your project and see how PARADOX can help you achieve frontend excellence.
            </Text>
            <Button as={Link} to="/contact" variant="secondary" size="lg" className="!bg-white !text-primary hover:!bg-gray-100">
              Start a Conversation
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default Home