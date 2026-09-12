import { Newspaper } from "lucide-react";
import { Button } from "./ui/button";
import { RefreshCw } from "lucide-react";

export function EmptyState({ onRetry, loading }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-12 h-12 rounded-full bg-brand-gray/20 flex items-center justify-center mb-4 text-brand-primary">
        <Newspaper className="w-6 h-6" />
      </div>
      <h4 className="text-lg font-semibold text-gray-900 mb-1">
        No articles available
      </h4>
      <p className="text-sm text-brand-article_text max-w-sm mb-6">
        We couldn't find any news articles right now. Please check back later or
        refresh the feed.
      </p>
      {onRetry && (
        <Button
          onClick={onRetry}
          variant="outline"
          className="text-xs font-medium border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-colors"
        >
          {loading ? (
            <RefreshCw className="w-3.5 h-3.5 animate-spin text-brand-primary" />
          ) : (
            " Refresh Feed"
          )}
        </Button>
      )}
    </div>
  );
}
