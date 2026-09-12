import { useState } from "react";
import { RefreshCw } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { ArticleGrid } from "./components/ArticleGrid";
import { ArticleCard } from "./components/ArticleCard";
import { EmptyState } from "./components/EmptyState";
import { ArticleSkeletonGrid } from "./components/ArticleSkeletonGrid";
import { ArticlePagination } from "./components/ArticlePagination";
import { useFetchLatestNews } from "./hooks/useFetchLatestNews";
import { Toaster } from "sonner";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const { data, isLoading, isFetching, isError, error, refetch } = useFetchLatestNews({
    country: "us",
    pageSize,
    page: currentPage,
  });

  const articles = data?.articles || [];
  const totalPages = data?.totalPages || 1;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const isInitialLoad = isLoading && articles.length === 0;
  const isPageSwitching = isFetching && articles.length > 0;
  const isEmpty = !isLoading && !isError && articles.length === 0;

  return (
    <div className="min-h-screen text-black">
      <Navbar />

      <main className="px-5 pb-6 pt-[98px] sm:px-16">
        <div className="mb-10 pb-2 border-b border-brand-gray">
          <h3 className="text-xl font-semibold text-brand-primary lg:text-2xl">
            Latest news
          </h3>
        </div>

        {isInitialLoad && (
          <section className="max-w-[400px] min-[935px]:max-w-full mx-auto">
            <ArticleSkeletonGrid count={pageSize} />
          </section>
        )}

        {/* error state */}
        {error && isError && (
          <div>
            <h3 className="text-lg font-semibold text-red-900">
              Failed to load articles
            </h3>
            <p className="text-sm text-red-600 mt-1">
              {error?.message ||
                "Something went wrong while fetching the latest news."}
            </p>
          </div>
        )}

        {isEmpty && <EmptyState onRetry={() => refetch()} loading={isFetching} />}

        {/* Active grid */}
        {!isInitialLoad && !error && (
          <div className="relative">
            {isPageSwitching && (
              <div className="absolute inset-0 z-10 flex items-start justify-center pt-10 bg-white/30 backdrop-blur-[1px]">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border text-xs font-medium text-gray-600">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-brand-primary" />
                </div>
              </div>
            )}

            <div
              className={`max-w-[400px] mx-auto min-[935px]:max-w-full
                ${
                  isPageSwitching
                    ? "opacity-40 pointer-events-none transition-opacity duration-200"
                    : ""
                }
                  `}
            >
              <ArticleGrid>
                {articles.map((article, index) => (
                  <ArticleCard
                    key={`${article?.source?.name || "story"}-${index}`}
                    article={article}
                  />
                ))}
              </ArticleGrid>
            </div>
          </div>
        )}

        {/* show pagination for valid articles */}
        {!isInitialLoad && !error && !isEmpty && (
          <ArticlePagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(newPage) => {
              if (!isFetching) handlePageChange(newPage);
            }}
          />
        )}
      </main>
      <Toaster />
    </div>
  );
}

export default App;
