import Header from "../header/Header";
import Main from "../Main/Main";
import ButtonMenu from "../Main/buttons/ButtonMenu";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import UserHeader from "../Main/user/UserHeader";

const Home = ({state}) => {
  const [user] = useAuthState(auth)
  console.log(user);
  const userProf = []
  userProf.push(user)
  return (
    <>


      <Header state={state} />
      <UserHeader />
      <Main content={<ButtonMenu />} />
    </>
  );
};

export default Home;
