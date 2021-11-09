import {CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon} from "@heroicons/react/outline";

export const navigation = [
    { name: 'Dashboard', icon: HomeIcon, href: '#', current: true },
    { name: 'Test Types', icon: UsersIcon, href: '#', count: 3, current: false },
    { name: 'History', icon: FolderIcon, href: '#', count: 4, current: false },
    { name: 'Calendar', icon: CalendarIcon, href: '#', current: false },
    { name: 'Billing', icon: InboxIcon, href: '#', current: false },
    { name: 'Reports', icon: ChartBarIcon, href: '#', count: 12, current: false },
]
