import { useState } from "react";
import "./ProgressSteps.css";

function ProgressSteps() {
  const [stepCount, setStepCount] = useState(1);

  const nextStep = () => {
    setStepCount(stepCount + 1);

    console.log(stepCount);
  };

  const prevStep = () => {
    setStepCount(stepCount - 1);

    console.log(stepCount);
  };

  return (
    <>
      <section className="container">
        <ul className="steps-container">
          <li className="step active-step">
            <span>1</span>
          </li>
          <span
            className={
              stepCount >= 2
                ? `connect-line connect-line-active`
                : `connect-line`
            }
          ></span>
          <li className={stepCount >= 2 ? `step active-step` : `step`}>
            <span>2</span>
          </li>
          <span
            className={
              stepCount >= 3
                ? `connect-line connect-line-active`
                : `connect-line`
            }
          ></span>
          <li className={stepCount >= 3 ? `step active-step` : `step`}>
            <span>3</span>
          </li>
          <span
            className={
              stepCount >= 4
                ? `connect-line connect-line-active`
                : `connect-line`
            }
          ></span>
          <li className={stepCount >= 4 ? `step active-step` : `step`}>
            <span>4</span>
          </li>
        </ul>
        <div className="controls">
          <button onClick={prevStep} disabled={stepCount <= 1 ? true : false}>
            Prev
          </button>
          <button onClick={nextStep} disabled={stepCount >= 4 ? true : false}>
            Next
          </button>
        </div>
      </section>
    </>
  );
}

export default ProgressSteps;
