import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Card } from '../components/Card'

describe('Card', () => {
  it('renders children correctly', () => {
    render(<Card>Card content</Card>)
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('applies default flat variant styles', () => {
    const { container } = render(<Card>Flat card</Card>)
    expect(container.firstChild).toHaveClass('bg-surface')
    expect(container.firstChild).toHaveClass('border')
  })

  it('applies elevated variant with shadow', () => {
    const { container } = render(<Card variant="elevated">Elevated card</Card>)
    expect(container.firstChild).toHaveClass('shadow-md')
  })

  it('applies outlined variant with transparent background', () => {
    const { container } = render(<Card variant="outlined">Outlined card</Card>)
    expect(container.firstChild).toHaveClass('bg-transparent')
  })

  it('respects padding props', () => {
    const { rerender, container } = render(<Card padding="sm">Small padding</Card>)
    expect(container.firstChild).toHaveClass('p-4')

    rerender(<Card padding="lg">Large padding</Card>)
    expect(container.firstChild).toHaveClass('p-8')
  })

  it('applies hover class when hover prop is true', () => {
    const { container } = render(<Card hover>Hover card</Card>)
    expect(container.firstChild).toHaveClass('transition-shadow')
  })

  it('forwards additional className', () => {
    const { container } = render(<Card className="custom-class">Custom</Card>)
    expect(container.firstChild).toHaveClass('custom-class')
  })
})
