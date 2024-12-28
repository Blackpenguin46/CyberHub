import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Youtube, Users, Gamepad2, Shield } from 'lucide-react';

const YouTubeCreatorsPage = () => {
  const creators = {
    educational: [
      {
        name: "John Hammond",
        channel: "https://youtube.com/@_JohnHammond",
        description: "In-depth tutorials on cybersecurity concepts, malware analysis, and CTF walkthroughs.",
        topics: ["Malware Analysis", "CTF", "Python", "Security Tools"],
        subscribers: "1.2M+",
        level: "Intermediate"
      },
      {
        name: "David Bombal",
        channel: "https://youtube.com/@davidbombal",
        description: "Comprehensive networking, ethical hacking, and certification preparation content.",
        topics: ["Networking", "CCNA", "Ethical Hacking", "Linux"],
        subscribers: "2.3M+",
        level: "Beginner-Advanced"
      },
      {
        name: "NetworkChuck",
        channel: "https://youtube.com/@NetworkChuck",
        description: "Engaging content on networking, Linux, and cybersecurity fundamentals.",
        topics: ["Networking", "Linux", "Cloud", "Basic Hacking"],
        subscribers: "1.8M+",
        level: "Beginner"
      }
    ],
    technical: [
      {
        name: "LiveOverflow",
        channel: "https://youtube.com/@LiveOverflow",
        description: "Deep technical content on security research, exploitation, and bug bounty.",
        topics: ["Binary Exploitation", "Bug Bounty", "CTF", "Security Research"],
        subscribers: "500K+",
        level: "Advanced"
      },
      {
        name: "IppSec",
        channel: "https://youtube.com/@ippsec",
        description: "Detailed HackTheBox walkthroughs and penetration testing methodologies.",
        topics: ["HackTheBox", "Penetration Testing", "CTF", "Tools"],
        subscribers: "200K+",
        level: "Intermediate-Advanced"
      }
    ],
    news: [
      {
        name: "Hak5",
        channel: "https://youtube.com/@hak5",
        description: "Security news, hardware hacking, and tool demonstrations.",
        topics: ["Security News", "Hardware", "Tools", "Tutorials"],
        subscribers: "1M+",
        level: "All Levels"
      },
      {
        name: "Security Weekly",
        channel: "https://youtube.com/@SecurityWeekly",
        description: "Weekly security news, interviews with industry experts, and technical discussions.",
        topics: ["Industry News", "Interviews", "Technical Reviews"],
        subscribers: "100K+",
        level: "Professional"
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
          <Youtube className="h-8 w-8" />
          Cybersecurity YouTube Creators
        </h1>
        <p className="text-muted-foreground text-lg">
          Curated list of top cybersecurity content creators on YouTube, categorized by content type and expertise level.
        </p>
      </div>

      <Tabs defaultValue="educational" className="space-y-8">
        <TabsList className="grid w-full grid-cols-3 gap-4 h-auto">
          <TabsTrigger value="educational" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Educational
          </TabsTrigger>
          <TabsTrigger value="technical" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Technical
          </TabsTrigger>
          <TabsTrigger value="news" className="flex items-center gap-2">
            <Gamepad2 className="h-4 w-4" />
            News & Updates
          </TabsTrigger>
        </TabsList>

        {Object.entries(creators).map(([category, creatorList]) => (
          <TabsContent key={category} value={category} className="space-y-4">
            {creatorList.map((creator, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">{creator.name}</CardTitle>
                      <CardDescription className="text-sm">
                        Subscribers: {creator.subscribers}
                      </CardDescription>
                    </div>
                    <Badge>{creator.level}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{creator.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {creator.topics.map((topic, i) => (
                      <Badge key={i} variant="outline">{topic}</Badge>
                    ))}
                  </div>
                  <a
                    href={creator.channel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                  >
                    Visit Channel →
                  </a>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default YouTubeCreatorsPage;