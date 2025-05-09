import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
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
// import BoiwalaImg from "@/assets/images/boiwala.png";


const projects = [
  {
    title: "BanglaHire",
    description:
      "Freelancer hiring platform featuring secure authentication, editable profiles, milestone-based marketplace, real-time chat, escrow payments, balance withdrawals, and admin dashboard. Containerized with Docker & Docker Compose, deployed via GitHub Actions.",
    src: BanglaHireImg,
    link: "https://bladerunners.proactive-coder.xyz/",
    color: "#5196fd",
    githubLink: "https://github.com/Learnathon-By-Geeky-Solutions/bladerunners",
    liveLink: "https://bladerunners.proactive-coder.xyz/",
  },
  {
    title: "E-Shop",
    description:
      "Full-featured e-commerce website built with Laravel, MySQL, SMS and email notifications, advanced search, reviews, ratings, and category-wise product listings.",
    src: EshopImg,
    link: "",
    color: "#f97316",
    githubLink: "https://github.com/ibnesina/eShop",
    liveLink: "#",
  },
  {
    title: "School Management System",
    description:
      "Comprehensive school platform with panels for Super Admin, Admin, Teachers, Students; featuring result management, fee collection, and dynamic management of courses and users.",
    src: SchoolImg,
    link: "",
    color: "#22c55e",
    githubLink: "https://github.com/ibnesina/SchoolManagementSystem",
    liveLink: "#",
  },
  {
    title: "ChessAI",
    description:
      "Interactive chess game with adjustable AI difficulty, built using PyGame for enhanced gameplay experience.",
    src: ChessImg,
    link: "",
    color: "#2563eb",
    githubLink: "https://github.com/ibnesina/ChessAI",
    liveLink: "#",
  },
  {
    title: "Boiwala",
    description:
      "Android e-commerce app with Firebase backend, supporting category-wise products, profile and order management, and real-time data sync.",
    src: BoiwalaImg,
    link: "",
    color: "#db2777",
    githubLink: "https://github.com/ibnesina/BookShop_Android_Project",
    liveLink: "#",
  },
  {
    title: "Cardiac Recorder",
    description:
      "Android health monitoring app with Firebase integration for real-time cardiac data storage and retrieval, featuring collaborative GitHub version control.",
    src: CardiacImg,
    link: "",
    color: "#14b8a6",
    githubLink: "https://github.com/ibnesina/CardiacRecorder",
    liveLink: "#",
  },
  {
    title: "GadgetShop",
    description:
      "iOS e-commerce application using SwiftUI and Firebase, offering order management, profile features, and JSON-based data handling.",
    src: GadgetImg,
    link: "",
    color: "#7c3aed",
    githubLink: "https://github.com/ibnesina/Gadget-Shop-iOS-Development---SwiftUI-",
    liveLink: "#",
  },
  {
    title: "Flappy Bird Game",
    description:
      "iOS game clone of Flappy Bird developed in Swift with smooth physics and simple yet engaging gameplay mechanics.",
    src: FloopyImg,
    link: "",
    color: "#eab308",
    githubLink: "https://github.com/ibnesina/Flappy-Bird-iOS-Game-",
    liveLink: "#",
  },
  {
    title: "Video Streaming DBMS",
    description:
      "Database management system for video streaming services using SQL and PL/SQL for efficient data handling and querying.",
    src: DbmsImg,
    link: "",
    color: "#0ea5e9",
    githubLink: "https://github.com/ibnesina/Video-Streaming-Database-Management-System",
    liveLink: "#",
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    const checkResolution = () => {
      const isTarget =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      document.documentElement.style.setProperty(
        "--project-scale",
        isTarget ? "0.85" : "1"
      );
      document.documentElement.style.setProperty(
        "--project-margin",
        isTarget ? "-5vh" : "0"
      );
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);
    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={project.title}
                i={i}
                src={project.src}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  src,
  title,
  description,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
      >
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={src}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
            </div>
            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />
              <div className="flex items-center gap-4">
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span className="text-xs md:text-sm font-medium" style={{ color }}>
                    Code
                  </span>
                </motion.a>
                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span className="text-xs md:text-sm font-medium" style={{ color }}>
                    Live
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

Card.propTypes = {
  i: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};
