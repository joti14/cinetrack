export default function SkeletonCard() {
  return (
    <div className="bg-reel-surface border border-reel-border rounded-lg overflow-hidden">
      <div className="aspect-[2/3] skeleton" />
      <div className="p-4 space-y-2">
        <div className="h-4 w-3/4 rounded skeleton" />
        <div className="h-3 w-1/2 rounded skeleton" />
        <div className="h-8 w-full rounded skeleton mt-3" />
      </div>
    </div>
  );
}
