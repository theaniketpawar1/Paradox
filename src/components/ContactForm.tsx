import React, { useState } from 'react'
import clsx from 'clsx'
import { Button } from './Button'
import { Text } from './Text'
import { Card } from './Card'

interface FormInput {
  name: string
  email: string
  company: string
  message: string
}

interface ContactFormProps {
  onSubmit?: (data: FormInput) => void
  submitLabel?: string
  successMessage?: string
}

export const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  submitLabel = 'Send Message',
  successMessage = 'Thanks for reaching out! We\'ll be in touch shortly.',
}) => {
  const [formData, setFormData] = useState<FormInput>({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormInput, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors: Partial<Record<keyof typeof formData, string>> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    try {
      await onSubmit?.(formData)
      setSubmitted(true)
      setFormData({ name: '', email: '', company: '', message: '' })
    } catch (err) {
      setErrors({ email: 'Failed to send. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  if (submitted) {
    return (
      <Card padding="lg" className="max-w-2xl mx-auto">
        <div className="text-center py-8">
          <svg className="w-16 h-16 text-success mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <Text variant="h4" weight="semibold" className="mb-2">
            Message Sent
          </Text>
          <Text variant="body" color="muted">
            {successMessage}
          </Text>
        </div>
      </Card>
    )
  }

  return (
    <Card padding="lg" className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name <span className="text-error">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={clsx(
                'w-full px-4 py-2 border rounded-lg bg-background text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent',
                errors.name && 'border-error'
              )}
            />
            {errors.name && <Text variant="caption-sm" color="error" className="mt-1">{errors.name}</Text>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email <span className="text-error">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={clsx(
                'w-full px-4 py-2 border rounded-lg bg-background text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent',
                errors.email && 'border-error'
              )}
            />
            {errors.email && <Text variant="caption-sm" color="error" className="mt-1">{errors.email}</Text>}
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="company" className="block text-sm font-medium mb-2">
            Company (optional)
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message <span className="text-error">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={clsx(
              'w-full px-4 py-2 border rounded-lg bg-background text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-y',
              errors.message && 'border-error'
            )}
          />
          {errors.message && <Text variant="caption-sm" color="error" className="mt-1">{errors.message}</Text>}
        </div>
        <Button type="submit" variant="primary" fullWidth isLoading={isSubmitting}>
          {submitLabel}
        </Button>
      </form>
    </Card>
  )
}