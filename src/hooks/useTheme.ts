import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'aa-theme'

/**
 * Başlangıç teması, index.html içindeki boyama-öncesi script tarafından
 * <html data-theme> üzerine zaten yazılır (kayıt ?? sistem tercihi).
 * Burada onu okuyarak tek kaynak korunur ve FOUC önlenir.
 */
function getInitialTheme(): Theme {
  if (typeof document !== 'undefined') {
    const current = document.documentElement.dataset.theme
    if (current === 'light' || current === 'dark') return current
  }
  return 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // Depolama erişilemiyorsa (gizli mod vb.) sessizce geç.
    }
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggle }
}
