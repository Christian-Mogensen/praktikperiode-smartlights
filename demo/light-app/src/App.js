import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/Main/Main";
import BgCircle from "./components/wrapper/BgCircle";
import Wrapper from "./components/wrapper/Wrapper";


function App() {
  const coordsArr = [
    '-left-10 -top-10',
    '-right-24 top-0',
    'left-10 top-40'
  ]
  return (
      <Wrapper>
        {coordsArr.map((circlepos,index)=>(<BgCircle key={index} coords={circlepos} />))}
        <Header />
      <Main />
      <Footer />
      </Wrapper>
  );
}

export default App;
