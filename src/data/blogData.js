import fm from 'front-matter'

const files = import.meta.glob('../blog/posts/*.md', { eager: true, as: 'raw' })

const posts = Object.entries(files).map(([path, raw]) => {
  const { attributes, body } = fm(raw)
  return {
    ...attributes,
    content: body,
  }
})

export default posts.sort((a, b) => new Date(b.date) - new Date(a.date))
