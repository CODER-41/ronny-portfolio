import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import TabBar from "./TabBar";
import TitleBar from "./TitleBar";
import StatusBar from "./StatusBar";

interface VSCodeLayoutProps {
  children: ReactNode;
}

const VSCodeLayout = ({ children }: VSCodeLayoutProps) => {
  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      {/* Title Bar */}
      <TitleBar />
      
      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Editor Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Tab Bar */}
          <TabBar />
          
          {/* Content */}
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
      
      {/* Status Bar */}
      <StatusBar />
    </div>
  );
};

export default VSCodeLayout;
