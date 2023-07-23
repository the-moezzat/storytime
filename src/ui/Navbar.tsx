import NavbarItem from "./NavbarItem";
import { Books, House } from "@phosphor-icons/react";

export default function Navbar() {
  return (
    <div className="flex items-center gap-1 rounded-lg bg-gray-1 p-1">
      <NavbarItem icon={<House />} title="Home" to="home" />
      <NavbarItem icon={<Books />} title="Library" to="dashboard" />
    </div>
  );
}