"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { flyIcon } from "@/app/assets/assets";
import { myProjects } from "@/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

//Projects

export default function ShowCase({
  isMore = true,
  showData = 3,
}: {
  isMore: boolean;
  showData: number;
}) {
  return (
    <section className="flex items-start flex-none flex-col flex-nowrap gap-6 h-min justify-start overflow-visible relative w-full">
      {isMore && (
        <div className="flex-none h-auto relative w-full">
          <SectionHeading
            title="Projects"
            icon={flyIcon}
            description="Explore a collection of my recent projects and achievements."
          />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 w-full">
        {myProjects?.slice(0, showData).map((project, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{
              once: true,
            }}
            className="bg-very-dark-gray border border-dark-gray-3 rounded-xl p-4 sm:p-5 hover:border-dark-gray-2 transition-all duration-300"
            key={project.id}
          >
            {/* Project Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-bold text-white text-base sm:text-lg leading-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-light-gray-2 text-xs sm:text-sm leading-relaxed">
                  {project.summary}
                </p>
              </div>
            </div>

            {/* Impact Line */}
            {project.impact && (
              <div className="mb-3 p-2 bg-dark-gray-1 rounded-lg border border-dark-gray-4">
                <p className="text-green-400 text-xs font-medium">
                  {project.impact}
                </p>
              </div>
            )}

            {/* Stack Tags */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.stack.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-almost-black border border-dark-gray-4 rounded-full text-light-gray-3 text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 flex-wrap">
              {project.links.code && (
                <Link
                  href={project.links.code}
                  target="_blank"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-almost-black border border-dark-gray-4 rounded-lg hover:bg-dark-gray-4 transition-all duration-300 text-light-gray-3 text-xs font-medium"
                >
                  <Github size={14} />
                  Code
                </Link>
              )}
              {project.links.demo && (
                <Link
                  href={project.links.demo}
                  target="_blank"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-almost-black border border-dark-gray-4 rounded-lg hover:bg-dark-gray-4 transition-all duration-300 text-light-gray-3 text-xs font-medium"
                >
                  <ExternalLink size={14} />
                  Demo
                </Link>
              )}
              {project.links.paper && (
                <Link
                  href={project.links.paper}
                  target="_blank"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-almost-black border border-dark-gray-4 rounded-lg hover:bg-dark-gray-4 transition-all duration-300 text-light-gray-3 text-xs font-medium"
                >
                  <ExternalLink size={14} />
                  Paper
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {isMore && (
        <div className="flex-1 h-auto relative w-full block ">
          <Link
            href="/projects"
            className="bg-almost-black rounded-[10px] border border-dark-gray-4 w-full flex cursor-pointer gap-[6px] p-[14px_18px] flex-nowrap justify-center items-center overflow-visible h-min relative group hover:bg-dark-gray-4 transition-all duration-500"
          >
            <div className="flex flex-shrink-0 group-hover:opacity-100 transition-all duration-500 justify-start opacity-70 flex-none h-auto w-auto whitespace-pre relative">
              <p className="uppercase font-medium font-IBM_Plex_Mono text-[15px] text-very-light-gray">
                View All Projects
              </p>
            </div>
            <div className="aspect-square flex-none h-auto relative overflow-hidden w-5 transition-all group-hover:opacity-100 duration-500 opacity-70">
              <ExternalLink size={16} className="w-full h-full" />
            </div>
          </Link>
        </div>
      )}
    </section>
  );
}
