import React from "react";


export default function Step3({FormData,setFormData}){

    return(
        <main>

            <form className='Card--Form'>


                    <label   htmlFor="1" className="Card-addon" >
                            <input type='checkbox'  id='1' name='1' value="Online Services" checked={FormData.addons.includes("Online Services")}  onChange={(event)=>setFormData({
                                ...FormData,
                                addons: event.target.checked
                                    ? [...FormData.addons, event.target.value]
                                    : FormData.addons.filter((addon) => addon !== event.target.value),
                            })}/>
                        <div className="Card--addon-title ">
                            <h4>Online Services</h4>
                            <p>Access to multiplayer games</p>
                        </div>

                        <div className="Card--addon-price">
                            <p>+1/mo</p>
                        </div>

                    </label>




                <label   htmlFor="2" className="Card-addon" >
                    <input  type='checkbox'  id='2' name='2'  value="Larger Storage" checked={FormData.addons.includes("Larger Storage")}  onChange={(event)=>setFormData({
                        ...FormData,
                        addons: event.target.checked
                            ? [...FormData.addons, event.target.value]
                            : FormData.addons.filter((addon) => addon !== event.target.value),
                    })}/>
                    <div className="Card--addon-title ">
                        <h4>Larger Storage</h4>
                        <p>An additional 1TB of cloud save.</p>
                    </div>

                    <div className="Card--addon-price">
                        <p>+2/mo</p>
                    </div>

                </label>

                <label   htmlFor="3" id="ss"  >

                    <div className="Card-addon" id="addon">
                        <input type="checkbox" id='3' name='3' value="Customizable Profile" checked={FormData.addons.includes("Customizable Profile")}  onChange={(event)=>setFormData({
                            ...FormData,
                            addons: event.target.checked
                                ? [...FormData.addons, event.target.value]
                                : FormData.addons.filter((addon) => addon !== event.target.value),
                        })}/>

                        <div className="Card--addon--title ">
                            <h4>Customizable profile</h4>
                            <p>Custom theme on your profile</p>
                        </div>

                        <div className="Card--addon--price">
                            <p>+2/mo</p>
                        </div>
                    </div>



                </label>









            </form>
        </main>
    )
}