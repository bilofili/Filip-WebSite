import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { FirstConten } from "./FirstConten";

function First() {

  const controls = useAnimation();

  const [vision, setVision] = useState(false);

  if (vision) {
    
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVision(true);
    }, 6300); 

    return () => clearTimeout(timeout);
  }, []);
  
  useEffect(() => {
    const sequence = async () => {
      // Сначала проигрываем анимацию 2 раза
      await controls.start({
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 80, 360, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        transition: {
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: 1, // Повторяем 2 раза
          repeatDelay: 0.5
        }
      });

      // Затем растягиваем на весь экран
      await controls.start({
        scale: 2,
        rotate: 0,
        borderRadius: "0%",
        width: "50vw",
        height: "50vh",
        transition: {
          duration: 2,
          ease: "easeInOut"
        }
      });
    };

    sequence();
  }, [controls]);

  return (
    <div id="head">
        <motion.div
        className="box"
        animate={controls}
        initial={{ scale: 1, rotate: 0, borderRadius: "0%" }}
        > 
        <FirstConten />
        </motion.div>
    </div>
  );
}

export default First;