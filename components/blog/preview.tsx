import Link from 'next/link'

type Props = {
  slug: string
  title: string
  publishedAt: string
  summary: string
}

const BlogPreview = ({
  slug,
  title,
  publishedAt,
  summary,
}: Props) => {
  return (
    <Link href={`/blog/${slug}`}>
      <a>
        <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4 mb-4">
          <h1 className="font-semibold text-xl">{title}</h1>
          <p className="text-gray-600 dark:text-gray-400 my-2">{summary}</p>
        </div>
      </a>
    </Link>
  )
}

export default BlogPreview