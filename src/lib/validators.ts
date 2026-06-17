export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

export type ContactValues = {
  kurum: string
  ad: string
  eposta: string
  rol: string
  mesaj: string
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {}

  if (!values.kurum.trim()) errors.kurum = 'Kurum adı gerekli.'
  if (!values.ad.trim()) errors.ad = 'Ad soyad gerekli.'

  if (!values.eposta.trim()) {
    errors.eposta = 'E-posta gerekli.'
  } else if (!isValidEmail(values.eposta)) {
    errors.eposta = 'Geçerli bir e-posta adresi girin.'
  }

  if (!values.rol) errors.rol = 'Lütfen bir rol seçin.'
  if (!values.mesaj.trim()) errors.mesaj = 'Mesaj gerekli.'

  return errors
}
