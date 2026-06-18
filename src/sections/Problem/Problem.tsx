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
      title="İki ayrı sistem, dağılan günlük işler"
      intro="Üniversiteler kaydı OBS'te, ders içeriğini LMS'te yönetir; ama yoklama, duyuru ve ödev gibi günlük işler e-posta, Excel ve sosyal medyaya dağılır. Akademik Asistan hepsini tek platformda toplar."
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
