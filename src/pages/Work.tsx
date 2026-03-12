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
    id: 'clinic-ai',
    title: 'Smart Clinic Booking System',
    description: 'AI-powered appointment scheduling for Sharma Dental Care (Mumbai). Automated reminders, WhatsApp integrations, and real-time slot management reduced no-shows by 40% and increased patient satisfaction.',
    tech: ['React', 'Node.js', 'OpenAI', 'Twilio API'],
    imageUrl: 'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'retail-store',
    title: 'E-Commerce for Patel Fashion',
    description: 'A complete online store for a Ahmedabad fashion retailer with inventory sync, cash on delivery, and AI product recommendations. Sales increased 60% in the first month with a 2.2s LCP.',
    tech: ['Next.js', 'Tailwind', 'Razorpay', 'Redis'],
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'restaurant-chain',
    title: 'Singh\'s Kitchen Web & Loyalty App',
    description: 'Unified web presence and loyalty program for a Delhi NCR restaurant chain. Table reservations, online orders, and a points system drove repeat customer visits up 35%.',
    tech: ['React', 'Firebase', 'Stripe', 'PWA'],
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'manufacturing-ai',
    title: 'Predictive Inventory for Local Manufacturer',
    description: 'AI-driven inventory forecasting for a Pune-based auto parts manufacturer. Reduced overstock by 25% and stockouts by 40% using demand prediction models.',
    tech: ['React', 'Python', 'TensorFlow', 'PostgreSQL'],
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'education-tuition',
    title: 'Coaching Center Management Portal',
    description: 'Complete admin dashboard for a Hyderabad coaching institute: student tracking, batch scheduling, and AI-generated progress reports for parents. Cut admin time by 15 hours per week.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'OpenAI'],
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'logistics-tracking',
    title: 'Real-Time Delivery Tracker for Logistics Startup',
    description: 'Live package tracking with ETA predictions and automated customer notifications for a Bangalore last-mile delivery startup. Reduced support queries by 70%.',
    tech: ['React', 'WebSocket', 'Mapbox', 'Redis'],
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
  },
]

const Work: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Work | PARADOX</title>
        <meta name="description" content="PARADOX case studies: AI-powered web solutions for Indian businesses. Real projects, real results." />
      </Helmet>
      <Hero
        headline="Our Work"
        subhead="Explore projects where PARADOX combined AI and frontend expertise to help local Indian businesses grow. Each case study demonstrates measurable impact."
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