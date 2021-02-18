import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "dashboard",
    title: "Dashboard",
    icon: "icon-credit-card",
    class:""
  },
  // {
  //   path: "dashboard",
  //   title: "Dashboard",
  //   icon: "icon-chart-pie-36",
  //   class: ""
  // },
  {
    path: "depositar",
    title: "Depositar",
    icon: "icon-money-coins",
    class:""
  },
  {
    path: "pagar",
    title: "Pagar",
    icon: "icon-paper",
    class:""
  },
  {
    path: "transferir",
    title: "Transferir",
    icon: "icon-send",
    class:""
  },
  // {
  //   path: "perfil",
  //   title: "Perfil",
  //   icon: "icon-single-02",
  //   class: ""
  // },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
