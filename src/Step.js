import React, { useState } from "react";

function Step() {
  const message = ["Learn React", "Apply for a job", "Invest your new income"];
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const stepAddRange = step < 3;
  const stepMinusRange = step > 1;

  function addStep() {
    if (stepAddRange) {
      setStep((as) => as + 1);
    }
  }

  function minusStep() {
    if (stepMinusRange) {
      setStep((ms) => ms - 1);
    }
  }

  function close() {
    setIsOpen((open) => !open);
  }

  return (
    <React.Fragment>
      <div className="flex items-center justify-end px-[3rem] pt-3">
        <button className="font-[inter] text-sm" onClick={close}>
          {" "}
          &times;{" "}
        </button>
      </div>

      <div className="flex items-center justify-center min-h-screen font-[inter]">
        {isOpen && (
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
              <button
                onClick={minusStep}
                className="bg-[#6D45F1] px-3 py-1 text-sm text-white rounded-full"
              >
                Previous
              </button>
              <button
                onClick={addStep}
                className="bg-[#6D45F1] px-3 py-1 text-sm text-white rounded-full"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default Step;