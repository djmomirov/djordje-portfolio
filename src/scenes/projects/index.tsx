import { CalculatorIcon, PuzzlePieceIcon } from "@heroicons/react/24/solid";
import { ProjectType, SelectedPage } from "@/shared/types";

import ActionButton from "../../hooks/ActionButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HText from "@/shared/HText";
import Project from "./Project";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const projects: Array<ProjectType> = [
  {
    icon: <FontAwesomeIcon icon={faDumbbell} size="lg" />,
    title: "Fitnes App",
    description:
      "Responsive, simple design, single-page website for seamless UX on all devices.",
    link: "https://github.com/djmomirov/fitness-app",
  },
  {
    icon: <PuzzlePieceIcon className="w-6 h-6" />,
    title: "Tic-Tac-Toe Game",
    description:
      "JS/React Tic Tac Toe: Interactive game with real-time updates and dynamic UI.",

    link: "https://github.com/djmomirov/tic-tac-toe",
  },
  {
    icon: <CalculatorIcon className="w-6 h-6" />,
    title: "Investment-calculator",
    description:
      "Investment Calculator: Plan and visualize returns with this efficient financial tool.",

    link: "https://github.com/djmomirov/investment-calculator",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const MyProjects = ({ setSelectedPage }: Props) => {
  return (
    <section id="myprojects" className="w-5/6 min-h-full py-20 mx-auto">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.MyProjects)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MY PROJECTS</HText>
          <p className="my-5 text-xl">
            Explore a selection of projects I created while learning React,
            showcasing both my learning journey and practical implementation of
            the technology. Here you can see a selection of my React projects
            that showcase my proficiency in web development. Click the links to
            view the GitHub repositories and explore the code.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="items-center justify-between gap-8 mt-5 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {projects.map((benefit: ProjectType) => (
            <Project
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              link={benefit.link}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="items-center justify-between gap-20 mt-16 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="w-1/4 mx-auto h-1/4"
            alt="projects-page-graphic"
            src="/src/assets/coding.png"
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    WHAT I HAVE LEARNED DURING THIS{" "}
                    <span className="text-primary-500">JOURNEY</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Focused on React and JS, I learn by doing projects, mastering
                Git, Tailwind, HTML, CSS, and front-end design. Exploring
                TypeScript for enhanced development.
              </p>
              <p className="mb-5">
                Eager to contribute and grow. Excited about the possibility of
                working together I hope to join your team soon!
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Contact me
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MyProjects;
