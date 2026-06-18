import logoImage from '../../assets/akademik-asistan-logo-cropped.webp'
import styles from './Logo.module.scss'

type LogoProps = {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <span className={[styles.logo, className].filter(Boolean).join(' ')}>
      <span className={styles.surface}>
        <img
          className={styles.image}
          src={logoImage}
          width="480"
          height="165"
          alt="Akademik Asistan"
          decoding="async"
        />
      </span>
    </span>
  )
}
