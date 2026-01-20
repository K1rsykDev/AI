import { useState } from "react";
import { useAppStore } from "../store/appStore";

const plans = [
  { name: "Free", price: "$0", credits: "5 daily" },
  { name: "Pro", price: "$19", credits: "100 daily" },
  { name: "Business", price: "$99", credits: "500 daily" },
  { name: "Enterprise", price: "Let’s talk", credits: "Custom" },
];

const Billing = () => {
  const [annual, setAnnual] = useState(false);
  const credits = useAppStore((state) => state.credits);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Billing & Credits</h1>
        <p className="text-sm text-muted">Daily credits reset at midnight UTC. No rollover on Free.</p>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xs text-muted">Monthly</span>
        <button
          className={`h-6 w-12 rounded-full border border-border ${annual ? "bg-accent" : "bg-panel-3"}`}
          onClick={() => setAnnual((value) => !value)}
        />
        <span className="text-xs text-muted">Annual</span>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan) => (
          <div key={plan.name} className="rounded-2xl border border-border bg-panel-2 p-4">
            <p className="text-sm font-semibold">{plan.name}</p>
            <p className="mt-1 text-xl font-semibold">{annual ? `${plan.price}/yr` : `${plan.price}/mo`}</p>
            <p className="mt-2 text-xs text-muted">{plan.credits}</p>
            <button className="mt-4 rounded-lg border border-border px-3 py-2 text-xs">Choose plan</button>
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-panel-2 p-4">
          <p className="text-sm font-semibold">Credits</p>
          <p className="mt-1 text-xs text-muted">{credits} credits left</p>
          <button className="mt-4 rounded-lg border border-border px-3 py-2 text-xs">Get free credits</button>
        </div>
        <div className="rounded-2xl border border-border bg-panel-2 p-4">
          <p className="text-sm font-semibold">Payment request</p>
          <p className="mt-1 text-xs text-muted">Upload receipt for card payment.</p>
          <div className="mt-3 rounded-xl border border-dashed border-border p-4 text-xs text-muted">
            Drop receipt here
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs">
            <span className="rounded-full bg-yellow-500/20 px-2 py-1 text-yellow-200">pending</span>
            <span className="rounded-full bg-green-500/20 px-2 py-1 text-green-200">approved</span>
            <span className="rounded-full bg-red-500/20 px-2 py-1 text-red-200">rejected</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
