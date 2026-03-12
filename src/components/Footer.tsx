import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './Container'
import { Text } from './Text'
import { Grid } from './Grid'

const footerLinks = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/work' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Custom Frontend', href: '/services#custom' },
    { label: 'Performance', href: '/services#performance' },
    { label: 'Accessibility', href: '/services#accessibility' },
    { label: 'AI Integration', href: '/services#ai' },
    { label: 'Design Systems', href: '/services#design-systems' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  social: [
    { label: 'LinkedIn', href: '#', icon: 'linkedin' },
    { label: 'Twitter', href: '#', icon: 'twitter' },
    { label: 'GitHub', href: '#', icon: 'github' },
  ],
}

// Simple icon placeholders (could use lucide-react)
const IconPlaceholder: React.FC<{ name: string }> = ({ name }) => (
  <span className="sr-only">{name}</span>
)

export default function Footer(): React.ReactNode {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-border">
      <Container padding="lg">
        <Grid cols={1} md={2} lg={5} gap="lg" className="py-12">
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Text variant="h6" weight="bold" className="text-primary mb-4">
              PARADOX
            </Text>
            <Text variant="body-sm" color="muted" className="mb-4">
              AI-powered frontend development delivering modern, accessible, high-performance web applications.
            </Text>
            <Text variant="caption-sm" color="muted">
              © {currentYear} PARADOX. All rights reserved.
            </Text>
          </div>

          {/* Column 2: Company */}
          <div>
            <Text variant="h6" weight="semibold" className="mb-4">
              Company
            </Text>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-text-muted hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <Text variant="h6" weight="semibold" className="mb-4">
              Services
            </Text>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-text-muted hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <Text variant="h6" weight="semibold" className="mb-4">
              Legal
            </Text>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-text-muted hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact & Social */}
          <div>
            <Text variant="h6" weight="semibold" className="mb-4">
              Connect
            </Text>
            <ul className="space-y-2 mb-6">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-2 text-text-muted hover:text-accent transition-colors"
                  >
                    <IconPlaceholder name={link.icon} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Text variant="caption-sm" color="muted">
              hello@paradox.ai<br />
              +91 98765 43210<br />
              Pune, Maharashtra, India
            </Text>
          </div>
        </Grid>
      </Container>
    </footer>
  )
}