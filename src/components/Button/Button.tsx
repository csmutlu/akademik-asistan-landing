import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'
import styles from './Button.module.scss'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

type SharedProps = {
  variant?: Variant
  size?: Size
  fullWidth?: boolean
  loading?: boolean
  leftIcon?: ReactNode
  children: ReactNode
}

type ButtonElementProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
    href?: undefined
  }

type AnchorElementProps = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> & {
    href: string
  }

export type ButtonProps = ButtonElementProps | AnchorElementProps

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  leftIcon,
  children,
  className,
  ...rest
}: ButtonProps) {
  const cls = [
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth ? styles.full : null,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const inner = (
    <>
      {loading && <span className={styles.spinner} aria-hidden="true" />}
      {!loading && leftIcon && (
        <span className={styles.icon} aria-hidden="true">
          {leftIcon}
        </span>
      )}
      <span>{children}</span>
    </>
  )

  if ('href' in rest && rest.href !== undefined) {
    return (
      <a className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {inner}
      </a>
    )
  }

  const { type, disabled, ...buttonRest } =
    rest as ButtonHTMLAttributes<HTMLButtonElement>

  return (
    <button
      className={cls}
      type={type ?? 'button'}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...buttonRest}
    >
      {inner}
    </button>
  )
}
