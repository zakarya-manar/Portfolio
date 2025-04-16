import { Element } from "react-scroll"; // Pour gérer le scroll
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Certifs from "./Certifs.js";

// Importation des logos
import gamesLogo from "./games.png";
import techLogo from "./tech.png";
import sportLogo from "./sport.png";

function About() {
  useEffect(() => {
    // Scroll automatiquement tout en haut de la page
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="about" className="bg-gray-900 text-gray-200 py-20">
      <Element name="about"></Element>
      <div className="container mx-auto px-4">
        {/* Titre avec animation */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-teal-400 text-center mb-16 tracking-wider glitch-effect"
        >
          À propos de moi
        </motion.h2>

        {/* Carte futuriste */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8"
        >
          {/* Texte à gauche */}
          <div className="flex-1">
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl font-semibold text-teal-400 mb-4"
            >
              Zakarya Manar
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 mb-4 leading-relaxed"
            >
              Je suis un développeur passionné par la technologie et
              l'innovation. Avec une expérience dans le développement web, ainsi
              qu'une passion pour le monde de la Data et la résolution de
              problèmes algorithmiques, je cherche constamment à repousser les
              limites de mes compétences.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-300 leading-relaxed"
            >
              Mon objectif est de continuer à apprendre et à contribuer à des
              projets qui ont un impact significatif.
            </motion.p>
          </div>

          {/* Image ronde avec le point animé */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative group">
              {/* Image avec l'effet glitch */}
              <div className="relative w-48 h-48 rounded-full border-4 border-teal-400 shadow-lg object-cover glitch-container">
                <img
                  src="/img/photo.png"
                  alt="Lucas Djavid"
                  className="absolute inset-0 w-full h-full rounded-full object-cover glitch-img"
                />
              </div>

              {/* Cercle contenant le point animé */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Cercle transparent pour l'animation */}
                  <div className="absolute w-full h-full rounded-full border-2 border-transparent animate-spin-slow">
                    {/* Point animé */}
                    <div
                      className="absolute w-2 h-2 bg-teal-400 rounded-full"
                      style={{
                        top: "0", // Place initialement le point au sommet
                        left: "50%",
                        transform: "translate(-50%, -50%)", // Centrer le point
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Section Compétences Techninques */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-semibold text-teal-400 mb-8 ">
            Compétences techniques
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Langages de programmation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, duration: 0.1 }} // Ajoute l'effet de mise à l'échelle au survol
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-gray-300"
            >
              <h4 className="text-2xl font-semibold text-teal-400 mb-4">
                Langages de programmation
              </h4>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  justifyContent: "center",
                }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/31/Python-logo.png"
                  width={"75px"}
                  height={"auto"}
                  alt="Python"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
                  width={"50px"}
                  height={"auto"}
                  alt="JS"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg"
                  width={"60px"}
                  height={"auto"}
                  alt="React"
                />
                <img
                  src="https://www.vectorlogo.zone/logos/java/java-vertical.svg"
                  width={"50px"}
                  height={"auto"}
                  alt="Java"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg"
                  width={"50px"}
                  height={"auto"}
                  alt="TS"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
                  width={"60px"}
                  height={"auto"}
                  alt="PHP"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"
                  width={"60px"}
                  height={"auto"}
                  alt="C"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg"
                  width={"60px"}
                  height={"auto"}
                  alt="Bash"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Html-1.svg"
                  width={"50px"}
                  height={"auto"}
                  alt="HTML"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg"
                  width={"50px"}
                  height={"auto"}
                  alt="CSS"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, duration: 0.1 }} // Ajoute l'effet de mise à l'échelle au survol
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-gray-300"
            >
              <h4 className="text-2xl font-semibold text-teal-400 mb-4">
                Gestion de données
              </h4>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  justifyContent: "center",
                }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
                  width={"50px"}
                  height={"auto"}
                  alt="PostgreSQL"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg"
                  width={"50px"}
                  height={"auto"}
                  alt="GraphQL"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg"
                  width={"50px"}
                  height={"auto"}
                  alt="MySQL"
                />
              </div>
              <br />
              <br />
              <br />
              <h4 className="text-2xl font-semibold text-teal-400 mb-4">
                Systèmes d'exploitation
              </h4>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  justifyContent: "center",
                }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Windows_logo_-_2012.svg"
                  width={"60px"}
                  height={"auto"}
                  alt="Windows"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/94/Ubuntu_logoib.svg"
                  width={"50px"}
                  height={"auto"}
                  alt="Ubuntu"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  width={"50px"}
                  height={"auto"}
                  alt="MacOS"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, duration: 0.1 }} // Ajoute l'effet de mise à l'échelle au survol
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-gray-300"
            >
              <h4 className="text-2xl font-semibold text-teal-400 mb-4">
                Logiciels
              </h4>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  justifyContent: "center",
                }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Visual_Studio_Code_1.18_icon.svg"
                  width={"50px"}
                  height={"auto"}
                  alt="VSCode"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/9c/IntelliJ_IDEA_Icon.svg"
                  width={"50px"}
                  height={"auto"}
                  alt="IntelliJ"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Spyder.png"
                  width={"175"}
                  height={"auto"}
                  alt="Spyder"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg"
                  width={"50px"}
                  height={"auto"}
                  alt="Jupyter"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/24/Github_logo_svg.svg"
                  width={"50px"}
                  height={"auto"}
                  alt="GitHub"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                  width={"30px"}
                  height={"auto"}
                  alt="Figma"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Microsoft_Office_2013-2019_logo_and_wordmark.svg"
                  width={"90px"}
                  height={"auto"}
                  alt="MicrosoftOffice"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Section Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <Certifs />
        </motion.div>

        {/* Section Centres d'intérêts */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-semibold text-teal-400 mb-8 ">
            Centres d'intérêts
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, duration: 0.1 }} // Ajoute l'effet de mise à l'échelle au survol
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-gray-300"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={gamesLogo}
                  alt="Jeux vidéos"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h4 className="text-2xl font-semibold text-teal-400 mb-4">
                Jeux vidéos
              </h4>
              <p>
                Les jeux vidéo en ligne compétitifs occupent une place
                importante dans mon quotidien. J’apprécie tout particulièrement
                l’aspect stratégique, la coordination d’équipe et la montée en
                pression lors des parties classées. Chaque partie est pour moi
                une occasion d’apprendre, d’expérimenter de nouvelles approches
                et de repousser mes limites.
              </p>
            </motion.div>

            {/* 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, duration: 0.1 }} // Ajoute l'effet de mise à l'échelle au survol
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-gray-300"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={techLogo}
                  alt="Informatique"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h4 className="text-2xl font-semibold text-teal-400 mb-4">
                Informatique
              </h4>
              <p>
                L’informatique est un domaine qui me passionne depuis toujours.
                Que ce soit à travers la programmation, la résolution de
                problèmes techniques ou la découverte de nouveaux outils, j’y
                consacre beaucoup de temps. J’aime comprendre comment les choses
                fonctionnent en profondeur et apprendre toujours plus dans ce
                domaine.
              </p>
            </motion.div>

            {/* 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, duration: 0.1 }} // Ajoute l'effet de mise à l'échelle au survol
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-gray-300"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={sportLogo}
                  alt="Sport"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h4 className="text-2xl font-semibold text-teal-400 mb-4">
                Sport
              </h4>
              <p>
                Le sport fait partie de mon quotidien et m’apporte un réel
                équilibre. À travers des disciplines comme le football ou la
                boxe, je développe des qualités essentielles comme la
                discipline, la persévérance et l’esprit d’équipe. C’est aussi un
                excellent moyen pour moi de me dépasser, de rester concentré et
                de garder une bonne énergie au quotidien.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
