import { GitBranch, AlertCircle, CheckCircle } from "lucide-react";

const StatusBar = () => {
  return (
    <div className="h-6 bg-statusbar flex items-center justify-between px-3 text-xs text-primary-foreground">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <GitBranch className="w-3 h-3" />
          <span>main</span>
        </div>
        <div className="flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          <span>0</span>
          <CheckCircle className="w-3 h-3 ml-2" />
          <span>0</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <span>Powered by React</span>
        <span>✓ Prettier</span>
      </div>
    </div>
  );
};

export default StatusBar;
