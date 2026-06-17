import type { IconName } from '../components/Icon'

export type Feature = {
  icon: IconName
  title: string
  description: string
}

export const features: Feature[] = [
  {
    icon: 'layers',
    title: 'Çok kiracılı mimari',
    description:
      'Tek kod tabanı, kuruma özel yapılandırma. Her üniversitenin verisi mantıksal olarak izole edilir.',
  },
  {
    icon: 'users',
    title: 'Rol tabanlı yetkilendirme',
    description:
      'Öğrenci, akademisyen, ders asistanı, fakülte yetkilisi ve yönetici için ayrı ayrı tanımlı yetkiler.',
  },
  {
    icon: 'qr',
    title: 'QR yoklama ve ders akışı',
    description:
      'QR ile saniyeler içinde yoklama; ödev, doküman ve duyuru tek operasyonel akışta toplanır.',
  },
  {
    icon: 'link',
    title: 'OBS & LMS boşluğunu kapatır',
    description:
      'Mevcut öğrenci bilgi sistemi ile öğrenme yönetim sistemi arasındaki kopukluğu tek platformda giderir.',
  },
  {
    icon: 'bell',
    title: 'Otomatik bildirim altyapısı',
    description:
      'Duyuru, hatırlatma ve anlık bildirimler için merkezi, ölçeklenebilir ve güvenilir altyapı.',
  },
  {
    icon: 'monitor',
    title: 'Web + mobil, kuruma özel marka',
    description:
      'Öğrenciye modern mobil deneyim; her kurum kendi logosu ve renk kimliğiyle yayına alır.',
  },
]

export type Role = {
  title: string
  description: string
}

export const roles: Role[] = [
  {
    title: 'Öğrenci',
    description:
      'Ders programı, yoklama, ödev, doküman, duyuru ve yemekhaneyi tek uygulamadan takip eder.',
  },
  {
    title: 'Akademisyen',
    description: 'Ders yönetimi, değerlendirme ve içerik paylaşımını yürütür.',
  },
  {
    title: 'Ders asistanı',
    description:
      'İlgili ders kapsamında ödev, doküman, yoklama ve sınav takibini yapar.',
  },
  {
    title: 'Fakülte / bölüm yetkilisi',
    description:
      'Yemekhane menüsü ve bölüm duyurusu gibi kurumsal verileri sisteme girer.',
  },
  {
    title: 'Yönetici',
    description:
      'Kurum genelinde yapılandırma, rol yönetimi ve raporlamadan sorumludur.',
  },
]

export const studentExperience: string[] = [
  'Ders programı',
  'QR yoklama',
  'Ödev & doküman',
  'Duyurular',
  'Yemekhane menüsü',
  'Anlık bildirim',
]

export type Plan = {
  name: string
  tagline: string
  monthly: number | null
  annual: number | null
  unit: string
  features: string[]
  cta: string
  highlight: boolean
}

export const plans: Plan[] = [
  {
    name: 'Pilot / Fakülte',
    tagline: 'Tek fakülte veya bölümle başlayın',
    monthly: 9,
    annual: 7,
    unit: 'öğrenci / ay',
    features: [
      'Tek fakülte kapsamı',
      'QR yoklama, ödev, doküman',
      'Duyuru ve bildirim',
      'Web + mobil erişim',
      'E-posta desteği',
    ],
    cta: 'Pilot başlat',
    highlight: false,
  },
  {
    name: 'Kampüs',
    tagline: 'Tüm üniversite, tüm roller',
    monthly: 7,
    annual: 5,
    unit: 'öğrenci / ay',
    features: [
      'Tüm kampüs ve roller',
      'Çok kiracılı veri izolasyonu',
      'OBS / LMS ile bütünleşme',
      'Kuruma özel marka kimliği',
      'Öncelikli destek + kurulum',
    ],
    cta: 'Demo talep et',
    highlight: true,
  },
  {
    name: 'Kurumsal',
    tagline: 'Çoklu kampüs ve özel entegrasyon',
    monthly: null,
    annual: null,
    unit: '',
    features: [
      'Çoklu kampüs / vakıf yapıları',
      'Özel entegrasyon ve SLA',
      'Tek oturum (SSO) ve denetim',
      'Bakım, güncelleme, sürüm yönetimi',
      'Özel teknik hesap yöneticisi',
    ],
    cta: 'İletişime geç',
    highlight: false,
  },
]

export type Faq = {
  id: string
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    id: 'veri-izolasyonu',
    question: 'Kurumumuzun verisi diğer üniversitelerden nasıl ayrılıyor?',
    answer:
      'Çok kiracılı mimaride her kurumun verisi mantıksal olarak izole edilir. Roller ve erişim kuralları kurum bazında tanımlanır; bir kurumun verisine yalnızca o kurumun yetkili kullanıcıları erişebilir.',
  },
  {
    id: 'obs-lms',
    question: 'Mevcut OBS ve LMS sistemlerimizle entegre olur mu?',
    answer:
      'Evet. Akademik Asistan, OBS ve LMS arasındaki operasyonel boşluğu kapatacak şekilde tasarlandı; yoklama, ödev, doküman, duyuru ve bildirim akışlarını tek platformda toplar ve mevcut sistemlerinizle birlikte çalışır.',
  },
  {
    id: 'marka',
    question: 'Kendi logomuz ve kurumsal renklerimizle kullanabilir miyiz?',
    answer:
      'Evet. Platform kuruma göre parametriktir; her üniversite kendi marka kimliği, dönem yapısı, ders kataloğu ve yönetmeliğiyle yapılandırılabilir.',
  },
  {
    id: 'kurulum',
    question: 'Kurulum, geçiş ve destek süreci nasıl işliyor?',
    answer:
      'Kurulum sonrası bakım, güncelleme, sürüm yönetimi ve teknik destek hizmetleri sağlanır. Geçiş; pilot fakülteyle başlayıp aşamalı olarak tüm kampüse yaygınlaştırılabilir.',
  },
  {
    id: 'kvkk',
    question: 'Veri güvenliği ve KVKK uyumu nasıl sağlanıyor?',
    answer:
      'Güvenli kimlik doğrulama, rol tabanlı yetkilendirme ve kurum bazında veri izolasyonu temel alınır. Kişisel veriler KVKK ilkelerine uygun biçimde işlenir ve saklanır.',
  },
  {
    id: 'platform',
    question: 'Hem web hem mobil kapsama dahil mi?',
    answer:
      'Evet. Yönetim ve kurumsal işlemler web panelinden, öğrenci deneyimi ise modern mobil uygulamadan sunulur. İki taraf aynı kurumsal platform üzerinde çalışır.',
  },
]
