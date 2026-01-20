import { NavLink } from "react-router-dom";
import { useAppStore } from "../store/appStore";
import { cn } from "../lib/utils";

const navLink = "flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-panel-3";

export const Sidebar = () => {
  const credits = useAppStore((state) => state.credits);

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-border bg-panel p-4 text-white">
      <div className="mb-6">
        <div className="flex items-center justify-between rounded-lg bg-panel-2 px-3 py-2">
          <div>
            <p className="text-xs text-muted">Workspace</p>
            <p className="text-sm font-semibold">stream_gamer45&apos;s Lovable</p>
          </div>
          <span className="text-xs text-muted">⌄</span>
        </div>
      </div>

      <nav className="space-y-6 text-sm">
        <div className="space-y-1">
          <NavLink to="/" className={({ isActive }) => cn(navLink, isActive && "bg-panel-3")}
          >
            Home
          </NavLink>
          <div className={cn(navLink, "justify-between")}>Search <span className="text-xs text-muted">Ctrl + K</span></div>
        </div>

        <div>
          <p className="mb-2 text-xs uppercase text-muted">Projects</p>
          <div className="space-y-1">
            <NavLink to="/projects" className={({ isActive }) => cn(navLink, isActive && "bg-panel-3")}>Recent</NavLink>
            <NavLink to="/projects" className={navLink}>All projects</NavLink>
            <NavLink to="/projects?view=starred" className={navLink}>Starred</NavLink>
            <NavLink to="/projects?view=shared" className={navLink}>Shared with me</NavLink>
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs uppercase text-muted">Resources</p>
          <div className="space-y-1">
            <NavLink to="/discover" className={navLink}>Discover</NavLink>
            <NavLink to="/templates" className={navLink}>Templates</NavLink>
            <NavLink to="/learn" className={navLink}>Learn</NavLink>
          </div>
        </div>
      </nav>

      <div className="absolute bottom-4 left-4 right-4 space-y-4">
        <div className="rounded-xl border border-border bg-panel-2 p-3">
          <p className="text-sm font-semibold">Credits</p>
          <div className="mt-2 h-2 w-full rounded-full bg-panel-3">
            <div className="h-2 rounded-full bg-accent" style={{ width: `${(credits / 10) * 100}%` }} />
          </div>
          <p className="mt-2 text-xs text-muted">{credits} left • Daily reset at midnight UTC</p>
        </div>

        <div className="space-y-1 text-sm">
          <NavLink to="/profile" className={navLink}>Profile</NavLink>
          <NavLink to="/billing" className={navLink}>Credits / Bonuses</NavLink>
          <NavLink to="/settings" className={navLink}>Settings</NavLink>
          <NavLink to="/settings#appearance" className={navLink}>Appearance</NavLink>
          <NavLink to="/support" className={navLink}>Support</NavLink>
          <NavLink to="/docs" className={navLink}>Documentation</NavLink>
          <NavLink to="/community" className={navLink}>Community</NavLink>
          <button className={cn(navLink, "w-full text-left")}>Sign out</button>
        </div>
      </div>
    </aside>
  );
};
