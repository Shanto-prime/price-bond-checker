import { useState } from "react";
import "./App.css";
import data1 from "./data/draw1.json";
import data2 from "./data/draw2.json";
import data3 from "./data/draw3.json";
import result121 from "./data/drawResults/result121.json";
import winner from "./data/winingNumber.json";

function App() {
  const winningNumber = [...winner, ...result121].map((item) => item.id);
  const allData = [...data1, ...data2, ...data3].map((item) => item.bond);

  const [userValue, setUserValue] = useState("");

  function checkUserInput() {
    const num = Number(userValue);

    if (!num) {
      alert("Please enter a valid number");
      return;
    }

    if (winningNumber.includes(num)) {
      alert(`🎉 Congrats! Your number ${num} won the lottery`);
    } else {
      alert("❌ Sorry, your number did not win");
    }
  }

  function checkPreLoadedNum() {
    const winners = winningNumber.filter((n) => allData.includes(n));

    if (winners.length > 0) {
      winners.forEach((w) => {
        console.log(`Congrats ${w} won the lottery`);
      });
    } else {
      console.log("No winning numbers found in pre-loaded data");
    }
  }

  function checking() {
    if (userValue.trim() !== "") {
      checkUserInput();
    } else {
      checkPreLoadedNum();
    }
  }

  return (
    <>
      <h2 className="p-2 text-2xl font-bold bg-cyan-700 text-white text-center">
        Price Bond Checker
      </h2>

      <span className="w-full flex py-2 px-2 ">
        <input
          value={userValue}
          onChange={(e) => setUserValue(e.target.value)}
          type="number"
          className="input validator w-full"
          placeholder="Type a number between 1 to 1,000,000"
          min="0000001"
          max="1000000"
          title="Must be between be 1 to 1000000"
        />
      </span>

      <button onClick={checking}>Check</button>
    </>
  );
}

export default App;
