import React, { useState } from "react";

function App() {
  const message = ["Learn React", "Apply for a job", "Invest your new income"];
  const [ step, setStep ] = useState(1)
  const stepAddRange = step <=2
  const stepMinusRange = step >=2

  function addStep() {
    if(stepAddRange){
      setStep( step + 1)
    }
  }

  function minusStep() {
    if(stepMinusRange){
      setStep( step - 1)
    }
  }

  return (
    <React.Fragment className="App">
      <div className="flex items-center justify-center min-h-screen font-[inter]">
        <div className="w-[20rem] bg-[#F6F6F6] h-[auto] px-[3rem] py-[1rem] space-y-6">
          <div className="flex justify-between items-center ">
            <span
              className={`rounded-full h-8 w-8 flex items-center justify-center ${
                step >= 1 ? "bg-[#6D45F1]" : "bg-[#E3E3E2]"
              }`}
            >
              1
            </span>
            <span
              className={`rounded-full h-8 w-8 flex items-center justify-center ${
                step >= 2 ? "bg-[#6D45F1]" : "bg-[#E3E3E2]"
              }`}
            >
              2
            </span>
            <span
              className={`rounded-full h-8 w-8 flex items-center justify-center ${
                step >= 3 ? "bg-[#6D45F1]" : "bg-[#E3E3E2]"
              }`}
            >
              3
            </span>
          </div>
          <div className="text-center font-bold">
            
            Step {step}: {message[step - 1]}
          </div>
          <div className="flex justify-between items-center  ">
            <button onClick = { minusStep } className="bg-[#6D45F1] px-3 py-1 text-sm text-white rounded-full">Previous</button>
            <button onClick = { addStep } className="bg-[#6D45F1] px-3 py-1 text-sm text-white rounded-full">Next</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
