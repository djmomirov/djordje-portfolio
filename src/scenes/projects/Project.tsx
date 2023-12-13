import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
};

const Project = ({ icon, title, description, link }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="w-1/3 min-h-full px-5 py-16 mt-5 text-center border-2 border-gray-100 rounded-md"
    >
      <div className="flex justify-center mb-4">
        <div className="p-4 border-2 border-gray-100 rounded-full bg-primary-100">
          {icon}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <a
        className="text-sm font-bold underline text-primary-500 hover:text-secondary-500 hover:cursor-pointer"
        target="_blank"
        href={link}
      >
        <p>Check it out</p>
      </a>
    </motion.div>
  );
};

export default Project;
