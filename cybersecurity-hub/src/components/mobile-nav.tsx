"use client"

import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"
import { useState } from "react"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
          <div className="flex flex-col space-y-4">
            <Link
              href="/learning-paths"
              className="text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              Learning Paths
            </Link>
            <Link
              href="/ctf-platforms"
              className="text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              CTF Platforms
            </Link>
            <Link
              href="/tools"
              className="text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              Tools & Labs
            </Link>
            <Link
              href="/community/discord"
              className="text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              Discord Channels
            </Link>
            <Link
              href="/community/youtube"
              className="text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              YouTube Creators
            </Link>
            <Link
              href="/community/blogs"
              className="text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              Blogs & News
            </Link>
            <Link
              href="/careers/jobs"
              className="text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              Job Board
            </Link>
            <Link
              href="/careers/internships"
              className="text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              Internships
            </Link>
            <Link
              href="/careers/education"
              className="text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              Education
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

