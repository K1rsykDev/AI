import { useAppStore } from "../store/appStore";

const heatmap = new Array(52).fill(0).map((_, index) => index % 5);

const Profile = () => {
  const username = useAppStore((state) => state.username || "builder");

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-8">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/40 text-xl font-semibold">
            {username.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 className="text-2xl font-semibold">{username}</h1>
            <p className="text-sm text-white/70">@{username}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          { label: "Edits last year", value: "0" },
          { label: "Daily average", value: "0" },
          { label: "Streak", value: "0 days" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-border bg-panel-2 p-4">
            <p className="text-xs text-muted">{stat.label}</p>
            <p className="mt-2 text-lg font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-border bg-panel-2 p-4">
        <p className="text-sm font-semibold">Activity</p>
        <div className="mt-3 grid grid-cols-13 gap-1">
          {heatmap.map((level, index) => (
            <div
              key={`${level}-${index}`}
              className={`h-3 w-3 rounded ${level === 0 ? "bg-panel-3" : level === 1 ? "bg-blue-900" : level === 2 ? "bg-blue-700" : level === 3 ? "bg-blue-500" : "bg-blue-300"}`}
            />
          ))}
        </div>
        <p className="mt-4 text-xs text-muted">No projects yet. Start building to fill your heatmap.</p>
      </div>
    </div>
  );
};

export default Profile;
