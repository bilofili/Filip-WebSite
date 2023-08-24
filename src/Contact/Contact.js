import space from './Space.png';
import mars from './mars.png';
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

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

            <motion.img
             initial={{ x: 400, y: 400 }}
             animate={{
                x: [400, 0], 
                y: [400, 0], 
             }}
             transition={{ duration: 5, loop: Infinity }}
             src={space} alt='space' className='spacePng'/>

            <motion.img src={mars} alt='space' className='marsPng'
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 32, loop: Infinity, ease: "linear" }}
            />

        </div>
    )
}