import { Button } from "@/components/ui/button";

export default function NavContent() {
  return (
    <>
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
        <Button size={"sm"}> Get Started</Button>
        <Button size={"sm"} variant="link" className="text-[#B2B1B6]">
          Login
        </Button>
      </div>
    </>
  );
}
