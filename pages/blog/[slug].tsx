import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { ParsedUrlQuery } from "querystring"
import { serialize } from "next-mdx-remote/serialize";
import rehypePrism from "rehype-prism-plus"
import { getAllMdx } from "../../lib/mdx"
import { MDXFrontMatter } from "../../lib/types"
import Container from '../../components/container'
import PostPage from '../../components/blog/post'
import TOC from "../../components/toc";
import remarkSlug from 'remark-slug'
import remarkAutolinkHeadings from 'remark-autolink-headings'
import rehypeRaw from 'rehype-raw'
import { nodeTypes } from '@mdx-js/mdx'

interface ContextProps extends ParsedUrlQuery {
  slug: string;
}

interface PostProps {
  frontMatter: MDXFrontMatter
  mdx: any
  previous: MDXFrontMatter | null
  next: MDXFrontMatter | null
}

const Post: NextPage<PostProps> = ({ frontMatter, mdx, previous, next }) => {
  return (
    <main className="dark:bg-gray-800 w-full">
      <Container metaTitle='Post'>
        <PostPage frontMatter={frontMatter} mdx={mdx} previous={previous} next={next} />
        <TOC postSlug={frontMatter.slug} />
      </Container>
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const mdxFiles = getAllMdx();
  return {
    paths: mdxFiles.map((file) => ({
      params: { slug: file.frontMatter.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as ContextProps;
  const mdxFiles = getAllMdx()
  const postIndex = mdxFiles.findIndex((p) => p.frontMatter.slug === slug)
  const post = mdxFiles[postIndex]
  const { frontMatter, content } = post
  const mdxContent = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        remarkSlug, [
          remarkAutolinkHeadings, {
            linkProperties: {
              className: ['anchor']
            }
          }
        ],
        require('remark-code-titles')
      ],
      rehypePlugins: [
        rehypePrism,
        [rehypeRaw, {passThrough: nodeTypes}],
      ],
    },
    scope: frontMatter,
  })
  return {
    props: {
      frontMatter,
      mdx: mdxContent,
      previous: mdxFiles[postIndex + 1]?.frontMatter || null,
      next: mdxFiles[postIndex - 1]?.frontMatter || null,
    },
  }
}

export default Post;