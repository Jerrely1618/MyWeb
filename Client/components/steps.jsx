import { Steps } from "antd";
import PropTypes from "prop-types";
const description = "This is a description.";
import { useState } from "react";

export default function Lining() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepClick = (index) => {
    setCurrentStep(index);
  };

  return (
    <Steps
      direction="vertical"
      current={currentStep}
      onChange={handleStepClick}
      items={[
        {
          title: "Finished",
          description,
        },
        {
          title: "In Progress",
          description,
        },
        {
          title: "In Progress",
          description,
        },
      ]}
    />
  );
}

Lining.propTypes = {
  count: PropTypes.number,
};
