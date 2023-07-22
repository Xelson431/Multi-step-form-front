import React from "react";
import Form from "./Form"
export default function Step4({FormData,setFormData}){
    const objectKeys = Object.values(FormData.addons);
    const [total,setTotal] = React.useState(0)
    const sett = ()=>{
        setTotal(prevState => prevState+1)
    }
    const DisplayAddons = objectKeys.map((FormData)=>{
        return(
            <div className="Card--Summary--main">
                <div className="Card--addon--title">

                    <a>{FormData}</a>

                </div>
                <div className="Card--addon--price">
                    <p>+{FormData === "Online Services" ?  + "1"  : ""}{FormData === "Larger Storage" ? "2" : ""} {FormData === "Customizable Profile" ? "2" : ""}/mo</p>

                </div>

            </div>
        )
    })

    return(
        <main>

            <form className='Card--Form'>
                <div className='Card--Form--table'>
                    <div className="Card--Summary">

                        <div className="Card--Summary--main">
                            <div className="Card--addon--title">
                                <h4>{FormData.plan ? FormData.plan+ " (Monthly)" : "Please go back and select a plan"} </h4>

                            </div>
                            <div className="Card--addon--price">
                                <p>${FormData.plan === "Pro" ? "15" : ""}{FormData.plan === "Advanced" ? "12" : ""} {FormData.plan === "Arcade" ? "9" : ""}/mo </p>
                            </div>

                        </div>
                        <hr />
                        <div className="Card-Summary--addons">

                            {DisplayAddons}


                        </div>

                    </div>
                    <div className="Card--Summary--total">
                        <h5>Total per month</h5>
                        <p>$12/mo</p>
                    </div>
                    <div className="Card--controls">

                        <button className='btn-submit'>Submit</button>
                    </div>

                </div>

            </form>
        </main>
    )
}