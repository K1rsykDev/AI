import { useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

const actionButton = "rounded-lg border border-border bg-panel-2 px-3 py-2 text-xs text-white";

export const TopBar = () => {
  const location = useLocation();
  const isBuilder = location.pathname.startsWith("/project/");

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-black/80 px-8 py-4 backdrop-blur">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-sm text-muted">AI Site Studio</div>
          {isBuilder && (
            <div className="flex items-center gap-2 rounded-full bg-panel-2 px-2 py-1 text-xs">
              <span className="rounded-full bg-accent px-2 py-0.5 text-[10px]">Preview</span>
              <span className="text-muted">/</span>
              <span className="text-muted">Cloud</span>
              <span className="text-muted">Design</span>
              <span className="text-muted">Code</span>
              <span className="text-muted">Analytics</span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button className={cn(actionButton, "bg-panel-3")}>Upgrade</button>
          <button className={cn(actionButton, "bg-accent text-white")}>Publish</button>
        </div>
      </div>
    </header>
  );
};
