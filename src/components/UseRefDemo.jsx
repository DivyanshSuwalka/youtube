import { useEffect, useRef, useState } from "react";

const UseRefDemo = () => {
  let x = 0;
  const [y, setY] = useState(0);
  const ref = useRef(0);
  console.log("Rendering...");

  const i = useRef(null);
  useEffect(() => {
    i.current = setInterval(() => {
      console.log("Divyansh " + Math.random());
    }, 1000);

    return () => {
      clearInterval(i.current);
    };
  }, []);

  return (
    <div className="m-4 p-2 w-96 h-96 border border-black ">
      <h1 className="m-2 text-center">useRef()</h1>
      <div>
        <button
          className="m-2 p-3 border border-gray-400 bg-green-200 rounded-2xl"
          onClick={() => {
            x++;
            console.log(x);
          }}
        >
          Increase x
        </button>
        <span className="m-2 p-2 font-bold text-xl">Let: {x}</span>
      </div>
      <hr />
      <div>
        <button
          className="m-2 p-3 border border-gray-400 bg-green-200 rounded-2xl"
          onClick={() => setY(y + 1)}
        >
          Increase y
        </button>
        <span className="m-2 p-2 font-bold text-xl">State: {y}</span>
      </div>
      <hr />
      <div className="mt-6 ">
        <button
          className="m-2 p-3 border border-gray-400 bg-green-200 rounded-2xl"
          onClick={() => {
            ref.current++;
            console.log(ref);
          }}
        >
          Increase Ref
        </button>
        <span className="m-2 p-2 font-bold text-xl">Ref: {ref.current}</span>
      </div>

      <button
        className="m-2 p-3 border border-gray-400 bg-red-700 rounded-2xl"
        onClick={() => clearInterval(i.current)}
      >
        Cancel Interval
      </button>
    </div>
  );
};

export default UseRefDemo;
