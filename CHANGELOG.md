# Değişiklik Günlüğü

Bu projedeki önemli değişiklikler bu dosyada belgelenir.
Biçim [Keep a Changelog](https://keepachangelog.com/tr/1.1.0/) temel alınarak tutulur.

## [Yayımlanmadı]

### Eklendi

- Vite + React + TypeScript proje iskeleti; SCSS, ESLint (a11y kuralları dahil) + Prettier, Vitest + Testing Library kurulumu.
- Tasarım token'ları ve açık/koyu tema sistemi (CSS değişkenleri, sistem tercihi + kalıcı seçim).
- Duyarlı başlık (mobil menü) ve alt bilgi düzeni; "İçeriğe geç" atlama bağlantısı.
- Sürekli entegrasyon iş akışı (lint, biçim, tip kontrolü, test, derleme).
- UI bileşen kütüphanesi: Button, Input, Card, Modal (odak tuzağı), Accordion (klavye gezinme) — her biri props ile yapılandırılabilir ve Vitest ile test edildi.
- Landing bölümleri (B2B/kurumsal, Türkçe): Hero (ürün önizleme + demo modalı), Sorun→Çözüm, Özellikler, Öğrenci deneyimi şeridi, Roller, Fiyatlandırma (dönem değiştirici), SSS (Accordion), demo talep formu (doğrulama + başarı modalı).
- Open Graph / sosyal kart meta'ları ve görseli, `robots.txt` + site haritası, `color-scheme` ipucu. Lighthouse (masaüstü): performans, erişilebilirlik, en iyi uygulamalar ve SEO 100/100.
- README, mimari karar kayıtları (`docs/adr-0001..0005`), GitHub Pages dağıtım iş akışı, Vercel/Netlify yapılandırmaları ve MIT lisansı.
