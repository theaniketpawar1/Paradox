import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container } from './Container'
import { Button } from './Button'
import { Text } from './Text'
import { Flex } from './Flex'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar(): React.ReactNode {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-backdrop-blur:bg-background/60 border-b border-border bg-background/95">
      <Container>
        <Flex justify="between" align="center" className="h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" aria-label="PARADOX Home">
            <Text variant="h6" weight="bold" className="text-primary">
              PARADOX
            </Text>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.slice(1).map((link) => ( // skip Home, it's logo
              <Link
                key={link.href}
                to={link.href}
                className="text-text-muted hover:text-text transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Button as={Link} to="/contact" variant="primary">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </Flex>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-text-muted hover:text-text transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button as={Link} to="/contact" variant="primary" fullWidth>
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  )
}