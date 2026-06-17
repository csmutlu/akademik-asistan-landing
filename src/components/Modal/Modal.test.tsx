import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Modal } from './Modal'

describe('Modal', () => {
  it('açıkken dialog rolü ve başlığı gösterir', () => {
    render(
      <Modal open onClose={() => {}} title="Hızlı bakış">
        İçerik
      </Modal>,
    )
    expect(
      screen.getByRole('dialog', { name: 'Hızlı bakış' }),
    ).toBeInTheDocument()
  })

  it('kapalıyken hiçbir şey render etmez', () => {
    render(
      <Modal open={false} onClose={() => {}} title="Gizli">
        İçerik
      </Modal>,
    )
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('Escape tuşu onClose çağırır', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(
      <Modal open onClose={onClose} title="Test">
        İçerik
      </Modal>,
    )
    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalled()
  })

  it('kapat düğmesi onClose çağırır', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(
      <Modal open onClose={onClose} title="Test">
        İçerik
      </Modal>,
    )
    await user.click(screen.getByRole('button', { name: 'Kapat' }))
    expect(onClose).toHaveBeenCalled()
  })
})
