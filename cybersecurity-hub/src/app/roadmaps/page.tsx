import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Map, Shield, Terminal, Network } from 'lucide-react';

export default function RoadmapsPage() {
  const roadmaps = {
    beginner: [
      {
        title: "Security Fundamentals",
        duration: "3-6 months",
        steps: [
          { name: "Networking Basics", resources: ["CompTIA Network+", "Cisco CCNA"] },
          { name: "Operating Systems", resources: ["Linux Essentials", "Windows Security"] },
          { name: "Security Concepts", resources: ["CompTIA Security+", "Cybersecurity Fundamentals"] },
          { name: "Programming Basics", resources: ["Python", "Bash Scripting"] }
        ],
        certifications: ["CompTIA Security+", "Network+"],
        tools: ["Wireshark", "Nmap", "Linux"]
      }
    ],
    offensive: [
      {
        title: "Penetration Testing Path",
        duration: "6-12 months",
        steps: [
          { name: "Web Security", resources: ["OWASP Top 10", "Web Security Academy"] },
          { name: "Network Pentesting", resources: ["HackTheBox", "VulnHub"] },
          { name: "Exploitation", resources: ["Metasploit", "Buffer Overflow"] },
          { name: "Report Writing", resources: ["Report Templates", "Documentation"] }
        ],
        certifications: ["CEH", "OSCP", "PNPT"],
        tools: ["Burp Suite", "Metasploit", "Nessus"]
      }
    ],
    defensive: [
      {
        title: "Security Operations Path",
        duration: "6-12 months",
        steps: [
          { name: "Security Operations", resources: ["SOC Fundamentals", "Incident Response"] },
          { name: "Threat Detection", resources: ["SIEM Tools", "Threat Hunting"] },
          { name: "Malware Analysis", resources: ["Static Analysis", "Dynamic Analysis"] },
          { name: "Incident Response", resources: ["IR Playbooks", "Forensics"] }
        ],
        certifications: ["GCIH", "GCIA", "CISSP"],
        tools: ["Splunk", "ELK Stack", "Volatility"]
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
          <Map className="h-8 w-8" />
          Learning Roadmaps
        </h1>
        <p className="text-muted-foreground text-lg">
          Structured learning paths to guide your cybersecurity journey.
        </p>
      </div>

      <Tabs defaultValue="beginner" className="space-y-8">
        <TabsList className="grid w-full grid-cols-3 gap-4 h-auto">
          <TabsTrigger value="beginner" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Fundamentals
          </TabsTrigger>
          <TabsTrigger value="offensive" className="flex items-center gap-2">
            <Terminal className="h-4 w-4" />
            Offensive Security
          </TabsTrigger>
          <TabsTrigger value="defensive" className="flex items-center gap-2">
            <Network className="h-4 w-4" />
            Defensive Security
          </TabsTrigger>
        </TabsList>

        {Object.entries(roadmaps).map(([category, paths]) => (
          <TabsContent key={category} value={category} className="space-y-6">
            {paths.map((path, index) => (
              <Card key={index} className="w-full">
                <CardHeader>
                  <CardTitle className="text-2xl">{path.title}</CardTitle>
                  <CardDescription>Estimated Duration: {path.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Learning Path:</h3>
                      <div className="space-y-4">
                        {path.steps.map((step, i) => (
                          <div key={i} className="border-l-2 border-primary pl-4 pb-4">
                            <h4 className="font-semibold mb-2">{i + 1}. {step.name}</h4>
                            <div className="flex flex-wrap gap-2">
                              {step.resources.map((resource, j) => (
                                <Badge key={j} variant="outline">{resource}</Badge>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Recommended Certifications:</h3>
                      <div className="flex flex-wrap gap-2">
                        {path.certifications.map((cert, i) => (
                          <Badge key={i} variant="secondary">{cert}</Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Essential Tools:</h3>
                      <div className="flex flex-wrap gap-2">
                        {path.tools.map((tool, i) => (
                          <Badge key={i}>{tool}</Badge>
                        ))}
                      </div>
                    </div>
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
