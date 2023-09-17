import NavbarItem from "./NavbarItem";
import { Globe, House } from "@phosphor-icons/react";

export default function Navbar() {
  return (
    <div className="flex items-center gap-1 rounded-lg bg-gray-1 p-1 max-lg:gap-0.5 max-lg:rounded-md max-lg:p-1">
      <NavbarItem icon={<House />} title="Home" to="home" />
      <NavbarItem icon={<Globe />} title="Community" to="community" />
    </div>
  );
}
