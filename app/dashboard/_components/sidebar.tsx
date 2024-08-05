import Link from 'next/link';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import {
  LayoutDashboard,
  Newspaper,
  Folders,
  CreditCard,
  Settings,
  User,
} from 'lucide-react';

export const DashboardSidebar = () => {
  return (
    // <div>
    //   <ul>
    //     <li className="ml-2 my-4">
    //       <Link href={'/dashboard/admin/country'}> Countries</Link>
    //     </li>
    //     <li>Plants</li>
    //     <li>Handling Unit Type</li>
    //     <li>Handling Unit</li>
    //     <li>Project</li>
    //     <li>Plant</li>
    //   </ul>
    // </div>
    <Command className="bg-secondary rounded-none">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <Link href="/"> Dashboard</Link>
          </CommandItem>
          <CommandItem>
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <Link href="/dashboard/admin/plants"> Plants</Link>
          </CommandItem>
          <CommandItem>
            <Newspaper className="mr-2 h-4 w-4" />
            <Link href="/dashboard/admin/handling-units"> Handling Unit</Link>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>User</span>
            <CommandShortcut> :☠️</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <Link href="/dashboard/admin/country"> Country</Link>
          </CommandItem>
          <CommandItem>
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <Link href="/dashboard/admin/handling-units"> Plant</Link>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};
