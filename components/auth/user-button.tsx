'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FaUser } from 'react-icons/fa';
import { LogOut } from 'lucide-react';
import { useCurrentUser } from '@/hooks/use-current-user';
import { LogoutButton } from './logout-button';
import { logout } from '@/actions/logout';

export const UserButton = () => {
  const user = useCurrentUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex flex-col items-start m-8">
          <div className="flex flex-row justify-center items-center gap-2 capitalize">
            <Avatar>
              <AvatarImage src={user?.image || undefined} />
              <AvatarFallback
                className={user ? 'bg-emerald-300' : 'bg-destructive'}
              >
                {' '}
                <FaUser className="text-white" />
              </AvatarFallback>
            </Avatar>
            <span>{user?.name} </span>
          </div>
          <div className="text-sm text-muted-foreground">{user?.email}</div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='"w-40 align-end'>
        <LogoutButton>
          <DropdownMenuItem>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
