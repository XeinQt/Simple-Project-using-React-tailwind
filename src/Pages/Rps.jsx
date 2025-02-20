import { useState } from "react";
import rock from "../assets/Images/rock paper/rock.jpg";
import paper from "../assets/Images/rock paper/paper.jpg";
import scissor from "../assets/Images/rock paper/scissor.jpg";

function Rps() {
  const [comMove, setComMove] = useState(null);
  const [playerMove, setPlayerMove] = useState(null);
  const [result, setResult] = useState("");
  const [tie, setTie] = useState(null);
  const [win, setWin] = useState(null);
  const [lose, setLose] = useState(null);

  function randomComMove() {
    const random = Math.floor(Math.random() * 3);

    if (random === 0) {
      setComMove(rock);
    } else if (random === 1) {
      setComMove(paper);
    } else if (random === 2) {
      setComMove(scissor);
    }
    return random;
  }

  function rockMove() {
    const comMove = randomComMove();
    setPlayerMove(rock);

    if (comMove === 0) {
      setResult("Tie");
      setTie((tie) => tie + 1);
    } else if (comMove === 1) {
      setResult("You lose");
      setLose((lose) => lose + 1);
    } else if (comMove === 2) {
      setResult("You win");
      setWin((win) => win + 1);
    }
  }

  function paperMove() {
    const comMove = randomComMove();
    setPlayerMove(paper);

    if (comMove === 0) {
      setResult("You win");
      setWin((win) => win + 1);
    } else if (comMove === 1) {
      setResult("Tie");
      setTie((tie) => tie + 1);
    } else if (comMove === 2) {
      setResult("You lose");
      setLose((lose) => lose + 1);
    }
  }

  function scissorMove() {
    const comMove = randomComMove();
    setPlayerMove(scissor);

    if (comMove === 0) {
      setResult("You lose");
      setLose((lose) => lose + 1);
    } else if (comMove === 1) {
      setResult("You win");
      setWin((win) => win + 1);
    } else if (comMove === 2) {
      setResult("Tie");
      setTie((tie) => tie + 1);
    }
  }

  return (
    <div className="bg-red-200 w-full h-[100vh] flex flex-col items-center justify-center">
      <div className="bg-white p-5 rounded-4xl">
        <h1 className="text-center mb-5 font-bold text-2xl">
          Rock Paper Scissor
        </h1>
        <div className="flex justify-between">
          <div>Score : {win | 0}</div>
          <div>Computer Score : {lose | 0}</div>
          <div>Tie : {tie | 0}</div>
        </div>
        <h1 className="text-center my-5 font-bold text-2xl">
          {result || "Play game"}
        </h1>

        <div className="flex justify-between items-center mt-5 mb-5">
          <div>
            <label className="flex flex-col items-center justify-between">
              <img className="w-20 h-20 mt-2" src={playerMove} alt="" />
              Your Move
            </label>
          </div>

          <h1 className="font-bold mt-4 ms-4">VS</h1>
          <div>
            <label className="flex flex-col items-center justify-between">
              <img className="w-20 h-20 mt-2" src={comMove} alt="" />
            </label>
            Computer Move
          </div>
        </div>

        <div className="flex justify-between gap-2">
          <img
            onClick={rockMove}
            className="w-20 h-20 cursor-pointer"
            src={rock}
            alt=""
          />
          <img
            onClick={paperMove}
            className="w-20 h-20 cursor-pointer"
            src={paper}
            alt=""
          />
          <img
            onClick={scissorMove}
            className="w-20 h-20 cursor-pointer"
            src={scissor}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Rps;
