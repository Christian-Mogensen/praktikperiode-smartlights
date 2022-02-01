import {motion} from 'framer-motion'
const Main = ({ content, d,c }) => {
  const pageVariants = {
    initial: {
      height:d,
    },
    in: {
      height:c,
    },
    out: {
      height:d,
    },
  }
  return (
    
    <motion.main 
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={{duration:1}}
    className="fixed bottom-[68px] left-0 w-[375px] bg-[#F6F8FB] max-h-[656px] rounded-t-[31px] p-6">
      {content}
    </motion.main>
  );
};

export default Main;
