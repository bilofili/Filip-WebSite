import insta from './Icons/instagram.png';
import social from './Icons/github.png';
import mail from './Icons/mail.png';

import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";


export const FirstConten = () => {

    const [vision, setVision] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
          setVision(true);
        }, 6300); 

        return () => clearTimeout(timeout);
      }, []);

    return (
        <div>

            {vision && (
            <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
            >
                <h3 className="logo">Filip Bilobrov</h3>
                <div className="toggle"></div>
            </motion.nav>
            )}

            { vision && (
                <motion.section 
                className="box-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }} 
                transition={{ duration: 1.5 }}
                >
                <h1>NEVER STOP TO EXPLORING THE WORLD</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button>Get Start</button>
                <div className="icons-bl">
                  <img src={insta} alt="Instagram" className="icon" />
                  <img src={social} alt="GitHub" className="icon" />
                  <img src={mail} alt="Mail" className="icon" />
                </div>
              </motion.section>
            )}
        </div>
    )
}