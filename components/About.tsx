export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-base-dark border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <h2 className="text-accent-rose text-xs font-bold uppercase tracking-[0.3em] mb-4">The Story</h2>
          <h3 className="text-cream text-4xl font-bold mb-6 italic">About Me</h3>
          <p className="text-cream/70 leading-relaxed text-lg mb-6">
            "I am a passionate <span className="text-accent-coral font-bold">Frontend Web Developer</span> specializing in building interactive and modern interfaces with React.js and Next.js. For me, coding is more than just logic—it is about crafting beautiful and seamless user experiences."
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-base-muted/5 p-4 border border-white/5">
              <span className="text-accent-rose font-black block text-2xl">10+</span>
              <span className="text-cream/50 text-xs uppercase tracking-widest">Projects Done</span>
            </div>
            <div className="bg-base-muted/5 p-4 border border-white/5">
              <span className="text-accent-rose font-black block text-2xl">Tailwind</span>
              <span className="text-cream/50 text-xs uppercase tracking-widest">Mastery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}