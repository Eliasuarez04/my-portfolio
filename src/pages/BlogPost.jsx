import { useParams } from 'react-router-dom'
import posts from '../data/blogData'
import ReactMarkdown from 'react-markdown'

const BlogPost = () => {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)

  if (!post) return <p className="text-center py-10">Post no encontrado.</p>

  return (
    <article className="max-w-3xl mx-auto px-6 py-16 prose prose-blue">
      <h1>{post.title}</h1>
      <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  )
}

export default BlogPost
