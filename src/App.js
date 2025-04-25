import React, { useRef, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Element, scroller } from "react-scroll"; // Pour gérer le scroll
import Projects from "./Projects.js";
import Contact from "./Contact.js";
import About from "./About.js";
import FloatingLogos from "./FloatingLogos.js";
import Typewriter from "typewriter-effect";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";

// Modèle 3D de l'ordinateur
function ComputerModel() {
  const { scene } = useGLTF(`${process.env.PUBLIC_URL}/models/laptop.glb`); // Charger le modèle GLTF
  const laptopRef = useRef();

  // Animation : rotation continue du modèle
  useFrame(() => {
    if (laptopRef.current) {
      laptopRef.current.rotation.y += 0.01; // Rotation lente sur l'axe Y
    }
  });

  return (
    <mesh ref={laptopRef}>
      <primitive object={scene} scale={5} position={[0, -1, 0]} />
    </mesh>
  );
}

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    // Extraire la section cible de l'URL (par exemple "/?scrollTo=projects")
    const queryParams = new URLSearchParams(location.search);
    const section = queryParams.get("scrollTo");

    // Scroller vers la section correspondante si elle est définie
    if (section) {
      scroller.scrollTo(section, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [location]); // Re-exécute lorsqu'on change de route

  return null; // Pas besoin d'afficher quoi que ce soit
}

function App() {
  // Fonction pour générer les liens avec paramètres
  const createScrollLink = (section) => `/?scrollTo=${section}`;

  return (
    <Router basename="/Portfolio">
      <Element name="home"></Element>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200">
        <ScrollToSection /> {/* Composant pour gérer le scroll automatique */}
        {/* Barre de navigation */}
        <header className="py-4 navbar">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-teal-400">
              <Link to={createScrollLink("home")}>ZM</Link>
            </h1>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link
                    to={createScrollLink("home")}
                    className="hover:text-teal-400"
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    to={createScrollLink("about")}
                    className="hover:text-teal-400"
                  >
                    À propos
                  </Link>
                </li>
                <li>
                  <Link
                    to={createScrollLink("projects")}
                    className="hover:text-teal-400"
                  >
                    Projets
                  </Link>
                </li>
                <li>
                  <Link
                    to={createScrollLink("contact")}
                    className="hover:text-teal-400"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {/* Routes */}
        <Routes>
          {/* Route pour la page principale */}
          <Route
            path="/"
            element={
              <>
                {/* Section Accueil */}
                <section className="container mx-auto px-4 py-40 text-center">
                  <h2 className="text-1xl font-extrabold text-teal-400 mb-4 glitch-effect z-10">
                    <Typewriter
                      options={{
                        strings: [
                          "Zakarya Manar",
                          "Étudiant en informatique",
                          "Data Engineer en devenir ...",
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                      }}
                    />
                  </h2>
                  <p className="text-lg text-gray-400 mb-8"></p>
                  <FloatingLogos numberOfLogos={30} />

                  <div className="mt-16 flex justify-center relative">
                    {/* Canvas avec le modèle 3D */}
                    <Canvas style={{ height: "300px", width: "500px" }} shadows>
                      <ambientLight intensity={1.5} />
                      {/* Utilisation de pointLight de @react-three/fiber */}
                      <pointLight
                        position={[5, 5, 5]}
                        intensity={1}
                        color="#ffffff"
                      />
                      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
                      <OrbitControls enableZoom={false} />
                      <ComputerModel />
                    </Canvas>
                  </div>
                </section>

                {/* Section À propos */}
                <Element name="about">
                  <About />
                </Element>

                {/* Section Projets */}
                <Element name="projects">
                  <Projects />
                </Element>

                {/* Section Contact */}
                <Element name="contact">
                  <Contact />
                </Element>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
