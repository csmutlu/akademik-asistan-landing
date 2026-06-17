# ADR-0001: React + Vite + TypeScript

- **Durum:** Kabul edildi
- **Tarih:** 2026-06-17

## Bağlam

Tek sayfalık bir tanıtım sayfası ve yeniden kullanılabilir bir UI bileşen
kütüphanesi gerekiyor. Görev; Vite ile Vanilla TS, React veya Angular seçimine
izin veriyor.

## Karar

**Vite + React + TypeScript** seçildi.

- React, bileşen tabanlı ve props ile yapılandırılabilir bir kütüphane kurmayı
  doğal kılar (görevin "yeniden kullanılabilirlik" kriteri).
- Vite, hızlı geliştirme sunucusu ve küçük, optimize production çıktısı sunar.
- TypeScript, bileşen API'lerini (props tipleri) sözleşmeye bağlar ve hataları
  derleme zamanında yakalar.

## Sonuçlar

- Tek bir SPA; istemci tarafı yönlendirme yok (sayfa içi çapa bağlantıları).
- TypeScript `strict` ayarlarıyla (ör. `noUnusedLocals`) çalışılır.
- Stil için SCSS kullanılır (bkz. ADR-0002).
