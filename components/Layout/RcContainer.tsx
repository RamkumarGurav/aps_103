"use client";
import RCLogo from "@/public/rc1.png";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
const font = Roboto({ weight: "400", subsets: ["latin"] });

export default function RcContainer() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      id="rcContainer"
      className={`font-sans ${
        font.className
      } fixed bottom-5  bg-white  rounded-l  flex z-[1000] overflow-hidden shadow-lg h-[74px] transition-all   ${
        isHovered ? "right-0" : "right-[-190px]  "
      }`}
      onMouseEnter={() => setIsHovered(true)} // Set isHovered to true on mouse enter
      onMouseLeave={() => setIsHovered(false)} // Set isHovered to false on mouse leave
    >
      <div className="flex items-center h-full ">
        <div className="w-[70px] h-full flex flex-col justify-center items-center bg-gray-100 ">
          <Image
            src={RCLogo}
            alt="pagination"
            priority={true}
            className="h-[50px] w-auto"
          />
          {!isHovered && (
            <p className="text-center text-[8px] text-nowrap text-gray-900">
              Privacy-Terms
            </p>
          )}
        </div>
        <div
          className={` w-[190px] h-full   bg-[#1a73e8] text-white flex flex-col 
        justify-center  px-2`}
        >
          <p className={` text-sm  `}>protected by reCAPTCHA</p>
          <p>
            <Link
              href="/https://policies.google.com/privacy?hl=en-GB"
              className=" text-xs hover:underline "
            >
              Privacy
            </Link>{" "}
            -{" "}
            <Link
              href="https://policies.google.com/terms?hl=en-GB"
              className=" text-xs hover:underline "
            >
              Terms
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
