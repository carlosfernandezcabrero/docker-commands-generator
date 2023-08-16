const DESCRIPTION =
  'Aplicación que te genera los comandos de docker mas frecuentes en base a los parámetros introducidos'
const PAGE_URL = 'https://docker-commands-generator.vercel.app'
const TITLE =
  'Docker Commands Generator - Aplicación que te genera los comandos de docker mas frecuentes'
const IMAGE_URL = `${PAGE_URL}/og-image.png`

export default {
  'og:image': IMAGE_URL,
  'twitter:image': IMAGE_URL,
  title: TITLE,
  'og:title': TITLE,
  'twitter:title': TITLE,
  description: DESCRIPTION,
  'og:description': DESCRIPTION,
  'twitter:description': DESCRIPTION,
  'twitter:url': PAGE_URL,
  'og:url': PAGE_URL,
  'og:type': 'website',
  'twitter:card': 'summary_large_image'
}
