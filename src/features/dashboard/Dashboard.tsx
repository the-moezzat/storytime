import { Plus } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Book from "./Book";
import { useQuery } from "react-query";
import { getStories } from "@/services/apiStories";
import { ScrollArea } from "@/components/ui/scroll-area";
import BookSkeleton from "./BookSkeleton";
import useUser from "@/hooks/useUser";

export default function Dashboard() {
  const {
    id,
    user_metadata: { firstName },
  } = useUser();

  const { isLoading, data: stories } = useQuery("stories", () =>
    getStories(id),
    {
      staleTime: Infinity,
    }
  );

  return (
    <ScrollArea className="h-full">
      <div className="flex items-center justify-between gap-4">
        <h1 className="mb-1 scroll-m-20 text-xl font-bold text-gray-7 sm:mb-2 lg:text-2xl">
          Welcome back, <span className="font-medium">{firstName}</span>
        </h1>
        <Link to={"/app/create"}>
          <Button className="flex items-center gap-2 bg-blue-6  py-5 hover:bg-blue-7">
            <Plus size={18} weight="bold" />
            Create storybook
          </Button>
        </Link>
      </div>
      <main className=" mt-6 grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {isLoading && <BookSkeleton count={5} />}
        {stories &&
          stories.map((story) => <Book key={story.id} book={story} />)}
      </main>
    </ScrollArea>
  );
}
