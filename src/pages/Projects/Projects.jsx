import React from "react";
import PropTypes from "prop-types";
import BanglaHireImg from "@/assets/images/banglahire.png";
import EshopImg from "@/assets/images/eshop.png";
import SchoolImg from "@/assets/images/school-management.png";
import ChessImg from "@/assets/images/chess.jpg";
import BoiwalaImg from "@/assets/images/boiwala.png";
import CardiacImg from "@/assets/images/cardiac.jpg";
import GadgetImg from "@/assets/images/gadget.png";
import FloopyImg from "@/assets/images/floopy.jpg";
import DbmsImg from "@/assets/images/dbms.webp";

const projects = [
  {
    title: "BanglaHire",
    description:
      "Freelancer hiring platform featuring secure authentication, editable profiles, milestone-based marketplace, real-time chat, escrow payments, balance withdrawals, and admin dashboard. Containerized with Docker & Docker Compose, deployed via GitHub Actions.",
    src: BanglaHireImg,
    color: "#5196fd",
    githubLink:
      "https://github.com/Learnathon-By-Geeky-Solutions/bladerunners",
    liveLink: "https://bladerunners.proactive-coder.xyz/",
  },
  {
    title: "E-Shop",
    description:
      "Full-featured e-commerce website built with Laravel, MySQL, SMS and email notifications, advanced search, reviews, ratings, and category-wise product listings.",
    src: EshopImg,
    color: "#f97316",
    githubLink: "https://github.com/ibnesina/eShop",
    liveLink: "#",
  },
  {
    title: "School Management System",
    description:
      "Comprehensive school platform with panels for Super Admin, Admin, Teachers, Students; featuring result management, fee collection, and dynamic management of courses and users.",
    src: SchoolImg,
    color: "#22c55e",
    githubLink:
      "https://github.com/ibnesina/SchoolManagementSystem",
    liveLink: "#",
  },
  {
    title: "ChessAI",
    description:
      "Interactive chess game with adjustable AI difficulty, built using PyGame for enhanced gameplay experience.",
    src: ChessImg,
    color: "#2563eb",
    githubLink: "https://github.com/ibnesina/ChessAI",
    liveLink: "#",
  },
  {
    title: "Boiwala",
    description:
      "Android e-commerce app with Firebase backend, supporting category-wise products, profile and order management, and real-time data sync.",
    src: BoiwalaImg,
    color: "#db2777",
    githubLink:
      "https://github.com/ibnesina/BookShop_Android_Project",
    liveLink: "#",
  },
  {
    title: "Cardiac Recorder",
    description:
      "Android health monitoring app with Firebase integration for real-time cardiac data storage and retrieval, featuring collaborative GitHub version control.",
    src: CardiacImg,
    color: "#14b8a6",
    githubLink: "https://github.com/ibnesina/CardiacRecorder",
    liveLink: "#",
  },
  {
    title: "Video Streaming DBMS",
    description:
      "Database management system for video streaming services using SQL and PL/SQL for efficient data handling and querying.",
    src: DbmsImg,
    color: "#0ea5e9",
    githubLink:
      "https://github.com/ibnesina/Video-Streaming-Database-Management-System",
    liveLink: "#",
  },
  {
    title: "GadgetShop",
    description:
      "iOS e-commerce application using SwiftUI and Firebase, offering order management, profile features, and JSON-based data handling.",
    src: GadgetImg,
    color: "#7c3aed",
    githubLink:
      "https://github.com/ibnesina/Gadget-Shop-iOS-Development---SwiftUI-",
    liveLink: "#",
  },
  {
    title: "Flappy Bird Game",
    description:
      "iOS game clone of Flappy Bird developed in Swift with smooth physics and simple yet engaging gameplay mechanics.",
    src: FloopyImg,
    color: "#eab308",
    githubLink:
      "https://github.com/ibnesina/Flappy-Bird-iOS-Game-",
    liveLink: "#",
  },
];

export default function Projects() {
  return (
    <main className="bg-black pt-24 pb-12 px-4 md:px-8 lg:px-16">
      {/* add enough top padding so the heading clears the navbar */}
      <h1 className="text-white text-3xl md:text-4xl font-bold mb-10 text-center">
        My Projects
      </h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </section>
    </main>
  );
}

function Card({ src, title, description, color, githubLink, liveLink }) {
  return (
    <div className="group relative bg-zinc-900 rounded-2xl overflow-hidden shadow-xl flex flex-col">
      {/* light sweep overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-50 
                   bg-gradient-to-r from-white/20 via-transparent to-white/20 animate-[slide_1.5s_ease-in-out_infinite]"
        style={{
          backgroundSize: "200% 100%",
        }}
      />

      <div className="relative overflow-hidden h-48 md:h-64 lg:h-56">
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div
          className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium"
        >
          {title}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-gray-300 text-sm md:text-base leading-relaxed flex-1">
          {description}
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group-hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 group-hover:-translate-y-1"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <span className="text-sm font-medium" style={{ color }}>
              Code
            </span>
          </a>
          {liveLink && liveLink !== "#" && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group-hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:-translate-y-1"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span className="text-sm font-medium" style={{ color }}>
                Live
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// add custom keyframe for the slide animation
// in your global CSS (e.g. globals.css or tailwind.css), include:
//
// @keyframes slide {
//   0% { background-position: -200% 0; }
//   100% { background-position: 200% 0; }
// }

Card.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string,
};
