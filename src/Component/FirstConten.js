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
                <h1>I'm Front-End Web Developer</h1>
                <p>Development, innovation, and creative solutions - that's my world. As a Front-end web developer, I offer you the keys to creating unique and interactive websites. Ready to bring your ideas to life? Let's embark on this exciting journey, click 'Get Started'.</p>
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