const Github = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">GitHub integration</h1>
        <p className="text-sm text-muted">Connect GitHub and export your project.</p>
      </div>
      <div className="rounded-2xl border border-border bg-panel-2 p-4">
        <div className="space-y-4">
          <div className="rounded-xl border border-border bg-panel-3 p-4">
            <p className="text-sm font-semibold">OAuth</p>
            <p className="text-xs text-muted">Request repository permissions.</p>
            <button className="mt-3 rounded-lg border border-border px-3 py-1 text-xs">Connect GitHub</button>
          </div>
          <div className="rounded-xl border border-border bg-panel-3 p-4">
            <p className="text-sm font-semibold">Export project</p>
            <p className="text-xs text-muted">Generate a repository with logs.</p>
            <div className="mt-3 flex items-center gap-2">
              <button className="rounded-lg border border-border px-3 py-1 text-xs">Export</button>
              <span className="text-xs text-muted">Status: idle</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Github;
