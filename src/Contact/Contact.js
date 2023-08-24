import { Link } from "react-router-dom";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export const Contact = () => {

 const [state, handleSubmit] = useForm("xwkdonlk");

  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
 
    return (
        <div className="contact">
            <div className="contact-cnt">
                <h2>Contact me</h2>
            
                <form onSubmit={handleSubmit}>

                <div className='cont-form'>
                    <input id="email" type="email" name="email" placeholder='Enter email'/>
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div className='cont-form'>
                    <input id="message" name="message" placeholder='Enter massage    '/>
                    <ValidationError prefix="Message" field="message" errors={state.errors}/>
                </div>

                <div className='cont-form'>
                    <button type="submit" disabled={state.submitting}>Submit</button>
                    <Link to="/">Return</Link>
                </div>
  
                </form>  
            </div>
        </div>
    )
}