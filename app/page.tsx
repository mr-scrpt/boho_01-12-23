"use client";
import { Banner } from "@/component/Banner/Banner";
import { Overlay } from "@/component/Overlay/Overlay";
import { Popup } from "@/component/Popup/Popup";
import { Wheel } from "@/component/Wheel/Wheel";
import { useEffect, useState } from "react";

const SPINE_TIME = 3000;

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const [isSpin, setIsSpin] = useState(false);

  useEffect(() => {
    if (isSpin) {
      const timeout = setTimeout(() => {
        setShowPopup(true);
      }, SPINE_TIME);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isSpin]);

  const onSpin = () => {
    setIsSpin(true);
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
          />
        </Overlay>
      )}
    </main>
  );
}
