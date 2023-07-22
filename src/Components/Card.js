import React from 'react';

import {ReactComponent as Sidebar} from '../assets/images/bg-sidebar-desktop.svg'
import Form from './Form'



export default function Card(){

    const [Step, setStep] = React.useState(1)
    const [Titles, setTitles] = React.useState([['Personal info', 'Please provide your name,email address, and phone number.'],['Select your plan', 'You have the option of monthly or yearly billing.'],
        ['Pick add-ons', 'Add-ons help enhance your gaming experience.'],['Finishing up', 'Double-check if everything looks OK before confirming']])

    const NextStep = ()=>{
        return (
            setStep((prevState )=> prevState +1)
        )
    }


    const PrevStep = ()=>{
        return (
            setStep((prevState )=> prevState - 1)
        )
    }

    const title = Titles.map((title1)=>{
        return (
            <div>
                <h1>{title1[0]}</h1>
                <p>{title1[1]}</p>
            </div>
        )
    })


    return(
        <div className='Card--main'>
            <div className='Card--steps'>
                <ol className="numbered-list">
                    <li className='Card--step'>
                        <h2 className={Step === 1 ? 'Card--steps--num--active' : 'Card--steps--num' }>1</h2>
                        <div className='Card--step--txt'>
                            <p>Step 1</p>
                            <b>YOUR INFO</b>
                        </div>
                    </li>
                    <li className='Card--step'>
                        <h2 className={Step === 2 ? 'Card--steps--num--active' : 'Card--steps--num' }>2</h2>
                        <div className='Card--step--txt'>
                            <p>Step 2</p>
                            <b>SELECT PLAN</b>
                        </div>
                    </li>
                    <li className='Card--step'>
                        <h2 className={Step === 3 ? 'Card--steps--num--active' : 'Card--steps--num' }>3</h2>
                        <div className='Card--step--txt'>
                            <p>Step 3</p>
                            <b>ADD-ONS</b>
                        </div>
                    </li>
                    <li className='Card--step'>
                        <h2 className={Step === 4 ? 'Card--steps--num--active' : 'Card--steps--num' }>4</h2>
                        <div className='Card--step--txt'>
                            <p>Step 4</p>
                            <b>SUMMARY</b>
                        </div>
                    </li>
                </ol>
            </div>
            <Sidebar className="Card--img"/>
            <div className='Card--text'>
                <div className='Card--text--heading'>
                  {title[Step-1]}
                </div>
                <Form num={Step}/>
                <div className="Card--controls">
                    <button hidden={Step === 5  } disabled={Step === 1} onClick={PrevStep} className='btn--2'>Go Back</button>

                    <button hidden={Step === 5 } onClick={Step === 4 ? NextStep : NextStep} className='btn'>{ Step === 4 ? "Submit" : "Next Step"}</button>
                </div>
            </div>

        </div>
    )
}