import VSCodeLayout from "@/components/layout/VSCodeLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with cart, checkout, and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
    image: "",
  },
  {
    title: "Task Management App",
    description: "A collaborative task manager with real-time updates and team features.",
    tech: ["TypeScript", "React", "Firebase", "Tailwind"],
    github: "#",
    live: "#",
    image: "",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with forecasts and location-based data.",
    tech: ["JavaScript", "API", "CSS", "HTML"],
    github: "#",
    live: "#",
    image: "",
  },
  {
    title: "Portfolio Website",
    description: "A VS Code themed portfolio website showcasing my work and skills.",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "#",
    live: "#",
    image: "",
  },
];

const Projects = () => {
  return (
    <VSCodeLayout>
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="space-y-8">
          {/* Header */}
          <div className="font-mono animate-fade-in-up">
            <span className="text-muted-foreground">{"// "}</span>
            <span className="text-foreground text-3xl font-bold">Projects</span>
            <p className="text-muted-foreground mt-2">
              Here are some of the projects I've worked on
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{project.image}</span>
                    <div>
                      <CardTitle className="text-foreground font-mono">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="font-mono text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </VSCodeLayout>
  );
};

export default Projects;
