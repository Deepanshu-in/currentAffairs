// App.js
import PDFList from "./component/PDFList";
import Header from "./component/Header";
import downloadAnimation from "./assets/downloadAnimation.json";
import Lottie from "react-lottie";
import bgAnimation from "./assets/bg.json";

import "./App.css";
import Footer from "./component/Footer";
function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: downloadAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const bgAni = {
    loop: true,
    autoplay: true,
    animationData: bgAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="relative">
      <Header />
      <div className="">
        {/* Lottie background (below layer) */}
        <div className="absolute inset-0 -z-10">
          <Lottie options={bgAni} />
        </div>

        {/* Content (upper layer) */}
        <div className="bg-blue-0 mx-auto my-2 bg-clip-padding backdrop-filter h-[500px] md:h-[640px] w-[350px] rounded-2xl md:w-[550px] backdrop-blur-sm bg-opacity-20 border border-black flex flex-col items-center gap-4">
          <h1 className=" text-headingColor md:text-3xl text-xl mt-8">
            BIHAR CURRENT AFFAIRS
          </h1>
          <p1 className="text-[12px] md:text-[16px] leading-7 md:font-[400] text-wrap">
            A single platform for all the bihar resources you need ! 👋
          </p1>
          <div className="h-[45px]">
            <Lottie options={defaultOptions} />
          </div>
          <PDFList />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
