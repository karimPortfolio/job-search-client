import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Avatar,
  AvatarFallback,
  AvatarImage 
} from "@/components/ui/avatar"

import {
    User,
    Settings,
    LogOut
} from 'lucide-react'

import { Button } from "../ui/button";
import Link from "next/link";


//interfaces
interface Props {
  user: {
    id: string;
    fullName: string;
    email: string;
    profileImgUrl?: string;
  };
  handleLogout: () => void;
}

const NavbarAuthDropdown = ({
    user,
    handleLogout 
}: Props) => {

  const userNameArr = user.fullName?.split(' ');
  const firstNameLetter = userNameArr[0][0];
  const lastNameLetter = userNameArr[userNameArr.length - 1][0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
        variant="destructive" 
        className="relative h-11 w-11 rounded-full px-0 py-0 bg-slate-400"
        >
            <Avatar className="h-11 w-11">
                <AvatarImage src={user.profileImgUrl} alt="user profile image" />
                <AvatarFallback className="bg-blue-500">{firstNameLetter+lastNameLetter}</AvatarFallback>
            </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none"> {user.fullName} </p>
            <p className="text-xs leading-none text-muted-foreground">
                {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
            <Link href="/profile">
                <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
            </Link>
            <Link href="/settings">
                <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
            </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="w-full" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
        
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavbarAuthDropdown;
