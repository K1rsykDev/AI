import { useState } from "react";
import { tasksChecklist } from "../data/mockData";
import { useAppStore } from "../store/appStore";

const tabs = ["Preview", "Cloud", "Design", "Code", "Analytics"] as const;

const ProjectBuilder = () => {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Preview");
  const credits = useAppStore((state) => state.credits);
  const spendCredit = useAppStore((state) => state.spendCredit);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`rounded-full border border-border px-4 py-1 text-xs ${
              activeTab === tab ? "bg-panel-2 text-white" : "text-muted"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
        <span className="text-xs text-muted">Read only</span>
        <button className="rounded-full bg-accent px-3 py-1 text-xs">Upgrade</button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[320px_1fr_320px]">
        <section className="rounded-2xl border border-border bg-panel-2 p-4">
          <h2 className="text-sm font-semibold">Chat</h2>
          <div className="mt-3 h-64 rounded-xl bg-panel-3 p-3 text-xs text-muted">
            Messages appear here. Attach an image to trigger vision analysis.
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <button className="rounded-full border border-border px-3 py-1 text-xs">Attach image</button>
            <button className="rounded-full border border-border px-3 py-1 text-xs">Follow-up</button>
            <button
              className="rounded-full bg-accent px-3 py-1 text-xs"
              onClick={spendCredit}
              disabled={credits === 0}
            >
              Send ({credits} credits)
            </button>
          </div>
          {credits === 0 && (
            <div className="mt-4 rounded-xl border border-red-500/40 bg-red-500/10 p-3 text-xs text-red-200">
              You&apos;re out of credits. Upgrade to continue.
            </div>
          )}
          <div className="mt-6">
            <p className="text-xs uppercase text-muted">Tasks</p>
            <ul className="mt-2 space-y-2 text-xs">
              {tasksChecklist.map((task) => (
                <li key={task} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full border border-muted" />
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-panel-2 p-6">
          {activeTab === "Preview" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Live preview</h2>
                <button className="rounded-full border border-border px-3 py-1 text-xs">Share</button>
              </div>
              <div className="h-[420px] rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500" />
            </div>
          )}
          {activeTab === "Cloud" && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold">Cloud</h2>
              <div className="grid gap-4">
                <div className="rounded-xl border border-border bg-panel-3 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold">Database</p>
                      <p className="text-xs text-muted">View tables and edit data</p>
                    </div>
                    <span className="text-xs text-muted">6 tables</span>
                  </div>
                  <button className="mt-3 rounded-full border border-border px-3 py-1 text-xs">View all</button>
                </div>
                <div className="rounded-xl border border-border bg-panel-3 p-4">
                  <p className="text-sm font-semibold">Users</p>
                  <p className="text-xs text-muted">Auth settings</p>
                </div>
                <div className="rounded-xl border border-border bg-panel-3 p-4">
                  <p className="text-sm font-semibold">Storage</p>
                  <p className="text-xs text-muted">Buckets will appear here when users upload files</p>
                </div>
                <div className="rounded-xl border border-border bg-panel-3 p-4">
                  <p className="text-sm font-semibold">Edge functions</p>
                  <p className="text-xs text-muted">ai-chat</p>
                </div>
              </div>
            </div>
          )}
          {activeTab === "Design" && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold">Design</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-border bg-panel-3 p-4">
                  <p className="text-sm font-semibold">Themes</p>
                  <p className="text-xs text-muted">Browse and apply themes</p>
                </div>
                <div className="rounded-xl border border-border bg-panel-3 p-4">
                  <p className="text-sm font-semibold">Visual edits</p>
                  <p className="text-xs text-muted">Select elements and edit visually</p>
                </div>
              </div>
              <button className="rounded-full border border-border px-3 py-1 text-xs">Back to Chat</button>
            </div>
          )}
          {activeTab === "Code" && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Code</h2>
              <div className="rounded-xl border border-border bg-panel-3 p-4 text-xs text-muted">
                src/pages
                <br />components
                <br />hooks
                <br />integrations/supabase
              </div>
              <div className="rounded-xl border border-dashed border-border bg-panel-2 p-4 text-xs text-muted">
                Upgrade to unlock editing. Read-only in Free plan.
              </div>
            </div>
          )}
          {activeTab === "Analytics" && (
            <div className="flex h-[420px] items-center justify-center">
              <div className="text-center text-sm text-muted">
                <p className="font-semibold">Publish your project to see analytics</p>
                <p className="mt-1 text-xs">To view analytics, you first need to publish your project.</p>
              </div>
            </div>
          )}
        </section>

        <section className="rounded-2xl border border-border bg-panel-2 p-4">
          <h2 className="text-sm font-semibold">Changes</h2>
          <div className="mt-3 rounded-xl border border-border bg-panel-3 p-3 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-muted">Changed data</span>
              <span className="rounded-full bg-accent px-2 py-0.5 text-[10px]">Auto-approved</span>
            </div>
            <pre className="mt-3 whitespace-pre-wrap text-[11px] text-blue-300">
{`query: "INSERT INTO public.templates (name, description, category, is_featured) VALUES (...)"`}
            </pre>
            <div className="mt-4 flex items-center justify-between text-xs text-muted">
              <span>Always allow</span>
              <span>Cloud</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectBuilder;
