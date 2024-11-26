import { ReactElement } from "react";

export interface GlobalLayoutProps {
  sidBarOptions: SidBarOptions;
  headerOptions: HeaderOptions;
  mainContent: ReactElement;
}

interface SidBarOptions {
  sideBarSections: SideBarSection[];
  isShowPoweredBy?: boolean;
}

interface SideBarSection {
  sectionName: string;
  items: SideBarItem[];
}

interface SideBarItem {
  caption: string;
  icon: ReactElement;
  path?: string;
  items?: SideBarItem[];
}

interface HeaderOptions {
  logo: ReactElement;
  title: string;
  isShowDate: boolean;
  menuOptions: MenuOptions[];
}

interface MenuOptions {
  logo: ReactElement;
  title: string;
  onClick: () => void;
}
