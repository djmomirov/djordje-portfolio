import { CalculatorIcon, PuzzlePieceIcon } from "@heroicons/react/24/solid";
import { BenefitType, SelectedPage } from "@/shared/types";

import ActionButton from "../../hooks/ActionButton";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import HText from "@/shared/HText";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

const benefits: Array<BenefitType> = [
  {
    icon: <FontAwesomeIcon icon={faDumbbell} size="lg" />,
    title: "Fitnes App",
    description:
      "Responsive, single-page site for seamless UX on all devices. Simplified design, optimal accessibility, and engaging content.",
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

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="w-5/6 min-h-full py-20 mx-auto">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
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
          <p className="my-5 text-sm">
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
          {benefits.map((benefit: BenefitType) => (
            <Benefit
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
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
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
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
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
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio.
              </p>
              <p className="mb-5">
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
