import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ContactForm } from '../components/ContactForm'

describe('ContactForm', () => {
  const mockOnSubmit = vi.fn()

  it('renders all form fields', () => {
    render(<ContactForm onSubmit={mockOnSubmit} />)
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Company/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument()
  })

  it('shows validation errors on empty submit', () => {
    render(<ContactForm onSubmit={mockOnSubmit} />)

    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }))

    expect(screen.getByText(/Name is required/i)).toBeInTheDocument()
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument()
    expect(screen.getByText(/Message is required/i)).toBeInTheDocument()
  })

  it('validates email format', () => {
    render(<ContactForm onSubmit={mockOnSubmit} />)

    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'invalid-email' } })
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John' } })
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hello' } })
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }))

    expect(screen.getByText(/Enter a valid email address/i)).toBeInTheDocument()
  })

  it('submits form with valid data', async () => {
    mockOnSubmit.mockResolvedValueOnce(Promise.resolve())
    render(<ContactForm onSubmit={mockOnSubmit} />)

    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } })
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } })
    fireEvent.change(screen.getByLabelText(/Company/i), { target: { value: 'Acme Corp' } })
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Test message' } })
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }))

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        name: 'John Doe',
        email: 'john@example.com',
        company: 'Acme Corp',
        message: 'Test message'
      })
    })
  })

  it('shows success message after submission', async () => {
    mockOnSubmit.mockResolvedValueOnce(Promise.resolve())
    render(<ContactForm onSubmit={mockOnSubmit} successMessage="Thanks!" />)

    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'Jane' } })
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'jane@example.com' } })
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hi' } })
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }))

    await waitFor(() => {
      expect(screen.getByText('Thanks!')).toBeInTheDocument()
    })
  })

  it('shows success view after successful submission', async () => {
    mockOnSubmit.mockResolvedValueOnce(Promise.resolve())
    render(<ContactForm onSubmit={mockOnSubmit} />)

    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John' } })
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } })
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hello' } })
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }))

    await waitFor(() => {
      expect(screen.getByText('Message Sent')).toBeInTheDocument()
    })
  })

  it('disables button during submission', async () => {
    mockOnSubmit.mockImplementationOnce(() => new Promise(resolve => setTimeout(resolve, 100)))
    render(<ContactForm onSubmit={mockOnSubmit} />)

    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John' } })
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } })
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Test' } })
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }))

    expect(screen.getByRole('button')).toBeDisabled()
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })
})
