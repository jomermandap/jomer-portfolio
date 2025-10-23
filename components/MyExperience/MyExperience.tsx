"use client";
import { briefcaseIconley } from "@/app/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SectionHeading from "../SectionHeading";
import { motion } from "framer-motion";

export default function MyExperience() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex items-start flex-none flex-col flex-nowrap gap-[30px] h-min justify-start overflow-visible relative w-full">
      {/* Section Heading */}
      <div className="flex-none h-auto relative w-full">
        <SectionHeading
          icon={briefcaseIconley}
          title="Cambridge Analytica Scandal "
          description="A Project Management Proposal about Exploring Data Privacy, Corporate Responsibility, and Ethical Technology Practices."
        />
      </div>

      {/* Content Sections */}
      <div className="w-full">
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-none flex-col gap-[20px] h-min justify-start overflow-visible p-0 relative w-full flex-nowrap items-start"
        >
          {/* Introduction */}
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-very-dark-gray border border-dark-gray-3 w-full rounded-xl flex flex-col flex-nowrap gap-5 h-min justify-start overflow-visible p-4 sm:p-6 relative"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-light-gray-4 font-bold text-lg sm:text-[22px]">
                Introduction
              </h3>
              <p className="text-light-gray-2 text-[15px] font-medium">
                The Cambridge Analytica Scandal of 2018 exposed the misuse of
                personal data from over 87 million Facebook users. This case
                highlights critical issues in data privacy, corporate
                responsibility, and the ethical use of big data.
              </p>
              <div className="flex justify-center">
                <Image
                  width={700}
                  height={300}
                  src="/scandal_diagram.png"
                  alt="Cambridge Analytica Data Flow Diagram"
                  className="rounded-lg"
                />
              </div>
            </div>
          </motion.li>

          {/* Case Study */}
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-very-dark-gray border border-dark-gray-3 w-full rounded-xl flex flex-col flex-nowrap gap-5 h-min justify-start overflow-visible p-4 sm:p-6 relative"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-light-gray-4 font-bold text-lg sm:text-[22px]">
                Case Study
              </h3>
              <p className="text-light-gray-2 text-[15px] font-medium">
                The scandal began when the app &quot;This Is Your Digital
                Life&quot; harvested data from 270,000 users and their friends
                through Facebook&apos;s API, affecting 87 million individuals
                globally. Cambridge Analytica used this data for psychological
                profiling and targeted political advertising in the 2016 U.S.
                Presidential Election and Brexit referendum.
              </p>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/VDR8qGmyEQg"
                title="Cambridge Analytica Scandal Explained"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </motion.li>

          {/* Ethical Analysis */}
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-very-dark-gray border border-dark-gray-3 w-full rounded-xl flex flex-col flex-nowrap gap-5 h-min justify-start overflow-visible p-4 sm:p-6 relative"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-light-gray-4 font-bold text-lg sm:text-[22px]">
                Ethical Analysis
              </h3>
              <p className="text-light-gray-2 text-[15px] font-medium">
                Should Facebook be held accountable for the misuse of user data
                by third parties? This question underscores the tension between
                user autonomy, corporate responsibility, and the ethical
                boundaries of data analytics.
              </p>
              <ul className="list-disc pl-5 text-light-gray-2 text-[15px] font-medium">
                <li>Weak data governance by Facebook.</li>
                <li>Unethical actions by Cambridge Analytica.</li>
                <li>
                  Need for stricter data privacy laws and corporate
                  accountability.
                </li>
              </ul>
            </div>
          </motion.li>

          {/* Key Findings */}
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-very-dark-gray border border-dark-gray-3 w-full rounded-xl flex flex-col flex-nowrap gap-5 h-min justify-start overflow-visible p-4 sm:p-6 relative"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-light-gray-4 font-bold text-lg sm:text-[22px]">
                Key Findings
              </h3>
              <p className="text-light-gray-2 text-[15px] font-medium">
                The research concludes that:
              </p>
              <ul className="list-disc pl-5 text-light-gray-2 text-[15px] font-medium">
                <li>
                  Facebook&apos;s weak data governance allowed unauthorized
                  access to user data.
                </li>
                <li>
                  Cambridge Analytica exploited data unethically for political
                  gain.
                </li>
                <li>
                  Stricter data privacy laws are needed to prevent future
                  breaches.
                </li>
              </ul>
            </div>
          </motion.li>

          {/* Proposed Solutions */}
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-very-dark-gray border border-dark-gray-3 w-full rounded-xl flex flex-col flex-nowrap gap-5 h-min justify-start overflow-visible p-4 sm:p-6 relative"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-light-gray-4 font-bold text-lg sm:text-[22px]">
                Proposed Solutions
              </h3>
              <p className="text-light-gray-2 text-[15px] font-medium">
                To address the ethical and legal concerns raised by the scandal,
                the following solutions are proposed:
              </p>
              <ul className="list-disc pl-5 text-light-gray-2 text-[15px] font-medium">
                <li>
                  <strong>Strengthen Data Governance Policies:</strong> Limit
                  third-party access to user data and conduct regular audits.
                </li>
                <li>
                  <strong>Improve User Consent Mechanisms:</strong> Provide
                  granular choices for data sharing.
                </li>
                <li>
                  <strong>Increase Transparency and Communication:</strong>{" "}
                  Publish transparency reports on data usage.
                </li>
              </ul>
            </div>
          </motion.li>

          {/* Downloadable PDF and View Poster */}
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-very-dark-gray border border-dark-gray-3 w-full rounded-xl flex flex-col flex-nowrap gap-5 h-min justify-start overflow-visible p-4 sm:p-6 relative"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-light-gray-4 font-bold text-lg sm:text-[22px]">
                Download Full Proposal
              </h3>
              <div className="flex gap-4">
                <Link
                  href="/document.pdf"
                  target="_blank"
                  className="bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Download PDF
                </Link>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-secondary text-white font-bold py-2 px-4 rounded-lg hover:bg-secondary-dark transition-colors"
                >
                  View Poster
                </button>
              </div>
            </div>
          </motion.li>
        </motion.ul>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-very-dark-gray border border-dark-gray-3 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-light-gray-2 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="mt-2">
              <h2 className="text-light-gray-4 font-bold text-2xl mb-4">
                Cambridge Analytica Scandal - Research Poster
              </h2>
              <div className="flex justify-center">
                <Image
                  src="/poster.png"
                  alt="Cambridge Analytica Research Poster"
                  width={800}
                  height={1200}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
