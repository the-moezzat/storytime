import { Bell, Lightning } from "@phosphor-icons/react";
import { Button } from "../../ui/button";
import { Progress } from "../../ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import Navbar from "../../ui/Navbar";
import Raw from "../../ui/Row";

function DashboardHeader() {
  return (
    <div className="flex items-center justify-between p-4">
      <img src="/logo.svg" alt="logo" className="h-10" />
      <Navbar />
      <Raw gap="18px">
        <Raw gap="12px">
          <Raw variant="vertical" gap="4px">
            <p className="text-base text-gray-6">6 / 10 stories</p>
            <Progress value={60} />
          </Raw>
          <Button className="flex items-center gap-2 bg-blue-6 text-white hover:bg-blue-7">
            <Lightning weight="fill" />
            Upgrade
          </Button>
        </Raw>
        <Raw gap="12px">
          <Button size={"icon"} variant={"ghost"}>
            <Bell size={24} color="#343a40" />
          </Button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Raw>
      </Raw>
    </div>
  );
}

export default DashboardHeader;
