"use client";
import { Banner } from "@/component/Banner/Banner";
import { Overlay } from "@/component/Overlay/Overlay";
import { Popup } from "@/component/Popup/Popup";
import { Wheel } from "@/component/Wheel/Wheel";
import { useEffect, useState } from "react";

const SPINE_TIME = 3000;
const SHOW_POPUP_TIME = SPINE_TIME + 1000;

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const [isSpin, setIsSpin] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (isSpin) {
      console.log("start spin", isSpin);
      setStartAnimation(true);

      const spinTimer = setTimeout(() => {
        console.log("stop spin");
        setIsSpin(false);
      }, SPINE_TIME);

      return () => {
        console.log("clearTimeout");
        clearTimeout(spinTimer);
      };
    }
  }, [isSpin]);

  useEffect(() => {
    if (startAnimation) {
      console.log("start delay show popup");
      const showPopupTimer = setTimeout(() => {
        console.log("showPopup");
        setShowPopup(true);
        setStartAnimation(false);
      }, SHOW_POPUP_TIME);

      return () => {
        console.log("clearTimeout");
        clearTimeout(showPopupTimer);
      };
    }
  }, [startAnimation]);

  const onSpin = () => {
    setIsSpin(true);
    if (showPopup) {
      setShowPopup(false);
    }
    // setShowPopup(true);
  };
  return (
    <main className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 items-center min-h-screen deco-bg-lines">
      <Banner className=" relative z-10" />
      <Wheel className=" relative z-10" onSpin={onSpin} isSpin={isSpin} />
      {showPopup && (
        <Overlay>
          <Popup
            textBenefit="225 free spins"
            textAbout="You’ve Got 1 Attempt Left"
            onSpin={onSpin}
          />
        </Overlay>
      )}
    </main>
  );
}
