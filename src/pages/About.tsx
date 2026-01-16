import VSCodeLayout from "@/components/layout/VSCodeLayout";

const About = () => {
  return (
    <VSCodeLayout>
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="space-y-8 animate-fade-in-up">
          {/* Code Comment Style Header */}
          <div className="font-mono text-muted-foreground">
            <span className="text-accent">{"/**"}</span>
            <br />
            <span className="text-accent"> * </span>
            <span className="text-foreground text-2xl font-bold">About Me</span>
            <br />
            <span className="text-accent">{" */"}</span>
          </div>

          {/* Content */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              <span className="text-primary font-mono">const</span>{" "}
              <span className="text-accent font-mono">developer</span> = {"{"}
            </p>
            
            <div className="pl-8 space-y-4 font-mono">
              <p>
                <span className="text-muted-foreground">name:</span>{" "}
                <span className="text-js">"Ronny Mboya"</span>,
              </p>
              <p>
                <span className="text-muted-foreground">title:</span>{" "}
                <span className="text-js">"Full Stack Developer"</span>,
              </p>
              <p>
                <span className="text-muted-foreground">education:</span>{" "}
                <span className="text-js">"Moringa School"</span>,
              </p>
              <p>
                <span className="text-muted-foreground">location:</span>{" "}
                <span className="text-js">"Kenya 🇰🇪"</span>,
              </p>
              <p>
                <span className="text-muted-foreground">passions:</span> [
              </p>
              <div className="pl-4">
                <p><span className="text-js">"Building web applications"</span>,</p>
                <p><span className="text-js">"Problem solving"</span>,</p>
                <p><span className="text-js">"Learning new technologies"</span>,</p>
                <p><span className="text-js">"Open source contribution"</span></p>
              </div>
              <p>],</p>
              <p>
                <span className="text-muted-foreground">currentFocus:</span>{" "}
                <span className="text-js">"Full Stack Development"</span>,
              </p>
            </div>
            
            <p>{"}"}</p>
          </div>

          {/* Bio Section */}
          <div className="mt-12 p-6 bg-card rounded-lg border border-border">
            <h3 className="text-xl font-bold text-foreground mb-4 font-mono">
              {"//"} The Story
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate full stack developer currently learning at Moringa School. 
              I love building web applications that solve real-world problems and create 
              meaningful user experiences. My journey in tech started with curiosity and 
              has grown into a full-fledged passion for creating elegant, efficient solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open source projects, or sharing knowledge with fellow developers. I believe 
              in continuous learning and pushing the boundaries of what's possible with code.
            </p>
          </div>
        </div>
      </div>
    </VSCodeLayout>
  );
};

export default About;
