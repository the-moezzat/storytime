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
  CreditCard,
  GearSix,
  Lifebuoy,
  Lightning,
  SignOut,
  User,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Navbar from "@/components/Navbar";
import Raw from "@/components/Row";
import { useMutation, useQueryClient } from "react-query";
import { logOut } from "@/services/apiAuth";
import useProfile from "@/hooks/useProfile";

function DashboardHeader() {
  const queryClient = useQueryClient();

  const { profile } = useProfile();

  const { mutate } = useMutation(logOut, {
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["user"] }).catch(() => {
        console.log("error");
      });
    },
  });

  return (
    <div className="flex h-16 items-center justify-between p-4 py-2 max-lg:h-14 max-lg:p-2 max-md:h-12">
      <img src="/logo-black.svg" alt="logo" className="h-6 max-md:h-5" />
      <Navbar />
      <div className="flex items-center gap-5 max-lg:gap-3">
        <div className="flex items-center gap-5 max-lg:gap-3">
          <Button
            size="sm"
            variant={"outline"}
            className="flex items-center gap-2 "
          >
            <Lightning weight="fill" />
            Upgrade
          </Button>
          <Raw variant="vertical" gap="4px">
            <p className="text-sm text-gray-6 max-lg:text-xs">
              {profile?.used_credit} / {profile?.credit} stories
            </p>
            <Progress
              value={
                ((profile?.used_credit as number) /
                  (profile?.credit as number)) *
                100
              }
              className="h-1.5"
            />
          </Raw>
        </div>
        <div className="flex items-center gap-3 max-lg:gap-2">
          <Button size={"icon"} variant={"ghost"} className="hover: text-xl">
            <Bell />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                {/* <AvatarImage src="" /> */}
                <AvatarFallback>
                  {profile?.first_name?.[0]}
                  {profile?.last_name?.[0]}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-3 w-56">
              <DropdownMenuLabel className="text-base text-gray-7">
                {profile?.first_name} {profile?.last_name}
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
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
