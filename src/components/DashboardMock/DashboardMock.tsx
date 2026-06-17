import styles from './DashboardMock.module.scss'

const cells = Array.from({ length: 18 }, (_, index) => index)

/** Dekoratif ürün önizlemesi: web paneli + mobil panel. Salt görsel. */
export function DashboardMock() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.browser}>
        <div className={styles.chrome}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.url}>akademikasistan.com</span>
        </div>
        <div className={styles.screen}>
          <aside className={styles.sidebar}>
            <span className={styles.brandDot} />
            <span className={`${styles.nav} ${styles.navActive}`} />
            <span className={styles.nav} />
            <span className={styles.nav} />
            <span className={styles.nav} />
            <span className={styles.nav} />
          </aside>
          <div className={styles.main}>
            <div className={styles.topbar}>
              <span className={styles.heading} />
              <span className={styles.avatar} />
            </div>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <b>%92</b>
                <span />
              </div>
              <div className={styles.stat}>
                <b>3.41</b>
                <span />
              </div>
              <div className={styles.stat}>
                <b>14</b>
                <span />
              </div>
            </div>
            <div className={styles.schedule}>
              {cells.map((index) => (
                <span
                  key={index}
                  className={styles.cell}
                  data-variant={index % 5}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.phone}>
        <div className={styles.phoneScreen}>
          <span className={styles.phoneStatus} />
          <span className={styles.phoneCard} />
          <span className={styles.phoneRow} />
          <span className={styles.phoneRow} />
          <span className={styles.phoneQr} />
        </div>
      </div>
    </div>
  )
}
