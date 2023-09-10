import { Link } from "react-router-dom";
import FloatingNav from "./floatingNav";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between py-4">
      <Link to={"/"}>
        <img src="/logo-white.svg" alt="logo" className="h-6" />
      </Link>
      <ul className="hidden gap-8 text-sm text-[#B2B1B6] sm:flex lg:text-base ">
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
      <div className="hidden sm:block">
        <Link to={"/registration/signup"}>
          <Button size={"sm"}> Get Started</Button>
        </Link>
        <Link to={"/registration/login"}>
          <Button size={"sm"} variant="link" className="text-[#B2B1B6]">
            Login
          </Button>
        </Link>
      </div>

      <div className="sm:hidden">
        <FloatingNav />
      </div>
    </div>
  );
}
