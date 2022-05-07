// import "./App.css";
import image from "./assets/construction.gif";

function App() {
  return (
    <div className="App grid place-items-center h-screen">
      <div className="text">
        <div className="img mx-auto w-3/5">
          <img src={image} alt="" srcset="" className=" w-full" />
        </div>
        <h1 className="text-center text-4xl font-bold">Smith O.J</h1>
        <p className="text-center">This site is still under construction</p>
        <p className="text-center text-xs">
          This site is been developed by{" "}
          <a
            href="https://github.com/106joshman"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            Dev-Guy
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
