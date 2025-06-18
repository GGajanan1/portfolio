import { motion } from 'framer-motion';

const profiles = [
  {
    platform: "GitHub",
    username: "GGajanan1",
    stats: {
      repositories: 20,
      contributions: 88,
      followers: 2
    },
    link: "https://github.com/GGajanan1",
    icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  },
  {
    platform: "LeetCode",
    username: "gajanang0910",
    stats: {
      problems: 630,
      rating: 1660,
      rank: "Top 18%"
    },
    link: "https://leetcode.com/gajanang0910",
    icon: "https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"
  },
  {
    platform: "CodeChef",
    username: "gajanan_g",
    stats: {
      rating: 1616,
      rank: "3 Star",
      contests: 10
    },
    link: "https://www.codechef.com/users/gajanan_g",
    icon: "https://cdn.codechef.com/sites/all/themes/abessive/cc-logo.svg"
  }
];

const ProfileCard = ({ profile, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="card group hover:border-[#6366f1] transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-6">
        <img
          src={profile.icon}
          alt={profile.platform}
          className="w-12 h-12 object-contain"
        />
        <div>
          <h3 className="text-xl font-semibold text-[#6366f1]">{profile.platform}</h3>
          <p className="text-gray-400">@{profile.username}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {Object.entries(profile.stats).map(([key, value]) => (
          <div key={key} className="text-center">
            <p className="text-2xl font-bold text-white mb-1">{value}</p>
            <p className="text-sm text-gray-400 capitalize">{key}</p>
          </div>
        ))}
      </div>

      <a
        href={profile.link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary w-full text-center"
      >
        View Profile
      </a>
    </motion.div>
  );
};

const CodingProfiles = () => {
  return (
    <section id="coding-profiles" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Coding Profiles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {profiles.map((profile, index) => (
            <ProfileCard key={profile.platform} profile={profile} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
