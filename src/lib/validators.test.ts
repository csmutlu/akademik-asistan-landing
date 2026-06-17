import { describe, it, expect } from 'vitest'
import { isValidEmail, validateContact } from './validators'

describe('isValidEmail', () => {
  it('geçerli adresleri kabul eder', () => {
    expect(isValidEmail('ada@ktun.edu.tr')).toBe(true)
    expect(isValidEmail('  bilgi@akademikasistan.com  ')).toBe(true)
  })

  it('geçersiz adresleri reddeder', () => {
    expect(isValidEmail('abc')).toBe(false)
    expect(isValidEmail('a@b')).toBe(false)
    expect(isValidEmail('a@b.')).toBe(false)
    expect(isValidEmail('')).toBe(false)
  })
})

describe('validateContact', () => {
  it('tüm alanlar boşken her alan için hata üretir', () => {
    const errors = validateContact({
      kurum: '',
      ad: '',
      eposta: '',
      rol: '',
      mesaj: '',
    })
    expect(Object.keys(errors)).toHaveLength(5)
  })

  it('geçersiz e-posta için hata üretir', () => {
    const errors = validateContact({
      kurum: 'KTÜN',
      ad: 'Ada Yılmaz',
      eposta: 'gecersiz',
      rol: 'rektorluk',
      mesaj: 'Merhaba',
    })
    expect(errors.eposta).toBeDefined()
    expect(errors.kurum).toBeUndefined()
  })

  it('geçerli veride hata üretmez', () => {
    const errors = validateContact({
      kurum: 'KTÜN',
      ad: 'Ada Yılmaz',
      eposta: 'ada@ktun.edu.tr',
      rol: 'rektorluk',
      mesaj: 'Demo talep ediyoruz.',
    })
    expect(errors).toEqual({})
  })
})
