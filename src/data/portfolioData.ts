export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  glowColor: string;
  glowRgba: string;
  accentBadgeColor: string;
  description: string;
  features: string[];
  technologies: string[];
  mockupType: 'crop-ai' | 'smart-dustbin';
  details: {
    overview: string;
    architecture: string[];
    outcomes: string[];
  };
}

export interface Internship {
  role: string;
  organization: string;
  duration: string;
  description: string[];
  tag: string;
}

export interface Education {
  degree: string;
  branch: string;
  institution: string;
  location: string;
  duration: string;
  percentage: string;
}

export interface SkillGroup {
  category: string;
  iconName: string;
  skills: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const PERSONAL_INFO = {
  name: "MOOGOLLA RAMU",
  shortName: "ramu",
  role: "Python Developer",
  location: "Anantapur, Andhra Pradesh, India",
  phone: "+91 95505 82361",
  email: "moogollaramu@gmail.com",
  statusBadge: "Available for work",
  headline: "WHERE IDEAS MEET EXECUTION",
  heroSubtitle: "Building intelligent software & AI systems",
  introduction:
    "I am a Computer Science and Engineering graduate with a strong foundation in Python programming, Artificial Intelligence, Machine Learning, Deep Learning, and database technologies. I completed a six-month Work-Based Learning internship in Artificial Intelligence and Machine Learning at the National Institute of Electronics & Information Technology (NIELIT). I enjoy developing practical software applications and AI-driven solutions that address real-world problems.",
  careerObjective:
    "Seeking opportunities as a Python Developer where I can apply my programming knowledge, problem-solving skills, and understanding of AI/ML to develop reliable and efficient software solutions."
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "crop-disease-detection",
    number: "01",
    title: "AI-Driven Crop Disease Detection and Smart Farming Solutions System",
    category: "AI for Agriculture · 2026",
    glowColor: "#22c55e",
    glowRgba: "rgba(34, 197, 94, 0.45)",
    accentBadgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    description:
      "Developed an AI-powered application that analyzes crop leaf images using a Convolutional Neural Network to identify potential crop diseases. Integrated treatment recommendations, a crop encyclopedia, government scheme information, market information, and farmer support modules.",
    features: [
      "AI-based crop disease identification",
      "Image-based prediction with CNN model",
      "Treatment recommendation information (chemical & organic)",
      "Agricultural information and farmer support modules"
    ],
    technologies: ["Python", "Streamlit", "TensorFlow", "CNN"],
    mockupType: "crop-ai",
    details: {
      overview:
        "An end-to-end agro-tech diagnostic platform designed to bridge the gap between agricultural scientists and smallholder farmers. The system accepts leaf photographs taken in the field and provides instantaneous pathology diagnosis with actionable remediations.",
      architecture: [
        "Convolutional Neural Network (CNN) trained on multi-class leaf datasets",
        "Streamlit interactive web dashboard for seamless desktop & mobile access",
        "Comprehensive knowledge base with organic and chemical remedies",
        "Integrated agricultural advisory for regional crop diseases"
      ],
      outcomes: [
        "Rapid identification of leaf abnormalities within milliseconds",
        "Actionable treatment suggestions to prevent harvest losses",
        "Farmer-friendly UI accessible without technical expertise"
      ]
    }
  },
  {
    id: "smart-dustbin",
    number: "02",
    title: "Smart Dustbin with Automatic Lid Opening",
    category: "IoT & Robotics · 2025",
    glowColor: "#3b82f6",
    glowRgba: "rgba(59, 130, 246, 0.45)",
    accentBadgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    description:
      "Designed a touchless waste-disposal system using infrared/ultrasonic sensors to detect nearby objects and activate a servo motor for automatic lid operation, promoting convenient and hygienic waste disposal.",
    features: [
      "Sensor-based object detection",
      "Automatic lid operation with smooth servo sweep",
      "Servo motor integration & threshold tuning",
      "Touchless waste disposal for hygiene maintenance"
    ],
    technologies: ["Infrared/Ultrasonic Sensors", "Servo Motor", "Python / Embedded C", "Microcontroller"],
    mockupType: "smart-dustbin",
    details: {
      overview:
        "A hygienic automated waste collection device that eliminates physical contact with waste receptacles. Uses high-sensitivity proximity sensing paired with precision servo actuation.",
      architecture: [
        "Ultrasonic distance sensor for accurate human proximity detection",
        "Servo motor mechanism tuned for swift, gentle lid actuation",
        "Microcontroller-based control firmware with noise debounce filtering",
        "Power-efficient idle state with responsive wake-on-detect"
      ],
      outcomes: [
        "100% touchless operation preventing cross-contamination in medical & public spaces",
        "Smooth, reliable mechanical response within 30cm detection range",
        "Reliable automated closure following waste deposit"
      ]
    }
  }
];

export const EDUCATION_DATA: Education = {
  degree: "Bachelor of Technology (B.Tech)",
  branch: "Computer Science and Engineering",
  institution: "Dr. K. V. Subbareddy Institute of Technology",
  location: "Kurnool, Andhra Pradesh",
  duration: "2022–2026",
  percentage: "70.08%"
};

export const INTERNSHIPS_DATA: Internship[] = [
  {
    role: "AI & ML Intern",
    organization: "National Institute of Electronics & Information Technology (NIELIT)",
    duration: "February 2026 – August 2026",
    tag: "Government-Certified",
    description: [
      "Completed a six-month Government-certified Work-Based Learning internship in Artificial Intelligence and Machine Learning.",
      "Gained practical exposure to Python programming, Machine Learning, Deep Learning, data preprocessing, and AI model development.",
      "Strengthened analytical thinking, debugging, and technical problem-solving skills."
    ]
  },
  {
    role: "Summer Intern",
    organization: "JNTUA Future Skill Training, ROOMAN Technologies",
    duration: "June 2025",
    tag: "Skill Development",
    description: [
      "Participated in a summer internship focused on industry-relevant technical skill development.",
      "Gained exposure to practical learning approaches and professional development."
    ]
  }
];

export const CERTIFICATIONS_DATA: string[] = [
  "APSCHE–EduSkills AI-ML Virtual Internship",
  "Spoken Tutorial, IIT Bombay — HTML Training",
  "IBM — Analyzing Data with R",
  "NPTEL — Digital Image Processing",
  "Spoken Tutorial, IIT Bombay — PHP and MySQL Training"
];

export const SKILLS_DATA: SkillGroup[] = [
  {
    category: "Programming Languages",
    iconName: "Code2",
    skills: ["Python", "C", "Java (Basic)"]
  },
  {
    category: "Artificial Intelligence and Machine Learning",
    iconName: "Cpu",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Convolutional Neural Networks (CNN)",
      "TensorFlow",
      "Data Preprocessing",
      "Digital Image Processing"
    ]
  },
  {
    category: "Web Technologies",
    iconName: "Globe",
    skills: ["HTML", "Streamlit"]
  },
  {
    category: "Databases",
    iconName: "Database",
    skills: ["SQL", "MySQL"]
  },
  {
    category: "Cloud and Data",
    iconName: "Cloud",
    skills: ["AWS Data Engineering Fundamentals"]
  },
  {
    category: "Tools",
    iconName: "Wrench",
    skills: ["MS Office"]
  }
];

export const SERVICES_DATA = [
  {
    icon: "</>",
    title: "Python & Backend Systems",
    description: "Developing clean, structured Python scripts, automation routines, and high-performance server logic."
  },
  {
    icon: "{ }",
    title: "Machine Learning & CNNs",
    description: "Building, training, and testing deep neural networks with TensorFlow for real-world computer vision tasks."
  },
  {
    icon: "✦",
    title: "Interactive AI Dashboards",
    description: "Creating accessible, intuitive web applications and model interfaces using Streamlit and modern tools."
  },
  {
    icon: "⑂",
    title: "Database Design & SQL",
    description: "Structuring relational databases, writing optimized queries, and ensuring data integrity with MySQL."
  },
  {
    icon: "◉",
    title: "Digital Image Processing",
    description: "Preprocessing datasets, feature extraction, augmentation, and image analysis pipelines."
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    question: "What roles are you currently seeking?",
    answer:
      "I am actively seeking full-time opportunities as a Python Developer or AI/ML Junior Engineer where I can apply my Python programming expertise, machine learning foundations, and problem-solving skills to build reliable software solutions."
  },
  {
    question: "What experience do you have with Deep Learning and CNNs?",
    answer:
      "During my six-month Government-certified internship at NIELIT and in my academic projects, I built and fine-tuned Convolutional Neural Networks (CNN) using TensorFlow for image classification, such as leaf crop disease detection. I have experience with data preprocessing, image augmentation, and evaluation metrics."
  },
  {
    question: "What was your focus during the NIELIT internship?",
    answer:
      "At NIELIT (National Institute of Electronics & Information Technology), I completed a six-month Work-Based Learning internship in Artificial Intelligence and Machine Learning. I worked on Python programming, data pipelines, model building, and troubleshooting real technical challenges."
  },
  {
    question: "Are you open to relocation or remote opportunities?",
    answer:
      "Yes! While I am currently based in Anantapur, Andhra Pradesh, India, I am open to relocating to major tech hubs or working in high-impact remote and hybrid engineering environments."
  },
  {
    question: "How can I get in touch with you?",
    answer:
      "You can reach out directly via email at moogollaramu@gmail.com, or by phone at +91 95505 82361. You can also use the contact buttons below to send an email inquiry."
  }
];
