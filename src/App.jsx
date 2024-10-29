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
      <div>
        {/* Lottie background (below layer) */}
        <div className="absolute inset-0 -z-10 -mt-[80px] md:mt-0 h-full">
          <Lottie options={bgAni} />
        </div>

        {/* Content (upper layer) */}
        <div className="bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10   h-[500px] md:h-[640px] w-[320px] rounded-2xl md:w-[550px] mx-auto my-4 border border-purpleColor flex flex-col items-center gap-4">
          <h1 className=" text-primaryColor md:text-3xl text-xl mt-8">
            BIHAR CURRENT AFFAIRS
          </h1>
          <h2 className="text-[16px] md:text-[24px] leading-7 md:font-[400] text-wrap">
            One-Stop Platform for Bihar&apos;s Educational Needs! 📚
          </h2>

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
