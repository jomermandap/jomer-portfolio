import ShowCase from "@/components/ShowCase";
import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export const metadata = {
  title: "Projects | Jomer Mandap",
  description: "Explore my portfolio of projects including web development, AI applications, and mobile apps.",
  openGraph: {
    title: "Projects | Jomer Mandap",
    description: "Explore my portfolio of projects including web development, AI applications, and mobile apps.",
    type: "website",
  },
};

export default function Projects() {
  return (
    <div className="flex lg:flex-1 flex-col gap-0 h-min px-4 sm:px-5 overflow-hidden p-0 relative lg:px-0 w-full flex-wrap lg:flex-nowrap items-center justify-start">
      <div className="gap-6 sm:gap-8 flex-col max-w-full w-full lg:max-w-4xl lg:w-full lg:flex-nowrap flex items-start flex-none h-min justify-start relative overflow-hidden lg:overflow-visible py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-light-gray-3 mb-6 sm:mb-8 w-full">
          <Link 
            href="/" 
            className="flex items-center gap-1 hover:text-white transition-colors duration-200"
          >
            <Home size={16} />
            Home
          </Link>
          <ChevronRight size={16} />
          <span className="text-white">Projects</span>
        </nav>

        {/* Page Header */}
        <div className="w-full mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">
            My Projects
          </h1>
          <p className="text-sm sm:text-base text-light-gray-2 leading-relaxed">
            A collection of my recent work showcasing full-stack development, AI integration, and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <ShowCase showData={6} isMore={false} />
      </div>
    </div>
  );
}
