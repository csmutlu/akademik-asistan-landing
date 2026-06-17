# ADR-0004: Erişilebilirlik yaklaşımı

- **Durum:** Kabul edildi
- **Tarih:** 2026-06-17

## Bağlam

Görev temel erişilebilirliği (semantik HTML, `label-for`, kontrast, klavye ile
gezinme) ve aria nitelik kullanımını puanlandırıyor.

## Karar

Erişilebilirlik sonradan eklenen bir katman değil, baştan tasarımın parçası:

- **Semantik yapı:** `header`/`nav`/`main`/`section`/`footer` landmark'ları,
  tek `h1` ve tutarlı başlık hiyerarşisi, "İçeriğe geç" atlama bağlantısı.
- **Formlar:** her alan `label`–`for` ile bağlı; hata mesajları `aria-invalid`
  ve `aria-describedby` ile ilişkilendirilir.
- **Klavye:** Modal odak tuzağı + Esc + odağı geri verme; Accordion ok/Home/End
  gezinmesi; tüm etkileşimli öğelerde `:focus-visible` halkası.
- **Tercihler:** `prefers-reduced-motion` ile animasyonlar azaltılır;
  `prefers-color-scheme` başlangıç temasını belirler.
- **Statik denetim:** ESLint `jsx-a11y` kuralları CI'da zorunludur.

## Sonuçlar

- Lighthouse erişilebilirlik skoru 100.
- Kontrast oranları token seviyesinde AA hedefiyle seçilir.
