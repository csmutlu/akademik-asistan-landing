import styles from './Logo.module.scss'

type LogoProps = {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <span className={[styles.logo, className].filter(Boolean).join(' ')}>
      <svg
        className={styles.mark}
        viewBox="0 0 32 32"
        width="30"
        height="30"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M16 5 3 11l13 6 10-4.6V19h2v-8.5z" fill="currentColor" />
        <path
          d="M8 15.4v4.1c0 1.9 3.6 3.4 8 3.4s8-1.5 8-3.4v-4.1L16 19z"
          fill="currentColor"
          opacity="0.55"
        />
      </svg>
      <span className={styles.word}>
        Akademik <span className={styles.accent}>Asistan</span>
      </span>
    </span>
  )
}
