import React,{useState,useEffect} from "react";
import InputField from "./InputField";
import InputSubmit from "./InputSubmit";
import { motion } from "framer-motion";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";


const Formular = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {navigate("/");}


  }, [user, loading]);


  const formParent = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const formChild = {
    hidden: { opacity: 0, y: 500 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const emailField = (e) =>{
    setEmail(e.target.value)
  }
  const passwordField = (e) =>{
    setPassword(e.target.value)
  }

  return (
    <div className="w-full h-[490px] ">
      <motion.div
        variants={formParent}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-3"
      >
        <InputField fieldId={email} variant={formChild} value={email} type="text" name="user" onChange={(e) => emailField(e)} />
        <InputField fieldId={password} variant={formChild} value={password} type="password" name="password" onChange={(e) => passwordField(e)}/>
        <InputSubmit val='Sign in' variant={formChild} onClick={() => logInWithEmailAndPassword(email, password)} />
        <InputSubmit val='Google' variant={formChild} onClick={signInWithGoogle} />
         
      </motion.div>
    </div>
  );
};

export default Formular;
