import { useState } from "react";

function Practice2() {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={`w-full h-[100vh] flex items-center justify-center transition-all duration-300 ${
        dark ? "bg-black" : "bg-white"
      }`}
    >
      <button
        onClick={() => setDark(!dark)}
        className={`px-5 py-2 rounded-2xl border transition-all duration-300 ${
          dark
            ? "bg-white text-black border-black"
            : "bg-black text-white border-white"
        }`}
      >
        Dark mode
      </button>
    </div>
  );
}

export default Practice2;
