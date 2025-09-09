"use client";

import { Button } from "primereact/button";

const EngineSection = () => {
  return (
    <div
      className="relative w-[84%]  rounded-lg mx-auto bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/secbg.png")' }}
    >
      <div className="relative z-10 text-white p-16 flex flex-col justify-center h-full">
        {/* Heading */}
        <h1 className="text-5xl font-bold leading-tight">
          Seamless by Design.
        </h1>

        {/* Description */}
        <p className="mt-4 text-xl">
          Every real estate workflow, connected and automated without gaps.
        </p>

        {/* Cards section */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">

          <div className="bg-[#F0F0F04D] text-white   flex flex-col gap-y-4 h-48 rounded-lg shadow-lg">
            <div className="px-6 pt-6">
              <div className="text-4xl mb-4 rounded-md ">
                <i className="pi pi-calendar"></i>
              </div>
              <h3 className="font-bold  w-[80%]">AI Auto-Scheduling</h3>
            </div>
          </div>

          <div className="bg-[#F0F0F04D] text-white  h-48 flex flex-col gap-y-4 rounded-lg shadow-lg text-center">
                       <div className="px-6 pt-6">
            <div className="text-4xl mb-4 rounded-md">
              <i className="pi pi-chart-line"></i>
            </div>
            <h3 className="font-bold">Lead Scoring Engine</h3>
          </div>
</div>
          <div className="bg-[#F0F0F04D] text-white  h-48 flex flex-col gap-y-4 rounded-lg shadow-lg text-center">
           <div className="px-6 pt-6">
            <div className="text-4xl mb-4 rounded-md">
              <i className="pi pi-share-alt"></i>
            </div>
            <h3 className="font-bold">Multi-Channel Engagement</h3>
          </div>
          </div>

           <div className="bg-[#F0F0F04D] text-white  h-48 flex flex-col gap-y-4 rounded-lg shadow-lg text-center">
           <div className="px-6 pt-6">
            <div className="text-4xl mb-4 rounded-md">
              <i className="pi pi-share-alt"></i>
            </div>
            <h3 className="font-bold">Multi-Channel Engagement</h3>
          </div>
          
          </div>

            <div className="bg-[#F0F0F04D] text-white  h-48 flex flex-col gap-y-4 rounded-lg shadow-lg text-center">
           <div className="px-6 pt-6">
            <div className="text-4xl mb-4 rounded-md">
              <i className="pi pi-share-alt"></i>
            </div>
            <h3 className="font-bold">Multi-Channel Engagement</h3>
          </div>
          
          </div>

            <div className="bg-[#F0F0F04D] text-white  h-48 flex flex-col gap-y-4 rounded-lg shadow-lg text-center">
           <div className="px-6 pt-6">
            <div className="text-4xl mb-4 rounded-md">
              <i className="pi pi-share-alt"></i>
            </div>
            <h3 className="font-bold">Multi-Channel Engagement</h3>
          </div>
          
          </div>
        
</div>
        {/* Bottom Button */}
        {/* <div className="mt-12 flex justify-center">
          <Button
            label="Explore More"
            icon="pi pi-arrow-right"
            className="p-button-rounded p-button-text"
          />
        </div> */}
      </div>
    </div>
  );
};

export default EngineSection;
