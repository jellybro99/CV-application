import { useState } from 'react'

import GeneralInput from './components/GeneralInput';
import EducationInput from './components/EducationInput';
import ExperienceInput from './components/ExperienceInput';
import RenderResume from './components/RenderResume';

const defaultResume = {
  general: {
    name:"Buggy the Clown",
    email:"BuggyDClown@gmail.com",
    phone:"555-555-5555"
  },
  education: {
    schools: [
      {
        name: "East Blue Clown Institute",
        startDate: "Aug 1998",
        endDate: "May 2002",
        degree: "Juggling",
        gpa: "4.0"
      }
    ]
  },
  experience: {
    jobs: [
      {
        company: "Buggy Pirates",
        position: "Captin",
        startDate: "June 2004",
        endDate: "",
        responsibilites:""
      },
      {
        company: "World Government",
        position: "Warlord",
        startDate: "Aug 2022",
        endDate: "Dec 2022",
        responsibilites:""
      }
    ]
  }
};

function App() {
  //localStorage.removeItem("resume")
  if(localStorage.getItem("resume") == null) {
    localStorage.setItem("resume", JSON.stringify(defaultResume)) 
  }
  const [resume, setResume] = useState(JSON.parse(localStorage.getItem("resume")));
  const pageStyling = "flex flex-col md:flex-row gap-8 p-8 bg-slate-200";
  const inputStyling = "inputs w-96 md:w-72 self-center border-2 p-4 rounded border-slate-400 bg-white shadow"
  const outputStyling = "flex-grow border-2 p-8 rounded border-slate-400 bg-white shadow";

  return (
    <div className={pageStyling} > {/* page div */}
      <div className={inputStyling}> {/* input div */}
        <GeneralInput resume={resume} setResume={setResume}/>
        <EducationInput resume={resume} setResume={setResume}/>
        <ExperienceInput resume={resume} setResume={setResume}/>
      </div>
      <div className={outputStyling}> {/* output div */}
        <RenderResume resume={resume}/>
      </div>
    </div>
  )
}

export default App
