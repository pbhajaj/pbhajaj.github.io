import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Users,
  Zap,
  Database,
  Cloud,
  Sparkles,
  Server,
} from "lucide-react";

export const About = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "SQL", "C++", "C", "Java", "JavaScript", "Golang", "R", "CUDA"],
      icon: Code,
    },
    {
      title: "ML & Data Science",
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "NumPy", "Pandas", "CrewAI", "LangChain", "Hugging Face"],
      icon: Zap,
    },
    {
      title: "Generative AI & Agents",
      skills: ["Agentic AI", "RAG", "LLM Fine-tuning", "vLLM", "Gemini", "Llama", "Ollama", "Google AI Studio"],
      icon: Sparkles,
    },
    {
      title: "Cloud & Platforms",
      skills: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Kafka", "MLflow", "Streamlit", "React", "FastAPI"],
      icon: Cloud,
    },
    {
      title: "Data & Databases",
      skills: ["Spark", "Hadoop", "MySQL", "PostgreSQL", "MongoDB", "Redshift", "PL/SQL", "BigQuery"],
      icon: Database,
    },
    {
      title: "DevOps & Tooling",
      skills: ["Git", "Bash", "CI/CD", "Airflow", "EMR", "Docker Compose", "Grafana", "Linux"],
      icon: Server,
    },
  ];

  const highlights = [
    {
      icon: Code,
      title: "Agentic AI Systems",
      description:
        "Designed multi-LLM ensembles with early-exit routing that double recall for drug discovery while trimming API cost by ~50%.",
    },
    {
      icon: Sparkles,
      title: "Scientific ML Research",
      description:
        "Fine-tuned foundation models for cancer diagnosis, engineered PCA+SVM pipelines, and uncovered statistically significant biomarkers.",
    },
    {
      icon: Users,
      title: "Team Leadership",
      description:
        "Led cross-functional pods at LTIMindtree and Binghamton University, mentoring teammates while shipping production analytics.",
    },
    {
      icon: Zap,
      title: "Data Platforms",
      description:
        "Scaled Spark jobs, monitoring, and streaming pipelines that push 8M+ events/day with automated reporting and observability.",
    },
  ];

  const publications = [
    {
      title: "ClinSegAI: Post-processing framework for histopathology segmentation and radiomics preservation - Computers in Biology and Medicine",
      href: "https://link.springer.com/chapter/10.1007/978-981-16-7657-4_71",
    },
    {
      title: "Suspect Facial Image Generation using DCGAN - Springer",
      href: "https://link.springer.com/chapter/10.1007/978-981-16-7657-4_71",
    },
    {
      title:
        "Comprehensive Study of Failed Machine-Learning Applications Using a Novel 3C Approach - Taylor & Francis",
      href: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003133681-25/comprehensive-study-failed-machine-learning-applications-using-novel-3c-approach-neel-patel-prem-bhajaj-pratik-panchal-tanmai-prabhune-pankaj-sonawane-ramchandra-mangrulkar",
    },
    {
      title: "Virtual Chemistry Lab: Web-Based Simulation for Laboratory Experiments - IRJET",
      href: "https://www.irjet.net/archives/V7/i12/IRJET-V7I1284.pdf",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a Master's student in Computer Science at Binghamton University focused on AI for
            healthcare, finance, generative systems, and large-scale data platforms. I thrive at the nexus of
            research and product engineering, rapidly prototyping ideas, validating them with data,
            and deploying them to the cloud with strong MLOps practices.
          </p>
        </div>

        {/* Skills by Category */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-primary mb-8">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-lg">
                    <category.icon className="h-5 w-5 mr-2" style={{ color: '#bcd4e6' }} />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className="text-primary hover:bg-[#bcd4e6]/10"
                        style={{ borderColor: '#bcd4e6' }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div>
          <h3 className="text-2xl font-bold text-center text-primary mb-8">What I Bring</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <highlight.icon className="h-12 w-12 mx-auto mb-4" style={{ color: '#bcd4e6' }} />
                  <h4 className="font-semibold text-primary mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-primary mb-6">Publications</h3>
          <div className="bg-card border border-border rounded-3xl p-6 space-y-3">
            {publications.map((publication) => (
              <a
                key={publication.href}
                href={publication.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground text-center hover:text-primary transition-colors"
              >
                {publication.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
