import { useCallback } from "react";
import Particles from "react-tsparticles";

import { loadFull } from "tsparticles";
import { le_colors } from "../../constants/colors/colors.js";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 12, density: { enable: true, value_area: 800 } },
          shape: {
            type: "circle",
            stroke: { width: 2, color: le_colors.primary },
          },
          size: { value: 29, random: true, anim: { enable: false } },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 800, line_linked: { opacity: 1 } },
            bubble: { distance: 800, size: 40, duration: 2, opacity: 0.8 },
            repulse: { distance: 200 },
            push: { particles_nb: 4 },
          },
        },
        retina_detect: true,
        background: { color: "#1e293b" },
      }}
    />
  );
}
