import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Button } from "@/components/ui/button";
import { User, Bell, Menu } from "lucide-react";
import { ThemeToggle } from "../theme/ThemeToggle";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-3">
                <SidebarTrigger />
                <div className="hidden sm:block">
                  <h1 className="text-base sm:text-lg font-semibold text-foreground">
                    Praça da Ciência
                  </h1>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Explore, aprenda e descubra
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <ThemeToggle />
                
                <Button variant="ghost" size="icon" className="relative h-9 w-9">
                  <Bell className="h-4 w-4" />
                  <span className="absolute -top-1 -right-1 h-2 w-2 bg-primary rounded-full"></span>
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="rounded-full border-2 border-primary/20 hover:border-primary h-9 w-9"
                >
                  <User className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </header>
          
          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            <div className="container mx-auto px-4 py-4 sm:px-6 sm:py-6 max-w-7xl">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}