import React from "react";
import {ReactComponent as Arcade} from '../assets/images/icon-arcade.svg'
import {ReactComponent as Advanced} from '../assets/images/icon-advanced.svg'
import {ReactComponent as Pro} from '../assets/images/icon-pro.svg'


export default function Step2({FormData,setFormData}){

    return(
        <main>

            <form className='Card--Form'>
                <div className='Card--Form--Input'>
                    <div className="Card--plans">

                        <label htmlFor="Arcade">
                            <input  hidden checked={FormData.plan === "Arcade"} value='Arcade' onChange={(event)=>setFormData({
                                ...FormData,
                                plan: event.target.value,
                            })} name="radio" type="radio" id="Arcade"/>
                            <div className="Card--plan">

                                <Arcade  />
                                <div className="txt">
                                    <h3>Arcade</h3>
                                    <p>$9/mo</p>
                                </div>
                            </div>

                        </label>


                        <label htmlFor="Advanced">

                            <input hidden value='Advanced' checked={FormData.plan === "Advanced"}  onChange={(event)=>setFormData({
                                ...FormData,
                                plan: event.target.value,
                            })} name="radio" type="radio" id="Advanced"/>
                            <div className="Card--plan">

                                <Advanced  />
                                <div className="txt">
                                    <h3>Advanced</h3>
                                    <p>$12/mo</p>
                                </div>
                            </div>

                        </label>


                        <label htmlFor="Pro">
                            <input hidden value="Pro" checked={FormData.plan === "Pro"}  onChange={(event)=>setFormData({
                                ...FormData,
                                plan: event.target.value,
                            })} name="radio" type="radio" id="Pro"/>
                            <div className="Card--plan">

                                <Pro  />
                                <div className="txt">
                                    <h3>Pro</h3>
                                    <p>$15/mo</p>
                                </div>
                            </div>

                        </label>

                    </div>
                </div>
            </form>
        </main>
    )
}