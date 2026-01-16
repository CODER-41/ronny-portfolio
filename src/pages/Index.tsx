import { Link } from "react-router-dom";
import VSCodeLayout from "@/components/layout/VSCodeLayout";
import TypewriterText from "@/components/TypewriterText";
import TechBadge from "@/components/TechBadge";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Github, Twitter, Linkedin, Mail } from "lucide-react";

const techStack = [
  { name: "JavaScript", icon: "🟨" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "TypeScript", icon: "🔷" },
  { name: "MongoDB", icon: "🍃" },
];

const roles = [
  "Full Stack Developer.",
  "Code Sorcerer.",
  "Problem Solver.",
  "Tech Wizard.",
];

// Inline Code Sorcerer Avatar Component
const CodeSorcererAvatar = () => (
  <svg width="100%" height="100%" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#1a1a2e', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#0f3460', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="robeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#4a5568', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#2d3748', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="hatGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#4299e1', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#2c5282', stopOpacity: 1 }} />
      </linearGradient>
      <radialGradient id="glowGradient">
        <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 0.8 }} />
        <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0 }} />
      </radialGradient>
    </defs>
    
    <circle cx="160" cy="160" r="160" fill="url(#bgGradient)" />
    
    <circle cx="80" cy="100" r="3" fill="#60a5fa" opacity="0.8">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="240" cy="140" r="2" fill="#a78bfa" opacity="0.8">
      <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="100" cy="220" r="2.5" fill="#fbbf24" opacity="0.8">
      <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" />
    </circle>
    <circle cx="220" cy="80" r="2" fill="#34d399" opacity="0.8">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite" />
    </circle>
    
    <path d="M 160 50 L 200 120 L 120 120 Z" fill="url(#hatGradient)" stroke="#60a5fa" strokeWidth="2" />
    <ellipse cx="160" cy="120" rx="45" ry="8" fill="#2c5282" stroke="#60a5fa" strokeWidth="2" />
    
    <text x="150" y="90" fontSize="20" fill="#fbbf24">✨</text>
    <text x="155" y="75" fontSize="16" fill="#60a5fa">★</text>
    
    <circle cx="160" cy="160" r="40" fill="#8b7355" />
    
    <rect x="135" y="155" width="18" height="15" rx="3" fill="none" stroke="#60a5fa" strokeWidth="3" />
    <rect x="167" y="155" width="18" height="15" rx="3" fill="none" stroke="#60a5fa" strokeWidth="3" />
    <line x1="153" y1="162" x2="167" y2="162" stroke="#60a5fa" strokeWidth="2" />
    
    <circle cx="144" cy="162" r="4" fill="#60a5fa" opacity="0.8">
      <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="176" cy="162" r="4" fill="#60a5fa" opacity="0.8">
      <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
    </circle>
    
    <path d="M 140 175 Q 160 190 180 175" fill="#5a4a3a" />
    <ellipse cx="160" cy="185" rx="20" ry="10" fill="#5a4a3a" />
    
    <path d="M 160 200 L 140 280 L 180 280 Z" fill="url(#robeGradient)" stroke="#4299e1" strokeWidth="2" />
    
    <line x1="190" y1="220" x2="210" y2="280" stroke="#8b7355" strokeWidth="6" />
    <circle cx="210" cy="210" r="12" fill="url(#glowGradient)" />
    <text x="202" y="218" fontSize="18" fill="#60a5fa" fontFamily="monospace" fontWeight="bold">&lt;/&gt;</text>
    
    <text x="70" y="160" fontSize="16" fill="#60a5fa" fontFamily="monospace" opacity="0.7">{'{ }'}</text>
    <text x="240" y="200" fontSize="16" fill="#a78bfa" fontFamily="monospace" opacity="0.7">&lt; /&gt;</text>
    <text x="90" y="260" fontSize="14" fill="#34d399" fontFamily="monospace" opacity="0.7">fn()</text>
  </svg>
);

const Index = () => {
  return (
    <VSCodeLayout>
      <div className="relative min-h-full flex items-center">
        {/* Background Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center overflow-hidden pointer-events-none">
          <span className="bg-text">I BUILD</span>
          <span className="bg-text">MAGIC!</span>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 py-16">
          {/* Social Icons - Top Right */}
          <div className="absolute top-4 right-8 flex gap-4">
            <a 
              href="https://github.com/CODER-41" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-8 h-8" />
            </a>
            <a 
              href="https://x.com/codesorcerdev41" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter Profile"
            >
              <Twitter className="w-8 h-8" />
            </a>
            <a 
              href="https://www.linkedin.com/in/coder41/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a 
              href="mailto: mboyaronny412gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 mt-16">
            {/* Text Content */}
            <div className="flex-1 space-y-6 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                Code Sorcerer
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-mono">
                <TypewriterText texts={roles} />
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-4">
                {techStack.map((tech) => (
                  <TechBadge key={tech.name} {...tech} />
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-6">
                <Button asChild size="lg" className="font-mono">
                  <Link to="/projects">
                    View Work
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="font-mono">
                  <Link to="/resume">
                    <FileText className="mr-2 w-4 h-4" />
                    My Resume
                  </Link>
                </Button>
              </div>
            </div>

            {/* Avatar */}
            <div className="flex-shrink-0 animate-float flex items-center justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-4 border-primary overflow-hidden flex items-center justify-center">
                <CodeSorcererAvatar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </VSCodeLayout>
  );
};

export default Index;