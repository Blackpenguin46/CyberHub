import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import clsx from "clsx";

const mainNavItems = [
  {
    title: "Content",
    items: [
      {
        title: "YouTube Creators",
        href: "/youtube",
        description: "Educational cybersecurity channels",
      },
      {
        title: "CTF Platforms",
        href: "/ctf",
        description: "Capture The Flag competitions and platforms",
      },
      {
        title: "Blogs & News",
        href: "/blogs",
        description: "Security news and analysis",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Career Resources",
        href: "/career",
        description: "Career guidance and opportunities",
      },
      {
        title: "Learning Roadmaps",
        href: "/roadmaps",
        description: "Structured learning paths",
      },
      {
        title: "Tools & Software",
        href: "/tools",
        description: "Security tools and applications",
      },
    ],
  },
];

export function MainNav() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {mainNavItems.map((section) => (
          <NavigationMenuItem key={section.title}>
            <NavigationMenuTrigger>{section.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {section.items.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={clsx(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};


