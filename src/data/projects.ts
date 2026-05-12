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
  }
];

