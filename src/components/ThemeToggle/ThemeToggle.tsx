import { useTheme } from '../../hooks/useTheme'
import { Icon } from '../Icon'
import styles from './ThemeToggle.module.scss'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'
  const label = isDark ? 'Açık temaya geç' : 'Koyu temaya geç'

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-pressed={isDark}
      title={label}
    >
      <Icon name={isDark ? 'sun' : 'moon'} size={18} />
      <span className="visually-hidden">{label}</span>
    </button>
  )
}
