import { Steps } from "antd";
import PropTypes from "prop-types";
import { useState } from "react";

// Routing example
// export default function HomePage() {
//   const l_stops = [
//     {
//       title: "Finished",
//       description: "description",
//     },
//     {
//       title: "In Progress",
//       description: "description",
//     },
//     {
//       title: "In Progress",
//       description: "description",
//     },
//   ];
//   const handleStepClick = (clickedTitle) => {
//     console.log(`Clicked on: ${clickedTitle}`);
//   };
//   return (
//     <div>
//       <Lining stops={l_stops} onStepClick={handleStepClick} />
//     </div>
//   );
export default function Lining({ stops, onStepClick }) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepClick = (index) => {
    setCurrentStep(index);
    const clickedTitle = stops[index].title;
    onStepClick(clickedTitle);
  };

  return (
    <Steps
      direction="vertical"
      current={currentStep}
      onChange={handleStepClick}
      items={stops}
    />
  );
}

Lining.propTypes = {
  stops: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  onStepClick: PropTypes.func.isRequired,
};
