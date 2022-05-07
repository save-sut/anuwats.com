const PageNotFound = () => {
  return (
    <div className='min-h-full relative flex items-top justify-center dark:bg-gray-800 sm:items-center sm:pt-0' style={{ height: '68vh' }}>
      <div className='flex justify-center align-items-center'>
        <div className='flex items-center pt-8 sm:justify-start sm:pt-0'>
          <div className="px-4 text-2xl text-gray-500 border-r border-gray-400 tracking-wider">404</div>
          <div>
            <div className="ml-4 text-lg text-gray-500 uppercase tracking-wider">Page Not Found</div>
            <div className="ml-4 text-xs text-gray-500 uppercase tracking-wider">The page you&lsquo;re looking for doesn&lsquo;t exist</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound