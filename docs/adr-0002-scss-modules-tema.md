# ADR-0002: SCSS Modules + CSS değişkenli tema

- **Durum:** Kabul edildi
- **Tarih:** 2026-06-17

## Bağlam

Görev SCSS'i zorunlu kılıyor ve light/dark temayı CSS değişkenleriyle istiyor.
Stil çakışmalarını önlemek ve bileşenleri izole tutmak gerekiyor.

## Karar

- **Bileşen stilleri için CSS Modules** (`*.module.scss`): sınıf adları yerel
  olarak kapsanır, çakışma olmaz.
- **Tema için CSS özel değişkenleri**: tüm token'lar `src/styles/_tokens.scss`
  içinde `:root` ve `[data-theme='dark']` altında tanımlanır. Bileşenler rengi
  doğrudan `var(--...)` ile okur; böylece tema değişimi otomatik yansır.
- **SCSS mixin'leri** (`_mixins.scss`) duyarlı kırılımları ve odak halkasını
  tek yerde toplar.

## Sonuçlar

- Tema değişimi yalnızca `<html data-theme>` özniteliğini değiştirir; JavaScript
  tarafı minimumdur (`useTheme`).
- FOUC'u önlemek için `index.html` içinde boyama-öncesi küçük bir script
  başlangıç temasını belirler.
- Renkler tek kaynaktan yönetildiği için kontrast ve marka tutarlılığı korunur.
