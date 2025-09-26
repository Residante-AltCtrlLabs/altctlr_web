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
            <div className=" text-[44px] lg:text-[61px] mt-3">No Gaps.</div>
            <div className="font-light pt-4 text-[44px] lg:text-[61px]">
              {" "}
              No Friction
            </div>
          </h1>
        </div>
        <p className=" text-black text-md">
          Every tool you use — unified into one seamless operating system.
        </p>
        <div className="grid w-[75%] md:w-[60%] lg:w-[50%] mt-10  grid-cols-6 gap-y-10 text-[#2b2b2b]">
          {/* <FaSlack className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
          <FaGoogle className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
          <SiGmail className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
          <SiClickup className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
          <CgMonday className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
          <IoLogoWhatsapp className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
          <SiConvertio className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
          <FaLinkedin className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
          <FaInstagram className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
          <FaFacebook className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
          <FaTiktok className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
          <FaHubspot className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" /> */}
          <img src="/images/slack.png" alt="slack" width={40} />
          <img src="/images/google.png" alt="slack" width={40} />
          <img src="/images/clickup.png" alt="slack" width={40} />
          <img src="/images/gmail.png" alt="slack" width={40} />
          <img src="/images/monday.png" alt="slack" width={40} />
          <img src="/images/wp.png" alt="slack" width={40} />
          <img src="/images/insta.png" alt="slack" width={40} />
          <img src="/images/fb.png" alt="slack" width={40} />
          <img src="/images/linkedin.png" alt="slack" width={40} />
          <img src="/images/tiktok.png" alt="slack" width={40} />
          <img src="/images/calendly.png" alt="slack" width={40} />
          <img src="/images/hubspot.png" alt="slack" width={40} />
        </div>
        <p className=" text-black text-md pt-5">
          …and beyond — with new integrations added continuously.
        </p>
      </div>
    </section>
  );
};

export default FrictionSection;
