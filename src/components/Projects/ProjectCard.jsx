import React from "react";
import PropTypes from "prop-types";
import CodeIcon from "@mui/icons-material/Code";
import LanguageIcon from "@mui/icons-material/Language";
import { motion } from "framer-motion";
import { userData } from "../../constants/userData";
import "./Projects.css";

const ProjectCard = ({ item }) => {
  // Map techStack names to technology objects from userData.skillsData.technologies
  const techStackItems = item.techStack?.map((techName) => {
    return userData.skillsData.technologies.find(
      (tech) => tech.name === techName
    );
  }).filter(Boolean); // Filter out any undefined matches

  return (
    <motion.div
      className="project-item"
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="project-image">
        <img
          src={item.image || "/fallback-image.jpg"}
          alt={item.name || "Project image"}
        />
      </div>
      <div className="project-details">
        <div className="project-title">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
        <div className="project-stacks">
          <div className="stacks">
            {techStackItems.map((tech, index) => (
              <div key={`${tech.id}-${index}`} className="tech-icon">
                <img src={tech.image} alt={tech.name} />
              </div>
            ))}
          </div>
          <div className="project-btns">
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="code-btn"
              aria-label="View source code on GitHub"
            >
              <CodeIcon className="code-icon" />
            </a>
            {item.status === "in_development" ? (
              <span className="coming-soon">Coming Soon</span>
            ) : (
              <a
                href={item.website}
                target="_blank"
                rel="noopener noreferrer"
                className="view-btn"
                aria-label="View live website"
              >
                <LanguageIcon className="live-icon" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    techStack: PropTypes.arrayOf(PropTypes.string),
    github: PropTypes.string,
    website: PropTypes.string,
    status: PropTypes.oneOf(["completed", "in_development"]),
  }).isRequired,
};

export default ProjectCard;