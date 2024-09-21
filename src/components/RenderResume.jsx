
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

    return (
        <>
            {JSON.stringify(resume.education) != '{"schools":[{"id":1,"name":"","location":"","degree":"","gpa":"","startDate":"","endDate":""}]}' &&
            <h2 className="text-lg font-semibold">Education</h2>}
            {JSON.stringify(resume.education) != '{"schools":[{"id":1,"name":"","location":"","degree":"","gpa":"","startDate":"","endDate":""}]}' &&
            <hr className="border-2 border-slate-400"></hr>}

            {resume.education.schools.map((school)=>(
                <div key={school.id}>
                    <div className="flex flex-row justify-between">
                        <span>{school.name}
                        {school.name != "" && <> | <span className="italic">{school.location}</span></>}</span>
                        {school.startDate != ""&&<span>{school.startDate} - {school.endDate == "" ? "Current" : school.endDate}</span>}
                    </div>
                    {(school.degree != "") && <h2 className="list-item ml-6">{school.degree} | {school.gpa}</h2>}
                </div>
            ))}
        </>
    )
}

function ExperienceInfo({ resume }){

    return (
        <>
            {JSON.stringify(resume.experience) != '{"jobs":[{"id":1,"company":"","position":"","startDate":"","endDate":"","responsibilites":""}]}' &&
            <h2 className="text-lg font-semibold">Experience</h2>}
            {JSON.stringify(resume.experience) != '{"jobs":[{"id":1,"company":"","position":"","startDate":"","endDate":"","responsibilites":""}]}' &&
            <hr className="border-2 border-slate-400"></hr>}

            {resume.experience.jobs.map((job)=>(
                <div key={job.id}>
                    <div className="flex flex-row justify-between">
                        <span>{job.company}
                        {job.position != "" && <> | <span className="italic">{job.position}</span></>}</span>
                        {job.startDate != ""&&<span>{job.startDate} - {job.endDate == "" ? "Current" : job.endDate}</span>}
                    </div>
                    <p className="ml-4 whitespace-pre-wrap">{job.responsibilites}</p>
                </div>
            ))}
        </>
    )
}

function RenderResume({ resume }) {

    return (
        <>
            <GeneralInfo resume={resume}/>
            <EducationInfo resume={resume}/>
            <ExperienceInfo resume={resume}/>
        </>
    )
}

export default RenderResume;