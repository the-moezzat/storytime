/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Bell,
  Lightning,
  CreditCard,
  Lifebuoy,
  SignOut,
  User,
  GearSix,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Navbar from "@/components/Navbar";
import Raw from "@/components/Row";
import { useMutation, useQueryClient } from "react-query";
import { logOut } from "@/services/apiAuth";
import { useNavigate } from "react-router-dom";

function DashboardHeader() {
  const {
    user_metadata: { firstName, lastName },
  }: { user_metadata: { firstName: string; lastName: string } } =
    useQueryClient().getQueryData(["user"]);

  const navigate = useNavigate();

  const { mutate, error, data, isLoading } = useMutation(logOut, {
    onSuccess() {
      navigate("/registration");
    },
  });

  console.log("Loading:", isLoading);
  console.log("data:", data);
  console.log("error:", error);

  // const { firstName, lastName } = user.user_metadata;
  return (
    <div className="flex h-16 items-center justify-between p-4 py-2">
      <img src="/logo.svg" alt="logo" className="h-8" />
      <Navbar />
      <Raw gap="18px">
        <Raw gap="18px">
          <Raw variant="vertical" gap="4px">
            <p className="text-sm text-gray-6">6 / 10 stories</p>
            <Progress value={60} />
          </Raw>
          <Button
            size="sm"
            className="flex items-center gap-2 bg-blue-6 text-white hover:bg-blue-7"
          >
            <Lightning weight="fill" />
            Upgrade
          </Button>
        </Raw>
        <Raw gap="12px">
          <Button size={"icon"} variant={"ghost"}>
            <Bell size={20} color="#343a40" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                {/* <AvatarImage src="" /> */}
                <AvatarFallback>
                  {firstName[0]}
                  {lastName[0]}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-3 w-56">
              <DropdownMenuLabel className="text-base text-gray-7">
                {firstName} {lastName}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem className="space-x-2 text-base text-gray-8">
                  <User />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="space-x-2 text-base text-gray-8">
                  <CreditCard />
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="space-x-2 text-base text-gray-8">
                  <GearSix />
                  <span>Settings</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="space-x-2 text-base text-gray-8">
                <Lifebuoy />
                <span>Support</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="space-x-2 text-base text-red-7 focus:bg-red-1 focus:text-red-8 "
                onClick={() => {
                  mutate();
                }}
              >
                <SignOut />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Raw>
      </Raw>
    </div>
  );
}

export default DashboardHeader;
