import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Target, Trophy, Book, Sword } from 'lucide-react';

const CTFPlatformsPage = () => {
  const platforms = {
    learning: [
      {
        name: "TryHackMe",
        url: "https://tryhackme.com",
        description: "Gamified platform with guided learning paths and hands-on labs for cybersecurity training.",
        features: [
          "Guided rooms",
          "Learning paths",
          "Virtual machines",
          "Beginner friendly"
        ],
        pricing: "Free tier available, Premium from $10/month",
        level: "Beginner-Intermediate",
        topics: ["Web Security", "Network Security", "Linux", "Forensics"]
      },
      {
        name: "Hack The Box",
        url: "https://hackthebox.com",
        description: "Advanced penetration testing labs and realistic scenarios for security professionals.",
        features: [
          "Active machines",
          "Retired machines",
          "Academy courses",
          "Pro labs"
        ],
        pricing: "Free tier available, Premium from $14/month",
        level: "Intermediate-Advanced",
        topics: ["Penetration Testing", "Web Exploitation", "Privilege Escalation", "Binary Exploitation"]
      }
    ],
    competitive: [
      {
        name: "CTFtime",
        url: "https://ctftime.org",
        description: "Directory of upcoming CTF competitions and team rankings worldwide.",
        features: [
          "Competition calendar",
          "Team rankings",
          "Event history",
          "Write-ups"
        ],
        pricing: "Free",
        level: "All Levels",
        topics: ["Various CTF Types", "Team Competition", "Global Rankings"]
      },
      {
        name: "picoCTF",
        url: "https://picoctf.org",
        description: "Free computer security education program with year-round CTF content.",
        features: [
          "Educational focus",
          "Permanent CTF",
          "Learning resources",
          "Practice problems"
        ],
        pricing: "Free",
        level: "Beginner",
        topics: ["Web Exploitation", "Cryptography", "Binary Exploitation", "Forensics"]
      }
    ],
    practice: [
      {
        name: "VulnHub",
        url: "https://vulnhub.com",
        description: "Collection of vulnerable virtual machines for practical cybersecurity training.",
        features: [
          "Downloadable VMs",
          "Various difficulty levels",
          "Community solutions",
          "Real-world scenarios"
        ],
        pricing: "Free",
        level: "Intermediate",
        topics: ["Penetration Testing", "Vulnerability Assessment", "Network Security"]
      },
      {
        name: "OverTheWire",
        url: "https://overthewire.org/wargames",
        description: "Security wargames for learning and practicing security concepts.",
        features: [
          "Progressive difficulty",
          "SSH-based games",
          "Multiple wargames",
          "Command line focus"
        ],
        pricing: "Free",
        level: "Beginner-Advanced",
        topics: ["Linux", "Command Line", "Basic Security", "Programming"]
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
          <Target className="h-8 w-8" />
          CTF Platforms & Training
        </h1>
        <p className="text-muted-foreground text-lg">
          Discover platforms for learning cybersecurity through Capture The Flag challenges and hands-on exercises.
        </p>
      </div>

      <Tabs defaultValue="learning" className="space-y-8">
        <TabsList className="grid w-full grid-cols-3 gap-4 h-auto">
          <TabsTrigger value="learning" className="flex items-center gap-2">
            <Book className="h-4 w-4" />
            Learning Platforms
          </TabsTrigger>
          <TabsTrigger value="competitive" className="flex items-center gap-2">
            <Trophy className="h-4 w-4" />
            Competitive CTFs
          </TabsTrigger>
          <TabsTrigger value="practice" className="flex items-center gap-2">
            <Sword className="h-4 w-4" />
            Practice Labs
          </TabsTrigger>
        </TabsList>

        {Object.entries(platforms).map(([category, platformList]) => (
          <TabsContent key={category} value={category} className="space-y-4">
            {platformList.map((platform, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">{platform.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {platform.pricing}
                      </CardDescription>
                    </div>
                    <Badge>{platform.level}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{platform.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {platform.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {platform.topics.map((topic, i) => (
                      <Badge key={i} variant="outline">{topic}</Badge>
                    ))}
                  </div>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                  >
                    Visit Platform →
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

export default CTFPlatformsPage;