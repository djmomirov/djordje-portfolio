import ActionButton from "../../hooks/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import { classNames } from "@/utils/helpers";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 py-10 bg-gray-20 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="items-center justify-center w-5/6 mx-auto md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-portfoliotext">
                <div className="text-[57px]">Djordje Momirov</div>
              </div>
            </div>

            <p className="mt-8 text-xl">
              I would like to apply for the position of Junior Front-End
              Developer and I think by this web application you are going to
              have the information of my knowledge about front-end developing.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="flex items-center gap-8 mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Contact me
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold underline text-primary-500 hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactMe)}
              href={`#${SelectedPage.ContactMe}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className={classNames(
            isAboveMediumScreens ? "" : "mt-10",
            " flex justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end xl:mt "
          )}
        >
          <div className="relative">
            <img
              className="border-2 rounded-2xl border-primary-100"
              alt="home-pageGraphic"
              src="/src/assets/djordje1.jpg"
            />
            <div
              className={classNames(
                isAboveMediumScreens
                  ? "absolute top-0 right-0 mt-2 mr-3"
                  : "absolute top-0 right-0 mt-2 mr-5"
              )}
            >
              <img
                className="w-16 h-16 "
                alt="home-pageGraphic"
                src="/src/assets/ikonica.png"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="w-5/6 mx-auto">
            <div className="flex items-center justify-between w-3/5 gap-8">
              <img alt="redbull-sponsor" src={SponsorRedBull} />
              <img alt="forbes-sponsor" src={SponsorForbes} />
              <img alt="fortune-sponsor" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
