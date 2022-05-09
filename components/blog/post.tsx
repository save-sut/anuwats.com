import { NextPage } from "next"
import Link from "next/link"
import { MDXRemote } from "next-mdx-remote"
import { Page } from "../../components/page"
import { Prose } from "../../components/prose";
import { cx } from "../../lib/utils"
import { MDXFrontMatter } from "../../lib/types"

interface PostProps {
  frontMatter: MDXFrontMatter
  mdx: any
  previous: MDXFrontMatter | null
  next: MDXFrontMatter | null
}

const BlogsPage: NextPage<PostProps> = ({ frontMatter, mdx, previous, next }) => {
  return (
    <div style={{ minHeight: '68vh' }}>
      <div className="max-w-3xl m-auto px-4 mt-6 md:mt-0">
        <Page {...frontMatter}>
          <Prose>
            <MDXRemote {...mdx} />
          </Prose>
          {previous || next ? (
            <nav
              className={cx(
                "my-4 pt-8 grid grid-cols-2 gap-8 border-t",
                "border-gray-200",
                "dark:border-gray-700"
              )}
            >
              {previous ? (
                <div>
                  <p
                    className={cx(
                      "mb-2 uppercase tracking-wider text-sm",
                      "text-gray-500",
                      "dark:text-gray-400"
                    )}
                  >
                    Previous
                  </p>
                  <Link href={`/blog/${previous?.slug}`}>
                    <a className="font-bold">{previous?.title}</a>
                  </Link>
                </div>
              ) : null}
              {next ? (
                <div className="col-start-2 text-right">
                  <p
                    className={cx(
                      "mb-2 uppercase tracking-wider text-sm",
                      "text-gray-500",
                      "dark:text-gray-400"
                    )}
                  >
                    Next
                  </p>
                  <Link href={`/blog/${next?.slug}`}>
                    <a className="font-bold">{next?.title}</a>
                  </Link>
                </div>
              ) : null}
            </nav>
          ) : null}
        </Page>
      </div>
    </div>
  )
}

export default BlogsPage