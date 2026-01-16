import VSCodeLayout from "@/components/layout/VSCodeLayout";
import { Button } from "@/components/ui/button";
import { Download, Mail, MapPin, Phone } from "lucide-react";

const Resume = () => {
  return (
    <VSCodeLayout>
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="space-y-8 animate-fade-in-up">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="font-mono">
              <span className="text-muted-foreground">{"# "}</span>
              <span className="text-foreground text-3xl font-bold">Resume</span>
            </div>
            <Button className="font-mono">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>

          {/* Contact Info */}
          <div className="bg-card p-6 rounded-lg border border-border font-mono">
            <h2 className="text-2xl font-bold text-foreground mb-2">Ronny Mboya</h2>
            <p className="text-primary text-lg mb-4">Full Stack Developer</p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Kenya
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> mboyaronny41@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> +254 769483882
              </span>
            </div>
          </div>

          {/* Education */}
          <section>
            <h3 className="text-xl font-bold text-foreground font-mono mb-4">
              <span className="text-accent">##</span> Education
            </h3>
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h4 className="font-bold text-foreground">Moringa School</h4>
                <span className="text-muted-foreground text-sm font-mono">2025 - Present</span>
              </div>
              <p className="text-primary font-mono">Full Stack Development Program</p>
              <p className="text-muted-foreground mt-2">
                Intensive software development bootcamp focusing on modern web technologies,
                agile methodologies, and professional development practices.
              </p>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h3 className="text-xl font-bold text-foreground font-mono mb-4">
              <span className="text-accent">##</span> Technical Skills
            </h3>
            <div className="bg-card p-6 rounded-lg border border-border space-y-4">
              <div>
                <h4 className="font-mono text-primary mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary rounded text-sm font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-mono text-primary mb-2">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Python", "Flask", "REST APIs"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary rounded text-sm font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-mono text-primary mb-2">Database & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {["PostgreSQL", "Git", "GitHub", "VS Code", "Postman"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary rounded text-sm font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h3 className="text-xl font-bold text-foreground font-mono mb-4">
              <span className="text-accent">##</span> Experience
            </h3>
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h4 className="font-bold text-foreground">Freelance Developer</h4>
                <span className="text-muted-foreground text-sm font-mono">2025 - Present</span>
              </div>
              <p className="text-primary font-mono">Self-Employed</p>
              <ul className="text-muted-foreground mt-2 space-y-1 list-disc list-inside">
                <li>Building responsive web applications for local businesses</li>
                <li>Developing full-stack solutions using modern technologies</li>
                <li>Collaborating with clients to deliver custom solutions</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </VSCodeLayout>
  );
};

export default Resume;
