// App.js
import PDFList from "./component/PDFList";
import Header from "./component/Header";
import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center gap-4">
        <h1 className=" text-primaryColor text-3xl font-bold font-sans">
          Current Affairs PDFs
        </h1>
        <h3>Download now!</h3>
        <PDFList />
      </div>
    </div>
  );
}

export default App;
