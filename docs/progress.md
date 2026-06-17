# İlerleme Notları

Önerilen süre: 4 iş günü. Aşağıda her gün için kısa ilerleme notu tutulur.

## Gün 1 — Temel ve tasarım sistemi

- Proje Vite + React + TypeScript ile kuruldu, demo şablonu temizlendi.
- Araç zinciri: SCSS, ESLint (jsx-a11y) + Prettier, Vitest + Testing Library.
  ESLint, jsx-a11y henüz desteklemediği için kararlı 9 sürümüne sabitlendi.
- Tasarım token'ları (renk, yarıçap, gölge, tipografi, hareket) ve açık/koyu
  tema; tema CSS değişkenleriyle, başlangıç değeri sistem tercihi veya kayıtlı
  seçim, boyama öncesi script ile FOUC engellendi.
- Duyarlı başlık (mobil menü, Esc ile kapatma) ve alt bilgi; "İçeriğe geç"
  atlama bağlantısı.
- GitHub Actions CI (lint, biçim, tip kontrolü, test, derleme).

## Gün 2 — UI bileşen kütüphanesi

- Sıfırdan, harici UI kütüphanesi olmadan 5 bileşen; her biri ayrı klasör,
  `.module.scss` ve props ile yapılandırılabilir:
  - **Button** — primary/secondary/ghost varyant, sm/md/lg boyut, loading,
    `href` ile bağlantı modu.
  - **Input** — etiket + ipucu + hata; `aria-invalid` / `aria-describedby`;
    çok satırlı (textarea) ve seçim (select) varyantları.
  - **Card** — `as` ile polimorfik, etkileşimli ve vurgulu varyantlar.
  - **Modal** — portal, `role="dialog"` + `aria-modal`, odak tuzağı, Esc ve
    arka plana tıklayarak kapatma, kaydırma kilidi, odağı geri verme.
  - **Accordion** — `aria-expanded`/`aria-controls`, ok/Home/End ile klavye
    gezinmesi, tek veya çoklu açılım.
- Vitest + Testing Library ile 20 test (davranış + erişilebilirlik).

## Gün 3 — Landing bölümleri ve içerik

- Ürün konumlandırması: tüketici uygulaması değil, üniversitelere SaaS olarak
  sunulan çok kiracılı kurumsal akademik yönetim platformu (B2B). İçerik gerçek
  ürün bilgisi ve ürün brief'i temel alınarak yazıldı.
- Bölümler: Hero (dekoratif ürün önizleme + "Hızlı bakış" modalı), Sorun→Çözüm
  (OBS/LMS boşluğu), Özellikler (6 kart), Öğrenci deneyimi şeridi, Roller (5
  rol), Fiyatlandırma (kurumsal planlar + aylık/yıllık değiştirici), SSS
  (Accordion), İletişim (kurumsal demo talep formu).
- Form doğrulama: e-posta formatı ve boş alan kontrolleri, satır içi uyarılar;
  başarılı gönderimde onay modalı (yalancı submit).
- Tüm metin Türkçe ve `src/lib/content.ts` içinde toplandı. Test sayısı 25'e
  çıktı. Derleme: ~70 kB gz JS, ~5,6 kB gz CSS.
