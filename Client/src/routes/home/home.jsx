import NavbarComponent from "../../components/nav/nav.jsx";
import ParticlesBackground from "../../components/pbackground/pbackground.jsx";
import "./home.css";
import "../../constants/colors/colors.css";
import anime from "animejs/lib/anime.es.js";
import { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import * as THREE from "three";
export default function HomePage() {
  const portfolioRef = useRef(null);
  const mountRef = useRef(null);
  const textContent = "The Portfolio";
  const arrowRef = useRef(null);
  useEffect(() => {
    anime({
      targets: arrowRef.current,
      translateX: [-4, 1],
      duration: 500,
      loop: true,
      direction: "alternate",
      easing: "easeInOutSine",
    });
  }, []);
  useEffect(() => {
    if (!mountRef.current) return;

    const width = 50;
    const height = 50;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const geometry = new THREE.BoxGeometry(6, 6, 6);
    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      specular: 0x202020,
      shininess: 5,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const animate3D = function () {
      requestAnimationFrame(animate3D);
      cube.rotation.x += 0.006;
      cube.rotation.y += 0.006;
      renderer.render(scene, camera);
    };

    animate3D();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  useEffect(() => {
    if (portfolioRef.current) {
      portfolioRef.current.innerHTML = textContent
        .split("")
        .map((char) => `<span style="opacity: 0;">${char}</span>`)
        .join("");
    }
    anime({
      targets: ".zen-of",
      translateX: [-1000, 0],
      easing: "easeInOutSine",
      duration: 750,
      autoplay: true,
      complete: () => {},
    });
    anime({
      targets: ".victor",
      translateX: [0, 900],
      easing: "easeInOutSine",
      direction: "reverse",
      duration: 750,
      autoplay: true,
      complete: () => {
        anime({
          targets: portfolioRef.current.querySelectorAll("span"),
          opacity: [0, 1],
          easing: "easeInOutQuad",
          duration: 200,
          delay: anime.stagger(100),
        });
      },
    });
  }, [textContent]);

  return (
    <>
      <div className="relative z-10">
        <NavbarComponent />
        <div className="px-2 sm:px-10">
          <h1 className="zen-of text-5xl font-bold text-[#efefe4] sm:text-4xl xs:text-3xl">
            Jerrely Vizueta
          </h1>
          <h1 className="victor text-5xl font-bold text-one sm:text-7xl xs:text-5xl">
            Software Engineer
          </h1>
          <h3
            ref={portfolioRef}
            className="portfolio text-2xl font-bold text-[#efefe4]"
          ></h3>
          <div className="flex space-x-2">
            <a
              href="https://www.linkedin.com/in/jerrelyv"
              className="bg-two hover:bg-one text-white rounded-xl text-4xl w-14 h-14 flex items-center justify-center transition-all duration-150 ease-in-out transform hover:scale-95"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <SiLinkedin className="text-4xl" />
            </a>
            <a
              href="https://github.com/Jerrely1618"
              className="bg-two hover:bg-one text-white rounded-xl text-4xl w-14 h-14 flex items-center justify-center transition-all duration-150 ease-in-out transform hover:scale-95"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="text-4xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-5 z-50 flex items-center justify-end">
        <div className="absolute bottom-0 left-0 flex items-center text-white">
          <span className="text-sm font-bold">3D cube, 'cause why not?</span>
          <svg
            ref={arrowRef}
            fill="#ffffff"
            height="72px"
            width="72px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="-148.23 -148.23 807.61 807.61"
            xmlSpace="preserve"
            stroke="#ffffff"
            strokeWidth="0.00511147"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g transform="translate(1 1)">
                <path d="M506.733,247.785L319,111.252c-2.56-1.707-5.973-2.56-8.533-0.853c-2.56,1.707-4.267,4.267-4.267,7.68v85.333h-93.867 c-5.12,0-8.533,3.413-8.533,8.533v85.333c0,5.12,3.413,8.533,8.533,8.533H306.2v85.333c0,3.413,1.707,5.973,4.267,7.68 c1.707,0.853,2.56,0.853,4.267,0.853s3.413-0.853,4.267-1.707l187.733-136.533c1.707-1.707,3.413-4.267,3.413-6.827 C510.147,252.052,509.293,249.492,506.733,247.785z M323.267,374.079v-76.8c0-5.12-3.413-8.533-8.533-8.533h-93.867v-68.267 h93.867c5.12,0,8.533-3.413,8.533-8.533v-76.8L487.96,254.612L323.267,374.079z"></path>{" "}
                <path d="M161.133,203.412c-14.507,0-25.6,11.093-25.6,25.6v51.2c0,14.507,11.093,25.6,25.6,25.6c14.507,0,25.6-11.093,25.6-25.6 v-51.2C186.733,214.505,175.64,203.412,161.133,203.412z M169.667,280.212c0,5.12-3.413,8.533-8.533,8.533 s-8.533-3.413-8.533-8.533v-51.2c0-5.12,3.413-8.533,8.533-8.533s8.533,3.413,8.533,8.533V280.212z"></path>{" "}
                <path d="M92.867,203.412c-14.507,0-25.6,11.093-25.6,25.6v51.2c0,14.507,11.093,25.6,25.6,25.6c14.507,0,25.6-11.093,25.6-25.6 v-51.2C118.467,214.505,107.373,203.412,92.867,203.412z M101.4,280.212c0,5.12-3.413,8.533-8.533,8.533 c-5.12,0-8.533-3.413-8.533-8.533v-51.2c0-5.12,3.413-8.533,8.533-8.533c5.12,0,8.533,3.413,8.533,8.533V280.212z"></path>{" "}
                <path d="M24.6,203.412c-14.507,0-25.6,11.093-25.6,25.6v51.2c0,14.507,11.093,25.6,25.6,25.6c14.507,0,25.6-11.093,25.6-25.6 v-51.2C50.2,214.505,39.107,203.412,24.6,203.412z M33.133,280.212c0,5.12-3.413,8.533-8.533,8.533s-8.533-3.413-8.533-8.533 v-51.2c0-5.12,3.413-8.533,8.533-8.533s8.533,3.413,8.533,8.533V280.212z"></path>{" "}
              </g>
            </g>
          </svg>
          <div
            ref={mountRef}
            className="relative"
            style={{ width: "200px", height: "55px" }}
          ></div>
        </div>
      </div>
      <ParticlesBackground />
    </>
  );
}
