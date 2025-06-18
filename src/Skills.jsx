import { motion } from 'framer-motion';

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "ReactJS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "Bootstrap", level: 80 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "NodeJS", level: 85 },
      { name: "ExpressJS", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "SQL", level: 85 }
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git/GitHub", level: 85 },
      { name: "System Design", level: 80 },
      { name: "AWS (Basics)", level: 75 },
      { name: "VS Code / IntelliJ", level: 80 }
    ]
  }
];


const SkillBar = ({ name, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{name}</span>
        <span className="text-[#6366f1]">{level}%</span>
      </div>
      <div className="h-2 bg-[#334155] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-[#6366f1] to-[#ec4899]"
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="card"
            >
              <h3 className="text-xl font-semibold mb-6 text-[#6366f1]">
                {skillGroup.category}
              </h3>
              {skillGroup.items.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
