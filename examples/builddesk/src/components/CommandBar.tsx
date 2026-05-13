import { RefreshCw, Search, X } from "lucide-react";

interface CommandBarProps {
  query: string;
  isRefreshing: boolean;
  onQueryChange: (query: string) => void;
  onClear: () => void;
  onRefresh: () => void;
}

export function CommandBar({ query, isRefreshing, onQueryChange, onClear, onRefresh }: CommandBarProps) {
  return (
    <div className="command-bar">
      <Search size={16} />
      <input
        aria-label="Search projects"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Search projects, packages, repos..."
      />
      {query ? (
        <button className="icon-button" type="button" aria-label="Clear search" onClick={onClear}>
          <X size={14} />
        </button>
      ) : null}
      <button className="refresh-button" type="button" onClick={onRefresh} disabled={isRefreshing}>
        <RefreshCw size={15} className={isRefreshing ? "spin" : ""} />
        Refresh
      </button>
    </div>
  );
}
