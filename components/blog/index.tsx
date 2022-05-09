import BlogPreview from '../../components/blog/preview'
import Empty from '../empty'

const BlogsPage = ({ posts }: any) => {
  if (posts.length <= 0) {
    return (
      <Empty>
        <div className="ml-4 text-lg text-gray-500 uppercase">No posts yet</div>
      </Empty>
    )
  }

  return (
    <div style={{ minHeight: '68vh' }}>
      <div className="grid grid-cols-1 max-w-xl mx-auto">
        {posts.map((post: any) => (
          <BlogPreview key={post.slug} slug={post.slug} title={post.title} publishedAt={post.publishedAt} summary={post.summary} />
        ))}
      </div>
    </div>
  )
}

export default BlogsPage