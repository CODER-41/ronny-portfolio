import { Link, useLocation } from "react-router-dom";
import { Files, Github, Linkedin, Twitter, Mail, User, Settings } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const sidebarIcons = [
    { icon: Files, path: "/", tooltip: "Explorer" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com", tooltip: "Twitter" },
    { icon: Github, href: "https://github.com", tooltip: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", tooltip: "LinkedIn" },
    { icon: Mail, href: "mailto:ronny@example.com", tooltip: "Email" },
  ];

  const explorerItems = [
    { name: "home.jsx", icon: "⚛️", path: "/" },
    { name: "about.html", icon: "🌐", path: "/about" },
    { name: "projects.js", icon: "📜", path: "/projects" },
    { name: "resume.md", icon: "📝", path: "/resume" },
  ];

  return (
    <div className="flex h-full">
      {/* Activity Bar */}
      <div className="w-12 bg-sidebar-bg flex flex-col items-center py-2 border-r border-sidebar-border">
        {sidebarIcons.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`p-3 text-muted-foreground hover:text-foreground transition-colors border-l-2 w-full flex justify-center ${
              location.pathname === item.path
                ? "border-primary text-foreground"
                : "border-transparent"
            }`}
            title={item.tooltip}
          >
            <item.icon className="w-6 h-6" />
          </Link>
        ))}
        
        {/* Spacer */}
        <div className="flex-1" />
        
        {/* Social Links */}
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-muted-foreground hover:text-foreground transition-colors"
            title={item.tooltip}
          >
            <item.icon className="w-5 h-5" />
          </a>
        ))}
        
        {/* Bottom Icons */}
        <div className="border-t border-sidebar-border pt-2 w-full flex flex-col items-center">
          <button className="p-3 text-muted-foreground hover:text-foreground transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button className="p-3 text-muted-foreground hover:text-foreground transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Explorer Panel */}
      <div className="w-56 bg-sidebar-bg border-r border-sidebar-border hidden md:block">
        <div className="px-4 py-2 text-xs text-explorer uppercase tracking-wider font-semibold">
          Explorer
        </div>
        
        <div className="px-2">
          <div className="flex items-center gap-1 px-2 py-1 text-xs text-explorer uppercase tracking-wider">
            <span className="text-foreground">▾</span>
            <span>Portfolio</span>
          </div>
          
          {explorerItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2 px-4 py-1 text-sm hover:bg-secondary/50 transition-colors rounded ${
                location.pathname === item.path
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              <span>{item.icon}</span>
              <span className="font-mono text-sm">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
