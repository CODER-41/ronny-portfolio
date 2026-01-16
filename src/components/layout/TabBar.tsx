import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";

const TabBar = () => {
  const location = useLocation();

  const tabs = [
    { name: "home.jsx", icon: "⚛️", path: "/" },
    { name: "about.html", icon: "🌐", path: "/about" },
    { name: "projects.js", icon: "📜", path: "/projects" },
    { name: "Resume.md", icon: "📝", path: "/resume" },
  ];

  return (
    <div className="h-9 bg-tab-bg flex items-end border-b border-tab-border overflow-x-auto">
      {tabs.map((tab) => (
        <Link
          key={tab.path}
          to={tab.path}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-mono border-r border-tab-border transition-colors ${
            location.pathname === tab.path
              ? "bg-background text-foreground border-t-2 border-t-primary"
              : "bg-tab-bg text-muted-foreground hover:bg-secondary/30"
          }`}
        >
          <span className="text-xs">{tab.icon}</span>
          <span>{tab.name}</span>
          <X className="w-3 h-3 ml-2 opacity-0 hover:opacity-100 transition-opacity" />
        </Link>
      ))}
    </div>
  );
};

export default TabBar;
