export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-base-dark text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-accent-rose text-xs font-bold uppercase tracking-[0.3em] mb-4">Get In Touch</h2>
        <h3 className="text-cream text-5xl font-black mb-8 tracking-tighter">Let's build something <span className="text-accent-rose">great</span>.</h3>
        
        <p className="text-cream/60 mb-12">
          Aap mujhse kisi bhi project discussion ya collaboration ke liye contact kar sakte hain.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a href="mailto:your-email@gmail.com" className="bg-accent-rose hover:bg-accent-coral text-base-dark px-12 py-5 font-black uppercase tracking-widest transition-all rounded-sm">
            Say Hello
          </a>
          <div className="flex items-center justify-center space-x-6 text-cream/40">
            <span className="hover:text-accent-coral cursor-pointer transition-colors font-bold uppercase text-[10px] tracking-widest">LinkedIn</span>
            <span className="hover:text-accent-coral cursor-pointer transition-colors font-bold uppercase text-[10px] tracking-widest">GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
}