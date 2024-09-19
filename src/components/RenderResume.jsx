const dateOptions = {
    month: "short",
    year: "numeric"
}

function GeneralInfo({ resume }) {

    return (
        <>
            {(resume.general.name != "") && 
            <h1 className="text-xl font-bold text-center">{resume.general.name}</h1>}
            <ul className="flex flex-row justify-center gap-8 list-disc">
                {resume.general.email != "" && 
                <li>{resume.general.email}</li>}
                {resume.general.phone != "" && 
                <li>{resume.general.phone}</li>}
            </ul>
        </>
    )
}

function EducationInfo({ resume }){
    //render dates as english
    return (
        <>
            <h2 className="text-lg font-semibold">Education</h2>
            <hr className="border-2 border-slate-400"></hr>
            {resume.education.schools.map((school) => {
                return (
                    <>
                        <div className="flex flex-row justify-between">
                            <span>{school.name} | <span className="italic">{school.location}</span></span>
                            <span>{school.startDate} - {school.endDate}</span>
                        </div>
                        <div className="list-item ml-8">
                            {school.degree} | GPA: {school.gpa}
                        </div>
                    </>
                )
            })}
        </>
    )
}

function ExperienceInfo({ resume }){
    return (
        <>
            <h2 className="text-lg font-semibold">Experience</h2>
            <hr className="border-2 border-slate-400"></hr>

            {resume.experience.jobs.map((job)=>(
                <div key={job.id}>
                    <div className="flex flex-row justify-between">
                        <span>{job.company}
                        {job.position != "" && <> | <span className="italic">{job.position}</span></>}</span>
                        {job.startDate != ""&&<span>{job.startDate} - {job.endDate == "" ? "Current" : job.endDate}</span>}
                    </div>
                    <p>{job.responsibilites}</p>
                </div>
            ))}
        </>
    )
}


function RenderResume({ resume }) {
    //need to make keys for each school

    return (
        <>
            <GeneralInfo resume={resume}/>
            {/*<EducationInfo resume={resume}/>*/}
            <ExperienceInfo resume={resume}/>
        </>
    )
}

export default RenderResume;