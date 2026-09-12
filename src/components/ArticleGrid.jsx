// import { ArticleCard } from "./ArticleCard";

export function ArticleGrid({ children }) {
  return (
    <div className="grid grid-cols-1 gap-8 min-[935px]:grid-cols-2  xl:grid-cols-3 w-full">
      {children}
    </div>
  );
}
