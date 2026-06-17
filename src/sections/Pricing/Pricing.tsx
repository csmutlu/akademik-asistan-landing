import { useState } from 'react'
import { Section } from '../../components/Section'
import { Card } from '../../components/Card'
import { Button } from '../../components/Button'
import { Icon } from '../../components/Icon'
import { plans } from '../../lib/content'
import styles from './Pricing.module.scss'

export function Pricing() {
  const [annual, setAnnual] = useState(true)

  return (
    <Section
      id="fiyatlandirma"
      eyebrow="Fiyatlandırma"
      title="Kurumunuza göre ölçeklenen planlar"
      intro="Tek fakülteyle pilot başlatın, tüm kampüse yaygınlaştırın. Aşağıdaki fiyatlar temsilîdir; net teklif için bizimle görüşün."
      align="center"
    >
      <div className={styles.toggle} role="group" aria-label="Ödeme dönemi">
        <button
          type="button"
          className={!annual ? styles.active : undefined}
          aria-pressed={!annual}
          onClick={() => setAnnual(false)}
        >
          Aylık
        </button>
        <button
          type="button"
          className={annual ? styles.active : undefined}
          aria-pressed={annual}
          onClick={() => setAnnual(true)}
        >
          Yıllık
          <span className={styles.save}>−%25</span>
        </button>
      </div>

      <div className={styles.grid}>
        {plans.map((plan) => {
          const price = annual ? plan.annual : plan.monthly
          return (
            <Card
              key={plan.name}
              as="article"
              padding="lg"
              highlight={plan.highlight}
              className={styles.card}
            >
              {plan.highlight && (
                <span className={styles.tag}>En çok tercih edilen</span>
              )}
              <h3 className={styles.name}>{plan.name}</h3>
              <p className={styles.tagline}>{plan.tagline}</p>

              <div className={styles.price}>
                {price === null ? (
                  <span className={styles.custom}>Teklif al</span>
                ) : (
                  <>
                    <span className={styles.amount}>₺{price}</span>
                    <span className={styles.unit}>/ {plan.unit}</span>
                  </>
                )}
              </div>

              <Button
                href="#iletisim"
                variant={plan.highlight ? 'primary' : 'secondary'}
                fullWidth
              >
                {plan.cta}
              </Button>

              <ul className={styles.features}>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Icon name="check" size={16} /> {feature}
                  </li>
                ))}
              </ul>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
