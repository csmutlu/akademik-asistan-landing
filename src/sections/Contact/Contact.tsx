import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { Section } from '../../components/Section'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Modal } from '../../components/Modal'
import { Icon } from '../../components/Icon'
import { validateContact } from '../../lib/validators'
import type { ContactErrors, ContactValues } from '../../lib/validators'
import styles from './Contact.module.scss'

const roleOptions = [
  { value: 'rektorluk', label: 'Rektörlük' },
  { value: 'bilgi-islem', label: 'Bilgi İşlem Daire Başkanlığı' },
  { value: 'dekanlik', label: 'Dekanlık / Bölüm' },
  { value: 'diger', label: 'Diğer' },
]

const emptyForm: ContactValues = {
  kurum: '',
  ad: '',
  eposta: '',
  rol: '',
  mesaj: '',
}

type FormField = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>

export function Contact() {
  const [values, setValues] = useState<ContactValues>(emptyForm)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [done, setDone] = useState(false)

  function update(field: keyof ContactValues) {
    return (event: FormField) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }))
    }
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    const found = validateContact(values)
    setErrors(found)
    if (Object.keys(found).length === 0) {
      setDone(true)
      setValues(emptyForm)
    }
  }

  return (
    <Section
      id="iletisim"
      eyebrow="İletişim"
      title="Kurumunuz için demo talep edin"
      intro="Formu doldurun; ekibimiz kurumunuza özel bir demo ve teklifle dönsün."
    >
      <div className={styles.layout}>
        <form className={styles.form} onSubmit={onSubmit} noValidate>
          <div className={styles.row}>
            <Input
              label="Kurum adı"
              value={values.kurum}
              onChange={update('kurum')}
              error={errors.kurum}
              required
              placeholder="Örn. Konya Teknik Üniversitesi"
            />
            <Input
              label="Ad Soyad"
              value={values.ad}
              onChange={update('ad')}
              error={errors.ad}
              required
            />
          </div>
          <div className={styles.row}>
            <Input
              label="Kurumsal e-posta"
              type="email"
              value={values.eposta}
              onChange={update('eposta')}
              error={errors.eposta}
              required
              placeholder="ad@universite.edu.tr"
            />
            <Input
              label="Rol"
              options={roleOptions}
              placeholder="Seçiniz"
              value={values.rol}
              onChange={update('rol')}
              error={errors.rol}
              required
            />
          </div>
          <Input
            label="Mesaj"
            multiline
            value={values.mesaj}
            onChange={update('mesaj')}
            error={errors.mesaj}
            required
            placeholder="İhtiyaçlarınızı ve kapsamı kısaca yazın."
          />
          <Button type="submit" size="lg">
            Demo talep et
          </Button>
          <p className={styles.note}>
            Bu bir tanıtım formudur; gönderim gerçek bir sunucuya iletilmez.
          </p>
        </form>

        <aside className={styles.aside}>
          <h3 className={styles.asideTitle}>Doğrudan ulaşın</h3>
          <ul className={styles.contactList}>
            <li>
              <Icon name="link" size={18} />
              <a href="mailto:kurumsal@akademikasistan.com">
                kurumsal@akademikasistan.com
              </a>
            </li>
            <li>
              <Icon name="monitor" size={18} />
              <a href="https://akademikasistan.com">akademikasistan.com</a>
            </li>
            <li>
              <Icon name="users" size={18} />
              Konya Teknik Üniversitesi · Konya
            </li>
          </ul>

          <ul className={styles.points}>
            <li>
              <Icon name="check" size={16} /> 30 dakikalık kurumsal demo
            </li>
            <li>
              <Icon name="check" size={16} /> Pilot fakülteyle hızlı başlangıç
            </li>
            <li>
              <Icon name="check" size={16} /> Kuruluş ve geçiş desteği
            </li>
          </ul>
        </aside>
      </div>

      <Modal
        open={done}
        onClose={() => setDone(false)}
        title="Talebiniz alındı"
      >
        <p>
          Demo talebiniz için teşekkürler. Ekibimiz en kısa sürede kurumunuza
          özel bir demo planıyla size dönecek.
        </p>
        <div className={styles.modalCta}>
          <Button onClick={() => setDone(false)} fullWidth>
            Tamam
          </Button>
        </div>
      </Modal>
    </Section>
  )
}
