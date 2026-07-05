export default function EmptyState() {
  return (
    <div className="border border-dashed border-reel-border rounded-lg py-16 px-6 text-center">
      <p className="font-display text-2xl tracking-wideish text-reel-muted mb-1">
        No movies here
      </p>
      <p className="text-reel-muted text-sm">
        Try a different filter, a different search term, or add a new title below.
      </p>
    </div>
  );
}
