const Empty = ({ children }: any) => {
  return (
    <div className='min-h-full relative flex items-top justify-center dark:bg-gray-800 sm:items-center sm:pt-0' style={{ height: '68vh' }}>
      <div className='flex justify-center align-items-center'>
        <div className='flex items-center pt-8 sm:justify-start sm:pt-0'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Empty