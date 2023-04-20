import GroupsIcon from "@mui/icons-material/Groups";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PollIcon from "@mui/icons-material/Poll";
import DraftsIcon from "@mui/icons-material/Drafts";
import InboxIcon from "@mui/icons-material/Inbox";
export const MenuNavigation = [
  { name: "Home", icon: PollIcon, href: "/" },
  { name: "Cargar licencias", icon: CalendarTodayIcon, href: "/licenses" },
  { name: "Administrar usuarios", icon: GroupsIcon, href: "/EnabledUser" },
  {
    name: "Mantenimientos de calendario",
    icon: CalendarTodayIcon,
    href: "/CalendarH",
  },
];
export const MenuNotification = [
  { name: "Nueva aprobacion pendiente", href: "/", icon: DraftsIcon },
  { name: "Nuevo feriado agregado", href: "#", icon: InboxIcon },
  { name: "Nuevo feriado agregado", href: "#", icon: InboxIcon },
  { name: "Nuevo feriado agregado", href: "#", icon: InboxIcon },
];
