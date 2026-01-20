const Admin = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Admin panel</h1>
        <p className="text-sm text-muted">Review payments, assign plans, and issue credits.</p>
      </div>
      <div className="rounded-2xl border border-border bg-panel-2 p-4">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-panel-3 p-4">
            <p className="text-sm font-semibold">Billing requests</p>
            <p className="text-xs text-muted">Review and approve.</p>
            <div className="mt-3 flex gap-2">
              <button className="rounded-lg border border-border px-3 py-1 text-xs">Approve</button>
              <button className="rounded-lg border border-border px-3 py-1 text-xs">Reject</button>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-panel-3 p-4">
            <p className="text-sm font-semibold">Assign subscription</p>
            <p className="text-xs text-muted">Grant Pro or Business.</p>
            <button className="mt-3 rounded-lg border border-border px-3 py-1 text-xs">Grant plan</button>
          </div>
          <div className="rounded-xl border border-border bg-panel-3 p-4">
            <p className="text-sm font-semibold">Credits ledger</p>
            <p className="text-xs text-muted">Add credits to user.</p>
            <button className="mt-3 rounded-lg border border-border px-3 py-1 text-xs">Add credits</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
