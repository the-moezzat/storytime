import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Raw from "../../ui/Row";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import IBook from "../../types/IBook";

function Book({ book }: { book: IBook }) {
  return (
    <Raw gap="12px" className="rounded-2xl bg-white p-2 ">
      <div className="w-24 overflow-hidden rounded-2xl">
        <AspectRatio ratio={3 / 4}>
          <img
            src={book.image}
            alt="book cover"
            className="h-full object-cover"
          />
        </AspectRatio>
      </div>
      <Raw variant="vertical" gap="4px" className="items-start">
        <p className="text-lg font-bold text-gray-7">{book.name}</p>
        <Raw className="flex-wrap" gap="4px">
          {book.badges.map((badge) => (
            <Badge variant={"outline"}>{badge}</Badge>
          ))}
        </Raw>
        <polyline className="text-sm text-gray-6">
          {book.numChapter} chapters
        </polyline>
        <Raw gap="16px" className="mt-auto">
          <Button>Download</Button>
          <Button variant="secondary">View</Button>
        </Raw>
      </Raw>
    </Raw>
  );
}

export default Book;
