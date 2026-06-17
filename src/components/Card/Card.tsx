import type { ElementType, HTMLAttributes, ReactNode } from 'react'
import styles from './Card.module.scss'

type CardProps = {
  as?: ElementType
  interactive?: boolean
  highlight?: boolean
  padding?: 'sm' | 'md' | 'lg'
  className?: string
  children: ReactNode
} & Omit<HTMLAttributes<HTMLElement>, 'className' | 'children'>

export function Card({
  as: Tag = 'div',
  interactive = false,
  highlight = false,
  padding = 'md',
  className,
  children,
  ...rest
}: CardProps) {
  const cls = [
    styles.card,
    styles[`pad-${padding}`],
    interactive ? styles.interactive : null,
    highlight ? styles.highlight : null,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={cls} {...rest}>
      {children}
    </Tag>
  )
}
