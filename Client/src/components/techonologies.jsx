import {
  FaReact,
  FaPython,
  FaJsSquare,
  FaDatabase,
  FaRobot,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiFirebase,
} from "react-icons/si";
import PropTypes from "prop-types";

function getIcon(iconName) {
  const icons = {
    react: <FaReact />,
    python: <FaPython />,
    javascript: <FaJsSquare />,
    nextjs: <SiNextdotjs />,
    tailwindcss: <SiTailwindcss />,
    figma: <SiFigma />,
    typescript: <SiTypescript />,
    mongodb: <SiMongodb />,
    database: <FaDatabase />,
    express: <SiExpress />,
    nodejs: <SiNodedotjs />,
    openai: <FaRobot />,
    firebase: <SiFirebase />,
  };
  return icons[iconName] || <span>Unknown Tech</span>;
}

function TechnologiesComponent({ technologies }) {
  return (
    <div className="flex space-x-2 mt-1 justify-center">
      {technologies.map((tech) => (
        <div
          key={tech}
          title={tech.charAt(0).toUpperCase() + tech.slice(1)}
          className="bg-two hover:bg-three text-white rounded-xl text-5xl w-16 h-16 flex items-center justify-center transition-all duration-150 ease-in-out transform hover:scale-95"
        >
          {getIcon(tech)}
        </div>
      ))}
    </div>
  );
}

TechnologiesComponent.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

TechnologiesComponent.defaultProps = {
  technologies: [],
};

export default TechnologiesComponent;
