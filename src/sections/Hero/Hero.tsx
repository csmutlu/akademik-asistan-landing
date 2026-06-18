import { Button } from '../../components/Button'
import { Icon } from '../../components/Icon'
import urunPaneli from '../../assets/urun-paneli.webp'
import urunMobil from '../../assets/urun-mobil.webp'
import styles from './Hero.module.scss'

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.badge}>
            <Icon name="sparkles" size={15} />
            Çok kiracılı akademik yönetim platformu
          </p>

          <h1 className={styles.title}>
            Kampüsünüzün tüm akademik operasyonu,{' '}
            <em>tek kurumsal platformda</em>.
          </h1>

          <p className={styles.lead}>
            Akademik Asistan, OBS ile LMS arasındaki operasyonel boşluğu
            kapatır. QR yoklama, ödev, doküman, duyuru, yemekhane ve bildirimi
            web ve mobilde tek çatı altında toplar.
          </p>

          <div className={styles.actions}>
            <Button href="#iletisim" size="lg">
              Demo talep et
            </Button>
            <Button
              href="https://akademikasistan.com/"
              variant="secondary"
              size="lg"
            >
              Canlı demo
            </Button>
          </div>

          <ul className={styles.points}>
            <li>
              <Icon name="check" size={16} /> Kuruma özel marka
            </li>
            <li>
              <Icon name="check" size={16} /> Veri izolasyonu
            </li>
            <li>
              <Icon name="check" size={16} /> Web + mobil
            </li>
          </ul>
        </div>

        <div className={styles.visual}>
          <div className={styles.frame}>
            <span className={styles.bar} aria-hidden="true">
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
            </span>
            <img
              src={urunPaneli}
              width={1500}
              height={795}
              alt="Akademik Asistan öğrenci web paneli ekran görüntüsü"
              className={styles.shot}
            />
          </div>
          <img
            src={urunMobil}
            width={440}
            height={956}
            alt="Akademik Asistan mobil uygulama ekran görüntüsü"
            className={styles.phone}
          />
        </div>
      </div>
    </section>
  )
}
