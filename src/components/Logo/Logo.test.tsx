import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import styles from './Logo.module.scss'
import { Logo } from './Logo'

describe('Logo', () => {
  it('renders the cropped brand image on a dedicated white surface', () => {
    render(<Logo />)

    const image = screen.getByRole('img', { name: 'Akademik Asistan' })

    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining('akademik-asistan-logo-cropped'),
    )
    expect(image.parentElement).toHaveClass(styles.surface)
  })
})
