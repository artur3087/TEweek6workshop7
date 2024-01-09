import { useState } from "react";

export default function App() {
  const [SeeIt, setSeeIt] = useState(true);


  function clicked () {
    console.log("Checking")
  };
  function tellMeTheTruth () {
    setSeeIt(!SeeIt);
    {SeeIt && console.log("Noob, here is the universe's knowledge!")}
    
  }

  return (
    <div>
    <button id="btn" onClick={clicked}> Click it </button>
    <button id="Truth" onClick={tellMeTheTruth}> ENLIGHTENMENT </button>
    {SeeIt && <h2>Noob, here is the universe's knowledge!</h2>}
    </div>
    
  );

}