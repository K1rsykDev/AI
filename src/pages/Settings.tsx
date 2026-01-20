import { useAppStore } from "../store/appStore";

const Settings = () => {
  const appearance = useAppStore((state) => state.appearance);
  const setAppearance = useAppStore((state) => state.setAppearance);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-sm text-muted">Manage your workspace preferences.</p>
      </div>
      <div id="appearance" className="rounded-2xl border border-border bg-panel-2 p-4">
        <p className="text-sm font-semibold">Appearance</p>
        <div className="mt-3 flex gap-2">
          {(["light", "dark", "system"] as const).map((mode) => (
            <button
              key={mode}
              className={`rounded-full border border-border px-3 py-1 text-xs ${appearance === mode ? "bg-panel-3 text-white" : "text-muted"}`}
              onClick={() => setAppearance(mode)}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;
