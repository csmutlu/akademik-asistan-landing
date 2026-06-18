import { describe, expect, it } from 'vitest'
import html from '../index.html?raw'

function getMetaContent(attribute: 'name' | 'property', value: string) {
  const pattern = new RegExp(
    `<meta\\s+${attribute}="${value}"\\s+content="([^"]+)"\\s*/?>`,
  )

  return html.match(pattern)?.[1]
}

describe('social metadata', () => {
  it('points social previews to the tanitim domain og image', () => {
    expect(html).toContain(
      '<link rel="canonical" href="https://tanitim.akademikasistan.com/" />',
    )
    expect(getMetaContent('property', 'og:url')).toBe(
      'https://tanitim.akademikasistan.com/',
    )
    expect(getMetaContent('property', 'og:image')).toBe(
      'https://tanitim.akademikasistan.com/og.png',
    )
    expect(getMetaContent('name', 'twitter:image')).toBe(
      'https://tanitim.akademikasistan.com/og.png',
    )
  })
})
