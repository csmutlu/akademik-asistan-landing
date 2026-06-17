import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Card } from './Card'

describe('Card', () => {
  it('verilen "as" elemanıyla işlenir', () => {
    render(<Card as="article">İçerik</Card>)
    expect(screen.getByText('İçerik').tagName).toBe('ARTICLE')
  })

  it('varsayılan olarak div üretir', () => {
    render(<Card>Kutu</Card>)
    expect(screen.getByText('Kutu').tagName).toBe('DIV')
  })
})
