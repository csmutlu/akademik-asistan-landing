import { useState } from 'react'
import { Button } from '../../components/Button'
import { Modal } from '../../components/Modal'
import { Icon } from '../../components/Icon'
import urunPaneli from '../../assets/urun-paneli.webp'
import styles from './Hero.module.scss'

export function Hero() {
  const [demoOpen, setDemoOpen] = useState(false)

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
              variant="secondary"
              size="lg"
              onClick={() => setDemoOpen(true)}
            >
              Hızlı bakış
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
              width={1400}
              height={518}
              alt="Akademik Asistan öğrenci web paneli ve mobil panel ekran görüntüsü"
              className={styles.shot}
            />
          </div>
        </div>
      </div>

      <Modal
        open={demoOpen}
        onClose={() => setDemoOpen(false)}
        title="Hızlı bakış"
      >
        <p>
          Demoda, bir üniversitenin günlük akademik operasyonunu tek panelden
          nasıl yönettiğini görürsünüz:
        </p>
        <ul className={styles.demoList}>
          <li>Rol bazlı paneller: öğrenci, akademisyen, yönetici</li>
          <li>QR yoklama ve ders bazlı ödev / doküman akışı</li>
          <li>Duyuru, yemekhane ve anlık bildirim yönetimi</li>
          <li>Çok kiracılı yapı ve kuruma özel marka kimliği</li>
        </ul>
        <div className={styles.demoCta}>
          <Button href="#iletisim" onClick={() => setDemoOpen(false)} fullWidth>
            Kurumunuz için demo talep edin
          </Button>
        </div>
      </Modal>
    </section>
  )
}
