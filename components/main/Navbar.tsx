"use client";
import React from "react";
import Link from "next/link";
const Navbar = () => {
    return (
        <div className="w-full h-[75px] fixed top-0 shadow-lg items-center bg-[#03001417] backdrop-blur-md z-50 px-1">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">


                    <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Desarrollador De Software
          </span>


                <div className="w-[500px] h-full flex flex-row items-center justify-between  ">
                    <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                        <a href="#about-me" className="cursor-pointer">
                            Sobre mi
                        </a>
                        <a href="#skills" className="cursor-pointer">
                            Habilidades
                        </a>
                        <a href="#projects" className="cursor-pointer">
                            Proyectos
                        </a>
                        <a href="https://blog-personal-notion.vercel.app/">Blog</a>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Navbar;
