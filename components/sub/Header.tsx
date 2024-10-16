"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center  justify-center px-20 mt-40 w-full z-[20]"
        >
            <div className="h-full w-full flex  flex-col gap-5 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[5px] border border-[#7042f88b] opacity-[0.9]"
                >
                    <SparklesIcon className="text-orange-500 mr-[10px] h-5 w-5" />
                    <h1 className="Welcome-text text-[13px]">
                    Felipe Daniel Aros Alzamora
                    </h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-4xl font-bold text-white max-w-[600px] w-auto h-auto"
                >
                  <span>
                    El mejor
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                      {" "}
                      aprendizaje{" "}
                    </span>
                    te lo dan los errores.
                  </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 my-5 max-w-[600px]"
                >
                   Hola que tal me presento soy Felipe Aros, un desarrollador de software independiente,que en estos momentos estoy creando mi startup de automatización en electricidad, tambien trabaje como desarrollador de software y soporte técnico en otras empresas.

                </motion.p>

            </div>

            <motion.div
                variants={slideInFromRight(0.5)}
                className="w-full h-full flex justify-center items-center hidden md:flex"
            >
                <Image
                    src="/mainIconsdark.svg"
                    alt="work icons"
                    height={650}
                    width={650}
                />
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;
