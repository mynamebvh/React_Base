// material icon
import AddIcon from "@mui/icons-material/Add";
import ShopIcon from "@mui/icons-material/Shop";
import ViewListIcon from "@mui/icons-material/ViewList";
import PeopleIcon from "@mui/icons-material/People";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssessmentIcon from "@mui/icons-material/Assessment";

// configs
import { PATH_NAME, DRAWER_MENU_LABEL } from "configs";

export const navBarCommon = [
  {
    subheader: "Application",
    items: [
      {
        title: "Report",
        href: PATH_NAME.DASHBOARD,
        icon: DashboardIcon,
        label: DRAWER_MENU_LABEL.DASHBOARD,
      },
      {
        title: "Playbackground",
        href: PATH_NAME.PLAY_BACKGROUND,
        icon: SportsEsportsIcon,
        label: DRAWER_MENU_LABEL.PLAY_BACKGROUND,
      },
    ],
  },
  {
    subheader: "Dashboard",
    items: [
      {
        title: "Product",
        icon: ShopIcon,
        href: PATH_NAME.PRODUCT,
        label: DRAWER_MENU_LABEL.PRODUCT,
        items: [
          {
            title: "Add Product",
            icon: AddIcon,
            href: PATH_NAME.PRODUCT_ADD,
            label: DRAWER_MENU_LABEL.PRODUCT_ADD,
          },
          {
            title: "List Product",
            icon: ViewListIcon,
            href: PATH_NAME.PRODUCT_LIST,
            label: DRAWER_MENU_LABEL.PRODUCT_LIST,
          },
        ],
      },
      {
        title: "Kanban",
        href: PATH_NAME.KANBAN,
        icon: AssessmentIcon,
        label: DRAWER_MENU_LABEL.KANBAN,
      },
    ],
  },
  {
    subheader: "Users",
    items: [
      {
        title: "Users",
        icon: PeopleIcon,
        href: PATH_NAME.USERS,
        label: DRAWER_MENU_LABEL.USERS,
      },
    ],
  },
];
