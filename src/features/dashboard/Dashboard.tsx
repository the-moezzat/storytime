import { Plus } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Book from "./Book";
import { useQuery } from "react-query";
import { getStories } from "@/services/apiStories";
import BookSkeleton from "./BookSkeleton";
import useUser from "@/hooks/useUser";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Dashboard() {
  const {
    id,
    user_metadata: { firstName },
  } = useUser();

  const { isLoading, data: stories } = useQuery(
    "stories",
    () => getStories(id),
    {
      staleTime: Infinity,
    },
  );

  console.log(stories);

  return (
    <ScrollArea className="col-span-full">
      <div className="flex items-center justify-between gap-4">
        <h1 className="mb-1 scroll-m-20 text-xl font-bold text-gray-8 sm:mb-2 lg:text-2xl">
          Welcome back, <span className="font-medium">{firstName}</span>
        </h1>
        <Link to={"/app/create"}>
          <Button className="flex items-center gap-2  py-5">
            <Plus size={18} weight="bold" />
            Create storybook
          </Button>
        </Link>
      </div>
      <main className=" mt-6 grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-lg:gap-2 max-sm:grid-cols-1">
        {isLoading && <BookSkeleton count={5} />}
        {stories &&
          stories.map((story) => <Book key={story.id} book={story} />)}
      </main>
    </ScrollArea>
  );
}
