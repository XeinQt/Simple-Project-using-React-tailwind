import { useState } from "react";
import { motion } from "framer-motion";

import image1 from "../assets/Images/1.jpg";
import image2 from "../assets/Images/2.jpg";
import image3 from "../assets/Images/3.jpg";
import image4 from "../assets/Images/4.jpg";
import image5 from "../assets/Images/5.jpg";
import image6 from "../assets/Images/6.jpg";

function RollDice() {
  const diceImages = [image1, image2, image3, image4, image5, image6];
  const [dice, setDice] = useState(null);

  function rollDice() {
    const diceRandom = Math.floor(Math.random() * 6);
    setDice(diceImages[diceRandom]);
  }

  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      {dice && (
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="h-40 w-40 object-contain"
          src={dice}
          alt="Dice Face"
        />
      )}

      <button
        onClick={rollDice}
        className="cursor-pointer tracking-wider px-5 py-2 bg-green-400 rounded-4xl"
      >
        Roll
      </button>
    </div>
  );
}

export default RollDice;
