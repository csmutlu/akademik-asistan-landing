import type { ReactNode } from 'react'
import styles from './Section.module.scss'

type SectionProps = {
  id?: string
  eyebrow?: string
  title?: string
  intro?: string
  align?: 'left' | 'center'
  className?: string
  children: ReactNode
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  align = 'left',
  className,
  children,
}: SectionProps) {
  const hasHeader = Boolean(eyebrow || title || intro)

  return (
    <section
      id={id}
      className={[styles.section, className].filter(Boolean).join(' ')}
    >
      <div className="container">
        {hasHeader && (
          <header
            className={[styles.header, align === 'center' ? styles.center : '']
              .filter(Boolean)
              .join(' ')}
          >
            {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
            {title && <h2 className={styles.title}>{title}</h2>}
            {intro && <p className={styles.intro}>{intro}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
