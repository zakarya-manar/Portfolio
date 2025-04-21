import React, { useState } from "react";
import { motion } from "framer-motion"; // Import de framer-motion
import Modal from "./Modal"; // Assure-toi que ton Modal est bien configuré avec des animations

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "App'Chat",
      description:
        "App'Chat est une application de chat en temps réel, développée en HTML, CSS, JavaScript, AJAX, PHP et MySQL.",
      image: `${process.env.PUBLIC_URL}/img/appchat.png`,
      link: "https://github.com/zakarya-manar/App-Chat",
      date: "Jan 19th, 2025",
      technologies: [
        {
          name: "HTML",
          logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Html-1.svg",
        },
        {
          name: "CSS",
          logo: "https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg",
        },
        {
          name: "JavaScript",
          logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        },
        {
          name: "PHP",
          logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
        },
        {
          name: "MySQL",
          logo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg",
        },
      ],
      linkName: "Lien vers le projet",
    },

    {
      id: 2,
      title: "Calculatrice Java",
      description:
        "Ce projet est une calculatrice programmée en Java selon les bonnes pratiques de programmation et la gestion des erreurs.",
      image: `${process.env.PUBLIC_URL}/img/calculatrice.png`,
      link: "https://github.com/zakarya-manar/Projets/tree/main/Calculatrice",
      date: "March 25th, 2024",
      technologies: [
        {
          name: "Java",
          logo: "https://www.vectorlogo.zone/logos/java/java-vertical.svg",
        },
      ],
      linkName: "Lien vers le projet",
    },

    {
      id: 3,
      title: "Santa Claus",
      description:
        "Ce projet consiste à calculer les plus courts chemins pour le père noël selon des itinéraires.",
      image: `${process.env.PUBLIC_URL}/img/noel.png`,
      link: "https://github.com/zakarya-manar/Projets/tree/main/Santa-Claus",
      date: "March 13rd, 2024",
      technologies: [
        {
          name: "Python",
          logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/Python-logo.png",
        },
      ],
      linkName: "Lien vers le projet",
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-teal-400 text-center mb-8 tracking-wider glitch-effect">
          Mes projets
        </h3>

        <br />

        {/* Catégorie Développement */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group relative bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Gradient lumineux au survol */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-teal-500 via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                style={{ pointerEvents: "none" }}
              ></div>

              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="rounded mb-4 w-full h-40 object-cover"
              />

              {/* Titre */}
              <h4 className="text-xl font-semibold text-teal-300 mb-2 text-center">
                {project.title}
              </h4>

              {/* Description */}
              <p className="text-gray-300 text-center mt-2">
                {project.description.substring(0, 75)}...
              </p>

              {/* Bouton */}
              <div className="flex justify-center mt-4 w-full">
                <button
                  onClick={() => openModal(project)}
                  className="px-6 py-2 relative text-white font-semibold rounded bg-teal-500 hover:bg-teal-600 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 opacity-30"></span>
                  <span className="relative z-10">En savoir plus</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedProject?.title}
        description={selectedProject?.description}
        image_path={selectedProject?.image}
        link={selectedProject?.link}
        date={selectedProject?.date}
        technologies={selectedProject?.technologies || []}
        linkName={selectedProject?.linkName}
      />
    </section>
  );
}

export default Projects;
