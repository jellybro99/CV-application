import { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Collapsable from "./Collapsable";

function EducationInput({ resume, handleHandleSubmit }) {
  const [values, setValues] = useState([{
    id: 1,
    name:"",
    location:"",
    degree:"",
    gpa: "",
    startDate:"",
    endDate:"",
  }]);

  useEffect(() => {
    if(resume != ""){
      let newValues = [];
      resume.education.schools.forEach((school) => {
        newValues.push({
          id: school.id,
          name: school.name,
          location: school.location,
          degree: school.degree,
          gpa: school.gpa,
          startDate: school.startDate,
          endDate: school.endDate
        })
      })
      setValues(newValues);
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
      name:"location",
      type:"text",
      label:"Location"
    },
    {
      id:3,
      name:"degree",
      type:"text",
      label:"Degree"
    },
    {
      id:4,
      name:"gpa",
      type:"text",
      label:"GPA"
    },
    {
      id:5,
      name:"startDate",
      type:"date",
      label:"Start Date"
    },
    {
      id:6,
      name:"endDate",
      type:"date",
      label:"End Date",
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues([{
      id: 1,
      name:"",
      location:"",
      degree:"",
      gpa:"",
      startDate:"",
      endDate:"",
    }]);
    handleHandleSubmit({schools: values}, "education");
  }

  const onChange = (e, id) => {
    let newValues = [];
    values.map((school)=>newValues.push({...school}))
    newValues.map((school) => {
      if(school.id == id){
        school[e.target.name] = e.target.value;
      }
    })
    setValues(newValues);
  }

  const addSchool = () => {
    let newSchools = JSON.parse(JSON.stringify(values));
    
    let id = 1;
    let alreadyUsed = true;
    while (alreadyUsed) {
      alreadyUsed = false;
      newSchools.forEach((school) => {
        if (school.id === id) {
          id++;
          alreadyUsed = true;
        }
      });
    }

    newSchools.push({
      id: id,
      name:"",
      location:"",
      degree:"",
      gpa:"",
      startDate:"",
      endDate:"",
    });
    setValues(newSchools);
  }

  const removeSchool = (id) => {
    let newSchools = [];
    values.forEach((school) => {
      if(school.id != id){
        newSchools.push(school);
      }
    })
    setValues(newSchools);
  }

  const getValues = (id, input) => {
    let school = values.find((school) => school.id == id);
    return school[input];
  }

  return (
    <Collapsable sectionTitle="Education">
    {values.map((school) => (
      <Collapsable sectionTitle={school.name} key={school.id}>
        <form className="flex flex-col gap-2">
          {inputs.map((input) => (
            <Input key={input.id} {...input} value={getValues(school.id, input.name)} onChange={(e)=>onChange(e, school.id)}/>
          ))}
          <Button text="Remove School" type="button" onClick={()=>removeSchool(school.id)} styling="w-full mt-2"/>
        </form>
      </Collapsable>
    ))}
    <div className=""><Button text="Add School" type="button" onClick={addSchool} styling="w-full mt-2"/></div>
    <div><Button text="Submit Section" type="submit" onClick={handleSubmit} styling="w-full mt-1"/></div>
  </Collapsable>
  )
}

export default EducationInput;