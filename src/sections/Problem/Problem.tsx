import { Section } from '../../components/Section'
import { Card } from '../../components/Card'
import { Icon } from '../../components/Icon'
import styles from './Problem.module.scss'

const scattered = [
  'OBS portalı',
  'LMS / uzaktan eğitim',
  'E-posta listeleri',
  'Sosyal medya kanalları',
  'Excel tabloları',
]

const unified = [
  'QR yoklama',
  'Ödev & doküman',
  'Duyurular',
  'Yemekhane menüsü',
  'Anlık bildirim',
]

export function Problem() {
  return (
    <Section
      id="cozum"
      eyebrow="Sorun → Çözüm"
      title="OBS ve LMS arasındaki operasyonel boşluk"
      intro="Üniversiteler kayıt ve içerik süreçlerini OBS ile LMS üzerinden yönetir; ancak günlük operasyonel akışlar kopuk kanallara dağılır. Akademik Asistan tam da bu boşluğu kapatır."
    >
      <div className={styles.grid}>
        <Card as="article" padding="lg" className={styles.col}>
          <h3 className={styles.colTitle}>Bugün: dağınık kanallar</h3>
          <ul className={styles.list}>
            {scattered.map((item) => (
              <li key={item} className={styles.bad}>
                <Icon name="close" size={16} /> {item}
              </li>
            ))}
          </ul>
        </Card>

        <div className={styles.arrow} aria-hidden="true">
          <Icon name="arrowRight" size={24} />
        </div>

        <Card as="article" padding="lg" highlight className={styles.col}>
          <h3 className={styles.colTitle}>
            Akademik Asistan ile: tek platform
          </h3>
          <ul className={styles.list}>
            {unified.map((item) => (
              <li key={item} className={styles.good}>
                <Icon name="check" size={16} /> {item}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  )
}
