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
    User,
    Settings,
    LogOut
} from 'lucide-react'

import { Button } from "../ui/button";
import Link from "next/link";
import { ProfileAvatar } from "./profileAvatar";


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



  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
        variant="destructive" 
        className="relative h-11 w-11 rounded-full px-0 py-0 bg-slate-400"
        >
            <ProfileAvatar
            profileImgUrl={user.profileImgUrl || 'undefined'}
            fullName={user.fullName}
            />
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
