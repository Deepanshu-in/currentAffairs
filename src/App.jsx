// App.js
import PDFList from "./component/PDFList";
import Header from "./component/Header";
import downloadAnimation from "./assets/downloadAnimation.json";
import Lottie from "react-lottie";

import "./App.css";
function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: downloadAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center gap-4">
        <h1 className=" text-primaryColor text-3xl font-extrabold font-sans">
          BIHAR CURRENT AFFAIRS
        </h1>
        <div className="h-[40px]">
          <Lottie options={defaultOptions} />
        </div>
        <PDFList />
      </div>
    </div>
  );
}

export default App;
