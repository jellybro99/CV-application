import { useState } from 'react'

import GeneralInput from './components/GeneralInput';
import EducationInput from './components/EducationInput';
import ExperienceInput from './components/ExperienceInput';
import RenderResume from './components/RenderResume';
import Button from './components/Button';

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
        location: "The Grand Line",
        startDate: "1998-08-22",
        endDate: "2002-05-08",
        degree: "Juggling",
        gpa: "4.0"
      }
    ]
  },
  experience: {
    jobs: [
      {
        company: "Buggy Pirates",
        position: "Captain",
        startDate: "2004-08-22",
        endDate: "",
        responsibilites:""
      },
      {
        company: "World Government",
        position: "Warlord",
        startDate: "2022-08-12",
        endDate: "2022-12-18",
        responsibilites:""
      }
    ]
  }
};

function App() {
  localStorage.removeItem("resume")
  if(localStorage.getItem("resume") == null) {
    localStorage.setItem("resume", JSON.stringify(defaultResume)) 
  }
  const [resume, setResume] = useState(JSON.parse(localStorage.getItem("resume")));
  const pageStyling = "flex flex-col md:flex-row gap-8 p-8 bg-slate-200 min-h-dvh";
  const inputStyling = "inputs w-96 md:w-72 self-center border-2 p-4 rounded border-slate-400 bg-white shadow";
  const outputStyling = "flex-grow border-2 p-8 rounded border-slate-400 bg-white shadow";
  const [input, setInput] = useState("");

  const editInput = () => {
    setInput(JSON.parse(JSON.stringify(resume)));    
  }
  // USE NEW OBJECTS AND ALL THAT
  return (
    <div className={pageStyling} > {/* page div */}
      <div className={inputStyling}> {/* input div */}
        <GeneralInput resume={input} setResume={setResume}/>
        <EducationInput resume={input} setResume={setResume}/>
        <ExperienceInput resume={input} setResume={setResume}/>
        <div className='mx-1.5' onClick={editInput}><Button text="Edit" styling="w-full mt-1"/></div>
      </div>
      <div className={outputStyling}> {/* output div */}
        <RenderResume resume={resume}/>
      </div>
    </div>
  )
}

export default App
