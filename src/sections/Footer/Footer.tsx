import { Logo } from '../../components/Logo'
import styles from './Footer.module.scss'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandCol}>
          <Logo />
          <p className={styles.tagline}>
            Üniversiteler için çok kiracılı kurumsal akademik yönetim platformu.
          </p>
        </div>

        <nav className={styles.col} aria-label="Ürün bağlantıları">
          <h2 className={styles.colTitle}>Ürün</h2>
          <ul>
            <li>
              <a href="#ozellikler">Özellikler</a>
            </li>
            <li>
              <a href="#roller">Roller</a>
            </li>
            <li>
              <a href="#fiyatlandirma">Fiyatlandırma</a>
            </li>
            <li>
              <a href="#sss">SSS</a>
            </li>
          </ul>
        </nav>

        <div className={styles.col}>
          <h2 className={styles.colTitle}>İletişim</h2>
          <ul>
            <li>
              <a href="#iletisim">Demo talep et</a>
            </li>
            <li>
              <a href="mailto:info@akademikasistan.com">
                info@akademikasistan.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {year} Akademik Asistan. Tüm hakları saklıdır.</p>
        <p>Konya, Türkiye</p>
      </div>
    </footer>
  )
}
