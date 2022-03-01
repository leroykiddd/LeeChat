import React from "react";
import Info from "src/pages/Info";

export interface IRouteItem {
  link: string;
  component: React.ComponentType;
  exact?: boolean;
}

export const enum RouteNamesEnum {
  INFO_PAGE = "/info",
}

export const publicRoutes: Array<IRouteItem> = [
  { link: RouteNamesEnum.INFO_PAGE, component: Info },
];

export const privateRoutes: Array<IRouteItem> = [];
