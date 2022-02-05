import React, { useState, useEffect, useContext } from "react";
import InputField from "./InputField";
import InputSubmit from "./InputSubmit";
import { motion } from "framer-motion";
import {
  auth,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { ColorContext } from "../../../hooks/colorContext";
import FormSwitcher from "./FormSwitcher";

const Formular = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);

  const { createAcc, setCreateAcc } = useContext(ColorContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      navigate("/");
    }
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
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  const emailField = (e) => {
    setEmail(e.target.value);
  };
  const nameField = (e) => {
    setName(e.target.value);
  };
  const passwordField = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="w-full h-[490px] ">
      <motion.div
        variants={formParent}
        initial="hidden"
        animate="show"
        className="grid mb-5 grid-cols-1 h-2/3 overflow-hidden"
      >
        {createAcc ? (
          <>
          <div className="grid gap-1 ">

            <InputField
              fieldId={email}
              variant={formChild}
              value={email}
              type="text"
              name="email"
              onChange={(e) => emailField(e)}
            />
            <InputField
              fieldId={password}
              variant={formChild}
              value={password}
              type="password"
              name="password"
              onChange={(e) => passwordField(e)}
              />
              
            <InputSubmit
              val="Sign in"
              variant={formChild}
              onClick={() => logInWithEmailAndPassword(email, password)}
              />
            <InputSubmit
              val="Sign in with Google"
              variant={formChild}
              onClick={signInWithGoogle}
              />
              </div>
              <FormSwitcher
              variants={formChild}
              onClick={() => setCreateAcc(!createAcc)}
              val={'reset password'}
            />      
          </>
        ) : (
          <>
          <div className="grid gap-1 ">

            <InputField
              fieldId={email}
              variant={formChild}
              value={email}
              type="text"
              name="email"
              onChange={(e) => emailField(e)}
            />
            <InputField
              fieldId={name}
              variant={formChild}
              value={name}
              type="text"
              name="username"
              onChange={(e) => nameField(e)}
              />
            <InputField
              fieldId={password}
              variant={formChild}
              value={password}
              type="password"
              name="password"
              onChange={(e) => passwordField(e)}
              />

            <InputSubmit
              val={"Sign up"}
              variant={formChild}
              onClick={register}
              />
              </div>
            
          </>
        )}
      </motion.div>
      <FormSwitcher
              variants={formChild}
              onClick={() => setCreateAcc(!createAcc)}
              val={createAcc?'create account':'Allready have an account'}
            />
    </div>
  );
};

export default Formular;
