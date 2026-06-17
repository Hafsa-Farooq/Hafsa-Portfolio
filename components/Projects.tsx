const projects = [
  {
    title: "Foodpanda UI Clone",
    desc: "A fully responsive food delivery interface built with React and Tailwind CSS.",
    tags: ["React.js", "Tailwind", "Firebase", "Stripe"],
    img: "/foodpanda.png",
    demo: "https://foodpanda-tr3o.vercel.app",
    github: "https://github.com/Hafsa-Farooq/foodpanda.git"
  },
  {
    title: "Fleety Dashboard",
    desc: "A professional logistics and fleet management dashboard with clean navigation.",
    tags: ["Next.js", "Tailwindcss"],
    img: "/fleetydashboard.png",
    demo: "https://fleety-dashboard.vercel.app",
    github: "https://github.com/Hafsa-Farooq/DashboardTask.git"
  },
  {
    title: "NFT Spotlight",
    desc: "A cyberpunk-themed NFT marketplace component with Ethereum pricing.",
    tags: ["Next.js", "Tailwind"],
    img: "/NFT.png",
    demo: "https://next-project-tan-pi.vercel.app",
    github: "https://github.com/Hafsa-Farooq/NextProject.git"
  },
  // 4th Project
  {
    title: "Tier75-project",
    desc: "Full-stack shopping experience with cart functionality and payment integration.",
    tags: ["React.js", "Custom CSS"],
    img: "/tier75-project.png",
    demo: "https://tier75-project-5yei.vercel.app",
    github: "https://github.com/Hafsa-Farooq/Tier75-project.git"
  },
  // Aap isi tarah baqi 8 projects yahan add kar sakti hain...
  // Project 5
  { title: "We are Brewly", 
    desc: "Description here", 
    tags: ["HTML", "Custom CSS"], 
    img: "/Brewly.png", 
    demo: "https://we-are-brewly.vercel.app", 
    github: "https://github.com/Hafsa-Farooq/we-are-brewly.git" 
  },
  // Project 6
  { title: "Rock-Paper-Scissors-GAME",
    desc: "Description here", 
    tags: ["HTML", "Custom Css", "JavaScript"],
    img: "/Rock-paper-scissors-game.png", 
    demo: "https://rock-paper-scissors-game-project-orcin.vercel.app", 
    github: "https://github.com/Hafsa-Farooq/rock-paper-scissors-game-project.git" 
  },
  // Project 7
  { title: "Profile-Template-Pages ", 
    desc: "Description here", 
    tags: ["HTML", "Custom CSS"], 
    img: "/Profile-Template-Pages.png", 
    demo: "https://profile-template-pages.vercel.app", 
    github: "https://github.com/Hafsa-Farooq/Profile-Template-pages.git"
   },
  // Project 8
  { title: "Profile",
    desc: "Description here",
    tags: ["HTML", "Custom CSS"], 
    img: "/profile.png",     
    demo: "https://profile-page-peach-gamma.vercel.app",  
    github: "https://github.com/Hafsa-Farooq/PROFILE-PAGE.git"
   },
  // Project 9
  { title: "Landing-page",
    desc: "Description here",
    tags: ["HTML", "Custom CSS"], 
    img: "/Landing-page.png",  
    demo: "https://landing-page-lac-three-67.vercel.app",  
    github: "https://github.com/Hafsa-Farooq/landing-page.git"
   },
  // Project 10

  { title: "Currency-Convertor",
    desc: "Description here",
    tags: ["HTML", "Custom Css", "JavaScript"], 
    img: "/currency-convertor.png",  
    demo: "https://landing-page-lac-three-67.vercel.app",  
    github: "https://github.com/Hafsa-Farooq/currency-converter-with-api.git" 
  },
  // Project 11

  { title: "TIC-TAC-GAME",
    desc: "Description here",
    tags: ["HTML", "Custom Css", "JavaScript"],      
    img: "/TIC-TAC-Game.png", 
    demo: "https://tic-tac-game-orcin-eta.vercel.app",  
    github: "https://github.com/Hafsa-Farooq/tic-tac-game.git" 
  },
  // Project 12

  { title: "First-Project",
    desc: "Description here",
    tags: ["HTML"],    
    img: "/first-project.png",  
    demo: "https://first-project-lovat-zeta.vercel.app",  
    github: "https://github.com/Hafsa-Farooq/First-project.git" 
  },
   // Project 13

   { title: "Figma-Landing-Page in Next.js",
    desc: "Figma-Landing-Page",
    tags: ["Next.js", "Tailwind"],    
    img: "/figma-page-img.png",  
    demo: "https://figma-landing-page-in-next-js.vercel.app",  
    github: "https://github.com/Hafsa-Farooq/Figma-Landing-Page-in-Next.js.git" 
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-base-dark py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-20">
          <h2 className="text-6xl md:text-8xl font-black text-cream tracking-tighter uppercase italic">
            Selected Work
          </h2>
          <p className="text-accent-rose font-bold tracking-[0.3em] uppercase mt-4">
            Total Projects: {projects.length}
          </p>
        </div>

        {/* Responsive Grid: 1 column on mobile, 2 on medium screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((item, index) => (
            <div key={index} className="bg-[#1e293b]/40 rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl transition-all duration-500 hover:-translate-y-2">
              
              {/* 1. UPPER PART: Project Link/Image */}
              <a href={item.demo} target="_blank" rel="noopener noreferrer" className="block relative aspect-video overflow-hidden group/img">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                />
                <div className="absolute inset-0 bg-accent-rose/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-cream text-base-dark px-6 py-2 rounded-full font-bold text-sm shadow-xl tracking-widest uppercase">
                    View Project ↗
                  </span>
                </div>
              </a>

              {/* 2. LOWER PART: Info Area */}
              <div className="p-10 space-y-6">
                <div>
                  <h3 className="text-4xl font-black text-accent-rose tracking-tight uppercase mb-3">
                    {item.title}
                  </h3>
                  <p className="text-cream/70 leading-relaxed text-lg font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="bg-base-dark/60 text-accent-coral px-4 py-1.5 rounded-full text-[10px] font-bold border border-accent-coral/20 uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a href={item.demo} className="bg-accent-rose hover:bg-accent-coral text-base-dark px-8 py-4 rounded-xl font-black uppercase text-xs tracking-[0.15em] transition-all flex items-center gap-2 shadow-lg active:scale-95">
                    Live Demo
                  </a>
                  <a href={item.github} className="bg-base-dark hover:bg-black text-cream px-8 py-4 rounded-xl font-black uppercase text-xs tracking-[0.15em] transition-all border border-cream/10 flex items-center gap-2 active:scale-95">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}