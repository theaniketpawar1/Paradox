import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Container } from '../components/Container'
import { Text } from '../components/Text'
import { Section } from '../components/Section'

const Terms: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | PARADOX</title>
        <meta name="description" content="Terms of Service for PARADOX frontend development services." />
      </Helmet>
      <Section>
        <Container>
          <Text variant="h1" weight="bold" className="mb-8">
            Terms of Service
          </Text>
          <Text variant="body" className="mb-4">
            Last updated: March 12, 2026
          </Text>
          <Text variant="body" className="mb-6">
            Please read these Terms of Service carefully before using our services. By accessing or using our services, you agree to be bound by these terms.
          </Text>
          <Text variant="h2" weight="semibold" className="mb-4 mt-8">
            1. Services
          </Text>
          <Text variant="body" className="mb-6">
            PARADOX provides frontend development, performance optimization, accessibility audits, and design system consulting services.
          </Text>
          <Text variant="h2" weight="semibold" className="mb-4 mt-8">
            2. Intellectual Property
          </Text>
          <Text variant="body" className="mb-6">
            All code, designs, and deliverables provided are the intellectual property of PARADOX until full payment is received. Upon receipt of full payment, you receive a license to use the deliverables for your intended purpose.
          </Text>
          <Text variant="h2" weight="semibold" className="mb-4 mt-8">
            3. Confidentiality
          </Text>
          <Text variant="body" className="mb-6">
            Both parties agree to maintain the confidentiality of any proprietary information shared during the engagement.
          </Text>
          <Text variant="h2" weight="semibold" className="mb-4 mt-8">
            4. Limitation of Liability
          </Text>
          <Text variant="body" className="mb-6">
            PARADOX shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with our services.
          </Text>
          <Text variant="h2" weight="semibold" className="mb-4 mt-8">
            5. Governing Law
          </Text>
          <Text variant="body" className="mb-6">
            These terms shall be governed by and construed in accordance with the laws of India.
          </Text>
        </Container>
      </Section>
    </>
  )
}

export default Terms
