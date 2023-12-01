"use client";
import { Banner } from "@/component/Banner/Banner";
import { Overlay } from "@/component/Overlay/Overlay";
import { Popup } from "@/component/Popup/Popup";
import { Wheel } from "@/component/Wheel/Wheel";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SPINE_TIME = 3000;
const SHOW_POPUP_TIME = SPINE_TIME + 1000;

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [countStart, setCountStart] = useState(0);
  const router = useRouter();

  const [isSpin, setIsSpin] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (isSpin) {
      setCountStart((state) => state + 1);
      setStartAnimation(true);

      const spinTimer = setTimeout(() => {
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
  };
  const onGoExternalSite = () => {
    router.push("http://google.com");
  };

  return (
    <main className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 items-center min-h-screen deco-bg-lines">
      <Banner className="relative z-10 transition-opacity ease-in duration-700 opacity-100" />
      <Wheel className="relative z-10" onSpin={onSpin} isSpin={isSpin} />
      <AnimatePresence>
        {showPopup && countStart === 1 && (
          <Overlay isVisible={showPopup}>
            <Popup
              textBenefit="225 free spins"
              textAbout="You’ve Got 1 Attempt Left"
              onSpin={onSpin}
              className="max-w-[320] sm:max-w-[450] md:max-w-[640]"
            />
          </Overlay>
        )}
        {showPopup && countStart === 2 && (
          <Overlay isVisible={showPopup}>
            <Popup
              textBenefit="A$3000"
              textBenefit2="+225 FREE SPINS"
              textAbout="Sing Up and make a deposit to claim your Prize"
              className="max-w-[320] sm:max-w-[450] md:max-w-[640]"
              onSpin={onGoExternalSite}
            />
          </Overlay>
        )}
      </AnimatePresence>
    </main>
  );
}
