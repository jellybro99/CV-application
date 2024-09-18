import { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Collapsable from "./Collapsable";

function GeneralInput({ resume, handleSubmitSubmit }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    if(resume != ""){
      setValues({
        name: resume.general.name,
        email: resume.general.email,
        phone: resume.general.phone
      });
    }
    else if (resume == ""){
      setValues({
        name: "",
        email: "",
        phone: ""
      });
    }
  }, [resume])
  
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
    setValues({
      name: "",
      email: "",
      phone: ""
    });
    handleSubmitSubmit(values, "general")
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  }

  const formStyling = "flex flex-col gap-2";

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