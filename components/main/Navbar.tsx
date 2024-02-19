"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
    return (
        <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#ffa500]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
            

                    <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Desarrollador De Software
          </span>
                

                <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
                    <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                        <a href="#about-me" className="cursor-pointer">
                            Sobre mi
                        </a>
                        <a href="#skills" className="cursor-pointer">
                            Habilidaes
                        </a>
                        <a href="#projects" className="cursor-pointer">
                            Proyectos
                        </a>
                    </div>
                </div>

                <div className="flex flex-row gap-5">
                    {Socials.map((social) => (
                        <Image
                            src={social.src}
                            alt={social.name}
                            key={social.name}
                            width={24}
                            height={24}
                            onClick={() => { window.open(social.href, '_blank');
                        }}
                            className="cursor-pointer"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
