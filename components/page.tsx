import Image from "next/image"
import { formatDate } from "../lib/formatDate"
import { Prose } from "../components/prose"
import { cx } from "../lib/utils"
import { AiOutlineFieldTime } from 'react-icons/ai'

interface PageProps {
  date?: string
  title: string | React.ReactNode
  description?: string | React.ReactNode
  thumbnail?: string
  readingTime?: any
  children: any
}

export const Page: React.FC<PageProps> = ({
  date,
  title,
  description,
  readingTime,
  children,
}) => {
  return (
    <>
      <header
        className={cx(
          "mb-4 pb-4 border-b",
          "border-gray-200",
          "dark:border-gray-700"
        )}
      >
        <h1 className="font-bold text-5xl">{title}</h1>
        <div className='flex justify-between mt-3'>
          <div className="flex items-center">
            <div className="relative h-5 w-5 rounded-full ring-2 ring-white mr-2">
              <Image
                src={'https://avatars0.githubusercontent.com/save-sut'}
                alt='Author'
                layout='fill'
                objectFit='cover'
                className='h-5 w-5 rounded-full ring-2 ring-white'
              />
            </div>
            <span className='text-sm'>
              Anuwat S.
              {date ? (
                <span className='text-sm'>
                {' '} | {formatDate(date)}
              </span>
              ) : null}
            </span>
          </div>
          <div className='text-sm flex items-center'>
            <AiOutlineFieldTime /> &nbsp;
            {readingTime.text}
          </div>
        </div>
        {description ? (
          <div className="mt-4">
            <Prose>
              {typeof description === "string" ? (
                <p>{description}</p>
              ) : (
                description
              )}
            </Prose>
          </div>
        ) : null}
      </header>
      {children}
    </>
  )
}