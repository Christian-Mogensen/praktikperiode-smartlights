import { motion } from "framer-motion";
const Main = ({ content }) => {
  return (
    <motion.main
      layout
      layoutId="main"
      className="fixed speed z-10 bottom-6 pb-6  left-0 py-4 w-[375px] bg-[#F6F8FB]  rounded-t-[31px]"
    >
      <div className="overflow-auto max-h-[656px]  p-6 pt-10">{content}</div>
    </motion.main>
  );
};

export default Main;
