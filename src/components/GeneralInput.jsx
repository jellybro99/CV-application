import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Collapsable from "./Collapsable";

function GeneralInput({ resume, setResume }) {
  //const [values, setValues] = useState(resume.general)

  const [values, setValues] = useState({
    name:"",
    email:"",
    phone:""
  });

  //const [display, setDisplay] = useState("");
  //should setValues(resume.general) when edit section is called

  const inputs = [
    {
      id:1,
      name:"name",
      type:"text",
      label:"Name"
    },
    {
      id:2,
      name:"email",
      type:"text",
      label:"Email"
    },
    {
      id:3,
      name:"phone",
      type:"text",
      label:"Phone Number"
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    //setResume({...resume, [resume.general]: e})
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  }

  const formStyling = "flex flex-col gap-2 transition-all";

  //SHOULD SPECIFY GENERAL INFO BEFORE AND HAVE FUNCTIONALITY TO MINIMIZE
  return (
      <Collapsable sectionTitle="General Info">
        <form onSubmit={handleSubmit} className={formStyling}> {/* general info form */}
          {inputs.map((input) => (
            <Input key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
          ))}
          <Button text="Submit" type="submit"/>
        </form>
      </Collapsable>
  )
}

export default GeneralInput;