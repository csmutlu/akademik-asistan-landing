import styles from './Logo.module.scss'

type LogoProps = {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <span className={[styles.logo, className].filter(Boolean).join(' ')}>
      <svg
        className={styles.mark}
        viewBox="0 0 38 40"
        width="30"
        height="31"
        aria-hidden="true"
        focusable="false"
      >
        {/* sohbet balonu */}
        <path
          d="M12 12h12a7 7 0 0 1 7 7v4a7 7 0 0 1-7 7h-5l-4 5v-5h-3a7 7 0 0 1-7-7v-4a7 7 0 0 1 7-7z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        {/* gözler */}
        <circle cx="14.5" cy="18.5" r="1.5" fill="currentColor" />
        <circle cx="21.5" cy="18.5" r="1.5" fill="currentColor" />
        {/* açık kitap */}
        <path
          className={styles.book}
          d="M10 22c3-1 5.5-.8 8 .6 2.5-1.4 5-1.6 8-.6v5.4c-3-1-5.5-.8-8 .5-2.5-1.3-5-1.5-8-.5z"
        />
        {/* mezuniyet kepi */}
        <path d="M18 3 31 8 18 13 5 8z" fill="currentColor" />
        <path
          d="M31 8v6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <circle cx="31" cy="15" r="1.4" fill="currentColor" />
      </svg>
      <span className={styles.word}>
        Akademik <span className={styles.accent}>Asistan</span>
      </span>
    </span>
  )
}
