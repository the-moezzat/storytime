import { PlusCircle } from "@phosphor-icons/react";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";
import Book from "./Book";
import IBook from "../../types/IBook";

const books: IBook[] = [
  {
    id: 1,
    name: "The little cowboy",
    badges: ["romantic", "space", "sci-fi"],
    image:
      "https://cdn.dribbble.com/users/86429/screenshots/17157249/media/8936823e00a8a098012edc8a27bdcf93.png?resize=400x300&vertical=center",
    numChapter: 7,
    downloadLink: "/download.pdf",
  },
  {
    id: 2,
    name: "The spongebob story",
    badges: ["fiction", "space", "sci-fi"],
    image:
      "https://cdn.dribbble.com/users/66059/screenshots/11185004/media/27b450a88945dc925c13a18c0a199ab9.jpg?resize=400x300&vertical=center",
    numChapter: 13,
    downloadLink: "/download.pdf",
  },
  {
    id: 3,
    name: "The little queen",
    badges: ["happy", "romantic", "love"],
    image:
      "https://cdn.dribbble.com/users/1263605/screenshots/14189075/lightprincess_4x.gif?resize=400x300&vertical=center",
    numChapter: 13,
    downloadLink: "/download.pdf",
  },
  {
    id: 3,
    name: "Goha's family",
    badges: ["comedy", "adventure", "ripple"],
    image:
      "https://cdn.dribbble.com/userupload/8402439/file/original-4c6f3c3fb998a3693c59e4f3f6116b7f.jpg?resize=400x300&vertical=center",
    numChapter: 13,
    downloadLink: "/download.pdf",
  },
];

export default function Dashboard() {
  return (
    <div>
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
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </main>
    </div>
  );
}
