import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Accordion } from './Accordion'

const items = [
  { id: 's1', question: 'Soru bir', answer: 'Cevap bir' },
  { id: 's2', question: 'Soru iki', answer: 'Cevap iki' },
]

describe('Accordion', () => {
  it('başlangıçta tüm paneller kapalıdır', () => {
    render(<Accordion items={items} />)
    expect(screen.getByRole('button', { name: 'Soru bir' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('tıklayınca ilgili paneli açar', async () => {
    const user = userEvent.setup()
    render(<Accordion items={items} />)
    const trigger = screen.getByRole('button', { name: 'Soru bir' })
    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('Cevap bir')).toBeVisible()
  })

  it('ok tuşuyla bir sonraki başlığa odak taşır', async () => {
    const user = userEvent.setup()
    render(<Accordion items={items} />)
    screen.getByRole('button', { name: 'Soru bir' }).focus()
    await user.keyboard('{ArrowDown}')
    expect(screen.getByRole('button', { name: 'Soru iki' })).toHaveFocus()
  })

  it('tek açılım modunda öncekini kapatır', async () => {
    const user = userEvent.setup()
    render(<Accordion items={items} />)
    await user.click(screen.getByRole('button', { name: 'Soru bir' }))
    await user.click(screen.getByRole('button', { name: 'Soru iki' }))
    expect(screen.getByRole('button', { name: 'Soru bir' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
