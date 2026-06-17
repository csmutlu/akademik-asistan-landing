import { useEffect, useState } from 'react'
import { Logo } from '../../components/Logo'
import { ThemeToggle } from '../../components/ThemeToggle'
import { Icon } from '../../components/Icon'
import styles from './Header.module.scss'

const links = [
  { href: '#ozellikler', label: 'Özellikler' },
  { href: '#roller', label: 'Roller' },
  { href: '#fiyatlandirma', label: 'Fiyatlandırma' },
  { href: '#sss', label: 'SSS' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a
          href="#main"
          className={styles.brand}
          aria-label="Akademik Asistan — ana sayfa"
        >
          <Logo />
        </a>

        <nav className={styles.nav} aria-label="Birincil">
          <ul className={styles.navList}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <a href="#iletisim" className={styles.cta}>
            Demo talep et
          </a>
          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={open}
            aria-controls="mobil-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? 'close' : 'menu'} />
            <span className="visually-hidden">Menü</span>
          </button>
        </div>
      </div>

      <div id="mobil-menu" className={styles.mobileMenu} hidden={!open}>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#iletisim"
              className={styles.mobileCta}
              onClick={() => setOpen(false)}
            >
              Demo talep et
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
