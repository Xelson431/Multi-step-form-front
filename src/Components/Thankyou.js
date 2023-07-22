import React from "react";
import {ReactComponent as Done} from '../assets/images/icon-thank-you.svg'


export default function Thankyou(){

    return(
        <main>
            <div className="Card--thankyou">
                <Done />
                <h1>Thank you</h1>
                <p>Thank for confirming your subscription! We hope you have fun using our platform. If you ever need suppor, please feel free to email us at Support@loremgaming.com</p>

            </div>
        </main>
    )
}