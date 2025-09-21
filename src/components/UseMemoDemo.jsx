import { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const UseMemoDemo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  // console.log("Rendering...");
  // const prime = findNthPrime(text);
  const prime = useMemo(() => findNthPrime(text), [text]);
  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (isDarkTheme && "bg-gray-950 text-gray-500")
      }
    >
      <div>
        <h1 className="m-2 text-center">useMemo()</h1>
        <button
          className="m-2 p-3 border border-gray-400 bg-green-200 rounded-2xl"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle Theme
        </button>
      </div>
      <div>
        <input
        placeholder="Give n for nth prime number"
          className="m-2 border border-black w-80 px-2"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1 className="mt-4 m-2 font-bold text-lg">Nth Prime: {prime}</h1>
      </div>
    </div>
  );
};

export default UseMemoDemo;
