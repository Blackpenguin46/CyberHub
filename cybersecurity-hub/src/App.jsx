import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Youtube, MessageSquare, Trophy, Briefcase, GraduationCap, Map, Terminal, Shield, Code, Network } from 'lucide-react';

const ResourceCard = ({ title, icon: Icon, items }) => (
  <Card className="w-full mb-4 bg-gray-900 border-cyan-500 border hover:border-cyan-400 transition-all">
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-cyan-400">
        {Icon && <Icon className="w-5 h-5" />}
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 cursor-pointer transition-colors">
            <span className="text-sm">{'>'}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const App = () => {
  const resources = {
    learning: [
      {
        title: "Offensive Security",
        icon: Terminal,
        items: [
          "TryHackMe - Interactive cybersecurity labs ($10/month)",
          "HackTheBox - Advanced penetration testing platforms",
          "PortSwigger Web Security Academy - Free web security training",
          "PicoCTF - Free beginner-friendly CTF platform",
          "VulnHub - Downloadable vulnerable virtual machines"
        ]
      },
      {
        title: "Defensive Security",
        icon: Shield,
        items: [
          "LetsDefend - Blue team training platform",
          "BlueTeamLabs - Defensive security challenges",
          "Malware Traffic Analysis - Network security exercises",
          "Any.Run - Interactive malware analysis",
          "MITRE ATT&CK Framework - Threat intelligence resources"
        ]
      },
      {
        title: "YouTube Channels",
        icon: Youtube,
        items: [
          "John Hammond - Malware analysis & CTF walkthroughs",
          "IppSec - Detailed HackTheBox solutions",
          "LiveOverflow - Advanced security research",
          "David Bombal - Networking & security fundamentals",
          "NetworkChuck - Beginner-friendly cybersecurity content"
        ]
      }
    ],
    community: [
      {
        title: "Discord Communities",
        icon: MessageSquare,
        items: [
          "Hack The Box Official - 500k+ members",
          "TryHackMe Official - 300k+ members",
          "The Cyber Mentor - Premium training community",
          "InfoSec Prep - Career focused discussions",
          "Bug Bounty Hunter - Bug bounty community"
        ]
      },
      {
        title: "Technical Blogs",
        icon: Code,
        items: [
          "PortSwigger Research - Web security research",
          "Project Zero - Google's security research",
          "HackerOne Hacktivity - Public bug bounty reports",
          "Krebs on Security - Cybersecurity news",
          "The Hacker News - Latest security updates"
        ]
      },
      {
        title: "Practice Platforms",
        icon: Trophy,
        items: [
          "CTFtime - CTF competition calendar",
          "HackerOne - Bug bounty platform",
          "BugCrowd - Crowdsourced security testing",
          "Root-Me - Security challenges",
          "OverTheWire - Security wargames"
        ]
      }
    ],
    career: [
      {
        title: "Career Paths",
        icon: Map,
        items: [
          "Security Analyst - Blue team operations",
          "Penetration Tester - Red team operations",
          "Incident Response - Security incidents handling",
          "Malware Analyst - Malicious code analysis",
          "Security Engineer - Security infrastructure"
        ]
      },
      {
        title: "Certifications",
        icon: GraduationCap,
        items: [
          "CompTIA Security+ - Entry level security cert",
          "CEH - Certified Ethical Hacker",
          "OSCP - Offensive Security Certified Professional",
          "CISSP - Advanced security management",
          "SANS GIAC - Specialized technical certs"
        ]
      },
      {
        title: "Job Resources",
        icon: Briefcase,
        items: [
          "LinkedIn Security Jobs",
          "CyberSecJobs.com",
          "Dice.com - Tech focused jobs",
          "ClearanceJobs - Government security positions",
          "InfoSec Professional Network"
        ]
      }
    ],
    tools: [
      {
        title: "Network Security",
        icon: Network,
        items: [
          "Wireshark - Network packet analyzer",
          "Nmap - Network scanning tool",
          "Burp Suite - Web security testing",
          "Metasploit - Penetration testing framework",
          "Snort - Intrusion detection system"
        ]
      },
      {
        title: "Forensics Tools",
        icon: Shield,
        items: [
          "Autopsy - Digital forensics platform",
          "Volatility - Memory analysis framework",
          "FTK Imager - Disk imaging tool",
          "KAPE - Rapid triage tool",
          "NetworkMiner - Network forensics"
        ]
      }
    ]
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-950 min-h-screen text-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-cyan-400">&lt;CyberSecurity Resource Hub/&gt;</h1>
        <p className="text-gray-400">Your comprehensive guide to cybersecurity learning and career development</p>
      </div>
      
      <Tabs defaultValue="learning" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-gray-800">
          {Object.keys(resources).map(tab => (
            <TabsTrigger 
              key={tab} 
              value={tab}
              className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white"
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(resources).map(([tab, content]) => (
          <TabsContent key={tab} value={tab} className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.map((section, index) => (
                <ResourceCard key={index} {...section} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default App;