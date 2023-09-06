import { List } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Chapters({
  chapters,
  onChangeChapter,
}: {
  chapters: string[];
  onChangeChapter: (num: number) => void;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="text-xl">
          <List weight="regular" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="mb-4">
          <SheetTitle className={"text-xl font-bold text-gray-8"}>
            All chapters ({chapters.length})
          </SheetTitle>
        </SheetHeader>

        <SheetClose asChild>
          <div className="flex flex-col items-start gap-1 ">
            {chapters.map((chapter, i) => (
              <div className="w-full" key={i}>
                <Button
                  variant="ghost"
                  type="submit"
                  onClick={() => onChangeChapter(i)}
                  className=" mb-1 p-0 text-left text-base text-gray-6 hover:bg-white hover:text-gray-8"
                >
                  {chapter}
                </Button>
                <Separator className="w-full" />
              </div>
            ))}
          </div>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
