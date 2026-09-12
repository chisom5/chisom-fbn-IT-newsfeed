import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";
import { Skeleton } from "./ui/skeleton";

function ArticleSkeletonCard() {
  return (
    <Card className="flex h-auto flex-col" aria-hidden="true">
      <CardHeader className="px-4 sm:px-6">
        <Skeleton className="h-5 w-4/5" />
        <Skeleton className="h-5 w-3/5" />
      </CardHeader>
      <Separator className="h-0.5 bg-brand-gray" />

      <CardContent className="mb-4 flex-1 overflow-hidden px-4 sm:px-6">
        <Skeleton className="mb-2 h-4 w-full" />
        <Skeleton className="mb-2 h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </CardContent>

      <CardFooter className="flex items-center justify-between px-4 pb-6 sm:px-6 sm:pt-0">
        <div className="flex items-center gap-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-28" />
        </div>
        <Skeleton className="h-4 w-16" />
      </CardFooter>
    </Card>
  );
}

export function ArticleSkeletonGrid({ count = 6 }) {
  return (
    <div
      className="grid w-full grid-cols-1 gap-8 min-[935px]:grid-cols-2 xl:grid-cols-3"
      aria-label="Loading latest news"
      aria-busy="true"
    >
      {Array.from({ length: count }, (_, index) => (
        <ArticleSkeletonCard key={index} />
      ))}
    </div>
  );
}