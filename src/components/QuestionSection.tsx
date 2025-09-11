"use client";

import { useMemo, useState } from "react";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import { Accordion, AccordionTab } from "primereact/accordion";
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
import { Card } from "primereact/card";

const QuestionSection = () => {
  return (
    <section className="   bg-white py-20  ">
      <div className="flex justify-center ">
        <span className="uppercase tracking-widest text-black border border-black text-[10px] px-5 py-1 rounded-full ">
          FAQS
        </span>
      </div>
      <div className="flex flex-col items-center  mt-5  gap-y-4 max-w-[60%] mx-auto ">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl   text-black mb-8 leading-tight mt-6">
            <div className=" text-[61px] mt-3  ">Your Questions,</div>
            <div className="font-light pt-1 text-center  text-[61px]">
              {" "}
              Answered.
            </div>
          </h1>
        </div>
        <p className=" text-black text-md">Everything you need to know.</p>
        <Accordion className="border border-black w-[80%] text-black mt-10">
          <AccordionTab header="Header I">
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </AccordionTab>
          <AccordionTab header="Header I">
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </AccordionTab>
        </Accordion>
        <div></div>
        <p className=" text-black text-md pt-5">
          …and beyond — with new integrations added continuously.
        </p>
      </div>
    </section>
  );
};

export default QuestionSection;
