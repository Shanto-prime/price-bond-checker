import "./App.css";
import data1 from "./data/draw1.json";
import data2 from "./data/draw2.json";
import data3 from "./data/draw3.json";
import result121 from "./data/drawResults/result121.json";
import winner from "./data/winingNumber.json";

function App() {
  const winningNumber = [...winner, ...result121].map((item) => item.id);
  const allData = [...data1, ...data2, ...data3].map((item) => item.bond);

  function check() {
    for (let number of winningNumber) {
      if (allData.includes(number)) {
        alert(`Congrats ${number} won the lottery`);
        console.log(`Congrats ${number} won the lottery`);
      } else {
        console.log("ohh you lost the lottery");
      }
    }
  }

  return (
    <>
      <h2>price-bond-checker</h2>
      <button onClick={check}>Check</button>
    </>
  );
}

export default App;
