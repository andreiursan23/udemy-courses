import { useState } from "react";
import "./ProgressSteps.css";

function ProgressSteps() {
  const [stepCount, setStepCount] = useState(1);

  const nextStep = () => {
    setStepCount(stepCount + 1);
  };

  const prevStep = () => {
    setStepCount(stepCount - 1);
  };

  const lineWidth = () => {
    switch (stepCount) {
      case 2:
        return "33%";
      case 3:
        return "66%";
      case 4:
        return "100%";
    }
  };

  return (
    <div className="progress-steps-container">
      <section className="container">
        <ul className="steps-container">
          <span className="connect-line" style={{ width: lineWidth() }}></span>

          <li className="step active-step">
            <span>1</span>
          </li>

          <li className={stepCount >= 2 ? `step active-step` : `step`}>
            <span>2</span>
          </li>

          <li className={stepCount >= 3 ? `step active-step` : `step`}>
            <span>3</span>
          </li>

          <li className={stepCount >= 4 ? `step active-step` : `step`}>
            <span>4</span>
          </li>
        </ul>

        <div className="controls">
          <button
            onClick={prevStep}
            className="btn"
            disabled={stepCount <= 1 ? true : false}
          >
            Prev
          </button>
          <button
            onClick={nextStep}
            className="btn"
            disabled={stepCount >= 4 ? true : false}
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
}

export default ProgressSteps;
