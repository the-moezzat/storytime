import { PlusCircle } from "@phosphor-icons/react";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";
import Book from "./Book";
import { useQuery } from "react-query";
import { getStories } from "../../services/apiStories";
import { ScrollArea } from "../../ui/scroll-area";

export default function Dashboard() {
  const { isLoading, data: stories } = useQuery("stories", getStories);

  if (isLoading) return <div>Loading...</div>;

  return (
    <ScrollArea className="h-full">
      <div className="flex items-center justify-between gap-4">
        <h1 className="mb-1 scroll-m-20 text-3xl font-bold tracking-tight text-gray-8 sm:mb-2 lg:text-4xl">
          Storybooks
        </h1>
        <Link to={"/app/create"}>
          <Button className="flex items-center gap-2 bg-blue-6  py-6 text-lg hover:bg-blue-7">
            <PlusCircle size={22} weight="bold" />
            Create new storybook
          </Button>
        </Link>
      </div>
      <main className="mt-6 grid grid-cols-3 gap-4">
        {stories &&
          stories.map((story) => <Book key={story.id} book={story} />)}
      </main>
    </ScrollArea>
  );
}
