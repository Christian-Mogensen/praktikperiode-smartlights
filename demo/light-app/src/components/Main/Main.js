import { motion } from "framer-motion";
const Main = ({ content }) => {
  return (
    <motion.main
    // transition={{transition:1}}
      layout
      layoutId="main"
      className="fixed speed z-50 bottom-[68px] left-0 w-[375px] bg-[#F6F8FB] max-h-[656px] rounded-t-[31px] p-6"
    >
      {content}
    </motion.main>
  );
};

export default Main;
