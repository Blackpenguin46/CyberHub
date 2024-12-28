import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Briefcase, GraduationCap, Search, Award } from 'lucide-react';

export default function CareerPage() {
  const careerResources = {
    paths: [
      {
        title: "Security Analyst",
        description: "Monitor and protect organizational assets from cyber threats.",
        requirements: ["Bachelor's Degree", "Security+", "CISSP"],
        skills: ["Threat Detection", "SIEM", "Incident Response"],
        salary: "$65,000 - $120,000",
        experience: "Entry Level to Mid-Senior"
      },
      {
        title: "Penetration Tester",
        description: "Identify and exploit security vulnerabilities in systems.",
        requirements: ["CEH", "OSCP", "Programming Skills"],
        skills: ["Network Security", "Web Security", "Social Engineering"],
        salary: "$80,000 - $150,000",
        experience: "Mid-Level to Senior"
      }
    ],
    certifications: [
      {
        title: "CompTIA Security+",
        provider: "CompTIA",
        description: "Foundation-level security certification covering essential concepts.",
        level: "Entry Level",
        cost: "$370",
        duration: "90 days prep recommended"
      },
      {
        title: "Certified Ethical Hacker (CEH)",
        provider: "EC-Council",
        description: "Learn ethical hacking methodology and techniques.",
        level: "Intermediate",
        cost: "$950-$1,199",
        duration: "6 months prep recommended"
      }
    ],
    resources: [
      {
        title: "SANS Career Resources",
        url: "https://www.sans.org/cybersecurity-careers/",
        description: "Comprehensive career guidance and resources from SANS Institute.",
        type: "Career Portal",
        offerings: ["Job Board", "Career Planning", "Training"]
      },
      {
        title: "ISC2 Career Center",
        url: "https://www.isc2.org/career-center",
        description: "Career development resources for security professionals.",
        type: "Professional Development",
        offerings: ["Mentorship", "Job Search", "Resume Help"]
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
          <Briefcase className="h-8 w-8" />
          Cybersecurity Careers
        </h1>
        <p className="text-muted-foreground text-lg">
          Explore cybersecurity career paths, certifications, and professional resources.
        </p>
      </div>

      <Tabs defaultValue="paths" className="space-y-8">
        <TabsList className="grid w-full grid-cols-3 gap-4 h-auto">
          <TabsTrigger value="paths" className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            Career Paths
          </TabsTrigger>
          <TabsTrigger value="certifications" className="flex items-center gap-2">
            <Award className="h-4 w-4" />
            Certifications
          </TabsTrigger>
          <TabsTrigger value="resources" className="flex items-center gap-2">
            <Search className="h-4 w-4" />
            Resources
          </TabsTrigger>
        </TabsList>

        <TabsContent value="paths">
          <div className="grid gap-4">
            {careerResources.paths.map((path, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-2xl">{path.title}</CardTitle>
                  <CardDescription>{path.salary} • {path.experience}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{path.description}</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {path.requirements.map((req, i) => (
                          <Badge key={i} variant="outline">{req}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Key Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {path.skills.map((skill, i) => (
                          <Badge key={i}>{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="certifications">
          <div className="grid gap-4">
            {careerResources.certifications.map((cert, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">{cert.title}</CardTitle>
                      <CardDescription>{cert.provider}</CardDescription>
                    </div>
                    <Badge>{cert.level}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{cert.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold">Cost:</h4>
                      <p>{cert.cost}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Duration:</h4>
                      <p>{cert.duration}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="resources">
          <div className="grid gap-4">
            {careerResources.resources.map((resource, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-2xl">{resource.title}</CardTitle>
                  <CardDescription>{resource.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{resource.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.offerings.map((offering, i) => (
                      <Badge key={i} variant="outline">{offering}</Badge>
                    ))}
                  </div>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                  >
                    Visit Resource →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}