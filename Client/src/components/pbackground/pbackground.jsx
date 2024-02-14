import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { le_colors } from "../../constants/colors/colors.js";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: true,
          particles: {
            number: {
              value: 12,
              density: { enable: true, value_area: 600 },
            },
            shape: {
              type: "circle",
              stroke: { width: 2, color: le_colors.primary },
              polygon: { nb_sides: 3 },
            },
            size: {
              value: 29,
              random: true,
              anim: { enable: true, speed: 2, size_min: 0.3, sync: false },
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" }, // Added onclick interaction for added dynamism
              resize: true,
            },
            modes: {
              grab: { distance: 800, line_linked: { opacity: 1 } },
              bubble: {
                distance: 790,
                size: 79,
                duration: 2,
                opacity: 0.8,
                speed: 3,
              },
              repulse: { distance: 122, duration: 1 },
              push: { particles_nb: 4 },
            },
          },
          retina_detect: true,
          background: {
            color: "#232b2b", // Setting a dark background color
          },
        }}
      />
    </>
  );
}
