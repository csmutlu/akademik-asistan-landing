import { Section } from '../../components/Section'
import { Card } from '../../components/Card'
import { roles } from '../../lib/content'
import styles from './Roles.module.scss'

export function Roles() {
  return (
    <Section
      id="roller"
      eyebrow="Roller"
      title="Her role uygun, ayrı yetkiler"
      intro="Sistem; öğrenci, akademisyen, ders asistanı, fakülte/bölüm yetkilisi ve yönetici rollerinin farklı yetkilerle çalıştığı biçimde tasarlanmıştır."
    >
      <div className={styles.grid}>
        {roles.map((role, index) => (
          <Card key={role.title} as="article" className={styles.card}>
            <span className={styles.num}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className={styles.title}>{role.title}</h3>
            <p className={styles.desc}>{role.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
