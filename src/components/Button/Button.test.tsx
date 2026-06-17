import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  it('varsayılan olarak type="button" üretir', () => {
    render(<Button>Gönder</Button>)
    expect(screen.getByRole('button', { name: 'Gönder' })).toHaveAttribute(
      'type',
      'button',
    )
  })

  it('tıklama olayını iletir', async () => {
    const onClick = vi.fn()
    const user = userEvent.setup()
    render(<Button onClick={onClick}>Tıkla</Button>)
    await user.click(screen.getByRole('button', { name: 'Tıkla' }))
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('href verildiğinde bağlantı olarak işlenir', () => {
    render(<Button href="#iletisim">Demo</Button>)
    expect(screen.getByRole('link', { name: 'Demo' })).toHaveAttribute(
      'href',
      '#iletisim',
    )
  })

  it('loading durumunda devre dışı kalır ve aria-busy alır', () => {
    render(<Button loading>Kaydet</Button>)
    const button = screen.getByRole('button', { name: 'Kaydet' })
    expect(button).toBeDisabled()
    expect(button).toHaveAttribute('aria-busy', 'true')
  })
})
