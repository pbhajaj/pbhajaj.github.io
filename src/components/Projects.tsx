import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
};

export const Projects = () => {
  const projects: Project[] = [
    {
      title: "Voice-Driven Stock Trading Agent",
      description:
      "Real-time voice-driven agent that uses Gemini 2.5 Flash tool calling to handle stock price queries and simulated trades through a streaming Speech-to-Text -> LLM -> Text-to-Speech pipeline.",
      technologies: ["LangChain", "LangGraph", "Gemini", "FastAPI", "Python"],
      github: "https://github.com/prembhajaj/Voice-Driven-Stock-Trading-Agent",
      features: [
      "Built a voice-based agent that performs stock price lookups and executes simulated trades with ~3-second response time.",
      "Tuned prompts for voice-friendly responses, reducing average output length by 40% and removing non-verbal characters.",
      "Implemented streaming audio I/O to enable low-latency, conversational interactions.",
      ],
    },
    {
      title: "Survival Prognosis Assistant - TCGA Lung Cancer",
      description:
        "Agentic AI copilot where Gemini-powered tools analyze TCGA clinical, genomic, and imaging data to answer clinician prompts with actionable survival guidance.",
      technologies: ["CrewAI", "LangChain", "Gemini APIs", "Agentic AI", "Python", "FastAPI"],
      github: "https://github.com/prembhajaj/Survival-Prognosis-Assistant",
      features: [
        "Tool-calling workflow selects the right analytic path per prompt to reach 95% accuracy on retrospective cases.",
        "Prompt engineering plus caching and tool composition lowered token consumption and API cost by 65%.",
        "Produces clinician-ready narratives that cite the underlying TCGA evidence used for each recommendation.",
      ],
    },
    {
      title: "Cell Segmentation & Classification Pipeline",
      description:
        "Distributed PyTorch system combining UNet++ variants to accelerate digital pathology workflows for large tissue slides.",
      technologies: ["UNet++", "PyTorch", "CUDA", "Distributed Training", "Computer Vision"],
      github: "https://github.com/prembhajaj/Cell-Segmentation-And-Classification-Pipeline",
      features: [
        "Ensembled three segmentation backbones to lift mean IoU from 0.68 to 0.83 on curated tissue datasets.",
        "Engineered sliding-window inference and GPU-aware scheduling that cut slide processing from 50 hours to 6 hours.",
        "Packaged the pipeline with reproducible configs so researchers can swap datasets or model weights quickly.",
      ],
    },
    {
      title: "Social Media Sentiment Analysis - Reddit & 4chan",
      description:
        "End-to-end NLP pipeline built with Spark NLP to flag 20K+ toxic finance posts with  an interactive real-time dashboard, with 4 intuitive filters",
      technologies: ["Spark NLP", "AWS Fargate", "ECS", "Big Data", "Python"],
      github: "https://github.com/prembhajaj/Social-Media-Sentiment-Analysis",
      features: [
        "Streamlined ingestion from Reddit and 4chan plus cleaning utilities for noisy social data.",
        "Utilized Spark NLP model to flag toxic content reaching an F1 score of 0.89.",
        "Productionized via EMR with job orchestration so analysts can refresh predictions on-demand.",
        "Built an interactive dashboardwith real-time sentiment visualizations and filtering options.",
      ],
    },
  ];

  const useTwoColumnDesktop = projects.length === 4;

  return (
    <section
      id="projects"
      className="py-20"
      style={{ backgroundColor: "#bcd4e6" }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Applied research and product builds that translate AI concepts into measurable outcomes.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8${
            useTwoColumnDesktop ? " xl:grid-cols-2" : " xl:grid-cols-3"
          }`}
        >
          {projects.map((project) => (
            <Card
              key={project.title}
              className="bg-card border-border hover:shadow-lg transition-shadow h-full flex flex-col"
            >
              <CardHeader>
                <CardTitle className="text-xl text-primary mb-2">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Key Highlights</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="text-[#bcd4e6] mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-primary hover:bg-[#bcd4e6]/10"
                        style={{ borderColor: "#bcd4e6" }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {(project.github || project.demo) && (
                  <div className="mt-auto flex flex-wrap gap-3">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 min-w-[120px]"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        variant="secondary"
                        size="sm"
                        className="flex-1 min-w-[120px]"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
