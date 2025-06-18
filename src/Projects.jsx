import { motion } from 'framer-motion';
import reminiscenceImage from './assets/reminiscence-designer.png';
import travelNextImage from './assets/travel-next.png';
import applyAsapImage from './assets/apply-asap.png';

const projects = [
  {
    title: "Reminiscence Designer",
    description: "Alumni platform enabling colleges to manage student records with secure login and dynamic profiles.",
    technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    image: reminiscenceImage,
    // liveLink: "#",
    githubLink: "https://github.com/GGajanan1/MiniProject"
  },
  {
    title: "TravelNest: Let's Explore",
    description: "Hotel booking website with user registration, authentication, reviews, and dynamic listings.",
    technologies: ["MongoDB", "ExpressJS", "EJS", "NodeJS", "Bootstrap"],
    image: travelNextImage,
    // liveLink: "#",
    githubLink: "https://github.com/GGajanan1/travelNext"
  },
  {
    title: "Apply Ease - Chrome Extension",
    description: "Automates job applications using resume parsing and Gemini AI for personalized answers.",
    technologies: ["NodeJS", "ExpressJS", "JavaScript", "Gemini API"],
    image: applyAsapImage,
    // liveLink: "#",
    githubLink: "https://github.com/GGajanan1/Apply-ASAP"
  }
];


const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="card group"
    >
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-[#6366f1]">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm rounded-full bg-[#334155] text-[#6366f1]"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        {/* <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Live Demo
        </a> */}
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className=" px-6 py-2 rounded-lg border border-[#6366f1] text-[#6366f1] hover:bg-[#6366f1] hover:text-white transition-colors duration-300"
        >
          GitHub Link
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
