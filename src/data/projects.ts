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
  },
  {
    id: "17",
    title: "Deep Learning for Satellite Imagery Analysis",
    category: "Machine Learning",
    baseComplexity: "High",
    description: "Automated identification of land use changes and deforestation patterns using CNNs on satellite data.",
    techStack: ["PyTorch", "Rasterio", "Google Earth Engine", "Python", "Flask"],
    baseMilestones: [
      "Satellite Data Ingestion",
      "Semantic Segmentation Model",
      "Change Detection Logic",
      "Geospatial Visualization",
      "Automated Reporting System"
    ]
  },
  {
    id: "18",
    title: "Reinforcement Learning for Game AI",
    category: "Machine Learning",
    baseComplexity: "High",
    description: "Training agents to master complex strategy games using deep reinforcement learning techniques.",
    techStack: ["Stable Baselines3", "Gymnasium", "Python", "Unity ML-Agents", "TensorBoard"],
    baseMilestones: [
      "Environment Wrapper Design",
      "Reward Function Engineering",
      "PPO/DQN Agent Training",
      "Model Evaluation & Tuning",
      "In-game Agent Integration"
    ]
  },
  {
    id: "19",
    title: "Predictive Maintenance for Aircraft Engines",
    category: "Machine Learning",
    baseComplexity: "Expert",
    description: "Using sensor telemetry to predict Remaining Useful Life (RUL) of jet engines to optimize maintenance schedules.",
    techStack: ["Python", "LSTM Networks", "Keras", "Azure ML", "D3.js"],
    baseMilestones: [
      "Sensor Data Preprocessing",
      "RNN/LSTM Architecture Design",
      "RUL Estimation Training",
      "Reliability Analysis",
      "Predictive Maintenance Dashboard"
    ]
  },
  {
    id: "20",
    title: "Natural Language Interface for Databases",
    category: "Machine Learning",
    baseComplexity: "High",
    description: "A system that converts natural language queries into SQL for non-technical users to query databases.",
    techStack: ["Python", "SQLAlchemy", "OpenAI API", "React", "PostgreSQL"],
    baseMilestones: [
      "Database Schema Embedding",
      "Text-to-SQL Model Setup",
      "Query Validation & Security",
      "Interactive Result Visualization",
      "Human-in-the-loop Correction UI"
    ]
  },
  {
    id: "21",
    title: "AI-Driven Personal Stylist",
    category: "Machine Learning",
    baseComplexity: "Medium",
    description: "A recommendation system that suggests outfits based on body type, skin tone, and current fashion trends.",
    techStack: ["Python", "TensorFlow", "React Native", "OpenCV", "FastAPI"],
    baseMilestones: [
      "Image Segmentation for Clothing",
      "Style Preference Modeling",
      "Trend Data Scraping",
      "Outfit Generation Algorithm",
      "Mobile App UI Implementation"
    ]
  },
  {
    id: "22",
    title: "Real-time Wildfire Detection System",
    category: "Machine Learning",
    baseComplexity: "High",
    description: "Using infrared satellite data and weather patterns to predict and detect wildfires with high accuracy.",
    techStack: ["Python", "PyTorch", "AWS Sagemaker", "MQTT", "Grafana"],
    baseMilestones: [
      "Satellite IR Data Ingestion",
      "Smoke/Heat Detection Training",
      "Risk Prediction Modeling",
      "Alert Notification Pipeline",
      "Geospatial Dashboard"
    ]
  },
  {
    id: "23",
    title: "Autonomous Delivery Robot Path Planner",
    category: "Machine Learning",
    baseComplexity: "Expert",
    description: "Path planning algorithms for sidewalk robots to navigate around pedestrians and obstacles in urban environments.",
    techStack: ["ROS 2", "Python", "C++", "Deep Reinforcement Learning", "Gazebo"],
    baseMilestones: [
      "Urban Environment Simulation",
      "Obstacle Avoidance Logic",
      "Dynamic Path Replanning",
      "Sensor Fusion (Lidar/Camera)",
      "Real-world Testing Suite"
    ]
  },
  {
    id: "24",
    title: "Music Genre Classifier & Mood Generator",
    category: "Machine Learning",
    baseComplexity: "Medium",
    description: "Analyzing audio waveforms to classify genres and generate playlists based on the user's emotional state.",
    techStack: ["Python", "Librosa", "Scikit-learn", "Next.js", "Spotify API"],
    baseMilestones: [
      "Audio Feature Extraction",
      "Genre Classification Training",
      "Mood Mapping Logic",
      "Playlist Generation API",
      "Web Player Integration"
    ]
  },
  {
    id: "25",
    title: "AI Legal Document Summarizer",
    category: "Machine Learning",
    baseComplexity: "High",
    description: "Extracting key terms, obligations, and risks from complex legal contracts using NLP transformers.",
    techStack: ["Python", "Hugging Face", "FastAPI", "React", "PostgreSQL"],
    baseMilestones: [
      "Legal Text Corpus Preprocessing",
      "Key Phrase Extraction Training",
      "Abstractive Summarization Setup",
      "Risk Scoring Engine",
      "Document Upload & Analysis UI"
    ]
  },
  {
    id: "26",
    title: "Decentralized Identity Verification Platform",
    category: "Blockchain",
    baseComplexity: "Expert",
    description: "A self-sovereign identity system that lets users control verified credentials and share them selectively across services.",
    techStack: ["Solidity", "Polygon", "Next.js", "DID/VC", "IPFS"],
    baseMilestones: [
      "Identity Schema Design",
      "Credential Issuance Contracts",
      "Selective Disclosure Flow",
      "Verification Dashboard",
      "Audit and Recovery Layer"
    ]
  },
  {
    id: "27",
    title: "On-Chain Carbon Credit Marketplace",
    category: "Blockchain",
    baseComplexity: "High",
    description: "A marketplace for minting, trading, and retiring tokenized carbon credits with transparent provenance tracking.",
    techStack: ["Solidity", "Ethereum", "Hardhat", "The Graph", "Tailwind CSS"],
    baseMilestones: [
      "Token Standard Selection",
      "Credit Minting Workflow",
      "Marketplace Listing Engine",
      "Retirement and Reporting",
      "Compliance Dashboard"
    ]
  },
  {
    id: "28",
    title: "Multi-Signature Treasury Controller",
    category: "Blockchain",
    baseComplexity: "High",
    description: "A secure treasury management tool that routes approvals through configurable multi-signature governance rules.",
    techStack: ["Solidity", "Safe", "Next.js", "Ethers.js", "PostgreSQL"],
    baseMilestones: [
      "Treasury Policy Engine",
      "Signature Threshold Logic",
      "Transaction Queue UI",
      "Role-Based Access Control",
      "Execution Audit Log"
    ]
  },
  {
    id: "29",
    title: "Web3 Loyalty Rewards Hub",
    category: "Blockchain",
    baseComplexity: "Medium",
    description: "A customer rewards platform that issues interoperable loyalty points and unlocks partner perks across brands.",
    techStack: ["Solidity", "Base", "Next.js", "RainbowKit", "MongoDB"],
    baseMilestones: [
      "Rewards Token Design",
      "Partner Enrollment Flow",
      "Wallet Connection UX",
      "Redemption Marketplace",
      "Analytics and Retention Dashboard"
    ]
  },
  {
    id: "30",
    title: "Decentralized File Timestamp Notary",
    category: "Blockchain",
    baseComplexity: "Medium",
    description: "A document notarization service that anchors file hashes on-chain for tamper-evident proof of existence.",
    techStack: ["Solidity", "IPFS", "Next.js", "Node.js", "Ethers.js"],
    baseMilestones: [
      "Hashing and Upload Flow",
      "Timestamp Contract Setup",
      "Proof Verification Screen",
      "Document History Viewer",
      "Public Validation Endpoint"
    ]
  }
  ,
  {
    id: "31",
    title: "Personal AI Assistant (Solo Developer)",
    category: "Machine Learning",
    baseComplexity: "Medium",
    description: "A lightweight, on-device personal AI assistant that helps manage notes, reminders, and simple automations — designed to be built and maintained by a single developer.",
    techStack: ["Python", "TensorFlow Lite", "FastAPI", "React", "SQLite"],
    baseMilestones: [
      "MVP Intent & Slot Design",
      "On-device Model Training & Quantization",
      "Local API for Syncing",
      "Frontend Interaction UI",
      "Personalization & Persistence"
    ]
  },
  {
    id: "32",
    title: "Explainable AI for Early Disease Detection",
    category: "Machine Learning",
    baseComplexity: "High",
    description: "A thesis-focused predictive system that combines interpretable machine learning with clinical or sensor data to surface early warning signals and explain the model's decisions.",
    techStack: ["Python", "Scikit-learn", "SHAP", "FastAPI", "PostgreSQL"],
    baseMilestones: [
      "Data Collection & Cleaning",
      "Baseline Model Training",
      "Explainability Layer Integration",
      "Risk Scoring Dashboard",
      "Evaluation and Validation"
    ]
  },
  {
    id: "33",
    title: "AI-Powered Crop Yield Predictor",
    category: "Machine Learning",
    baseComplexity: "High",
    description: "A thesis-oriented forecasting system that blends weather, soil, and satellite data to predict crop yields and support agricultural planning.",
    techStack: ["Python", "XGBoost", "Pandas", "FastAPI", "React"],
    baseMilestones: [
      "Agricultural Data Gathering",
      "Feature Engineering for Climate Factors",
      "Predictive Model Training",
      "Yield Forecast Dashboard",
      "Model Evaluation and Reporting"
    ]
  },
  {
    id: "34",
    title: "Smart Exam Proctoring Anomaly Detector",
    category: "Machine Learning",
    baseComplexity: "High",
    description: "A computer vision and behavior analytics system that flags suspicious activity during online exams while keeping the review process explainable.",
    techStack: ["Python", "OpenCV", "PyTorch", "FastAPI", "React"],
    baseMilestones: [
      "Video Stream Ingestion",
      "Behavior Feature Extraction",
      "Anomaly Detection Model Training",
      "Review Dashboard Development",
      "False Positive Tuning"
    ]
  },
  {
    id: "35",
    title: "Adaptive Student Performance Predictor",
    category: "Machine Learning",
    baseComplexity: "Medium",
    description: "A thesis project that analyzes coursework, engagement, and assessment patterns to predict student performance and recommend interventions early.",
    techStack: ["Python", "Scikit-learn", "Pandas", "FastAPI", "Next.js"],
    baseMilestones: [
      "Student Data Collection",
      "Feature Selection and Cleaning",
      "Performance Prediction Modeling",
      "Intervention Recommendation Logic",
      "Advisor Dashboard UI"
    ]
  },
  {
    id: "36",
    title: "Blockchain-Based Academic Credential Registry",
    category: "Blockchain",
    baseComplexity: "High",
    description: "A decentralized registry for issuing, verifying, and revoking academic credentials with tamper-evident provenance.",
    techStack: ["Solidity", "Ethereum", "Next.js", "Ethers.js", "IPFS"],
    baseMilestones: [
      "Credential Schema Design",
      "Smart Contract Development",
      "Issuer Verification Workflow",
      "Public Credential Lookup UI",
      "Revocation and Audit Trail"
    ]
  },
  {
    id: "37",
    title: "Decentralized Carbon Offset Verification Platform",
    category: "Blockchain",
    baseComplexity: "High",
    description: "A blockchain system for tracking carbon offset projects, verifying claims, and preventing duplicate credit issuance.",
    techStack: ["Solidity", "Polygon", "The Graph", "Next.js", "IPFS"],
    baseMilestones: [
      "Offset Project Registry Design",
      "Verification Smart Contracts",
      "Credit Minting and Retirement Logic",
      "Transparency Dashboard",
      "Audit and Compliance Reports"
    ]
  },
  {
    id: "38",
    title: "Decentralized Insurance Claims Ledger",
    category: "Blockchain",
    baseComplexity: "High",
    description: "A transparent claims processing platform that records insurance events on-chain and streamlines verification across stakeholders.",
    techStack: ["Solidity", "Ethereum", "Next.js", "IPFS", "Ethers.js"],
    baseMilestones: [
      "Policy and Claim Schema Design",
      "Claims Submission Workflow",
      "Verification and Approval Contracts",
      "Claims Tracking Portal",
      "Audit Log and Reporting"
    ]
  },
  {
    id: "39",
    title: "Web3 Supply Chain Provenance Dashboard",
    category: "Blockchain",
    baseComplexity: "High",
    description: "A blockchain dashboard that records product provenance, verifies custody transfers, and improves transparency across suppliers.",
    techStack: ["Solidity", "Next.js", "Ethers.js", "The Graph", "IPFS"],
    baseMilestones: [
      "Provenance Data Model",
      "Custody Transfer Contracts",
      "Supplier Verification Flow",
      "Traceability Dashboard",
      "Audit and Reporting Layer"
    ]
  },
  {
    id: "40",
    title: "Decentralized Vendor Payment Escrow System",
    category: "Blockchain",
    baseComplexity: "High",
    description: "A smart contract-based escrow platform that automates milestone payments between clients and vendors with transparent release conditions.",
    techStack: ["Solidity", "Ethereum", "Next.js", "Ethers.js", "IPFS"],
    baseMilestones: [
      "Escrow Contract Design",
      "Milestone Approval Workflow",
      "Payment Release Automation",
      "Transaction History Dashboard",
      "Dispute Resolution Logging"
    ]
  },
  {
    id: "41",
    title: "On-Chain Intellectual Property Registry",
    category: "Blockchain",
    baseComplexity: "High",
    description: "A blockchain registry for timestamping creative works, tracking ownership history, and simplifying proof of authorship.",
    techStack: ["Solidity", "Polygon", "Next.js", "Ethers.js", "IPFS"],
    baseMilestones: [
      "IP Metadata Schema",
      "Ownership Registration Contracts",
      "Timestamp and Proof Flow",
      "Public Registry Search UI",
      "Transfer and Licensing Log"
    ]
  },
  {
    id: "42",
    title: "Realtime Team Collaboration Dashboard",
    category: "Web Development",
    baseComplexity: "Medium",
    description: "A modern web platform for teams to share updates, assign tasks, and track project status in real time with collaborative editing.",
    techStack: ["Next.js", "TypeScript", "Socket.io", "Prisma", "PostgreSQL"],
    baseMilestones: [
      "Authentication and Workspace Setup",
      "Realtime Task Sync",
      "Collaborative Activity Feed",
      "Dashboard UI Development",
      "Notifications and Permissions"
    ]
  },
  {
    id: "43",
    title: "Thesis Research Portfolio Platform",
    category: "Web Development",
    baseComplexity: "Medium",
    description: "A thesis-focused web application for showcasing research progress, storing chapter drafts, and sharing advisor feedback in one place.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    baseMilestones: [
      "Research Profile Setup",
      "Chapter Draft Management",
      "Advisor Feedback Workflow",
      "Progress Timeline Interface",
      "Publication and Citation Tools"
    ]
  },
  {
    id: "44",
    title: "Adaptive Thesis Collaboration and Review Hub",
    category: "Web Development",
    baseComplexity: "High",
    description: "A thesis-grade web platform for managing drafts, annotations, version history, and advisor review cycles with real-time collaboration.",
    techStack: ["Next.js", "TypeScript", "Socket.io", "Prisma", "PostgreSQL"],
    baseMilestones: [
      "Authenticated Workspace Architecture",
      "Real-time Draft Editing",
      "Review and Annotation Engine",
      "Version History and Rollback",
      "Advisor Dashboard and Notifications"
    ]
  },
  {
    id: "45",
    title: "Capstone Project Management and Defense Portal",
    category: "Web Development",
    baseComplexity: "High",
    description: "A capstone-focused web application for coordinating proposals, milestone tracking, panel feedback, and final defense scheduling in one workflow.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    baseMilestones: [
      "Proposal Submission Workflow",
      "Milestone and Deadline Tracking",
      "Reviewer Feedback System",
      "Defense Scheduling Interface",
      "Final Submission and Archive"
    ]
  },
  {
    id: "46",
    title: "Student Capstone Collaboration and Review Suite",
    category: "Web Development",
    baseComplexity: "High",
    description: "A thesis and capstone web platform for computer science and information technology students to plan projects, manage documents, track progress, and coordinate advisor reviews.",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    baseMilestones: [
      "Project Proposal and Scope Definition",
      "Team and Role Management",
      "Document Submission and Versioning",
      "Advisor Review and Approval Workflow",
      "Final Defense Preparation Dashboard"
    ]
  },
  {
    id: "47",
    title: "AI-Powered Medical Screening and Referral System",
    category: "Web Development",
    baseComplexity: "High",
    description: "A thesis-grade web application that collects patient symptoms, analyzes risk patterns, and routes cases to appropriate medical specialists for early intervention.",
    techStack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Python"],
    baseMilestones: [
      "Patient Intake and Symptom Capture",
      "Risk Scoring and Triage Logic",
      "Specialist Referral Workflow",
      "Secure Records and Audit Logging",
      "Clinical Validation and Testing"
    ]
  },
  {
    id: "48",
    title: "Smart Crop Monitoring and Farm Advisory Platform",
    category: "Web Development",
    baseComplexity: "High",
    description: "A web system for agriculture that combines sensor data, weather forecasts, and farm analytics to guide crop decisions and improve yield planning.",
    techStack: ["Next.js", "TypeScript", "Python", "PostgreSQL", "IoT API"],
    baseMilestones: [
      "Farm Profile and Plot Mapping",
      "Sensor Data Ingestion",
      "Weather and Soil Analytics",
      "Crop Advisory Recommendation Engine",
      "Yield Forecast and Reporting"
    ]
  },
  {
    id: "49",
    title: "IoT-Based Smart Greenhouse Climate and Irrigation Control System",
    category: "Internet of Things",
    baseComplexity: "Medium",
    description: "A thesis-capstone project for a 4-5 member team that monitors greenhouse temperature, humidity, soil moisture, and light levels, then automates irrigation and ventilation using edge-connected controllers.",
    techStack: ["ESP32", "MQTT", "Node-RED", "InfluxDB", "Next.js"],
    baseMilestones: [
      "Sensor Node Design and Calibration",
      "MQTT Data Pipeline Setup",
      "Climate Rule Engine and Automation Logic",
      "Operator Dashboard and Alerts",
      "System Testing and Field Validation"
    ]
  },
  {
    id: "50",
    title: "IoT-Powered Smart Waste Collection Optimization System",
    category: "Internet of Things",
    baseComplexity: "Medium",
    description: "A thesis-capstone project for a 4-5 member team that uses smart bin sensors, GPS-enabled collection routing, and cloud analytics to reduce pickup delays and optimize municipal waste operations.",
    techStack: ["ESP32", "LoRaWAN", "MQTT", "Node.js", "PostgreSQL"],
    baseMilestones: [
      "Smart Bin Sensor Prototype",
      "Telemetry and Gateway Integration",
      "Route Optimization Algorithm",
      "Operations Dashboard and Alerts",
      "Pilot Testing and Performance Review"
    ]
  },
  {
    id: "51",
    title: "IoT-Driven Smart Parking and Occupancy Guidance System",
    category: "Internet of Things",
    baseComplexity: "Medium",
    description: "A thesis-capstone project for a 4-5 member team that detects parking occupancy with connected sensors, publishes live availability updates, and guides drivers to open spaces through a centralized dashboard.",
    techStack: ["ESP32", "MQTT", "React", "Node.js", "PostgreSQL"],
    baseMilestones: [
      "Parking Sensor Hardware Setup",
      "Real-time Occupancy Data Pipeline",
      "Availability Prediction Logic",
      "Driver Guidance Dashboard",
      "Simulation and Field Testing"
    ]
  },
  {
    id: "52",
    title: "IoT-Based Smart Classroom Attendance and Environment Monitor",
    category: "Internet of Things",
    baseComplexity: "Medium",
    description: "A thesis-capstone project for a 4-5 member team that combines RFID or BLE attendance tracking with classroom air-quality, temperature, and occupancy monitoring to support smarter learning spaces.",
    techStack: ["ESP32", "RFID", "MQTT", "React", "PostgreSQL"],
    baseMilestones: [
      "Attendance Capture Module Design",
      "Environment Sensor Integration",
      "Data Sync and Storage Pipeline",
      "Admin Dashboard and Reporting",
      "Pilot Deployment and Evaluation"
    ]
  },
  {
    id: "53",
    title: "IoT-Enabled Cold Chain Monitoring and Alert System",
    category: "Internet of Things",
    baseComplexity: "Medium",
    description: "A thesis-capstone project for a 4-5 member team that tracks temperature-sensitive shipments in real time, triggers alerts for threshold breaches, and helps maintain product quality across the cold chain.",
    techStack: ["ESP32", "MQTT", "React", "Node.js", "InfluxDB"],
    baseMilestones: [
      "Sensor and Device Integration",
      "Shipment Telemetry Pipeline",
      "Threshold Alert Engine",
      "Monitoring Dashboard Development",
      "Cold Chain Simulation and Testing"
    ]
  }
];

