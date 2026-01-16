import { Link } from "react-router-dom";
import VSCodeLayout from "@/components/layout/VSCodeLayout";
import TypewriterText from "@/components/TypewriterText";
import TechBadge from "@/components/TechBadge";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import avatarImage from "@/assets/avatar.png";

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
  "Moringa Student.",
  "Problem Solver.",
  "Code Enthusiast.",
];

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
        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 py-16 flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Ronny Mboya
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

          {/* Avatar/Logo */}
          <div className="flex-shrink-0 animate-float flex items-center justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-4 border-primary overflow-hidden flex items-center justify-center">
              <img 
                src={avatarImage} 
                alt="Ronny Mboya - Full Stack Developer" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </VSCodeLayout>
  );
};

export default Index;
