"use client";

import type { ReactNode } from 'react';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarTrigger,
  SidebarContent,
  SidebarInset,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import ColorSettingsPanel from '@/components/color-settings-panel';
import { Palette, Settings, Github } from 'lucide-react';
import Link from 'next/link';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar collapsible="icon" className="border-r">
        <SidebarHeader className="p-4 items-center flex gap-2">
           <Palette className="h-7 w-7 text-primary" />
           <h1 className="font-headline text-xl font-semibold text-primary group-data-[collapsible=icon]:hidden">Chromatic Harmony</h1>
        </SidebarHeader>
        <SidebarContent className="p-0">
          <ColorSettingsPanel />
        </SidebarContent>
        <SidebarFooter className="p-4 mt-auto border-t">
            <p className="text-xs text-muted-foreground group-data-[collapsible=icon]:hidden">
                Adjust settings for optimal viewing experience.
            </p>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-md sm:px-6">
          <SidebarTrigger className="md:hidden" />
          <div className="flex items-center gap-4">
            {/* Future header content can go here, e.g. breadcrumbs or user menu */}
          </div>
           <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/FirebaseExtended/ai-prototyping-framework" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
        </header>
        <main className="flex-1 p-4 sm:p-6 md:p-8" id="content-wrapper">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
