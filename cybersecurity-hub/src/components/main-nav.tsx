import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from 'next/link';
import clsx from 'clsx'; // Import clsx

const resources = [
  {
    title: "Learning Paths",
    href: "/learning-paths",
    description: "Structured roadmaps for different cybersecurity career paths",
  },
  {
    title: "CTF Platforms",
    href: "/ctf-platforms",
    description: "Popular Capture The Flag platforms and upcoming competitions",
  },
  {
    title: "Tools & Labs",
    href: "/tools",
    description: "Essential cybersecurity tools and virtual labs",
  },
];

const community = [
  {
    title: "Discord Channels",
    href: "/community/discord",
    description: "Join active cybersecurity communities",
  },
  {
    title: "YouTube Creators",
    href: "/community/youtube",
    description: "Top cybersecurity content creators and channels",
  },
  {
    title: "Blogs & News",
    href: "/community/blogs",
    description: "Latest cybersecurity blogs, news, and updates",
  },
];

const careers = [
  {
    title: "Job Board",
    href: "/careers/jobs",
    description: "Cybersecurity job listings and opportunities",
  },
  {
    title: "Internships",
    href: "/careers/internships",
    description: "Find internships and entry-level positions",
  },
  {
    title: "Education",
    href: "/careers/education",
    description: "College programs and certifications",
  },
];

export function MainNav() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {resources.map((resource) => (
                <ListItem
                  key={resource.title}
                  title={resource.title}
                  href={resource.href}
                >
                  {resource.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Community</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {community.map((item) => (
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
        <NavigationMenuItem>
          <NavigationMenuTrigger>Careers</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {careers.map((item) => (
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
          className={clsx( // Replace cn with clsx
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

