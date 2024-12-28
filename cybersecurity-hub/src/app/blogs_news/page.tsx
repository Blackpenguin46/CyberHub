import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Newspaper, Radio, Globe, BookOpen } from 'lucide-react';

export default function BlogsPage() {
  const resources = {
    news: [
      {
        title: "Krebs on Security",
        url: "https://krebsonsecurity.com",
        description: "In-depth investigative journalism covering cybercrime, privacy, and security breaches.",
        type: "Blog & News",
        frequency: "Weekly",
        topics: ["Cybercrime", "Investigations", "Privacy", "Data Breaches"]
      },
      {
        title: "The Hacker News",
        url: "https://thehackernews.com",
        description: "Latest cybersecurity news and analysis covering zero-days, malware, and cyber attacks.",
        type: "News Portal",
        frequency: "Daily",
        topics: ["Zero-days", "Malware", "Cyber Attacks", "Industry News"]
      }
    ],
    research: [
      {
        title: "Project Zero",
        url: "https://googleprojectzero.blogspot.com",
        description: "Google's security research blog focusing on zero-day vulnerabilities.",
        type: "Research Blog",
        frequency: "Monthly",
        topics: ["Vulnerability Research", "Zero-days", "Exploit Analysis"]
      }
    ],
    tutorials: [
      {
        title: "HackerSploit",
        url: "https://hackersploit.org",
        description: "Tutorials and guides for penetration testing and security tools.",
        type: "Educational",
        frequency: "Weekly",
        topics: ["Penetration Testing", "Tools", "Tutorials"]
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
          <Newspaper className="h-8 w-8" />
          Security Blogs & News
        </h1>
        <p className="text-muted-foreground text-lg">
          Stay updated with the latest cybersecurity news, research, and tutorials.
        </p>
      </div>

      <Tabs defaultValue="news" className="space-y-8">
        <TabsList className="grid w-full grid-cols-3 gap-4 h-auto">
          <TabsTrigger value="news" className="flex items-center gap-2">
            <Radio className="h-4 w-4" />
            News Sources
          </TabsTrigger>
          <TabsTrigger value="research" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            Research Blogs
          </TabsTrigger>
          <TabsTrigger value="tutorials" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Tutorials
          </TabsTrigger>
        </TabsList>

        {Object.entries(resources).map(([category, items]) => (
          <TabsContent key={category} value={category} className="space-y-4">
            {items.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">{item.title}</CardTitle>
                      <CardDescription>
                        {item.type} • Updated {item.frequency}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.topics.map((topic, i) => (
                      <Badge key={i} variant="outline">{topic}</Badge>
                    ))}
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                  >
                    Visit Site →
                  </a>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}