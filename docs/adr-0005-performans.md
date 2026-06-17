# ADR-0005: Performans — CSS önizleme ve sistem fontları

- **Durum:** Kabul edildi
- **Tarih:** 2026-06-17

## Bağlam

Görev, görsel optimizasyonu ve en az 90/100 Lighthouse skorunu hedefliyor.
Hero bölümünde bir ürün görseli gerekiyordu.

## Karar

- **Ürün önizlemesi görselle değil, CSS ile çizildi** (`DashboardMock`). Böylece
  hero'da ağır bir ekran görüntüsü ağ yükü oluşmaz ve LCP düşük kalır. Önizleme
  dekoratiftir (`aria-hidden`).
- **Başlıklarda webfont yerine sistem serif yığını** kullanıldı
  (`Iowan/Palatino/Georgia`...). Editöryel görünüm korunurken webfont indirme
  ve düzen kayması (CLS) maliyeti tamamen ortadan kalkar.
- **Yalın bağımlılıklar:** animasyon kütüphanesi yok; geçişler CSS ile.
- **ESLint 9'a sabitleme:** `eslint-plugin-jsx-a11y` henüz 10'u desteklemediği
  için araç zinciri kararlı 9 sürümünde tutuldu (CI'nin güvenilirliği için).

## Sonuçlar

- Lighthouse (masaüstü): performans 100, CLS 0, LCP ~0,3 sn.
- Tek görsel varlık sosyal kart (`og.png`) ve favicon'dur; sayfa içeriği görsel
  içermez.
- Olası iz: ileride özel bir display serif gerekirse self-host + `preload` ile
  eklenebilir.
