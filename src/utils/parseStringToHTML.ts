import sanitize from 'sanitize-html'

export function parseStringToHTML(str: string) {
  return sanitize(str, {
    allowedTags: ['figure', 'img', 'p', 'b']
  })
}
