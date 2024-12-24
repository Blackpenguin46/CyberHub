import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Book, Trophy, Users, Youtube, Newspaper, Briefcase } from 'lucide-react'
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Your Complete Cybersecurity Resource Hub
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                From beginner guides to expert tools, find everything you need to advance your cybersecurity journey.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/learning-paths">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/community/discord">Join Community</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Explore Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryCard
              icon={Book}
              title="Learning Paths"
              description="Structured roadmaps for different cybersecurity specializations"
              href="/learning-paths"
            />
            <CategoryCard
              icon={Trophy}
              title="CTF Platforms"
              description="Practice your skills with Capture The Flag challenges"
              href="/ctf-platforms"
            />
            <CategoryCard
              icon={Users}
              title="Discord Communities"
              description="Join active cybersecurity discussion groups"
              href="/community/discord"
            />
            <CategoryCard
              icon={Youtube}
              title="YouTube Creators"
              description="Learn from top cybersecurity content creators"
              href="/community/youtube"
            />
            <CategoryCard
              icon={Newspaper}
              title="Blogs & News"
              description="Stay updated with the latest in cybersecurity"
              href="/community/blogs"
            />
            <CategoryCard
              icon={Briefcase}
              title="Career Resources"
              description="Find jobs, internships, and educational opportunities"
              href="/careers/jobs"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function CategoryCard({
  icon: Icon,
  title,
  description,
  href,
}: {
  icon: any
  title: string
  description: string
  href: string
}) {
  return (
    <Card className="transition-all hover:shadow-lg">
      <Link href={href}>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Icon className="w-6 h-6 text-primary" />
            <CardTitle>{title}</CardTitle>
          </div>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="ghost" className="w-full">
            Explore {title}
          </Button>
        </CardContent>
      </Link>
    </Card>
  )
}

