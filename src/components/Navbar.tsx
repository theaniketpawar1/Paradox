import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        scrolled
          ? 'bg-background/90 backdrop-blur-md shadow-sm border-border/50'
          : 'bg-transparent border-transparent'
      )}
    >
      <Container padding="sm" className="h-20">
        <Flex justify="between" align="center" className="h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="Paradox Home">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-primary-900 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-glow transition-shadow">
              P
            </div>
            <Text variant="h5" weight="bold" className="text-primary group-hover:text-primary-700 transition-colors">
              PARADOX
            </Text>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-text-muted hover:text-primary transition-colors duration-200 text-sm font-medium tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button as={Link} to="/contact" variant="primary" size="md" className="shadow-lg shadow-primary/30">
              Start a Conversation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-surface transition-colors"
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
      </Container>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <nav className="flex flex-col p-6 gap-6" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-text-muted hover:text-primary transition-colors text-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button as={Link} to="/contact" variant="primary" fullWidth size="lg" className="mt-2">
              Start a Conversation
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}