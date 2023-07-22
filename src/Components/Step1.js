import React from "react";


export default function Step1({FormData,setFormData}){

    return(
        <main>

            <form className='Card--Form'>
                <div className='Card--Form--Input'>
                    <label htmlFor="Name">Name</label>
                    <input type='text' placeholder='e.g Stephen King' id='Name' name='Name'  value={FormData.name} onChange={(event)=>setFormData({
                        ...FormData,
                        name: event.target.value,
                    })}/>
                </div>
                <div className='Card--Form--Input'>
                    <label htmlFor="Email">Email Address</label>
                    <input type='email' placeholder='e.g stephenking@lorem.com' id='Email' name='Email' value={FormData.email} onChange={(event)=>setFormData({
                        ...FormData,
                        email: event.target.value,
                    })}/>
                </div>
                <div className='Card--Form--Input'>
                    <label htmlFor="Phonenumber">Phone</label>
                    <input type='tel' placeholder='e.g +1 234 567 890' id='Phonenumber' name='Phonenumber' value={FormData.phone} onChange={(event)=>setFormData({
                        ...FormData,
                        phone: event.target.value,
                    })}/>
                </div>
            </form>
        </main>
    )
}