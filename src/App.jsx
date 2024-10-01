import { useState } from "react";

const App = () => {
  const [click, setClick] = useState("default value");
  return (
    <div className="grid place-items-center w-full h-screen">
      <div className="container w-[350px] h-[150px] border border-blue-300 rounded-[5px] flex flex-col items-center">
        <h2 className="text-center mt-3 text-red-300 text-lg">
          Welcome to{" "}
          <span className="text-red-500 text-lg uppercase">{click}</span>
        </h2>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => {
            setClick(e.target.value);
          }}
          className="border border-blue-300 mt-4 w-[80%] p-2 outline-none"
          placeholder="Enter a text to change"
        />
      </div>
    </div>
  );
};

export default App;
