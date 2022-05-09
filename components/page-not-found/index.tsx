import Empty from "../empty"

const PageNotFound = () => {
  return (
    <Empty>
      <div className="px-4 text-2xl text-gray-500 border-r border-gray-400 tracking-wider">404</div>
        <div>
          <div className="ml-4 text-lg text-gray-500 uppercase tracking-wider">Page Not Found</div>
          <div className="ml-4 text-xs text-gray-500 uppercase tracking-wider">The page you&lsquo;re looking for doesn&lsquo;t exist</div>
        </div>
    </Empty>
  )
}

export default PageNotFound