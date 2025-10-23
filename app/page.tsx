import Hero from "@/components/Hero/Hero";
// TODO: Removed MyExperience component (Cambridge Analytica content)
// import MyServices from "@/components/MyServices/MyServices";
// import MyStack from "@/components/MyStack/MyStack";
import ShowCase from "@/components/ShowCase";
// import Testimonials from "@/components/Testimonials";
import React from "react";

export default function Home() {
  return (
    <div className="flex lg:flex-1 flex-col gap-0 h-min px-4 sm:px-5 overflow-hidden p-0 relative lg:px-0 w-full flex-wrap lg:flex-nowrap items-center justify-start">
      <div className="gap-8 sm:gap-12 flex-col max-w-full w-full lg:max-w-4xl lg:w-full lg:flex-nowrap flex items-start flex-none h-min justify-start relative overflow-hidden lg:overflow-visible py-8 sm:py-12">
        <Hero />
        {/* TODO: Removed MyExperience component (Cambridge Analytica content) */}
        {/* <MyStack /> */}
        {/* <MyServices /> */}
        <ShowCase showData={3} isMore />
        {/* <Testimonials /> */}
      </div>
    </div>
  );
}
