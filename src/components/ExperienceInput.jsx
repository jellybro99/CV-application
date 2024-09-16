import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Collapsable from "./Collapsable";

function ExperienceInput({ resume, setResume }) {
  //read from resume to find how many states

  //store experience in array of job objects instead of just job object
  //allow each job to be minimized into just the company name.

  const [values, setValues] = useState({
    company:"",
    position:"",
    startDate:"",
    endDate:"",
    responsibilites:""
  });

  const inputs = [
    {
      id:1,
      name:"company",
      type:"text",
      label:"Company"
    },
    {
      id:2,
      name:"position",
      type:"text",
      label:"Position"
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
    },
    {
      id:5,
      name:"responsibilites",
      type:"text",
      label:"Responsibilites"
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  }

  const addExperience = (e) => {

  }

  return (
      <Collapsable sectionTitle="Experience">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2"> {/* general info form */}
          {inputs.map((input) => (
            <Input key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
          ))}
          <Button text="Add Experience" type="button" onClick={addExperience}/>
          <Button text="Submit" type="submit"/>
        </form>
      </Collapsable>
  )
}

export default ExperienceInput;