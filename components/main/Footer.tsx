import React from "react";
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
  return (
<div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]  ">
    <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
            <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                <div className="font-bold text-[16px]">Redes Sociales</div>
                <p className="flex flex-row items-center my-[15px] cursor-pointer">
                    <RxInstagramLogo />
                    <a href="https://www.instagram.com/pipealzamora" target="_blank" className="text-[15px] ml-[6px] z-[50]" >Instagram</a>
                </p>
                <p className="flex flex-row items-center my-[15px] cursor-pointer">
                    <RxGithubLogo />
                    <a href="https://github.com/pipealzamora" target="_blank" className="text-[15px] ml-[6px] z-[50]">Github</a>
                </p>
                <p className="flex flex-row items-center my-[15px] cursor-pointer">
                    <RxLinkedinLogo />
                    <a href="https://www.linkedin.com/in/felipe-daniel-aros-alzamora-a2ba59251" target="_blank" className="text-[15px] ml-[6px] z-[50]">Linkedin</a>
                </p>
            </div>
        </div>
    </div>
</div>

  )
}

export default Footer