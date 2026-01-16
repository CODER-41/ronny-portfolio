const TitleBar = () => {
  return (
    <div className="h-8 bg-titlebar flex items-center justify-between px-4 border-b border-sidebar-border">
      {/* macOS Window Controls */}
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
      </div>
      
      {/* Title */}
      <div className="absolute left-1/2 -translate-x-1/2 text-muted-foreground text-sm font-mono">
        Ronny Mboya - Visual Studio Code
      </div>
      
      <div />
    </div>
  );
};

export default TitleBar;
