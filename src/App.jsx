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
    <div>
      <Header />
      <div className="relative">
        {/* Lottie background (below layer) */}
        <div className="absolute inset-0 z-0">
          <Lottie options={bgAni} />
        </div>

        {/* Content (upper layer) */}
        <div className="bg-blue-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 flex flex-col items-center gap-4">
          <h1 className="text-primaryColor md:text-3xl text-2xl font-extrabold font-sans mt-8">
            BIHAR CURRENT AFFAIRS
          </h1>
          <div className="h-[40px]">
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
