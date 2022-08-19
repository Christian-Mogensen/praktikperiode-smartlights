import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { GrPowerReset } from "react-icons/gr";
import { Link, useParams } from "react-router-dom";
import PowerOff from "../../../assets/img/icons/PowerOff";
import { auth, db } from "../../../firebase/firebase";
import { useColorContext } from "../../../hooks/colorContext";
import ColorOptions from "./colors/ColorOptions";
import IntensitySlider from "./intensityslider/IntensitySlider";
import SaveComp from "./SaveComp";
import SceneContainer from "./scenes/SceneContainer";

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
  useEffect(() => {
    console.log(user[0]);
  }, [user]);

  useEffect(() => {
    (async () => {
      const docRef = doc(db, "users", userId, `rooms/${slug}`);
      const docSnap = await getDoc(docRef);
      const docData = docSnap.data();

      if (docSnap.exists()) {
        setStateAlphaVal({ x: docData.brightness.x });
        setColorTheme(docData.color);
        setScene(docData.scene);
        console.log(stateAlphaVal);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })();
  }, []);
  const resetDoc = async () => {
    await deleteDoc(doc(db, "users", userId, `rooms/${slug}`));
  };
  const [toggle, setToggle] = useState(true);
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
        ></Link>
        <button
          onClick={() => {
            setToggle(!toggle);
            toggle
              ? fetch(process.env.REACT_APP_URL, {
                  method: "PUT",
                  body: JSON.stringify({ on: true }),
                })
              : fetch(process.env.REACT_APP_URL, {
                  method: "PUT",
                  body: JSON.stringify({ on: false }),
                });
          }}
        >
          <PowerOff toggle={toggle} />
        </button>
      </div>

      {userId && (
        <div className="absolute -top-40" onClick={() => createSetting(slug)}>
          <SaveComp />{" "}
        </div>
      )}
      <div className="absolute -top-40 left-20" onClick={resetDoc}>
        {" "}
        <div className="grid w-12 h-12 text-3xl bg-white rounded-full shadow-md shadow-gray-600 place-content-center">
          {" "}
          <GrPowerReset />
        </div>
      </div>
      <IntensitySlider />
      <ColorOptions />
      <SceneContainer />
    </div>
  );
};

export default SettingWrapper;
