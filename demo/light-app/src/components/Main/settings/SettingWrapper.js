import { doc, setDoc, getDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import PowerOff from "../../../assets/img/icons/PowerOff";
import { auth, db } from "../../../firebase/firebase";
import { useColorContext } from "../../../hooks/colorContext";
import ColorOptions from "./colors/ColorOptions";
import IntensitySlider from "./intensityslider/IntensitySlider";
import SaveComp from "./SaveComp";
import SceneContainer from "./scenes/SceneContainer";
import { useEffect, useState } from "react";

const SettingWrapper = () => {
  const {
    colorTheme,
    stateAlphaVal,
    setColorTheme,
    setStateAlphaVal,
    setScene,
    scene,
    setRoomStartWord,
    setRoomEndWord,
    setLightHeader,
  } = useColorContext();
  const { slug } = useParams();

  const user = useAuthState(auth);

  const userId = user[0]?.uid;
  const createSetting = async (roomslug) => {

    await setDoc(doc(db, "users", userId, `rooms/${roomslug}`), {
      color: colorTheme,
      brightness: stateAlphaVal,
      scene: scene,
    });
  };
  useEffect(()=>{
    console.log(user[0]);
  },[user])

  useEffect(()=>{
    (async()=>{

      const docRef = doc(db, "users", userId, `rooms/${slug}`);
      const docSnap = await getDoc(docRef);
      const docData = docSnap.data()


      if (docSnap.exists()) {
        console.log("Document data:", docData.brightness.x);
      setStateAlphaVal({x:docData.brightness.x})
      setColorTheme(docData.color)
      setScene(docData.scene)
      console.log(stateAlphaVal);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })()
  },[])

// const [isLoggedIn, setIsLoggedIn] = useState(false)
// useEffect(()=>{
//   return user && setIsLoggedIn(true)
// },[user])
// console.log(isLoggedIn);
  return (
    <div className="relative">
      <div className="absolute -right-2 -top-12">
        <Link
          to="/"
          onClick={() => {
            setRoomStartWord("Control");
            setRoomEndWord("panel");
            setLightHeader("");
          }}
        >
          <PowerOff />
        </Link>
      </div>
      
      {userId&&<div className="absolute -top-40" onClick={() => createSetting(slug)}>
        <SaveComp />{" "}
      </div>}
      <IntensitySlider />
      <ColorOptions />
      <SceneContainer />
    </div>
  );
};

export default SettingWrapper;
