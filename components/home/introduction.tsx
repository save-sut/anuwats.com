import Image from 'next/image'

const Introduction = () => {
  return (
    <>
    <div className="flex justify-center items-center pb-4 text-center">
      <div className="flex">
        <div style={{width: 200, height: 200, position: 'relative'}}>
          <Image
            alt='Me'
            src='/images/myself.jpeg'
            layout='fill'
            objectFit='cover'
            className='rounded-full'
            priority
          />
        </div>
      </div>
    </div>
    <p className='text-gray-600 dark:text-gray-300 text-center text-5xl'>
      <strong>
        Hi, My name is
        <span style={{ color: "#ff851b" }}> Anuwat<span className="dash">|</span></span>
      </strong>
    </p>
    </>
  )
}

export default Introduction

/*
<Box as="p" fontSize={['1.25rem', '1.5rem', '3rem', '3rem']} mx={['0.5rem', '', '', '']}>
            <strong>
              Hi, I&apos;m&nbsp;
              <Box as="span" color="brand">
                Ankit
              </Box>
              . Nice to meet you.
            </strong>
          </Box>
*/ 
