import { List } from "@phosphor-icons/react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "./sheetNav";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function FloatingNav() {
  return (
    <Sheet>
      <SheetTrigger className="text-white">
        <List size={20} />
      </SheetTrigger>
      <SheetContent className=" text-lg" side={"center"}>
        <SheetDescription className="flex flex-col items-center gap-8">
          <ul className="flex flex-col gap-4  text-lg text-gray-7 ">
            <li>
              <a href="#" className="">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="">
                FAQ
              </a>
            </li>
          </ul>
          <div className="text-lg">
            <Link to={"/registration/signup"}>
              <Button size={"sm"}> Get Started</Button>
            </Link>
            <Link to={"/registration/login"}>
              <Button
                size={"sm"}
                variant="link"
                className="text-base text-gray-7"
              >
                Login
              </Button>
            </Link>
          </div>{" "}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
