import Introduction from "./introduction"

const Homepage = () => {
  return (
    <div className="min-h-full flex justify-center">
      <div className="flex flex-col justify-center items-center">
        <div className="text-center flex justify-between flex-col items-center">
          <Introduction />
          <div className="text-gray-600 dark:text-gray-300 text-2xl md:text-5xl font-bold">
            <div className="inline-flex relative overflow-hidden">
              <div className="inline-flex flex-col">
                <div>I&apos;m&nbsp;a Web</div>
              </div>
            </div>
            <div className="inline-block ml-2">
              Developer &nbsp;
              {/* <span>&lt;<span className="dash">_</span>/&gt;</span> */}
            </div>
            <div className="text-gray-500 dark:text-gray-300 text-sm md:text-base font-normal">
              <p>I love building web applications, I code beautifully simple things and I love what I do</p>
              <p>And of-course a love for egyptian bracket</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage