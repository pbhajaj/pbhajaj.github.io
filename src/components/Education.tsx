import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Binghamton University – SUNY",
      location: "Binghamton, NY",
      duration: "Jan 2024 - May 2025",
      gpa: "3.92/4.00",
      coursework: [
        "Deep Learning",
        "Natural Language Processing",
        "Machine Learning",
        "Social Media Data Science Pipeline",
        "Statistics",
        "Advanced Data Structures & Algorithms",
      ],
    },
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      school: "D. J. Sanghvi College of Engineering, University of Mumbai",
      location: "Mumbai, India",
      duration: "Aug 2018 - May 2021",
      gpa: "3.86/4.00",
      coursework: [
        "Algorithms & Data Structures",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Cloud Computing",
        "Software Engineering",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="py-20"
      style={{ backgroundColor: "#bcd4e6" }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Rigorous grounding in AI, data science, and systems engineering.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="bg-white/90 backdrop-blur-sm border-white/20 shadow-lg"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="h-6 w-6 text-[#bcd4e6]" />
                    <div>
                      <CardTitle className="text-xl text-primary">
                        {edu.degree}
                      </CardTitle>
                      <p className="text-lg font-semibold text-muted-foreground mt-1">
                        {edu.school}
                      </p>
                    </div>
                  </div>
                  {edu.gpa && (
                    <Badge className="bg-[#bcd4e6]/20 text-primary">
                      GPA: {edu.gpa}
                    </Badge>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-[#bcd4e6]" />
                    {edu.duration}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-[#bcd4e6]" />
                    {edu.location}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div>
                  <h4 className="font-semibold text-primary mb-3">
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <Badge
                        key={course}
                        variant="outline"
                        className="border-[#bcd4e6] text-primary hover:bg-[#bcd4e6]/10"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
