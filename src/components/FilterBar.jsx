const TABS = [
  { value: "all", label: "All" },
  { value: "watched", label: "Watched" },
  { value: "unwatched", label: "Unwatched" },
];

export default function FilterBar({ search, onSearchChange, status, onStatusChange }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-6">
      <div className="flex bg-reel-surface border border-reel-border rounded-md p-1 w-fit">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => onStatusChange(tab.value)}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
              status === tab.value
                ? "bg-reel-amber text-reel-bg"
                : "text-reel-muted hover:text-reel-text"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <input
        type="text"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search by title..."
        className="bg-reel-surface border border-reel-border rounded-md px-3 py-2 text-sm text-reel-text placeholder:text-reel-muted focus:outline-none focus:ring-2 focus:ring-reel-amber w-full sm:w-64"
      />
    </div>
  );
}
