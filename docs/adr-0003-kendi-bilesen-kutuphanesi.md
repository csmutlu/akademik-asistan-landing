# ADR-0003: Kendi bileşen kütüphanesi (harici UI yok)

- **Durum:** Kabul edildi
- **Tarih:** 2026-06-17

## Bağlam

Görev, harici bir UI kütüphanesi kullanılmamasını ve beş bileşenin ayrı
dosya/klasör yapısında, props ile yapılandırılabilir olmasını şart koşuyor.

## Karar

`Button`, `Input`, `Card`, `Modal`, `Accordion` bileşenleri **sıfırdan**
yazıldı. Her bileşen kendi klasöründe; `Bileşen.tsx`, `Bileşen.module.scss`,
`index.ts` ve `Bileşen.test.tsx` dosyalarından oluşur.

İlkeler:

- **Props ile yapılandırma:** varyant, boyut, durum (loading, error, highlight)
  gibi davranışlar dışarıdan kontrol edilir.
- **Erişilebilirlik bileşenin içinde:** Modal odak tuzağı + Esc, Accordion
  klavye gezinmesi, Input `aria-invalid`/`aria-describedby` bileşenle gelir.
- **Birleştirilebilirlik:** `Card` polimorfiktir (`as`), `Button` `href` ile
  bağlantıya dönüşebilir.

## Sonuçlar

- Dış bağımlılık yok; paket küçük kalır ve API tümüyle kontrol altındadır.
- Davranış ve erişilebilirlik Vitest + Testing Library ile test edilir.
- React 19'un `ref` prop desteği sayesinde `forwardRef` sarmalayıcıya gerek
  kalmaz.
