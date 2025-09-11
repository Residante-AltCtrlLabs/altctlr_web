"use client";

import { useMemo, useState } from "react";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import {
  FaSlack,
  FaGoogle,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaHubspot,
} from "react-icons/fa";
import { SiClickup, SiGmail, SiConvertio } from "react-icons/si";
import { CgMonday } from "react-icons/cg";
import { IoLogoWhatsapp } from "react-icons/io";

const FrictionSection = () => {
  return (
    <section className="   bg-white py-20  ">
      <div className="flex justify-center ">
        <span className="uppercase tracking-widest text-black border border-black text-[10px] px-5 py-1 rounded-full ">
          INTEGRATIONS
        </span>
      </div>
      <div className="flex flex-col items-center  mt-5  gap-y-4 max-w-[60%] mx-auto ">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl  text-black mb-8 leading-tight mt-6">
            <div className=" text-[61px] mt-3">No Gaps.</div>
            <div className="font-light pt-4  text-[61px]"> No Friction</div>
          </h1>
        </div>
        <p className=" text-black text-md">
          Every tool you use — unified into one seamless operating system.
        </p>
        <div className="grid  w-[50%] mt-10  grid-cols-6 gap-y-10 text-[#2b2b2b]">
          <FaSlack size={48} />
          <FaGoogle size={48} />
          <SiGmail size={48} />
          <SiClickup size={48} />
          <CgMonday size={48} />
          <IoLogoWhatsapp size={48} />
          <SiConvertio size={48} />
          <FaLinkedin size={48} />
          <FaInstagram size={48} />
          <FaFacebook size={48} />
          <FaTiktok size={48} />
          <FaHubspot size={48} />
        </div>
        <p className=" text-black text-md pt-5">
          …and beyond — with new integrations added continuously.
        </p>
      </div>
    </section>
  );
};

export default FrictionSection;
