// import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Raw from "@/components/Row";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import IBook from "@/types/IBook";

function Book({ book }: { book: IBook }) {
  return (
    <Raw gap="12px" className="rounded-2xl bg-white p-2 ">
      <div className="max-w-[108px] overflow-hidden rounded-xl">
        {/* <AspectRatio ratio={3 / 4}> */}
        <img
          src={book?.image || ""}
          alt="book cover"
          className="h-full object-cover"
        />
        {/* <img
            src={"/cover.png"}
            alt="book cover"
            className="h-full object-cover"
          /> */}
        {/* </AspectRatio> */}
      </div>
      <Raw variant="vertical" gap="6px" className="items-start">
        <p className="font-medium leading-tight text-gray-7">{book.title}</p>

        <Raw className="flex-wrap" gap="4px">
          {book?.badges?.map((badge) => (
            <Badge variant={"outline"}>{badge}</Badge>
          ))}
        </Raw>

        <p className="text-sm text-gray-6">{book.numberOfChapters} chapters</p>

        <Raw gap="12px" className="mt-auto">
          <Button size={"sm"}>Download</Button>
          <Button size={"sm"} variant="secondary">
            View
          </Button>
        </Raw>
      </Raw>
    </Raw>
  );
}

export default Book;
