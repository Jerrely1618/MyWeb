import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { le_colors } from "../public/constantsColors";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: true,
          particles: {
            number: { value: 12, density: { enable: true, value_area: 600 } },
            color: { value: "" },
            shape: {
              type: "circle",
              stroke: { width: 2, color: "#1976D2" },
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
              direction: "right",
              straight: true,
              out_mode: "out",
              bounce: true,
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" },
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
        }}
        style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
      />
    </div>
  );
}
