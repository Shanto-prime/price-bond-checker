import "./App.css";
import data1 from "./data/draw1.json";
import data2 from "./data/draw2.json";
import data3 from "./data/draw3.json";

function App() {
  const winningNumber = [
    "0108331",
    "0156897",
    "0056362",
    "0453668",
    "0912444",
    "0983572",
    "0013386",
    "0014992",
    "0028183",
    "0053226",
    "0119069",
    "0168873",
    "0244074",
    "0257594",
    "0265938",
    "0292941",
    "0296429",
    "0327910",
    "0340407",
    "0349315",
    "0355206",
    "0367529",
    "0369117",
    "0417728",
  ];
  const allData = [...data1, ...data2, ...data3].map((item) => item.bond);

  function check() {
    for (let number of winningNumber) {
      if (allData.includes(number)) {
        alert(`Congrats ${number} won the lottery`);
        console.log("congrats you won the lottery");
        // console.log(number, "for");
      }
      //   console.log("not for", allData.includes(number));
    }
    // alert("ohh you lost the lottery");
    console.log("ohh you lost the lottery");
  }

  return (
    <>
      <h2>price-bond-checker</h2>
      <button onClick={check}>Check</button>
    </>
  );
}

export default App;
