import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tool, Shield, Terminal, Search, Bug, Lock } from 'lucide-react';

export default function ToolsPage() {
  const tools = {
    scanning: [
      {
        name: "Nmap",
        description: "Network discovery and security scanning tool",
        category: "Network Scanner",
        website: "https://nmap.org",
        features: ["Port Scanning", "OS Detection", "Script Engine", "Version Detection"],
        platforms: ["Windows", "Linux", "macOS"],
        pricing: "Free, Open Source"
      },
      {
        name: "Burp Suite",
        description: "Web vulnerability scanner and proxy tool",
        category: "Web Security",
        website: "https://portswigger.net/burp",
        features: ["Proxy", "Scanner", "Intruder", "Repeater"],
        platforms: ["Cross-platform"],
        pricing: "Community (Free), Professional"
      }
    ],
    forensics: [
      {
        name: "Volatility",
        description: "Memory forensics framework",
        category: "Memory Analysis",
        website: "https://www.volatilityfoundation.org",
        features: ["Memory Analysis", "Malware Detection", "Process Analysis"],
        platforms: ["Linux", "Windows"],
        pricing: "Free, Open Source"
      },
      {
        name: "Autopsy",
        description: "Digital forensics platform",
        category: "Disk Forensics",
        website: "https://www.autopsy.com",
        features: ["File Analysis", "Data Recovery", "Timeline Analysis"],
        platforms: ["Windows"],
        pricing: "Free"
      }
    ],
    defensive: [
      {
        name: "Snort",
        description: "Network intrusion detection system",
        category: "IDS/IPS",
        website: "https://www.snort.org",
        features: ["Traffic Analysis", "Packet Logging", "Real-time Alerting"],
        platforms: ["Cross-platform"],
        pricing: "Free, Open Source"
      },
      {
        name: "Wazuh",
        description: "Security monitoring and threat detection",
        category: "SIEM",
        website: "https://wazuh.com",
        features: ["Log Analysis", "File Integrity", "Compliance Monitoring"],
        platforms: ["Cross-platform"],
        pricing: "Free, Open Source"
      }
    ],
    offensive: [
      {
        name: "Metasploit",
        description: "Penetration testing framework",
        category: "Exploitation",
        website: "https://www.metasploit.com",
        features: ["Exploit Development", "Payload Generation", "Post Exploitation"],
        platforms: ["Cross-platform"],
        pricing: "Community (Free), Pro"
      },
      {
        name: "Hashcat",
        description: "Advanced password recovery tool",
        category: "Password Cracking",
        website: "https://hashcat.net",
        features: ["Hash Cracking", "Rule-based Attack", "Mask Attack"],
        platforms: ["Cross-platform"],
        pricing: "Free, Open Source"
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
          <Tool className="h-8 w-8" />
          Security Tools
        </h1>
        <p className="text-muted-foreground text-lg">
          Essential tools and software for cybersecurity professionals.
        </p>
      </div>

      <Tabs defaultValue="scanning" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-4 h-auto">
          <TabsTrigger value="scanning" className="flex items-center gap-2">
            <Search className="h-4 w-4" />
            Scanning & Recon
          </TabsTrigger>
          <TabsTrigger value="forensics" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Forensics
          </TabsTrigger>
          <TabsTrigger value="defensive" className="flex items-center gap-2">
            <Lock className="h-4 w-4" />
            Defensive
          </TabsTrigger>
          <TabsTrigger value="offensive" className="flex items-center gap-2">
            <Bug className="h-4 w-4" />
            Offensive
          </TabsTrigger>
        </TabsList>

        {Object.entries(tools).map(([category, toolsList]) => (
          <TabsContent key={category} value={category} className="space-y-4">
            {toolsList.map((tool, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">{tool.name}</CardTitle>
                      <CardDescription>{tool.category} • {tool.pricing}</CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tool.platforms.map((platform, i) => (
                        <Badge key={i} variant="outline">{platform}</Badge>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{tool.description}</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {tool.features.map((feature, i) => (
                          <Badge key={i}>{feature}</Badge>
                        ))}
                      </div>
                    </div>
                    <a
                      href={tool.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                    >
                      Visit Website →
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}