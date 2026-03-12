import React from 'react'
import { Helmet } from 'react-helmet-async'
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
    title: 'AI-Enhanced Delivery',
    description: 'We leverage AI to accelerate development while maintaining human-level quality and oversight.',
  },
  {
    icon: Icons.shield,
    title: 'Accessible by Default',
    description: 'Every project meets WCAG 2.1 AA standards because inclusive design is non-negotiable.',
  },
  {
    icon: Icons.performance,
    title: 'Performance Guaranteed',
    description: 'We optimizing for Core Web Vitals and Lighthouse scores >90, ensuring fast, smooth experiences.',
  },
  {
    icon: Icons.robot,
    title: 'Local Business Focus',
    description: 'We build solutions tailored for Indian SMEs, understanding your market and your customers.',
  },
]

const testimonials = [
  {
    quote: 'PARADOX transformed our clinic\'s booking system. Patients now book appointments instantly online, and our staff can manage schedules effortlessly. The AI-powered reminders reduced no-shows by 40%.',
    author: 'Dr. Rajesh Sharma',
    role: 'Owner',
    company: 'Sharma Dental Care, Mumbai',
  },
  {
    quote: 'As a small retailer, I needed an affordable online store. PARADOX built a beautiful, fast e-commerce site that integrated with our existing inventory. Sales went up 60% in the first month.',
    author: 'Priya Patel',
    role: 'Founder',
    company: 'Patel Fashion, Ahmedabad',
  },
  {
    quote: 'Our restaurant chain now has a unified web presence and a loyalty app. PARADOX delivered quickly and kept within our budget. Highly recommended for F&B businesses.',
    author: 'Vikram Singh',
    role: 'Managing Director',
    company: 'Singh\'s Kitchen, Delhi NCR',
  },
]

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>PARADOX | AI-Powered Frontend for Indian Business</title>
        <meta name="description" content="PARADOX: AI research lab delivering fast, accessible, high-performance web applications for local Indian businesses. Get a modern website that converts." />
        <meta property="og:title" content="PARADOX – AI-Powered Frontend Excellence" />
        <meta property="og:description" content="Modern, accessible, high-performance websites built for Indian businesses. Combine AI speed with human craftsmanship." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.paradox.ai/" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PARADOX – AI-Powered Frontend" />
        <meta name="twitter:description" content="AI research lab building modern, accessible web experiences for Indian businesses." />
        <meta name="twitter:image" content="/og-image.png" />
      </Helmet>
      <Hero
        headline="AI-Powered Frontend, Built for Indian Business."
        subhead="PARADOX is an AI research lab that delivers fast, accessible, premium web applications. We combine cutting-edge AI with human craftsmanship to help local businesses thrive online."
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