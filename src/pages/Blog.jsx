import { Link } from 'react-router-dom'
import posts from '../data/blogData'

const Blog = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 animate-fade-in">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">Blog</h2>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <div key={index} className="bg-white p-6 rounded shadow hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-blue-800">{post.title}</h3>
            <p className="text-gray-600 text-sm mb-2">{new Date(post.date).toLocaleDateString()}</p>
            <Link
              to={`/blog/${post.slug}`}
              className="text-blue-600 hover:underline font-medium"
            >
              Leer más →
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Blog
