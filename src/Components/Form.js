import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Thankyou from "./Thankyou";


export default function Form(props){
    console.log(props.num)

    const [FormData,setFormData]= React.useState({
        name : "",
        email : "",
        phone : "",
        plan : "",
        addons : [],

    })
    console.log(FormData)
    const FormDisplay = ()=>{
        if (props.num === 1 ){
            return <Step1 FormData={FormData} setFormData={setFormData} />
        }

        else if (props.num === 2 ){
            return <Step2  FormData={FormData} setFormData={setFormData} />
        }

        else if (props.num === 3 ){
            return <Step3 FormData={FormData} setFormData={setFormData} />
        }

        else if (props.num === 4 ){
            return <Step4  prop={props} FormData={FormData} setFormData={setFormData}   />
        }
        else{
            return <Thankyou   />

        }
    }
    return(
        <div>
            {FormDisplay()}
        </div>
    )
}