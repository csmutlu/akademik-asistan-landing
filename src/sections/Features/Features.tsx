import { Section } from '../../components/Section'
import { Card } from '../../components/Card'
import { Icon } from '../../components/Icon'
import { features } from '../../lib/content'
import styles from './Features.module.scss'

export function Features() {
  return (
    <Section
      id="ozellikler"
      eyebrow="Özellikler"
      title="Kurumsal akademik operasyon için tasarlandı"
      intro="Çok kiracılı mimariden rol tabanlı yetkilendirmeye, kampüsün günlük akışlarını tek platformda yönetin."
    >
      <div className={styles.grid}>
        {features.map((feature) => (
          <Card
            key={feature.title}
            as="article"
            interactive
            className={styles.card}
          >
            <span className={styles.icon}>
              <Icon name={feature.icon} size={22} />
            </span>
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.desc}>{feature.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
