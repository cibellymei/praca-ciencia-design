import { useState } from "react";
import { 
  Home, 
  MapPin, 
  Calendar, 
  FileText, 
  Info, 
  LogOut, 
  Building,
  Route,
  Eye,
  Shield,
  User,
  Bell,
  Settings,
  UserCheck
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "A Praça", url: "/about", icon: Building },
  { title: "Mapa Interativo", url: "/map", icon: MapPin },
  { title: "Tour Virtual", url: "/tour", icon: Eye },
  { title: "Agenda", url: "/schedule", icon: Calendar },
  { title: "Regras", url: "/rules", icon: Shield },
  { title: "Informações", url: "/info", icon: Info },
];

const accountItems = [
  { title: "Perfil", url: "/profile", icon: User },
  { title: "Notificações", url: "/notifications", icon: Bell },
  { title: "Dashboard", url: "/dashboard", icon: Settings },
  { title: "Login", url: "/login", icon: UserCheck },
];

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary/10 text-primary font-medium border-r-2 border-primary" 
      : "hover:bg-muted/50 text-muted-foreground hover:text-foreground";

  return (
    <Sidebar
      className={collapsed ? "w-16" : "w-64"}
      collapsible="icon"
    >
      <SidebarContent className="bg-background border-r border-border">
        <div className="p-4 sm:p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm sm:text-lg">PC</span>
            </div>
            {!collapsed && (
              <div>
                <h2 className="font-bold text-sm sm:text-lg text-foreground">Praça da</h2>
                <p className="text-xs sm:text-sm text-primary font-medium">Ciência</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup className="px-2 py-4">
          <SidebarGroupLabel className="px-4 text-muted-foreground text-xs uppercase tracking-wider">
            {!collapsed && "Menu Principal"}
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${getNavCls({ isActive: isActive(item.url) })}`}
                      end
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="px-2 py-4">
          <SidebarGroupLabel className="px-4 text-muted-foreground text-xs uppercase tracking-wider">
            {!collapsed && "Conta"}
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {accountItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${getNavCls({ isActive: isActive(item.url) })}`}
                      end
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto p-4 border-t border-border">
          <SidebarMenuButton asChild>
            <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200">
              <LogOut className="h-5 w-5 flex-shrink-0" />
              {!collapsed && <span>Sair</span>}
            </button>
          </SidebarMenuButton>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}