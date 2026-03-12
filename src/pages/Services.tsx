import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Code, BarChart, Accessibility, Bot, LayoutTemplate } from 'lucide-react'
import { Hero } from '../components/Hero'
import { Section } from '../components/Section'
import { Container } from '../components/Container'
import { Text } from '../components/Text'
import { Grid } from '../components/Grid'
import { Card } from '../components/Card'
import { Button } from '../components/Button'

const ServiceIcons = {
  custom: <Code size={32} strokeWidth={2} aria-hidden="true" />,
  performance: <BarChart size={32} strokeWidth={2} aria-hidden="true" />,
  a11y: <Accessibility size={32} strokeWidth={2} aria-hidden="true" />,
  ai: <Bot size={32} strokeWidth={2} aria-hidden="true" />,
  designSystem: <LayoutTemplate size={32} strokeWidth={2} aria-hidden="true" />,
}

const services = [
  {
    id: 'custom',
    icon: ServiceIcons.custom,
    title: 'Custom Frontend Development',
    description: 'We build responsive, accessible web applications using React, Vue, or Angular with TypeScript for type safety and scalability.',
    tech: ['React', 'TypeScript', 'Next.js', 'Vite'],
    benefits: [
      'Component-based architecture for maintainability',
      'Comprehensive testing with >80% coverage',
      'Clear documentation and API contracts',
      'Handoff-ready for in-house teams',
    ],
  },
  {
    id: 'performance',
    icon: ServiceIcons.performance,
    title: 'Performance Optimization',
    description: 'We audit and optimize your application to achieve Lighthouse scores >90 and excellent Core Web Vitals.',
    tech: ['Web Vitals', 'Code Splitting', 'Image Optimization', 'Service Workers'],
    benefits: [
      'Faster load times improve SEO and conversions',
      'Reduced bounce rates and better user engagement',
      'Ongoing monitoring and alerts',
      'Training for your team on performance best practices',
    ],
  },
  {
    id: 'accessibility',
    icon: ServiceIcons.a11y,
    title: 'Accessibility Audits & Remediation',
    description: 'We ensure your digital products comply with WCAG 2.1 AA and are usable by everyone.',
    tech: ['axe-core', 'Screen Reader Testing', 'ARIA', 'Keyboard Navigation'],
    benefits: [
      'Inclusive design expands your audience',
      'Reduced legal risk and compliance assurance',
      'Improved overall usability for all users',
      'Detailed reports and prioritized remediation steps',
    ],
  },
  {
    id: 'ai',
    icon: ServiceIcons.ai,
    title: 'AI Integration & Automation',
    description: 'We integrate AI capabilities—chatbots, content generation, smart forms—into your web applications.',
    tech: ['OpenAI API', 'Embeddings', 'RAG Pipelines', 'Automated Testing'],
    benefits: [
      'Automate repetitive tasks and content workflows',
      'Personalize user experiences with AI-driven interactions',
      'Reduce manual effort and operational costs',
      'Scalable AI solutions that grow with your business',
    ],
  },
  {
    id: 'design-systems',
    icon: ServiceIcons.designSystem,
    title: 'Design Systems & Component Libraries',
    description: 'We create reusable, documented component libraries that align your design and engineering teams.',
    tech: ['Storybook', 'Figma Tokens', 'CSS-in-JS', 'TypeScript'],
    benefits: [
      'Accelerate product development with reusable components',
      'Ensure visual and interaction consistency',
      'Onboarding documentation and usage guidelines',
      'Versioning and clear upgrade paths',
    ],
  },
]

const Services: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Services | PARADOX</title>
        <meta name="description" content="Our frontend services: Custom Development, Performance, Accessibility, AI Integration, Design Systems." />
      </Helmet>
      <Hero
        headline="Our Services"
        subhead="We offer a full suite of frontend services powered by modern tooling and AI-enhanced workflows."
        align="center"
      />

      <Section>
        <Container>
          <Text variant="h2" weight="bold" className="mb-8 text-center">
            What We Offer
          </Text>
          <Grid cols={1} md={2} lg={3} gap="lg">
            {services.map((service) => (
              <Card key={service.id} id={service.id} padding="lg" hover>
                <div className="flex flex-col h-full">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4" aria-hidden="true">
                    {service.icon}
                  </div>
                  <Text variant="h3" weight="semibold" className="mb-3">
                    {service.title}
                  </Text>
                  <Text variant="body" color="muted" className="mb-4 flex-1">
                    {service.description}
                  </Text>
                  <div className="mb-4">
                    <Text variant="caption" weight="semibold" className="text-primary uppercase tracking-wide">
                      Tech Stack
                    </Text>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {service.tech.map((t) => (
                        <span key={t} className="px-2 py-1 text-xs bg-surface-hover rounded text-text-muted">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <Text variant="body-sm">{benefit}</Text>
                      </li>
                    ))}
                  </ul>
                  <Button as={Link} to="/contact" variant="secondary" size="sm">
                    Discuss Project
                  </Button>
                </div>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section variant="alternate">
        <Container>
          <Text variant="h2" weight="bold" className="mb-8 text-center">
            Our Process
          </Text>
          <Grid cols={1} md={2} lg={5} gap="md">
            {[
              { step: '1', title: 'Discovery', desc: 'We learn about your goals, users, and constraints.' },
              { step: '2', title: 'Design', desc: 'We review and refine UX/UI, ensuring alignment with your brand.' },
              { step: '3', title: 'Build', desc: 'Development begins with iterative sprints and regular demos.' },
              { step: '4', title: 'Deploy', desc: 'We ship to production with monitoring and rollback plans.' },
              { step: '5', title: 'Support', desc: 'Ongoing maintenance, updates, and iterative improvements.' },
            ].map((phase, idx) => (
              <Card key={idx} padding="md" className="text-center">
                <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {phase.step}
                </div>
                <Text variant="h6" weight="semibold" className="mb-2">
                  {phase.title}
                </Text>
                <Text variant="body-sm" color="muted">
                  {phase.desc}
                </Text>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  )
}

export default Services