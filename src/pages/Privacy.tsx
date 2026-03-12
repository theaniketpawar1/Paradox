import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Section } from '../components/Section'
import { Container } from '../components/Container'
import { Text } from '../components/Text'
import { Button } from '../components/Button'
import { Link } from 'react-router-dom'

const Privacy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | PARADOX</title>
        <meta name="description" content="Privacy Policy for PARADOX website. How we collect, use, and protect your personal data." />
      </Helmet>
      <Section>
        <Container>
          <Text variant="h1" weight="bold" className="mb-8">
            Privacy Policy
          </Text>
          <Text variant="body" color="muted" className="mb-6">
            Last updated: March 12, 2026
          </Text>
          <Text variant="body" className="mb-6">
            PARADOX ("we", "us", or "our") is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our contact form.
          </Text>

          <Text variant="h2" weight="semibold" className="mb-4 mt-8">
            1. Information We Collect
          </Text>
          <Text variant="body" className="mb-4">
            We collect personal information that you voluntarily provide to us when you fill out our contact form, including:
          </Text>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><Text variant="body">Name</Text></li>
            <li><Text variant="body">Email address</Text></li>
            <li><Text variant="body">Phone number (optional)</Text></li>
            <li><Text variant="body">Company name (optional)</Text></li>
            <li><Text variant="body">Message content</Text></li>
          </ul>

          <Text variant="h2" weight="semibold" className="mb-4 mt-8">
            2. How We Use Your Information
          </Text>
          <Text variant="body" className="mb-4">
            We use the information we collect to:
          </Text>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><Text variant="body">Respond to your inquiries and provide requested information about our services</Text></li>
            <li><Text variant="body">Improve our website and service offerings</Text></li>
            <li><Text variant="body">Communicate with you about your project (only with your consent)</Text></li>
          </ul>

          <Text variant="h2" weight="semibold" className="mb-4 mt-8">
            3. Data Sharing and Disclosure
          </Text>
          <Text variant="body" className="mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties except:
          </Text>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><Text variant="body">To trusted service providers who assist us in operating our website and processing contact forms (e.g., Formspree) — they have access to data solely to perform tasks on our behalf and are obligated not to disclose it.</Text></li>
            <li><Text variant="body">When required by law or to protect our rights, property, or safety.</Text></li>
          </ul>

          <Text variant="h2" weight="semibold" className="mb-4 mt-8">
            4. Data Retention
          </Text>
          <Text variant="body" className="mb-6">
            We retain personal information only as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.
          </Text>

          <Text variant="h2" weight="semibold" className="mb-4 mt-8">
            5. Your Rights
          </Text>
          <Text variant="body" className="mb-6">
            You have the right to access, correct, or delete your personal data. To exercise these rights, please contact us using the information provided below.
          </Text>

          <Text variant="h2" weight="semibold" className="mb-4 mt-8">
            6. Security
          </Text>
          <Text variant="body" className="mb-6">
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, or destruction.
          </Text>

          <Text variant="h2" weight="semibold" className="mb-4 mt-8">
            7. Changes to This Policy
          </Text>
          <Text variant="body" className="mb-6">
            We may update this Privacy Policy from time to time. The "Last updated" date indicates the most recent version. Continued use of the site after changes constitutes acceptance.
          </Text>

          <Text variant="h2" weight="semibold" className="mb-4 mt-8">
            8. Contact Us
          </Text>
          <Text variant="body" className="mb-6">
            If you have questions about this Privacy Policy or our data practices, please contact us at:
          </Text>
          <div className="mb-8">
            <Text variant="body"><strong>Email:</strong> hello@paradox.ai</Text><br />
            <Text variant="body"><strong>Phone:</strong> +91 98765 43210</Text><br />
            <Text variant="body"><strong>Address:</strong> Pune, Maharashtra, India</Text>
          </div>

          <Button as={Link} to="/" variant="primary">
            Return Home
          </Button>
        </Container>
      </Section>
    </>
  )
}

export default Privacy
