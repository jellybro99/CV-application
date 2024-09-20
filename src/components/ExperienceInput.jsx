import { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Collapsable from "./Collapsable";

function ExperienceInput({ resume, handleHandleSubmit }) {

  const [values, setValues] = useState([{
    id: 1,
    company:"",
    position:"",
    startDate:"",
    endDate:"",
    responsibilites:""
  }]);

  useEffect(() => {
    if(resume != ""){
      let newValues = [];
      resume.experience.jobs.forEach((job) => {
        newValues.push({
          id: job.id,
          company: job.company,
          position: job.position,
          startDate: job.startDate,
          endDate: job.endDate,
          responsibilites: job.responsibilites
        })
      })
      setValues(newValues);
    }
  }, [resume])

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
    setValues([{
      id: 1,
      company:"",
      position:"",
      startDate:"",
      endDate:"",
      responsibilites:""
    }]);
    handleHandleSubmit({jobs: values}, "experience");
  }

  const onChange = (e, id) => {
    let newValues = [];
    values.map((job)=>newValues.push({...job}))
    newValues.map((job) => {
      if(job.id == id){
        job[e.target.name] = e.target.value;
      }
    })
    setValues(newValues);
  }

  const addExperience = (e) => {
    let newJobs = JSON.parse(JSON.stringify(values));
    
    let id = 1;
    let alreadyUsed = true;
    while (alreadyUsed) {
      alreadyUsed = false;
      newJobs.forEach((job) => {
        if (job.id === id) {
          id++;
          alreadyUsed = true;
        }
      });
    }

    newJobs.push({
      id: id,
      company:"",
      position:"",
      startDate:"",
      endDate:"",
      responsibilites:""
    });
    setValues(newJobs);
  }

  const removeExperience = (id) => {
    let newJobs = [];
    values.map((job) => {
      if(job.id != id){
        newJobs.push(job);
      }
    })
    setValues(newJobs);
  }

  const getValues = (id, input) => {
    let job = values.find((job) => job.id == id);
    return job[input];
  }


  return (
      <Collapsable sectionTitle="Experience">
        {values.map((job) => (
          <Collapsable sectionTitle={job.company} key={job.id}>
            <form>
              {inputs.map((input) => (
                <Input key={input.id} {...input} value={getValues(job.id, input.name)} onChange={(e)=>onChange(e, job.id)}/>
              ))}
              <Button text="Remove Experience" type="button" onClick={()=>removeExperience(job.id)} styling="w-full mt-2"/>
            </form>
          </Collapsable>
        ))}
        <div className=""><Button text="Add Experience" type="button" onClick={addExperience} styling="w-full mt-2"/></div>
        <div><Button text="Submit Section" type="submit" onClick={handleSubmit} styling="w-full mt-1"/></div>
      </Collapsable>
  )
}

export default ExperienceInput;