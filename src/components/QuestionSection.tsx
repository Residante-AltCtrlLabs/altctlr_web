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
            <div className="md:text-[44px] lg:text-[61px] mt-3  ">Your Questions,</div>
            <div className="font-light pt-1 text-center  md:text-[44px] lg:text-[61px]">
              {" "}
              Answered.
            </div>
          </h1>
        </div>
        <p className=" text-black text-md">Everything you need to know.</p>
        <Accordion className=" w-[100%] lg:w-[80%] space-y-3 text-black !font-medium mt-10">
          <AccordionTab header="How does Alternative Control actually capture and respond to leads?">
            <p className="m-0">
              Alternative Control uses advanced AI algorithms to automatically
              capture leads from multiple channels including your website,
              social media, and third-party platforms. It then analyzes each
              lead's potential value and responds with personalized messages
              based on your predefined criteria and templates.
            </p>
          </AccordionTab>
          <AccordionTab header="What's the Knowledge Base used for?">
            <p className="m-0">
              The Knowledge Base serves as a centralized repository of
              information about your properties, services, pricing, and
              frequently asked questions. It helps AltCtrl provide accurate,
              consistent responses to leads and enables your team to access
              up-to-date information quickly.
            </p>
          </AccordionTab>
          <AccordionTab header="Is it difficult to integrate AltCtrl into our operations?">
            <p className="m-0">
              Not at all! AltCtrl is designed for easy integration with your
              existing systems. Our setup process is straightforward, and we
              provide comprehensive support to ensure a smooth transition. Most
              integrations can be completed within a few hours.
            </p>
          </AccordionTab>
          <AccordionTab header="How does it know which leads are worth my time?">
            <p className="m-0">
              AltCtrl uses machine learning to analyze lead behavior, engagement
              patterns, and qualification criteria you define. It scores each
              lead based on likelihood to convert and prioritizes them
              accordingly, ensuring you focus on the most promising
              opportunities.
            </p>
          </AccordionTab>
          <AccordionTab header="Is AltCtrl suitable for multiple property types or regions?">
            <p className="m-0">
              Yes! AltCtrl is designed to work across various property types
              including residential, commercial, and mixed-use developments. It
              can handle multiple regions and markets, adapting its responses
              and strategies based on local market conditions and regulations.
            </p>
          </AccordionTab>
          <AccordionTab header="What can developers do with AltCtrl's API?">
            <p className="m-0">
              Developers can leverage AltCtrl's comprehensive API to build
              custom integrations, create automated workflows, sync data with
              existing CRM systems, and develop custom applications that extend
              AltCtrl's functionality to meet specific business needs.
            </p>
          </AccordionTab>
        </Accordion>
        <div></div>
        <p className=" text-black text-md pt-5">
          Looking for something specific?
        </p>

        <p className=" text-black text-md">
          Reach us anytime at hello@altctrl.ai
        </p>
      </div>
    </section>
  );
};

export default QuestionSection;
