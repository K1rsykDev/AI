import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockProjects, templates } from "../data/mockData";

const commandItem = "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-panel-3";

export const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const results = useMemo(() => {
    const search = query.toLowerCase();
    return {
      projects: mockProjects.filter((project) => project.title.toLowerCase().includes(search)),
      templates: templates.filter((template) => template.name.toLowerCase().includes(search)),
      pages: [
        { name: "Projects", path: "/projects" },
        { name: "Templates", path: "/templates" },
        { name: "Billing", path: "/billing" },
      ].filter((page) => page.name.toLowerCase().includes(search)),
    };
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 p-6" onClick={() => setOpen(false)}>
      <div
        className="w-full max-w-2xl rounded-2xl border border-border bg-panel p-4"
        onClick={(event) => event.stopPropagation()}
      >
        <input
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search projects, templates, pages"
          className="w-full rounded-xl border border-border bg-panel-2 px-4 py-3 text-sm text-white focus:outline-none"
        />
        <div className="mt-4 space-y-4">
          <div>
            <p className="mb-2 text-xs uppercase text-muted">Projects</p>
            <div className="space-y-1">
              {results.projects.map((project) => (
                <button
                  key={project.id}
                  className={commandItem}
                  onClick={() => {
                    navigate(`/project/${project.id}`);
                    setOpen(false);
                  }}
                >
                  <span>{project.title}</span>
                  <span className="text-xs text-muted">Open</span>
                </button>
              ))}
              {!results.projects.length && <p className="text-xs text-muted">No projects</p>}
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs uppercase text-muted">Templates</p>
            <div className="space-y-1">
              {results.templates.map((template) => (
                <button
                  key={template.id}
                  className={commandItem}
                  onClick={() => {
                    navigate("/templates");
                    setOpen(false);
                  }}
                >
                  <span>{template.name}</span>
                  <span className="text-xs text-muted">Use</span>
                </button>
              ))}
              {!results.templates.length && <p className="text-xs text-muted">No templates</p>}
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs uppercase text-muted">Pages</p>
            <div className="space-y-1">
              {results.pages.map((page) => (
                <button
                  key={page.path}
                  className={commandItem}
                  onClick={() => {
                    navigate(page.path);
                    setOpen(false);
                  }}
                >
                  <span>{page.name}</span>
                  <span className="text-xs text-muted">Go</span>
                </button>
              ))}
              {!results.pages.length && <p className="text-xs text-muted">No pages</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
