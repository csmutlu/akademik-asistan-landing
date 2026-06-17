import { useRef, useState } from 'react'
import type { KeyboardEvent, ReactNode } from 'react'
import { Icon } from '../Icon'
import styles from './Accordion.module.scss'

export type AccordionItem = {
  id: string
  question: string
  answer: ReactNode
}

type AccordionProps = {
  items: AccordionItem[]
  allowMultiple?: boolean
  defaultOpen?: string[]
}

export function Accordion({
  items,
  allowMultiple = false,
  defaultOpen = [],
}: AccordionProps) {
  const [open, setOpen] = useState<string[]>(defaultOpen)
  const headerRefs = useRef<(HTMLButtonElement | null)[]>([])

  function toggle(id: string) {
    setOpen((prev) => {
      const isOpen = prev.includes(id)
      if (allowMultiple) {
        return isOpen ? prev.filter((value) => value !== id) : [...prev, id]
      }
      return isOpen ? [] : [id]
    })
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = items.length - 1
    let next: number | null = null

    if (event.key === 'ArrowDown') next = index === last ? 0 : index + 1
    else if (event.key === 'ArrowUp') next = index === 0 ? last : index - 1
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = last

    if (next !== null) {
      event.preventDefault()
      headerRefs.current[next]?.focus()
    }
  }

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const expanded = open.includes(item.id)
        const headingId = `${item.id}-header`
        const panelId = `${item.id}-panel`

        return (
          <div key={item.id} className={styles.item}>
            <h3 className={styles.heading}>
              <button
                ref={(element) => {
                  headerRefs.current[index] = element
                }}
                type="button"
                id={headingId}
                className={styles.trigger}
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                onKeyDown={(event) => onKeyDown(event, index)}
              >
                <span>{item.question}</span>
                <Icon
                  name="chevronDown"
                  className={expanded ? styles.iconOpen : styles.icon}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              className={styles.panel}
              hidden={!expanded}
            >
              <div className={styles.answer}>{item.answer}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
