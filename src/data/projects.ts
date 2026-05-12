export type Category = "Machine Learning" | "Web Development" | "Mobile App" | "Cloud Computing" | "Internet of Things" | "Blockchain";

export interface Project {
  id: string;
  title: string;
  category: Category;
  baseComplexity: "Medium" | "High" | "Expert";
  description: string;
  techStack: string[];
  baseMilestones: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "AI-Powered Health Diagnostic System",
    category: "Machine Learning",
    baseComplexity: "High",
    description: "A system that uses deep learning to analyze medical imaging and provide preliminary diagnostic suggestions.",
    techStack: ["Python", "TensorFlow", "FastAPI", "React", "PostgreSQL"],
    baseMilestones: [
      "Data Collection & Preprocessing",
      "Model Architecture Design",
      "Training & Validation",
      "API Development",
      "Frontend Integration"
    ]
  },
  {
    id: "2",
    title: "Decentralized Supply Chain Tracker",
    category: "Blockchain",
    baseComplexity: "Expert",
    description: "A transparent and immutable ledger for tracking goods from origin to consumer using smart contracts.",
    techStack: ["Solidity", "Ethereum", "Hardhat", "Next.js", "Ethers.js"],
    baseMilestones: [
      "Smart Contract Architecture",
      "Local Blockchain Deployment",
      "Web3 Integration",
      "Tracking Dashboard Development",
      "Security Auditing"
    ]
  },
  {
    id: "3",
    title: "Real-time Collaborative Code Editor",
    category: "Web Development",
    baseComplexity: "Medium",
    description: "A browser-based editor allowing multiple users to code together in real-time with syntax highlighting.",
    techStack: ["Node.js", "Socket.io", "Express", "Monaco Editor", "React"],
    baseMilestones: [
      "Websocket Server Setup",
      "Operational Transformation Logic",
      "Editor UI Implementation",
      "User Room Management",
      "Persistence Layer Integration"
    ]
  },
  {
    id: "4",
    title: "Smart Home Energy Optimizer",
    category: "Internet of Things",
    baseComplexity: "High",
    description: "An IoT system that monitors household energy consumption and suggests optimizations using predictive models.",
    techStack: ["ESP32", "MQTT", "Node-RED", "InfluxDB", "Python"],
    baseMilestones: [
      "Sensor Integration & Firmware",
      "Data ingestion Pipeline",
      "Energy Modeling",
      "Mobile Dashboard",
      "Automation Rules Engine"
    ]
  },
  {
    id: "5",
    title: "Cross-Platform Fitness Social Network",
    category: "Mobile App",
    baseComplexity: "Medium",
    description: "A mobile application for tracking workouts and sharing progress with a community of fitness enthusiasts.",
    techStack: ["React Native", "Firebase", "Expo", "Redux", "Node.js"],
    baseMilestones: [
      "User Authentication",
      "Workout Tracking Logic",
      "Social Feed Implementation",
      "Cloud Functions Setup",
      "Push Notifications"
    ]
  },
  {
    id: "6",
    title: "Autonomous Warehouse Drone Swarm",
    category: "Machine Learning",
    baseComplexity: "Expert",
    description: "Coordinated drone fleet for real-time inventory management and obstacle avoidance in large warehouses.",
    techStack: ["ROS 2", "Python", "OpenCV", "C++", "NVIDIA Jetson"],
    baseMilestones: [
      "Swarm Coordination Logic",
      "Computer Vision Training",
      "SLAM Integration",
      "Inventory Management System",
      "Fault-Tolerant Communication"
    ]
  },
  {
    id: "7",
    title: "NFT Ticketing & Event Management",
    category: "Blockchain",
    baseComplexity: "High",
    description: "A secure platform for event organizers to issue fraud-proof tickets as NFTs with secondary market royalty support.",
    techStack: ["Solidity", "Polygon", "The Graph", "Tailwind CSS", "IPFS"],
    baseMilestones: [
      "ERC-721/1155 Implementation",
      "Ticketing Logic & Metadata",
      "Subgraph Indexing",
      "Attendee Mobile App",
      "Organizer Dashboard"
    ]
  },
  {
    id: "8",
    title: "Serverless E-Commerce Headless CMS",
    category: "Web Development",
    baseComplexity: "High",
    description: "A blazing-fast, API-first content management system optimized for high-traffic commerce applications.",
    techStack: ["Next.js", "AWS Lambda", "DynamoDB", "Stripe API", "Vercel"],
    baseMilestones: [
      "API Design & Schema",
      "Authentication Service",
      "Media CDN Integration",
      "Checkout Flow Engine",
      "Webhook Processing"
    ]
  },
  {
    id: "9",
    title: "Predictive Industrial Maintenance IoT",
    category: "Internet of Things",
    baseComplexity: "Expert",
    description: "Monitoring industrial machinery vibrations and heat to predict failures before they happen using edge computing.",
    techStack: ["Azure IoT Hub", "Raspberry Pi", "C#", "TimeSeries Insights", "PowerBI"],
    baseMilestones: [
      "Sensor Deployment",
      "Edge Processing Logic",
      "Anomaly Detection Model",
      "Alerting System",
      "Predictive Analytics Dashboard"
    ]
  },
  {
    id: "10",
    title: "Augmented Reality Furniture Placer",
    category: "Mobile App",
    baseComplexity: "High",
    description: "An AR application that lets users visualize how furniture items look in their actual living space using 3D models.",
    techStack: ["Unity", "ARKit", "ARCore", "C#", "Blender"],
    baseMilestones: [
      "Plane Detection Setup",
      "3D Model Optimization",
      "UI Overlay Interaction",
      "Lighting Estimation",
      "Photo Capture & Sharing"
    ]
  },
  {
    id: "11",
    title: "AI Financial Fraud Detection System",
    category: "Machine Learning",
    baseComplexity: "High",
    description: "Real-time analysis of banking transactions to detect fraudulent behavior using anomaly detection algorithms.",
    techStack: ["Python", "Scikit-learn", "Kafka", "React", "MongoDB"],
    baseMilestones: [
      "Dataset Labeling & Balancing",
      "Feature Engineering",
      "Anomaly Detection Training",
      "Streaming Pipeline Setup",
      "Admin Alert Dashboard"
    ]
  },
  {
    id: "12",
    title: "Multilingual Speech-to-Text Translator",
    category: "Machine Learning",
    baseComplexity: "High",
    description: "A neural network based system for transcribing and translating speech in real-time across 50+ languages.",
    techStack: ["PyTorch", "Hugging Face", "FastAPI", "WebSockets", "React"],
    baseMilestones: [
      "ASR Model Fine-tuning",
      "Translation Engine Integration",
      "Low-Latency Streaming API",
      "Frontend Waveform UI",
      "Multi-language Support Validation"
    ]
  },
  {
    id: "13",
    title: "Personalized Recommendation Engine for Retail",
    category: "Machine Learning",
    baseComplexity: "Medium",
    description: "Hybrid filtering system that predicts user preferences based on browsing history and collaborative patterns.",
    techStack: ["Python", "Surprise Library", "Redis", "Node.js", "Vue.js"],
    baseMilestones: [
      "User Behavior Data Analysis",
      "Collaborative Filtering Implementation",
      "Content-Based Scoring",
      "Real-time Cache Integration",
      "A/B Testing Framework"
    ]
  },
  {
    id: "14",
    title: "Autonomous Traffic Flow Optimizer",
    category: "Machine Learning",
    baseComplexity: "Expert",
    description: "Reinforcement learning model that coordinates city traffic lights to minimize congestion and emissions.",
    techStack: ["SUMO", "Python", "Ray RLlib", "Docker", "Go"],
    baseMilestones: [
      "Traffic Simulation Environment Setup",
      "RL Agent Observation Space Design",
      "Multi-Agent Coordination Training",
      "City-scale Deployment Simulation",
      "Performance Analytics Suite"
    ]
  },
  {
    id: "15",
    title: "Sentiment Analysis & Market Trend Predictor",
    category: "Machine Learning",
    baseComplexity: "Medium",
    description: "NLP tool that scrapes social media and news to predict stock market trends based on public sentiment.",
    techStack: ["Python", "BeautifulSoup", "NLTK", "Next.js", "Alpha Vantage API"],
    baseMilestones: [
      "Data Scraper Development",
      "Sentiment Scoring Algorithm",
      "Correlation Analysis",
      "Predictive Trend Dashboard",
      "Alert Notification System"
    ]
  },
  {
    id: "16",
    title: "AI-Powered Customer Support Bot",
    category: "Machine Learning",
    baseComplexity: "Medium",
    description: "An advanced chatbot using LLMs to provide context-aware support and automate ticket resolution.",
    techStack: ["OpenAI API", "LangChain", "FastAPI", "React", "Pinecone"],
    baseMilestones: [
      "Knowledge Base Ingestion",
      "RAG Pipeline Implementation",
      "Conversation Flow Logic",
      "Feedback Loop Integration",
      "Live Chat Widget UI"
    ]
  }
];

