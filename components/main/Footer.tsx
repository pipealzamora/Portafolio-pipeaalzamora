import React from "react";
import {
  RxGithubLogo,
  RxEnvelopeClosed,
  RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
  return (
<div className="w-full h-full bg-transparent  text-gray-200 shadow-lg p-[15px]  ">
    <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
            <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                <div className="font-bold text-[16px]">Redes Sociales</div>
                <div className="flex flex-row ">
                    <p className="flex flex-row items-center my-[15px] px-1 cursor-pointer">
                        <RxEnvelopeClosed />
                        <a href="mailto:pipeaalzamora@gmail.com" target="_blank" className="text-[15px] ml-[5px] z-[50]" >Correo </a>
                    </p>
                     <p className="flex flex-row items-center my-[14px] px-10 cursor-pointer">
                        <RxGithubLogo />
                        <a href="https://github.com/pipealzamora" target="_blank" className="text-[15px] ml-[6px] z-[50]">Github</a>
                    </p>
                     <p className="flex flex-row items-center my-[15px] px-10px-1 cursor-pointer">
                      <RxLinkedinLogo />
                      <a href="https://www.linkedin.com/in/felipe-daniel-aros-alzamora-a2ba59251" target="_blank" className="text-[15px] ml-[6px] z-[50]">Linkedin</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Footer