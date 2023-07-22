import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    //This is to generate the background
    <section className="ralative w-full h-screen mx-auto">
      Hero
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
          {/* Render the purple circle  */}
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
          <div>
            <h1 className={`${styles.heroHeadText}text-white`}>Hi, I'm <span className="text-[#915eff]">Mohamed</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a full stack<br className='sm:block hidden' />
            junior software developer
          </p>
          </div>
      </div>
    </section>
  );
};

export default Hero;
