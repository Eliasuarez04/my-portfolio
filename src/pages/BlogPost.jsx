import { useParams } from 'react-router-dom'
import posts from '../data/blogData'
import ReactMarkdown from 'react-markdown'

const BlogPost = () => {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)

  if (!post) return <p className="text-center py-10">Post no encontrado.</p>

  return (
    <article className="max-w-3xl mx-auto px-6 py-16 animate-fade-in">
      <h1 className="text-3xl font-bold text-blue-800 mb-2">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-6">
        {new Date(post.date).toLocaleDateString()}
      </p>

      <div className="prose max-w-none prose-blue prose-lg">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  )
}

export default BlogPost
