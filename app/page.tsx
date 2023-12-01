import { Banner } from "@/component/Banner/Banner";
import { Overlay } from "@/component/Overlay/Overlay";
import { Popup } from "@/component/Popup/Popup";
import { Wheel } from "@/component/Wheel/Wheel";

export default function Home() {
  return (
    <main className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 items-center min-h-screen deco-bg-lines">
      <Banner className=" relative z-10" />
      <Wheel className=" relative z-10" />
      <Overlay>
        <Popup
          textBenefit="225 free spins"
          textAbout="You’ve Got 1 Attempt Left"
        />
      </Overlay>
    </main>
  );
}
