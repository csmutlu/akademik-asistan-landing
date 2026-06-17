import { Section } from '../../components/Section'
import { Accordion } from '../../components/Accordion'
import { faqs } from '../../lib/content'
import styles from './Faq.module.scss'

export function Faq() {
  return (
    <Section
      id="sss"
      eyebrow="SSS"
      title="Sık sorulan sorular"
      intro="Kurumsal kurulum, entegrasyon ve güvenlik hakkında en çok merak edilenler."
    >
      <div className={styles.wrap}>
        <Accordion items={faqs} />
      </div>
    </Section>
  )
}
