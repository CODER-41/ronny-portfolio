import VSCodeLayout from "@/components/layout/VSCodeLayout";
import avatarImage from "@/assets/avatar.png";

const languageSkills = [
  { name: "JavaScript", level: 95 },
  { name: "TypeScript", level: 92 },
  { name: "Python", level: 90 },
  { name: "React", level: 94 },
  { name: "Node.js", level: 93 },
  { name: "HTML/CSS", level: 95 },
  { name: "SQL", level: 91 },
  { name: "MongoDB", level: 90 },
  { name: "Git", level: 93 },
  { name: "Docker", level: 90 },
];

const About = () => {
  return (
    <VSCodeLayout>
      <div className="max-w-5xl mx-auto px-8 py-16">
        <div className="space-y-12 animate-fade-in-up">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              Software Developer
            </h1>
            <p className="text-xl text-primary font-mono">Code Sorcerer</p>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start bg-card p-8 rounded-lg border border-border">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary">
                <img 
                  src={avatarImage} 
                  alt="Ronny Mboya Ojwang" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Personal Info */}
            <div className="flex-1 space-y-4 font-mono">
              <div>
                <span className="text-muted-foreground">const</span>{" "}
                <span className="text-accent">developer</span> = {"{"}
              </div>
              
              <div className="pl-6 space-y-2">
                <p>
                  <span className="text-muted-foreground">name:</span>{" "}
                  <span className="text-js">"Ronny Mboya Ojwang"</span>,
                </p>
                <p>
                  <span className="text-muted-foreground">alias:</span>{" "}
                  <span className="text-primary">"Code Sorcerer"</span>,
                </p>
                <p>
                  <span className="text-muted-foreground">title:</span>{" "}
                  <span className="text-js">"Software Developer"</span>,
                </p>
                <p>
                  <span className="text-muted-foreground">university:</span>{" "}
                  <span className="text-js">"Maseno University"</span>,
                </p>
                <p>
                  <span className="text-muted-foreground">degree:</span>{" "}
                  <span className="text-js">"Mathematics and Physics Graduate"</span>,
                </p>
                <p>
                  <span className="text-muted-foreground">bootcamp:</span>{" "}
                  <span className="text-js">"Moringa School, Kenya"</span>,
                </p>
                <p>
                  <span className="text-muted-foreground">specialization:</span>{" "}
                  <span className="text-js">"Software Engineering"</span>,
                </p>
                <p>
                  <span className="text-muted-foreground">location:</span>{" "}
                  <span className="text-js">"Kenya 🇰🇪"</span>
                </p>
              </div>
              
              <div>{"}"}</div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6 font-mono flex items-center gap-2">
              <span className="text-primary">{"<"}</span>
              Technical Skills
              <span className="text-primary">{"/>"}</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {languageSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-foreground">{skill.name}</span>
                    <span className="text-sm text-primary font-mono">{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bio Section */}
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-mono">
              {"//"} About Me
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Ronny Mboya Ojwang, also known as the <span className="text-primary font-semibold">Code Sorcerer</span>. 
                With a strong foundation in Mathematics and Physics from Maseno University, I bring analytical thinking 
                and problem-solving prowess to software development.
              </p>
              <p>
                Currently honing my craft at Moringa School, Kenya, I specialize in full-stack development, 
                transforming complex problems into elegant, scalable solutions. My academic background gives me 
                a unique perspective on algorithm design and computational thinking.
              </p>
              <p>
                I'm passionate about building web applications that make a difference. Whether it's crafting 
                intuitive user interfaces or architecting robust backend systems, I approach each project with 
                the precision of a mathematician and the creativity of an artist.
              </p>
              <p>
                When I'm not conjuring code, you'll find me exploring new technologies, contributing to open 
                source, or sharing knowledge with the developer community. I believe in the magic of clean code 
                and the power of continuous learning.
              </p>
            </div>
          </div>

          {/* Interests/Passions */}
          <div className="bg-card p-8 rounded-lg border border-border font-mono">
            <div className="space-y-2">
              <p>
                <span className="text-primary">const</span>{" "}
                <span className="text-accent">passions</span> = [
              </p>
              <div className="pl-6 space-y-1 text-muted-foreground">
                <p><span className="text-js">"Building innovative web applications"</span>,</p>
                <p><span className="text-js">"Solving complex algorithms"</span>,</p>
                <p><span className="text-js">"Open source contribution"</span>,</p>
                <p><span className="text-js">"Mentoring aspiring developers"</span>,</p>
                <p><span className="text-js">"Exploring AI and Machine Learning"</span></p>
              </div>
              <p>]</p>
            </div>
          </div>
        </div>
      </div>
    </VSCodeLayout>
  );
};

export default About;