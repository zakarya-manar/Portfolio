import React, { useState } from "react";
import { motion } from "framer-motion"; // Import de framer-motion
import Modal from "./Modal"; // Assure-toi que ton Modal est bien configuré avec des animations

function Certifs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertif, setSelectedCertif] = useState(null);

  const certifs = [
    {
      id: 1,
      title: "IBM AI Fundamentals",
      description:
        "Cette certification m'a appris les fondamentales de l'IA, comme les concepts de Machine Learning, Deep Learning et les différents algorithmes qui y sont associés.",
      image: `${process.env.PUBLIC_URL}/img/ibm.png`,
      link: "https://www.credly.com/badges/0e5b0fe7-45ae-4ca5-8a92-35dc7d4d0d7e/public_url",
      date: "March 13rd, 2025",
      linkName: "Voir le badge",
    },

    {
      id: 2,
      title: "Cisco Introduction to Data Science",
      description:
        "Cette certification m'a appris la base de la Data, de l'analyse des données au traitement de celles-ci.",
      image: `${process.env.PUBLIC_URL}/img/cisco.png`,
      link: "https://www.credly.com/badges/9aa40a03-56f5-4db3-8bad-b7d8418d2916/public_url",
      date: "March 12nd, 2025",
      linkName: "Voir le badge",
    },

    {
      id: 3,
      title: "Cisco Introduction to Modern AI",
      description:
        "Cette certification m'a initié à la manière dont les IA sont utilisés de nos jours, comme pour le traitement des images.",
      image: `${process.env.PUBLIC_URL}/img/cisco.png`,
      link: "https://www.credly.com/badges/fa992e58-6226-499d-ab5a-b5de238a818b/public_url",
      date: "March 12nd, 2025",
      linkName: "Voir le badge",
    },
  ];

  const openModal = (certif) => {
    setSelectedCertif(certif);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertif(null);
  };

  return (
    <section id="certifs" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-semibold text-teal-400 mb-8 ">
          Mes certifications
        </h3>

        {/* Catégorie Développement */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certifs.map((certif) => (
            <motion.div
              key={certif.id}
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
                src={certif.image}
                alt={certif.title}
                className="rounded mb-4 w-full h-40 object-cover"
              />

              {/* Titre */}
              <h4 className="text-xl font-semibold text-teal-300 mb-2 text-center">
                {certif.title}
              </h4>

              {/* Description */}
              <p className="text-gray-300 text-center mt-2">
                {certif.description.substring(0, 75)}...
              </p>

              {/* Bouton */}
              <div className="flex justify-center mt-4 w-full">
                <button
                  onClick={() => openModal(certif)}
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
        title={selectedCertif?.title}
        description={selectedCertif?.description}
        image_path={selectedCertif?.image}
        link={selectedCertif?.link}
        date={selectedCertif?.date}
        technologies={selectedCertif?.technologies || []}
        linkName={selectedCertif?.linkName}
      />
    </section>
  );
}

export default Certifs;
