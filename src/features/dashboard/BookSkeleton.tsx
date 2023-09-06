import Raw from "@/components/Row";
import { Skeleton } from "@/components/ui/skeleton";

function BookSkeleton({ count }: { count: number }) {
  return Array.from({ length: count }).map(() => (
    <Raw gap="12px" className="h-36 animate-pulse rounded-2xl bg-white p-2">
      <Skeleton className="w-24 rounded-2xl" />
      <Raw variant="vertical" gap="6px" className="items-start">
        <Skeleton className="mb-2 h-5 w-full" />
        <Raw className="flex-wrap " gap="4px">
          {Array.from({ length: 3 }).map(() => (
            <Skeleton className="h-4 w-12" />
          ))}
        </Raw>

        <Skeleton className="h-3 w-16" />

        <Raw gap="12px" className="mt-auto">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-8 w-16" />
        </Raw>
      </Raw>
    </Raw>
  ));
}

export default BookSkeleton;
