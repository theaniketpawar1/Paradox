import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { WorkGrid } from '../components/WorkCard'
import { Button } from '../components/Button'
import { Text } from '../components/Text'
import { Container } from '../components/Container'
import { Section } from '../components/Section'

const works = [
  {
    id: 'dashboard-analytics',
    title: 'Enterprise Analytics Dashboard',
    description: 'A high-performance data visualization platform for a Fortune 500 client, handling millions of data points with real-time updates.',
    tech: ['React', 'D3.js', 'TypeScript', 'WebSocket'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Replatform',
    description: 'Migrated a legacy e-commerce frontend to Next.js, improving Lighthouse score from 45 to 95 and increasing conversion by 18%.',
    tech: ['Next.js', 'Tailwind CSS', 'Stripe', 'Redis'],
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'healthcare-portal',
    title: 'Healthcare Patient Portal',
    description: 'HIPAA-compliant patient portal with WCAG AA accessibility, screen reader support, and a fully keyboard-navigable interface.',
    tech: ['React', 'Node.js', 'OAuth2', 'a11y'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ai-assistant-ui',
    title: 'AI Assistant Interface',
    description: 'Custom UI for an AI-driven customer support tool, featuring chat interface, context management, and rich response components.',
    tech: ['React', 'OpenAI API', 'Vercel AI SDK', 'Pinecone'],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'design-system',
    title: 'Enterprise Design System',
    description: 'Built a comprehensive component library with Storybook documentation, covering 50+ components with full accessibility.',
    tech: ['React', 'TypeScript', 'Storybook', 'Figma Tokens'],
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'fintech-dashboard',
    title: 'FinTech Dashboard',
    description: 'Real-time trading dashboard with low-latency data feeds, dark mode, and customizable widget layout.',
    tech: ['React', 'WebSocket', 'Recharts', 'Electron'],
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
  },
]

const Work: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Work | PARADOX</title>
        <meta name="description" content="Explore PARADOX projects: modern frontend solutions with measurable impact." />
      </Helmet>
      <Hero
        headline="Our Work"
        subhead="Explore projects where we've delivered modern frontend solutions with measurable impact."
        align="center"
      />
      <WorkGrid works={works} />
      <Section>
        <Container>
          <div className="text-center">
            <Text variant="h4" weight="semibold" className="mb-4">
              Have a project in mind?
            </Text>
            <Button as={Link} to="/contact" variant="primary" size="lg">
              Let's Talk
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default Work