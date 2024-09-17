import { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Collapsable from "./Collapsable";

function ExperienceInput({ resume, setResume }) {
  //read from resume to find how many states
  //figure out how best to store and remove schools
  const [values, setValues] = useState({
    name:"",
    degree:"",
    startDate:"",
    endDate:"",
  });

  useEffect(() => {
    if(resume != ""){
      setValues({
        name: resume.education.schools[0].name,
        degree: resume.education.schools[0].degree,
        startDate: resume.education.schools[0].startDate,
        endDate: resume.education.schools[0].endDate
      });
    }
  }, [resume])

  const inputs = [
    {
      id:1,
      name:"name",
      type:"text",
      label:"School"
    },
    {
      id:2,
      name:"degree",
      type:"text",
      label:"Degree"
    },
    {
      id:3,
      name:"startDate",
      type:"date",
      label:"Start Date"
    },
    {
      id:4,
      name:"endDate",
      type:"date",
      label:"End Date",
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  }

  const addSchool = (e) => {
    
  }

  return (
      <Collapsable sectionTitle="Education">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2"> {/* general info form */}
          {inputs.map((input) => (
            <Input key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
          ))}
          <Button text="Add School" type="button" onClick={addSchool}/>
          <Button text="Submit" type="submit"/>
        </form>
      </Collapsable>
  )
}

export default ExperienceInput;