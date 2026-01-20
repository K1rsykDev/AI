import { useState } from "react";
import { useAppStore } from "../store/appStore";

const suggestions = ["ai-builder", "creative-labs", "launchpad", "pixel-craft"];

export const UsernameOnboarding = () => {
  const { hasOnboarded, setOnboarded, setUsername } = useAppStore();
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  if (hasOnboarded) return null;

  const handleSubmit = () => {
    if (!value.trim()) {
      setError("Username is required");
      return;
    }
    if (!/^[a-z0-9_-]{3,20}$/i.test(value)) {
      setError("Use 3-20 letters, numbers, - or _");
      return;
    }
    setUsername(value.trim());
    setOnboarded(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6">
      <div className="w-full max-w-xl rounded-2xl border border-border bg-panel p-6">
        <h2 className="text-xl font-semibold">Choose your Lovable username</h2>
        <p className="mt-1 text-sm text-muted">lovable.dev/@username</p>
        <div className="mt-4">
          <input
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
              setError("");
            }}
            placeholder="your-handle"
            className="w-full rounded-lg border border-border bg-panel-2 px-4 py-3 text-sm"
          />
          {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
        </div>
        <div className="mt-4">
          <p className="text-xs text-muted">Suggestions</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {suggestions.map((name) => (
              <button
                key={name}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted hover:text-white"
                onClick={() => setValue(name)}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-3">
          <button className="rounded-lg border border-border px-4 py-2 text-sm text-muted">Cancel</button>
          <button className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold" onClick={handleSubmit}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
