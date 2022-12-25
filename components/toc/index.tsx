import { useState, useEffect } from 'react'
import useIntersectionObserve from '../../hooks/useIntersection'

const TOC = ({ postSlug }: { postSlug: string }) => {
  const [activeH, setActiveH] = useState();
  const [headings, setHeadings] = useState<{ id: string, innerText: string }[]>([])

  useEffect(() => {
    const content: HTMLElement | null = document.getElementById('post-body')
    const headingElements: any[] = Array.from(content.querySelectorAll('h1,h2,h3,h4'))
    setHeadings(headingElements);
  }, [postSlug])

  const getLevel = (heading: any) => {
    if (heading) {
      return heading.nodeName.replace('H', '')
    }
  };

  useIntersectionObserve(setActiveH, postSlug)

  if (headings.length === 0) return null

  return (
    <nav className='fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] my-10 overflow-y-auto hidden xl:block' aria-label="Table of contents">
      <div className="mx-4">
        <h5 className="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100">On this page</h5>
        <ul className="text-slate-700 text-sm leading-6">
          {headings.map(heading => (
            <li
              key={heading.id}
              className={`${activeH === heading.id ? `block py-1 font-medium text-sky-500 dark:text-sky-400` : `block py-1 font-medium hover:text-slate-800 dark:text-slate-300 dark:hover:text-slate-400`}`}
            >
              <a href={`#${heading.id}`} className={`${getLevel(heading) !== '1' ? `group flex pl-4` : ``}`}>
                {getLevel(heading) !== '1' && (
                  <svg width="3" height="24" viewBox="0 -9 3 24" className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                )}
                {heading.innerText}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default TOC