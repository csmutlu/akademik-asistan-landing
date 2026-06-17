import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Input } from './Input'

describe('Input', () => {
  it('etiketi kontrolle ilişkilendirir', () => {
    render(<Input label="Ad Soyad" />)
    expect(screen.getByLabelText('Ad Soyad')).toBeInTheDocument()
  })

  it('hata mesajını gösterir ve aria-invalid uygular', () => {
    render(<Input label="Kurumsal e-posta" error="Geçerli bir e-posta girin" />)
    const field = screen.getByLabelText('Kurumsal e-posta')
    const alert = screen.getByRole('alert')

    expect(field).toHaveAttribute('aria-invalid', 'true')
    expect(alert).toHaveTextContent('Geçerli bir e-posta girin')
    expect(field.getAttribute('aria-describedby')).toContain(alert.id)
  })

  it('multiline verildiğinde textarea üretir', () => {
    render(<Input label="Mesaj" multiline />)
    expect(screen.getByLabelText('Mesaj').tagName).toBe('TEXTAREA')
  })

  it('options verildiğinde select üretir', () => {
    render(
      <Input
        label="Rol"
        options={[{ value: 'rektorluk', label: 'Rektörlük' }]}
      />,
    )
    expect(screen.getByLabelText('Rol').tagName).toBe('SELECT')
  })
})
