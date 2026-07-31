import { Code2, Briefcase, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t-8 border-white py-12 px-4 sm:px-8 z-10 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2">Rushabh Shete</h2>
          <p className="text-xl font-bold text-gray-300">Full Stack Developer & Architect</p>
        </div>
        
        <div className="flex gap-4">
          <a href="https://github.com/Rushabhshete" target="_blank" rel="noreferrer" className="p-3 bg-white text-black border-4 border-black hover:bg-neo-accent hover:text-white hover:-translate-y-1 transition-all flex items-center gap-2">
            <span className="font-bold">GH</span> <Code2 className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/rushabh-shete-46445316b" target="_blank" rel="noreferrer" className="p-3 bg-neo-secondary text-black border-4 border-black hover:bg-white hover:-translate-y-1 transition-all flex items-center gap-2">
            <span className="font-bold">IN</span> <Briefcase className="h-6 w-6" />
          </a>
          <a href="mailto:rushabhshete188@gmail.com" className="p-3 bg-neo-muted text-black border-4 border-black hover:bg-white hover:-translate-y-1 transition-all">
            <Mail className="h-6 w-6" />
          </a>
        </div>
  
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t-4 border-white text-center md:text-left">
        <p className="font-bold text-lg">© 2026 Rushabh Shete. All rights reserved.</p>
      </div>
    </footer>
  );
}
