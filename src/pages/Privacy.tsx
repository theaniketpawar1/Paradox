import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Section } from '../components/Section'
import { Container } from '../components/Container'
import { Text } from '../components/Text'
import { Button } from '../components/Button'
import { Link } from 'react-router-dom'

const Terms: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | PARADOX</title>
        <meta name="description" content="Terms of Service for PARADOX website and services." />
      </Helmet>
      <Section>
        <Container>
          <Text variant="h1" weight="bold" className="mb-8">
            Terms of Service
          </Text>
          <Text variant="body" color="muted" className="mb-6">
            Last updated: March 2026
          </Text>
          <Text variant="body" className="mb-4">
            By accessing this website, you agree to be bound by these Terms. PARADOX provides the website and services subject to your compliance with these conditions.
          </Text>
          <Text variant="h4" weight="semibold" className="mb-4 mt-8">
            1. Use of Website
          </Text>
          <Text variant="body" className="mb-4">
            You agree to use this website only for lawful purposes. You are prohibited from any activity that could damage, disable, or impair the site.
          </Text>
          <Text variant="h4" weight="semibold" className="mb-4 mt-8">
            2. Intellectual Property
          </Text>
          <Text variant="body" className="mb-4">
            All content on this site is the property of PARADOX and protected by intellectual property laws. You may not reproduce or distribute without permission.
          </Text>
          <Text variant="h4" weight="semibold" className="mb-4 mt-8">
            3. Contact Form
          </Text>
          <Text variant="body" className="mb-4">
            Information submitted via the contact form is handled according to our Privacy Policy. By submitting, you consent to us contacting you regarding your inquiry.
          </Text>
          <Text variant="h4" weight="semibold" className="mb-4 mt-8">
            4. Limitations
          </Text>
          <Text variant="body" className="mb-4">
            PARADOX shall not be liable for any indirect or consequential damages arising from use of this website. We reserve the right to modify these terms at any time.
          </Text>
          <Button as={Link} to="/" variant="primary" className="mt-8">
            Return Home
          </Button>
        </Container>
      </Section>
    </>
  )
}

export default Terms