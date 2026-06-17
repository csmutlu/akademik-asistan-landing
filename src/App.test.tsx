import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('başlıkta marka ve birincil gezinmeyi gösterir', () => {
    render(<App />)
    expect(
      screen.getByRole('link', { name: /akademik asistan/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('navigation', { name: /birincil/i }),
    ).toBeInTheDocument()
  })

  it('içeriğe atlama bağlantısı sunar', () => {
    render(<App />)
    expect(
      screen.getByRole('link', { name: 'İçeriğe geç' }),
    ).toBeInTheDocument()
  })
})
