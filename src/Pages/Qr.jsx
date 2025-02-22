import { useEffect, useState } from "react";

function App() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(400);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    setQrCode(
      `http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`
    );
  }, [word, size, bgColor]);

  function handleClick() {
    setWord(temp);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-6">QR Code Generator</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            onChange={(e) => setTemp(e.target.value)}
            placeholder="Enter text to encode"
            className="p-2 border rounded text-black w-full text-white"
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleClick}
          >
            Generate
          </button>
        </div>
        <div className="mt-4 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <h5 className="text-sm">Background Color:</h5>
            <input
              type="color"
              onChange={(e) => setBgColor(e.target.value.substring(1))}
            />
          </div>
          <div className="flex items-center gap-2">
            <h5 className="text-sm">Dimension:</h5>
            <input
              type="range"
              min="200"
              max="600"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-col items-center gap-4">
        {word && (
          <img src={qrCode} alt="QR Code" className="rounded shadow-lg" />
        )}
        {word && (
          <a href={qrCode} download="QRCode">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Download
            </button>
          </a>
        )}
      </div>
    </div>
  );
}

export default App;
