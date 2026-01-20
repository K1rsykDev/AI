import { useLocation } from "react-router-dom";
import { mockProjects } from "../data/mockData";
import { cn } from "../lib/utils";

const filterChip = "rounded-full border border-border bg-panel-2 px-3 py-1 text-xs text-muted";

const Projects = () => {
  const location = useLocation();
  const view = new URLSearchParams(location.search).get("view");
  const heading = view === "starred" ? "Starred" : view === "shared" ? "Shared with me" : "All projects";

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-semibold">{heading}</h1>
        <div className="flex flex-wrap gap-2">
          <input
            placeholder="Search projects..."
            className="w-64 rounded-lg border border-border bg-panel-2 px-3 py-2 text-sm"
          />
          <button className={filterChip}>Last edited</button>
          <button className={filterChip}>Visibility</button>
          <button className={filterChip}>Status</button>
          <button className={filterChip}>AI creators</button>
          <button className={filterChip}>Grid</button>
          <button className={filterChip}>List</button>
        </div>
      </div>

      {mockProjects.length ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {mockProjects.map((project) => (
            <div key={project.id} className="rounded-2xl border border-border bg-panel-2 p-4">
              <div className="relative h-36 rounded-xl bg-panel-3">
                <span className="absolute left-2 top-2 rounded-full bg-black/60 px-2 py-1 text-[10px]">{project.status}</span>
                <button className={cn("absolute right-2 top-2 rounded-full bg-black/60 px-2 py-1 text-[10px]", project.starred && "text-yellow-300")}>★</button>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{project.title}</p>
                  <p className="text-xs text-muted">{project.lastEdited}</p>
                </div>
                <span className="text-xs text-muted">{project.visibility}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-border bg-panel-2 p-10 text-center text-sm text-muted">
          Start building your first project.
        </div>
      )}
    </div>
  );
};

export default Projects;
