import { Github, Zap, Rocket, ArrowRight, Terminal, GitBranch, Shield, Code2, Server, Globe } from "lucide-react";

export default function Footer() {
    return (
        
    <footer className="border-t mt-12  border-slate-200 px-6 py-8 bg-sky-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <span className="text-blue-600 font-semibold">ShipStack</span>
          </div>
          <div className="text-slate-500 text-sm">
            © 2025 ShipStack. Open source deployment platform.
          </div>
        </div>
      </footer>
      
    )
}