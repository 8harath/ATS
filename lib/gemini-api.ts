export async function enhanceResumeWithGemini(
  resumeText: string,
  careerLevel: string,
): Promise<{ enhancedContent: any; suggestions: string[] }> {
  try {
    // Simulated delay to mimic API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Generate career-specific suggestions
    const suggestions = generateSuggestions(careerLevel)

    // Mock enhanced content
    const enhancedContent = {
      contact_info: {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "(555) 123-4567",
        location: "New York, NY",
        linkedin: "linkedin.com/in/johndoe",
      },
      professional_summary: getSummaryByLevel(careerLevel),
      work_experience: getExperienceByLevel(careerLevel),
      education: [
        {
          degree: "Bachelor of Science in Computer Science",
          school: "University of Technology",
          year: "2018",
        },
      ],
      skills: getSkillsByLevel(careerLevel),
      certifications: getCertificationsByLevel(careerLevel),
    }

    return { enhancedContent, suggestions }
  } catch (error) {
    console.error("Error enhancing resume with Gemini:", error)
    throw new Error("Failed to enhance resume content")
  }
}

function generateSuggestions(careerLevel: string): string[] {
  const baseSuggestions = [
    "Add quantifiable achievements with specific numbers and percentages",
    "Include relevant keywords from your target job descriptions",
    "Use strong action verbs to start each bullet point",
  ]

  switch (careerLevel) {
    case "entry":
      return [
        ...baseSuggestions,
        "Consider adding relevant coursework, projects, or internships",
        "Highlight transferable skills from part-time jobs or volunteer work",
        "Include any coding bootcamps, online certifications, or self-taught skills",
        "Add a portfolio section with links to your projects on GitHub",
      ]
    case "mid":
      return [
        ...baseSuggestions,
        "Emphasize leadership experience and team collaboration",
        "Include metrics showing your impact on business outcomes",
        "Add any mentoring or training experience you've provided",
        "Consider adding a 'Key Projects' section highlighting major accomplishments",
      ]
    case "expert":
      return [
        ...baseSuggestions,
        "Focus on strategic initiatives and high-level decision making",
        "Include speaking engagements, publications, or industry recognition",
        "Highlight your role in scaling teams or organizations",
        "Add board positions, advisory roles, or industry committee participation",
        "Consider a separate 'Notable Achievements' section for major milestones",
      ]
    default:
      return baseSuggestions
  }
}

function getSummaryByLevel(careerLevel: string): string {
  switch (careerLevel) {
    case "entry":
      return "Motivated software developer with strong foundation in modern web technologies and passion for creating efficient, user-focused applications. Recent graduate with hands-on experience in React, Node.js, and cloud platforms through academic projects and internships."
    case "mid":
      return "Results-driven software engineer with 5+ years of experience developing scalable web applications. Specialized in React, Node.js, and cloud infrastructure with a track record of improving application performance by 40% and leading cross-functional teams."
    case "expert":
      return "Senior technology leader with 10+ years of experience architecting enterprise-scale solutions and leading high-performing engineering teams. Proven track record of driving digital transformation initiatives, scaling organizations from startup to IPO, and delivering products used by millions of users."
    default:
      return "Experienced software professional with expertise in full-stack development and modern web technologies."
  }
}

function getExperienceByLevel(careerLevel: string): any[] {
  const baseExperience = [
    {
      job_title: "Software Engineer",
      company: "Tech Solutions Inc.",
      dates: "2020 - Present",
      achievements: [
        "Developed RESTful APIs processing 1M+ daily requests with 99.9% uptime",
        "Reduced application load time by 35% through code optimization",
        "Collaborated with cross-functional teams to deliver features on schedule",
      ],
    },
  ]

  switch (careerLevel) {
    case "entry":
      return [
        {
          job_title: "Junior Software Developer",
          company: "StartupCo",
          dates: "2022 - Present",
          achievements: [
            "Built responsive web applications using React and TypeScript",
            "Contributed to 15+ feature releases in agile development environment",
            "Improved code quality by implementing automated testing with 85% coverage",
          ],
        },
        {
          job_title: "Software Development Intern",
          company: "Tech Innovations",
          dates: "Summer 2021",
          achievements: [
            "Developed internal tools that reduced manual processes by 30%",
            "Learned modern development practices including Git workflow and CI/CD",
            "Presented final project to executive team and received outstanding evaluation",
          ],
        },
      ]
    case "expert":
      return [
        {
          job_title: "VP of Engineering",
          company: "Enterprise Corp",
          dates: "2020 - Present",
          achievements: [
            "Led engineering organization of 50+ developers across 8 product teams",
            "Architected microservices platform serving 10M+ users with 99.99% uptime",
            "Drove technical strategy resulting in $5M annual cost savings through cloud optimization",
            "Established engineering culture and practices that reduced time-to-market by 40%",
          ],
        },
        {
          job_title: "Senior Engineering Manager",
          company: "Growth Startup",
          dates: "2017 - 2020",
          achievements: [
            "Scaled engineering team from 5 to 25 developers during Series A to C funding",
            "Led platform migration to AWS resulting in 60% infrastructure cost reduction",
            "Implemented DevOps practices reducing deployment time from hours to minutes",
          ],
        },
      ]
    default:
      return baseExperience
  }
}

function getSkillsByLevel(careerLevel: string): any {
  const baseSkills = {
    technical: ["JavaScript", "TypeScript", "React", "Node.js", "AWS", "Docker"],
    soft: ["Problem Solving", "Communication", "Team Collaboration"],
  }

  switch (careerLevel) {
    case "entry":
      return {
        technical: [...baseSkills.technical, "Git", "HTML/CSS", "MongoDB", "Express.js"],
        soft: [...baseSkills.soft, "Eager to Learn", "Adaptability"],
      }
    case "expert":
      return {
        technical: [...baseSkills.technical, "Kubernetes", "Terraform", "GraphQL", "Microservices", "System Design"],
        soft: [...baseSkills.soft, "Strategic Planning", "Team Leadership", "Mentoring", "Stakeholder Management"],
      }
    default:
      return baseSkills
  }
}

function getCertificationsByLevel(careerLevel: string): string[] {
  switch (careerLevel) {
    case "entry":
      return ["AWS Cloud Practitioner", "Google Analytics Certified", "Scrum Fundamentals"]
    case "expert":
      return [
        "AWS Solutions Architect Professional",
        "Certified Kubernetes Administrator",
        "PMP Project Management Professional",
        "Executive Leadership Certificate",
      ]
    default:
      return ["AWS Certified Solutions Architect", "Google Cloud Professional Developer", "Certified Scrum Master"]
  }
}
