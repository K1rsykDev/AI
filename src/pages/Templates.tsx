import { templates } from "../data/mockData";

const Templates = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Templates</h1>
        <p className="text-sm text-muted">Pick a seed and generate a project in seconds.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {templates.map((template) => (
          <div key={template.id} className="rounded-2xl border border-border bg-panel-2 p-4">
            <div className="h-40 rounded-xl bg-panel-3" />
            <div className="mt-4 space-y-2">
              <p className="text-sm font-semibold">{template.name}</p>
              <p className="text-xs text-muted">{template.description}</p>
              <button className="rounded-lg border border-border px-3 py-2 text-xs text-white">Use template</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
