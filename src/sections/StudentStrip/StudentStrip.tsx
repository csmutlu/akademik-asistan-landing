import { Icon } from '../../components/Icon'
import { studentExperience } from '../../lib/content'
import styles from './StudentStrip.module.scss'

export function StudentStrip() {
  return (
    <section className={styles.strip}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <h2 className={styles.title}>Öğrenciye modern mobil deneyim</h2>
          <p className={styles.text}>
            Kurumların en sık karşılaştığı sorunlardan biri, öğrenci tarafında
            modern bir mobil deneyim sunamamaktır. Akademik Asistan tüm günlük
            akademik akışları tek ve hızlı bir mobil uygulamada toplar — bu da
            kurumunuz için doğrudan bir memnuniyet ve itibar kazancıdır.
          </p>
        </div>
        <ul className={styles.chips}>
          {studentExperience.map((item) => (
            <li key={item}>
              <Icon name="check" size={15} /> {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
