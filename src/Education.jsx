import { motion } from 'framer-motion';

const education = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Vasavi College of Engineering",
    year: "2022 – Present",
    description: "Pursuing B.E. with strong academic performance and core focus on computer science fundamentals.",
    achievements: [
      "CGPA: 9.44",
      "First Prize - Innovasia 2k24 Hackathon",
      "Winner - Acumen CSE-2025 Project Expo",
      "Coursework: DSA, OOPS, DBMS, CN, OS, MERN Stack,Software Engineering"
    ]
  },
  {
    degree: "NPTEL & Online Certifications",
    institution: "Self-paced & External Platforms",
    year: "2023",
    description: "Completed industry-relevant certifications to strengthen practical and theoretical understanding.",
    achievements: [
      "NPTEL Gold Medal - Joy of Computing using Python (90%)",
      "Java Foundation - Infosys Springboard",
      "Hackerrank Software Engineering Internship",
      "NPTEL Elite - Programming in C"
    ]
  }
];


const EducationCard = ({ edu, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="card relative"
    >
      <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-[#6366f1] border-4 border-[#0f172a]" />
      
      <div className="ml-4">
        <span className="text-sm text-[#6366f1] font-medium">{edu.year}</span>
        <h3 className="text-xl font-semibold mt-1 mb-2">{edu.degree}</h3>
        <p className="text-[#6366f1] mb-3">{edu.institution}</p>
        <p className="text-gray-400 mb-4">{edu.description}</p>
        
        <ul className="space-y-2">
          {edu.achievements.map((achievement, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-[#6366f1] mr-2">•</span>
              <span className="text-gray-300">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Education</h2>
        
        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#334155]" />
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <EducationCard key={edu.degree} edu={edu} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
