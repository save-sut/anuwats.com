import myData from "../constants/myData"

const Experiencepage = () => {
  return (
    <section>
      <div className="mt-4">
        <div className="grid grid-cols-1 max-w-xl mx-auto py-10">
          {myData.experiences.map((exp, idx) => (
            <div key={idx}>
              <ExperienceCard
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === myData.experiences.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className={`w-4 h-4 bg-green-500 rounded-full relative z-10`}>
                    <div className={`w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping`}></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ExperienceCard = ({ title, desc, year, company, companyLink }: any) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <h1 className="font-semibold text-xl">{title} <span className="text-gray-500 text-xs font-normal">({year})</span></h1>
      <a href={companyLink} className="text-gray-500">
        {company}
      </a>
      <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
    </div>
  );
};

export default Experiencepage