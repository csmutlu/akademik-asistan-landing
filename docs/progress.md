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
