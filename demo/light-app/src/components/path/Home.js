import Header from "../header/Header";
import Main from "../Main/Main";
import ButtonMenu from "../Main/buttons/ButtonMenu";

const Home = ({state}) => {
  return (
    <>


      <Header state={state} />
      <Main content={<ButtonMenu />} />
    </>
  );
};

export default Home;
