import { quickPrompts, mockProjects } from "../data/mockData";
import { useAppStore } from "../store/appStore";

const Home = () => {
  const username = useAppStore((state) => state.username || "builder");

  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold">Ready to build, {username}?</h1>
          <p className="mt-2 text-lg text-white/80">Describe what you want to ship. We&apos;ll handle the UX, code, and cloud.</p>
          <div className="mt-8 rounded-2xl bg-black/40 p-4">
            <div className="flex items-center gap-2 border-b border-white/10 pb-3 text-xs text-white/60">
              <span>Attach</span>
              <span>Theme</span>
              <span>Voice</span>
            </div>
            <textarea
              className="mt-3 h-24 w-full resize-none rounded-lg bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
              placeholder="Ask the AI to create a web app that..."
            />
            <div className="mt-4 flex items-center justify-between">
              <div className="flex gap-2 text-xs text-white/70">
                <span>📎</span>
                <span>🖼️</span>
                <span>🎙️</span>
              </div>
              <button className="rounded-full bg-white/20 px-4 py-2 text-xs font-semibold">Create</button>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="text-xs text-white/70">Try:</span>
            {quickPrompts.map((prompt) => (
              <span key={prompt} className="rounded-full bg-white/20 px-3 py-1 text-xs">
                {prompt}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Projects</h2>
          <div className="flex gap-2 text-xs text-muted">
            <span>Starred</span>
            <span>Shared</span>
            <span>Templates</span>
          </div>
        </div>
        {mockProjects.length ? (
          <div className="grid gap-4 md:grid-cols-2">
            {mockProjects.map((project) => (
              <div key={project.id} className="rounded-2xl border border-border bg-panel-2 p-4">
                <div className="h-32 rounded-xl bg-panel-3" />
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">{project.title}</p>
                    <p className="text-xs text-muted">{project.lastEdited}</p>
                  </div>
                  <span className="text-xs text-muted">{project.status}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border bg-panel-2 p-8 text-center text-sm text-muted">
            No projects yet. Start building your first one.
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
