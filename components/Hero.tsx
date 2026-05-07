export default function Hero() {
  return (
    <section className="bg-base-dark min-h-screen flex items-center pt-20 px-6 md:px-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE: Text Content (Unchanged) */}
        <div className="z-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-coral opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-coral"></span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-cream/40 font-bold">
              Available for new projects
            </span>
          </div>

          <h1 className="text-[15vw] lg:text-[8vw] leading-[0.85] font-black text-cream tracking-tighter uppercase">
            Hafsa <br />
            <span className="text-white/10">Farooq</span>
          </h1>
          
          <p className="mt-6 text-accent-coral font-black uppercase tracking-[0.4em] text-sm md:text-xl">
            Software Engineer
          </p>

          <div className="mt-12 pt-10 border-t border-white/10 max-w-sm">
            <p className="text-cream/50 leading-relaxed italic text-lg">
              Building high-end digital experiences with React.js and Next.js.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Coding & Logic Icons (Software Engineer Focus) */}
        <div className="relative h-[500px] flex items-center justify-center font-mono z-10">
          
          {/* 1. Terminal Prompt Icon (Main Focus) */}
          <div className="absolute w-64 h-48 bg-[#1e293b]/50 rounded-2xl border border-white/5 shadow-2xl p-6 animate-[bounce_5s_ease-in-out_infinite] group hover:border-accent-rose/30 transition-all">
            <div className="flex gap-2 mb-5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="space-y-2 text-sm md:text-base text-cream/70">
              <p><span className="text-accent-coral">~</span> hafsa farooq</p>
              <p><span className="text-accent-coral">$</span> npm install creativity</p>
              <p><span className="text-accent-rose animate-pulse">▋</span></p>
            </div>
          </div>
          
          {/* 2. Code Brackets (Stroked) */}
          <div className="absolute top-10 right-20 text-[8rem] font-light text-cream/10 animate-[bounce_6s_ease-in-out_infinite]">
            &lt;/&gt;
          </div>

          {/* 3. Curly Braces (Accent Rose) */}
          <div className="absolute bottom-16 left-10 text-[6rem] font-light text-accent-rose/30 rotate-12 animate-[bounce_4s_ease-in-out_infinite]">
            &#123; &#125;
          </div>

          {/* 4. Arrow Link Icon (Coral) */}
          <div className="absolute top-20 left-16 text-[4rem] text-accent-coral/40 animate-pulse">
            &#10230;
          </div>

          {/* 5. Glowing API Dot */}
          <div className="absolute bottom-20 right-24 w-6 h-6 bg-accent-rose rounded-full opacity-60 shadow-[0_0_30px_rgba(168,118,118,0.5)] animate-ping"></div>
          
          {/* Background Structural Grid */}
          <div className="absolute w-[450px] h-[450px] rounded-full border-2 border-dashed border-white/5 animate-[spin_30s_linear_infinite]"></div>
        </div>

      </div>

      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-accent-rose/5 blur-[120px] rounded-full -z-10"></div>
    </section>
  );
}