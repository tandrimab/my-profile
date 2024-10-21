"use client";
import {useState, useEffect} from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import { hero } from "@/app/constants";
import TypewritingText from "./TypewritingText";

function Intro() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setShowText(true)
    }, [1200])
  }, [])

  return (
    <div className="overflow-hidden h-[100vh] w-full">
      <div className="h-full w-full animate-bgAnimate content-center text-center bg-repeat-x backdrop-blur-lg bg-hero">
        <div className="relative flex flex-col items-center text-center h-max max-w-[1200px] bg-[rgba(0,0,0,0.55)] lg:mx-auto backdrop-blur-md rounded-[25px] wrapper m-4 caret-transparent p-10 lg:min-h-[700px] sm:min-h-[40%]">
          <div className='lg:max-w-[300px] lg:max-h-[300px] sm:max-w-[150px] sm:max-h-[150px]'>
          <Image
            src={hero.profiePic}
            layout='responsive'
            width={300}
            height={300}
            className="rounded-full mb-4"
          />

          </div>
          <span className="lg:text-3xl md:text-[1rem]">
              <span className="bg-gradient_text text-gradient">
                {hero.nameText.field2}
              </span>
            </span>
          <motion.div className="text-nowrap lg:text-[6rem] md:text-[3rem] sm:text-[1.5rem] mb-4 bg">
            <TypewritingText text={hero.intro} />
          </motion.div>
          {showText && <motion.div className="text-nowrap lg:text-[6rem] md:text-[3rem] sm:text-[1.5rem] mb-4 bg">
            <TypewritingText text={hero.nameText.field1} delay= {1}/>
          </motion.div>}
          <div className="absolute bottom-0 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-arrow-down"
              viewBox="0 0 16 16"
              className=" w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
