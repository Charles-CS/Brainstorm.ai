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
  },
  {
    id: "54",
    title: "IoT-Based Smart Water Quality Monitoring Network",
    category: "Internet of Things",
    baseComplexity: "Medium",
    description: "A thesis-capstone project for a 4-5 member team that uses distributed water sensors to measure pH, turbidity, and dissolved solids, then reports contamination risks through a live dashboard and alert pipeline.",
    techStack: ["ESP32", "MQTT", "Node.js", "React", "InfluxDB"],
    baseMilestones: [
      "Sensor Calibration and Node Setup",
      "Water Telemetry Ingestion Pipeline",
      "Risk Scoring and Alert Logic",
      "Dashboard and Reporting Interface",
      "Deployment Testing and Validation"
    ]
  },
  {
    id: "55",
    title: "IoT-Powered Smart Street Lighting Control System",
    category: "Internet of Things",
    baseComplexity: "Medium",
    description: "A thesis-capstone project for a 4-5 member team that adjusts streetlight brightness based on motion, ambient light, and traffic conditions to reduce energy use while improving safety.",
    techStack: ["ESP32", "MQTT", "Node.js", "React", "PostgreSQL"],
    baseMilestones: [
      "Lighting Node Hardware Setup",
      "Motion and Ambient Sensor Integration",
      "Adaptive Brightness Control Logic",
      "Admin Dashboard and Usage Analytics",
      "Pilot Area Testing and Optimization"
    ]
  }
  ,{
    id: "56",
    title: "Thesis-Capstone Mobile Campus Companion and Safety App",
    category: "Mobile App",
    baseComplexity: "High",
    description: "A thesis-capstone mobile application that combines campus navigation, emergency alerts, class reminders, and student support services into one cross-platform experience.",
    techStack: ["React Native", "Firebase", "Expo", "TypeScript", "Google Maps API"],
    baseMilestones: [
      "Campus Map and Navigation Flow",
      "Emergency Alert and SOS Module",
      "Schedule and Reminder System",
      "Student Services Integration",
      "Pilot Testing and Usability Review"
    ]
  }
  ,{
    id: "57",
    title: "Thesis-Capstone Smart Student Attendance and Notification App",
    category: "Mobile App",
    baseComplexity: "Medium",
    description: "A thesis-capstone mobile app that helps academic teams capture attendance, send class notifications, and track student participation across campus activities.",
    techStack: ["React Native", "Firebase", "Expo", "TypeScript", "Node.js"],
    baseMilestones: [
      "Attendance Capture Workflow",
      "Notification and Reminder Engine",
      "Student Participation Dashboard",
      "Offline Sync and Data Storage",
      "Pilot Testing and Feedback Iteration"
    ]
  }
  ,{
    id: "58",
    title: "Thesis-Capstone Mobile Telemedicine and Health Monitoring App",
    category: "Mobile App",
    baseComplexity: "High",
    description: "A thesis-capstone mobile application that supports remote patient check-ins, symptom tracking, wearable data sync, and clinician notifications for faster health monitoring.",
    techStack: ["React Native", "Firebase", "Expo", "TypeScript", "HealthKit"],
    baseMilestones: [
      "Patient Onboarding and Profile Setup",
      "Symptom Logging and Trend Tracking",
      "Wearable Data Synchronization",
      "Clinician Alert and Review Dashboard",
      "Security Testing and Clinical Validation"
    ]
  }
  ,{
    id: "59",
    title: "Thesis-Capstone Mobile Disaster Response Coordination App",
    category: "Mobile App",
    baseComplexity: "High",
    description: "A thesis-capstone mobile application for coordinating emergency volunteers, reporting incidents, sharing live location updates, and dispatching response teams during disaster events.",
    techStack: ["React Native", "Firebase", "Expo", "TypeScript", "Mapbox"],
    baseMilestones: [
      "Emergency Reporting and Incident Intake",
      "Volunteer and Responder Matching",
      "Live Location Sharing and Mapping",
      "Dispatch Workflow and Notifications",
      "Stress Testing and Field Simulation"
    ]
  }
  ,{
    id: "60",
    title: "Thesis-Capstone Mobile Precision Farming Advisory App",
    category: "Mobile App",
    baseComplexity: "High",
    description: "A thesis-capstone mobile application for agriculture that helps farmers monitor crop conditions, receive irrigation and fertilization advice, and track field performance using sensor and weather data.",
    techStack: ["React Native", "Firebase", "Expo", "TypeScript", "Weather API"],
    baseMilestones: [
      "Field and Crop Profile Setup",
      "Sensor and Weather Data Integration",
      "Irrigation and Fertilization Advisory Logic",
      "Farmer Dashboard and Alert System",
      "Pilot Testing and Agronomic Validation"
    ]
  }
  ,{
    id: "61",
    title: "Thesis-Capstone Mobile Crop Disease Detection and Advisory App",
    category: "Mobile App",
    baseComplexity: "High",
    description: "A thesis-capstone mobile application for agriculture that lets farmers capture leaf images, detect crop disease patterns, and receive treatment recommendations based on field conditions.",
    techStack: ["React Native", "Firebase", "Expo", "TypeScript", "TensorFlow Lite"],
    baseMilestones: [
      "Image Capture and Upload Flow",
      "Crop Disease Classification Model",
      "Treatment Recommendation Engine",
      "Farmer Notification and History Screen",
      "Field Testing and Model Tuning"
    ]
  }
  ,{
    id: "62",
    title: "Thesis-Capstone Mobile Patient Triage and Care Pathway App",
    category: "Mobile App",
    baseComplexity: "High",
    description: "A thesis-capstone mobile application for the medical field that captures patient symptoms, suggests care pathways, and helps clinics prioritize cases for faster review and referral.",
    techStack: ["React Native", "Firebase", "Expo", "TypeScript", "FastAPI"],
    baseMilestones: [
      "Patient Intake and Symptom Capture",
      "Triage Scoring and Pathway Logic",
      "Clinic Queue and Referral Workflow",
      "Notifications and Follow-up Tracking",
      "Clinical Review and Validation"
    ]
  }
  ,{
    id: "63",
    title: "Thesis-Capstone Mobile Medication Adherence and Care Reminder App",
    category: "Mobile App",
    baseComplexity: "High",
    description: "A thesis-capstone mobile application for healthcare that helps patients manage medication schedules, care reminders, and clinician follow-ups while supporting adherence tracking for better outcomes.",
    techStack: ["React Native", "Firebase", "Expo", "TypeScript", "Node.js"],
    baseMilestones: [
      "Medication Schedule Setup",
      "Reminder and Notification Engine",
      "Adherence Tracking Dashboard",
      "Clinician Follow-up Workflow",
      "Security Review and Patient Testing"
    ]
  }
  ,{
    id: "64",
    title: "Thesis-Capstone Mobile Hospital Patient Flow and Appointment Coordination App",
    category: "Mobile App",
    baseComplexity: "High",
    description: "A thesis-capstone mobile application for a 10-member team that manages patient check-ins, appointment scheduling, ward transfers, and clinician coordination to improve hospital workflow efficiency.",
    techStack: ["React Native", "Firebase", "Expo", "TypeScript", "FastAPI"],
    baseMilestones: [
      "Patient Check-in and Registration Flow",
      "Appointment Scheduling and Queue Management",
      "Ward Transfer and Bed Allocation Logic",
      "Clinician Coordination and Notification System",
      "Hospital Workflow Testing and Validation"
    ]
  }
  ,{
    id: "65",
    title: "Thesis-Capstone Mobile Smart Logistics and Fleet Dispatch App",
    category: "Mobile App",
    baseComplexity: "High",
    description: "A thesis-capstone mobile application for managing delivery orders, dispatching drivers, tracking vehicle locations, and optimizing route assignments in real time for logistics teams.",
    techStack: ["React Native", "Firebase", "Expo", "TypeScript", "Mapbox"],
    baseMilestones: [
      "Order Intake and Dispatch Queue",
      "Driver Assignment and Route Optimization",
      "Live Vehicle Tracking and Status Updates",
      "Delivery Proof and Exception Handling",
      "Fleet Analytics and Performance Testing"
    ]
  }
  ,{
    id: "66",
    title: "Thesis-Capstone Blockchain Zero-Knowledge Academic Credential Verification Network",
    category: "Blockchain",
    baseComplexity: "High",
    description: "A thesis-capstone blockchain platform for computer science and information technology students that uses zero-knowledge proofs, decentralized identity, and tamper-evident audit trails to verify academic credentials, project ownership, and student achievement without exposing sensitive personal data.",
    techStack: ["Solidity", "Polygon", "Next.js", "Ethers.js", "Circom"],
    baseMilestones: [
      "Credential and Identity Scheme Design",
      "Zero-Knowledge Proof Circuit Development",
      "Smart Contract and Registry Implementation",
      "Verifier Portal and Audit Dashboard",
      "Privacy Testing and Security Validation"
    ]
  },
  {
    id: "67",
    title: "Thesis-Capstone Blockchain Authenticated Signature Validation and Non-Repudiation Ledger",
    category: "Blockchain",
    baseComplexity: "High",
    description: "A thesis-capstone blockchain platform for computer science and information technology students that verifies handwritten or digital signatures, stores only authenticated signature records and proof hashes, and provides tamper-proof non-repudiation for contracts, academic forms, and official approvals.",
    techStack: ["Solidity", "Polygon", "Next.js", "Ethers.js", "OpenCV"],
    baseMilestones: [
      "Signature Capture and Verification Workflow",
      "Feature Extraction and Authenticated Matching Engine",
      "Proof Hashing and Smart Contract Registry",
      "Non-Repudiation Audit Portal",
      "Security Testing and False-Match Validation"
    ]
  },
  {
    id: "68",
    title: "Thesis-Capstone Blockchain Tamper-Proof Document Notarization and Verification System",
    category: "Blockchain",
    baseComplexity: "High",
    description: "A thesis-capstone blockchain platform for computer science and information technology students that notarizes academic documents, approval forms, and project records by storing authenticated hashes, version proofs, and verification receipts to detect tampering and prevent forged submissions.",
    techStack: ["Solidity", "Polygon", "Next.js", "Ethers.js", "IPFS"],
    baseMilestones: [
      "Document Hashing and Notarization Flow",
      "Version Tracking and Tamper Detection Logic",
      "Smart Contract Receipt Registry",
      "Verification Portal and Audit History",
      "Adversarial Testing and Security Review"
    ]
  },
  {
    id: "69",
    title: "Thesis-Capstone Blockchain Academic Transcript Integrity and Verification Ledger",
    category: "Blockchain",
    baseComplexity: "High",
    description: "A thesis-capstone blockchain platform for computer science and information technology students that stores authenticated transcript fingerprints, course completion proofs, and grade-change audit records to prevent forgery, detect tampering, and simplify secure academic verification.",
    techStack: ["Solidity", "Polygon", "Next.js", "Ethers.js", "IPFS"],
    baseMilestones: [
      "Transcript Fingerprint and Proof Schema",
      "Course Completion Verification Logic",
      "Grade Change Audit Trail Contracts",
      "Verification Portal and Admin Review Dashboard",
      "Security Hardening and Tamper Testing"
    ]
  },
  {
    id: "70",
    title: "Thesis-Capstone Blockchain Decentralized Energy Trading and Smart Meter Settlement Platform",
    category: "Blockchain",
    baseComplexity: "High",
    description: "A thesis-capstone blockchain platform for computer science and information technology students that enables peer-to-peer energy trading, smart meter settlement, automated billing, and auditable microgrid coordination using on-chain rules and off-chain meter data validation.",
    techStack: ["Solidity", "Polygon", "Next.js", "Ethers.js", "Node.js"],
    baseMilestones: [
      "Smart Meter Data Model and Market Rules",
      "Energy Trade Matching and Settlement Contracts",
      "Buyer and Seller Dashboard Development",
      "Automated Billing and Audit Trail",
      "Load Testing and Market Simulation"
    ]
  },
  {
    id: "71",
    title: "Thesis-Capstone Cloud Computing Multi-Cloud Disaster Recovery and Policy-Aware Failover Orchestrator",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A thesis-capstone cloud platform for computer science and information technology students that coordinates multi-cloud backups, policy-driven failover, workload redeployment, and recovery testing to keep mission-critical applications available during regional outages or provider failures.",
    techStack: ["Terraform", "Kubernetes", "AWS", "Azure", "Next.js"],
    baseMilestones: [
      "Workload Mapping and Recovery Policy Design",
      "Multi-Cloud Backup and Replication Pipeline",
      "Failover Automation and Redeployment Logic",
      "Recovery Status Dashboard and Alerts",
      "Chaos Testing and Disaster Simulation"
    ]
  },
  {
    id: "72",
    title: "Thesis-Capstone Cloud Computing Edge-Cloud Video Analytics and Auto-Scaling Inference Platform",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A thesis-capstone cloud platform for computer science and information technology students that routes live video streams between edge nodes and cloud GPUs, auto-scales inference workloads, and manages low-latency analytics for safety, surveillance, or industrial monitoring systems.",
    techStack: ["Kubernetes", "Docker", "Python", "AWS", "TensorFlow Serving"],
    baseMilestones: [
      "Edge Stream Routing and Ingestion Design",
      "Cloud Inference Pipeline and Model Serving",
      "Auto-Scaling and Load Balancing Logic",
      "Analytics Dashboard and Alerting Layer",
      "Latency Benchmarking and Stress Testing"
    ]
  },
  {
    id: "73",
    title: "Thesis-Capstone Cloud Computing Confidential Computing and Remote Attestation Orchestrator",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A thesis-capstone cloud platform for computer science and information technology students that provisions confidential workloads inside secure enclaves, performs remote attestation, and enforces policy-based deployment for sensitive data processing across cloud environments.",
    techStack: ["Kubernetes", "Docker", "Azure Confidential Computing", "Terraform", "Next.js"],
    baseMilestones: [
      "Confidential Workload Architecture Design",
      "Remote Attestation and Trust Verification",
      "Policy-Based Enclave Deployment Pipeline",
      "Secure Operations Dashboard",
      "Threat Modeling and Security Validation"
    ]
  },
  {
    id: "74",
    title: "Thesis-Capstone Cloud Computing Serverless Genomics Pipeline and Variant Analysis Platform",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A thesis-capstone cloud platform for computer science and information technology students that runs event-driven genomic data preprocessing, variant calling, distributed result aggregation, and secure research reporting on serverless cloud services.",
    techStack: ["AWS Lambda", "Docker", "Python", "S3", "Step Functions"],
    baseMilestones: [
      "Genomic Data Ingestion and Chunking",
      "Serverless Preprocessing Pipeline",
      "Variant Analysis and Result Aggregation",
      "Research Dashboard and Reporting",
      "Scalability and Cost Benchmarking"
    ]
  },
  {
    id: "75",
    title: "Thesis-Capstone Cloud Computing Federated Edge AI Observability and Policy Enforcement Platform",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A thesis-capstone cloud platform for computer science and information technology students that monitors federated edge AI workloads, enforces deployment policies, tracks model drift, and aggregates observability data across distributed cloud and edge environments.",
    techStack: ["Kubernetes", "Python", "Grafana", "Prometheus", "Terraform"],
    baseMilestones: [
      "Federated Edge Topology and Policy Design",
      "Observability Metrics Collection Pipeline",
      "Deployment Policy and Access Control Engine",
      "Model Drift Monitoring Dashboard",
      "Distributed Testing and Stress Simulation"
    ]
  },
  {
    id: "76",
    title: "Thesis-Capstone Cloud Computing Quantum-Safe Key Management and Automated Rotation Platform",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A thesis-capstone cloud platform for computer science and information technology students that generates, rotates, inventories, and audits cryptographic keys across cloud services using quantum-safe policy controls and automated compliance workflows.",
    techStack: ["Terraform", "Kubernetes", "Python", "HashiCorp Vault", "AWS"],
    baseMilestones: [
      "Key Inventory and Risk Classification",
      "Quantum-Safe Rotation Policy Design",
      "Automated Provisioning and Rotation Pipeline",
      "Compliance Audit Dashboard",
      "Load Testing and Failure Recovery Simulation"
    ]
  },
  {
    id: "77",
    title: "Thesis-Capstone Cloud Computing Distributed Secrets Governance and Dynamic Access Brokering Platform",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A thesis-capstone cloud platform for computer science and information technology students that manages distributed secrets, issues time-bound access brokers, enforces least-privilege policies, and audits credential usage across multi-tenant cloud workloads.",
    techStack: ["Kubernetes", "Terraform", "HashiCorp Vault", "Python", "AWS"],
    baseMilestones: [
      "Secrets Inventory and Tenant Segmentation",
      "Dynamic Access Broker Design",
      "Policy Engine and Lease Rotation Workflow",
      "Audit Trail and Usage Monitoring Dashboard",
      "Security Hardening and Abuse Simulation"
    ]
  },
  {
    id: "78",
    title: "Thesis-Capstone Cloud Computing Workload Cost Anomaly Detection and Auto-Mitigation Platform",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A thesis-capstone cloud platform for computer science and information technology students that monitors cloud spend, detects unusual workload cost spikes, correlates infrastructure events, and automatically triggers mitigation workflows across multi-account environments.",
    techStack: ["Python", "Kubernetes", "Terraform", "Grafana", "AWS"],
    baseMilestones: [
      "Cloud Spend Telemetry Ingestion",
      "Cost Anomaly Detection Model",
      "Event Correlation and Root-Cause Mapping",
      "Auto-Mitigation Workflow Engine",
      "Cost Dashboard and Simulation Testing"
    ]
  },
  {
    id: "79",
    title: "Thesis-Capstone Cloud Computing Confidential Data Clean Room Collaboration Platform",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A thesis-capstone cloud platform for computer science and information technology students that enables privacy-preserving collaboration on sensitive datasets through policy-controlled clean rooms, encrypted computation, and auditable access workflows.",
    techStack: ["Kubernetes", "Terraform", "Python", "AWS", "PostgreSQL"],
    baseMilestones: [
      "Clean Room Architecture and Access Policy Design",
      "Encrypted Dataset Ingestion Pipeline",
      "Policy-Controlled Query and Collaboration Engine",
      "Audit Dashboard and Access Review",
      "Privacy Testing and Adversarial Simulation"
    ]
  },
  {
    id: "80",
    title: "Thesis-Capstone Cloud Computing Digital Twin Orchestration and Simulation Scheduling Platform",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A thesis-capstone cloud platform for computer science and information technology students that orchestrates distributed digital twins, schedules simulation workloads, synchronizes state across cloud regions, and provides a unified control layer for complex systems modeling.",
    techStack: ["Kubernetes", "Docker", "Python", "Terraform", "AWS"],
    baseMilestones: [
      "Digital Twin State Model Design",
      "Simulation Scheduling and Queue Management",
      "Multi-Region Synchronization Layer",
      "Control Dashboard and Scenario Viewer",
      "Performance Benchmarking and Stress Testing"
    ]
  },
  {
    id: "81",
    title: "Thesis-Capstone Cloud Computing Cloud-Native Graph Analytics and Relationship Mining Platform",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A thesis-capstone cloud platform for computer science and information technology students that ingests large relationship datasets, runs distributed graph analytics jobs, discovers hidden network patterns, and visualizes insights across elastic cloud infrastructure.",
    techStack: ["Kubernetes", "Python", "Neo4j", "Terraform", "AWS"],
    baseMilestones: [
      "Graph Data Ingestion and Schema Design",
      "Distributed Analytics Pipeline Setup",
      "Relationship Mining and Pattern Detection",
      "Insight Visualization Dashboard",
      "Scalability and Performance Testing"
    ]
  },
  {
    id: "82",
    title: "Thesis-Capstone Cloud Computing Edge-Cloud Policy Orchestration for Industrial IoT Fleets",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A thesis-capstone cloud platform for computer science and information technology students that coordinates policy-driven deployments, telemetry routing, and fleet-wide configuration updates across industrial IoT edge nodes and cloud control planes.",
    techStack: ["Kubernetes", "Terraform", "Python", "MQTT", "AWS"],
    baseMilestones: [
      "Fleet Policy Model and Device Registry",
      "Edge Telemetry Routing Pipeline",
      "Cloud Control Plane and Configuration Engine",
      "Operations Dashboard and Alerting Layer",
      "Resilience and Failure Simulation"
    ]
  },
  {
    id: "83",
    title: "Thesis-Capstone Cloud Computing Zero-Trust Data Brokerage and Cross-Organization Workflow Federation Platform",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A thesis-capstone cloud platform for computer science and information technology students that brokers secure data exchange between organizations, federates approval workflows, enforces zero-trust access policies, and audits every cross-tenant request in real time.",
    techStack: ["Kubernetes", "Terraform", "Python", "PostgreSQL", "AWS"],
    baseMilestones: [
      "Cross-Organization Trust Model Design",
      "Workflow Federation and Approval Routing",
      "Zero-Trust Policy Engine Implementation",
      "Audit and Monitoring Dashboard",
      "Security Testing and Adversarial Simulation"
    ]
  },
  {
    id: "84",
    title: "Thesis-Capstone Cloud Computing Multi-Tenant AI Model Serving Governance and SLA Enforcement Platform",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A thesis-capstone cloud platform for computer science and information technology students that serves AI models for multiple tenants, enforces service-level guarantees, isolates workloads, and tracks inference usage, latency, and policy violations across cloud regions.",
    techStack: ["Kubernetes", "Docker", "Python", "Prometheus", "AWS"],
    baseMilestones: [
      "Tenant Isolation and Routing Architecture",
      "Model Serving and Version Governance",
      "SLA Enforcement and Quota Management",
      "Inference Observability Dashboard",
      "Load Testing and Violation Simulation"
    ]
  },
  {
    id: "85",
    title: "Thesis-Capstone Cloud Computing Regulated Data Disaster Recovery and Immutable Backup Compliance Platform",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A thesis-capstone cloud platform for computer science and information technology students that protects regulated data with immutable backups, geo-separated recovery workflows, retention policies, and compliance-aware restore validation across cloud regions.",
    techStack: ["Kubernetes", "Terraform", "Python", "AWS", "S3"],
    baseMilestones: [
      "Regulated Data Classification and Retention Rules",
      "Immutable Backup Pipeline Design",
      "Geo-Separated Restore Orchestration",
      "Compliance Audit and Recovery Dashboard",
      "Disaster Recovery Drill and Validation"
    ]
  },
  {
    id: "86",
    title: "Thesis-Capstone Cloud Computing Cloud-Native Data Lake Governance and Lineage Automation Platform",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A thesis-capstone cloud platform for computer science and information technology students that governs a cloud-native data lake, automates lineage tracking, enforces access policies, and validates data quality across streaming and batch pipelines.",
    techStack: ["Kubernetes", "Terraform", "Python", "AWS", "PostgreSQL"],
    baseMilestones: [
      "Data Lake Zone and Governance Model",
      "Automated Lineage Capture Pipeline",
      "Access Policy and Quality Rule Engine",
      "Governance Dashboard and Alerting Layer",
      "Pipeline Validation and Audit Simulation"
    ]
  },
  {
    id: "87",
    title: "Thesis-Capstone Cloud Computing Multi-Cloud Service Mesh Traffic Shadowing and Progressive Delivery Controller",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A thesis-capstone cloud platform for computer science and information technology students that manages service mesh traffic shadowing, blue-green rollouts, canary analysis, and cross-cloud progressive delivery with policy-driven safety checks.",
    techStack: ["Kubernetes", "Istio", "Terraform", "Prometheus", "AWS"],
    baseMilestones: [
      "Service Mesh Topology and Policy Design",
      "Traffic Shadowing and Mirroring Pipeline",
      "Canary Analysis and Rollout Automation",
      "Delivery Control Dashboard and Alerts",
      "Chaos Testing and Safety Validation"
    ]
  },
  {
    id: "88",
    title: "Thesis-Capstone Cloud Computing Ephemeral Research Sandbox and Reproducibility Orchestration Platform",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A thesis-capstone cloud platform for computer science and information technology students that provisions short-lived research sandboxes, captures full execution provenance, snapshots environments, and replays experiments for reproducible computing workflows.",
    techStack: ["Kubernetes", "Terraform", "Python", "Docker", "AWS"],
    baseMilestones: [
      "Sandbox Provisioning and Isolation Model",
      "Execution Provenance Capture Pipeline",
      "Environment Snapshot and Replay Workflow",
      "Reproducibility Dashboard and Audit Log",
      "Cleanup Automation and Stress Testing"
    ]
  },
  {
    id: "89",
    title: "Thesis-Capstone Cloud Computing HPC Burst Scheduling and Job Placement Orchestrator",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A thesis-capstone cloud platform for computer science and information technology students that bursts high-performance computing jobs from on-premises systems into cloud clusters, optimizes placement, tracks queue health, and balances cost against execution time.",
    techStack: ["Kubernetes", "Terraform", "Python", "Slurm", "AWS"],
    baseMilestones: [
      "Workload Profiling and Burst Policy Design",
      "Job Queue Federation and Placement Logic",
      "Cloud Cluster Provisioning Pipeline",
      "Cost and Performance Monitoring Dashboard",
      "Load Testing and Burst Simulation"
    ]
  },
  {
    id: "90",
    title: "Thesis-Capstone Cloud Computing Policy-Based Multi-Account Security Baseline Orchestration Platform",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A thesis-capstone cloud platform for computer science and information technology students that enforces security baselines across multiple cloud accounts, automates drift detection, remediates misconfigurations, and maintains compliance-ready audit evidence.",
    techStack: ["Terraform", "Python", "AWS", "Kubernetes", "PostgreSQL"],
    baseMilestones: [
      "Security Baseline and Policy Definition",
      "Multi-Account Drift Detection Pipeline",
      "Automated Remediation Workflow",
      "Compliance Evidence and Audit Dashboard",
      "Misconfiguration Simulation and Hardening"
    ]
  },
  {
    id: "91",
    title: "Thesis-Capstone Cloud Computing Distributed Event Replay and Time-Travel Debugging Platform",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A thesis-capstone cloud platform for computer science and information technology students that captures distributed service events, reconstructs execution timelines, replays failures in isolated environments, and helps debug complex cloud-native incidents.",
    techStack: ["Kubernetes", "Terraform", "Python", "OpenTelemetry", "AWS"],
    baseMilestones: [
      "Event Capture and Correlation Pipeline",
      "Timeline Reconstruction Engine",
      "Isolated Replay Environment Orchestration",
      "Incident Analysis Dashboard",
      "Failure Injection and Verification Testing"
    ]
  },
  {
    id: "92",
    title: "Thesis-Capstone Cloud Computing Sovereign Data Residency and Geo-Fenced Workload Routing Platform",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A thesis-capstone cloud platform for computer science and information technology students that enforces geographic data residency rules, routes workloads to approved regions, validates cross-border access policies, and maintains audit evidence for compliance-sensitive deployments.",
    techStack: ["Kubernetes", "Terraform", "Python", "AWS", "PostgreSQL"],
    baseMilestones: [
      "Residency Policy and Region Classification",
      "Geo-Fenced Routing and Placement Engine",
      "Cross-Border Access Validation",
      "Compliance Audit Dashboard and Logs",
      "Policy Drift and Boundary Testing"
    ]
  },
  {
    id: "93",
    title: "Thesis-Capstone Cloud Computing Distributed Backup Chain Verification and Restore Integrity Platform",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A thesis-capstone cloud platform for computer science and information technology students that verifies backup chain integrity across regions, audits restore points, detects tampering, and validates end-to-end recovery consistency for critical cloud data.",
    techStack: ["Kubernetes", "Terraform", "Python", "AWS", "S3"],
    baseMilestones: [
      "Backup Chain and Retention Model",
      "Cross-Region Integrity Verification",
      "Restore Point Validation Workflow",
      "Audit and Recovery Dashboard",
      "Tamper Detection and Drill Testing"
    ]
  },
  {
    id: "94",
    title: "Thesis-Capstone Cloud Computing WebAssembly-Based Serverless Function Orchestrator and Cold-Start Optimizer",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A thesis-capstone cloud platform for computer science and information technology students that orchestrates lightweight WebAssembly-based serverless functions, minimizes cold-start latency through pre-warming policies, isolates workloads, and monitors resource consumption.",
    techStack: ["Kubernetes", "WebAssembly", "Rust", "Prometheus", "AWS"],
    baseMilestones: [
      "WebAssembly Runtime and Isolation Model Design",
      "Cold-Start Optimization and Pre-Warming Engine",
      "Function Orchestration and Routing Pipeline",
      "Resource Monitoring and Metrics Dashboard",
      "Load Testing and Performance Benchmarking"
    ]
  },
  {
    id: "95",
    title: "Thesis-Capstone Cloud Computing Green Cloud Workload Scheduler and Carbon-Aware Optimizer",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A thesis-capstone cloud platform for computer science and information technology students that schedules workloads across cloud regions based on real-time grid carbon intensity, optimizes resource allocation to minimize carbon footprint, and forecasts regional green energy availability.",
    techStack: ["Kubernetes", "Prometheus", "Python", "Terraform", "AWS"],
    baseMilestones: [
      "Carbon Intensity Data Integration and Forecasting",
      "Carbon-Aware Workload Scheduling Algorithm",
      "Multi-Region Cluster Federation Setup",
      "Energy & Emissions Monitoring Dashboard",
      "Verification and Carbon Reduction Analysis"
    ]
  },
  {
    id: "96",
    title: "Thesis-Capstone Cloud Computing Multi-Cloud Object Storage Federation and Deduplication Gateway",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A thesis-capstone cloud platform for computer science and information technology students that federates object storage across multiple cloud providers, performs client-side and server-side deduplication to reduce cost, and secures files with distributed erasure coding.",
    techStack: ["MinIO", "Kubernetes", "Rust", "Terraform", "AWS"],
    baseMilestones: [
      "Storage Federation and API Translation Layer",
      "Data Deduplication and Hashing Engine",
      "Distributed Erasure Coding Protocol",
      "Cost and Storage Metrics Dashboard",
      "Performance Benchmarking and Failure Simulation"
    ]
  },
  {
    id: "97",
    title: "Thesis-Capstone Cloud Computing Deep Learning Workload Scheduler and Spot Instance Manager",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A thesis-capstone cloud platform for computer science and information technology students that schedules deep learning training workloads, manages spot instance lifecycle events, checkpoint-resumes models, and optimizes infrastructure cost on AWS.",
    techStack: ["Kubernetes", "Ray", "Python", "Terraform", "AWS"],
    baseMilestones: [
      "Spot Instance Interruption Handling Engine",
      "Workload Checkpoint and Resume Framework",
      "GPU Scheduler and Queue Management",
      "Cost and Spot Interruption Dashboard",
      "Simulation and Spot Reclamation Testing"
    ]
  },
  {
    id: "98",
    title: "Thesis-Capstone Cloud Computing Serverless Database Connection Pooler and Access Gateway",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A thesis-capstone cloud platform for computer science and information technology students that acts as a low-latency connection pooler and query routing gateway for serverless functions accessing relational databases across regions.",
    techStack: ["Go", "Kubernetes", "PostgreSQL", "Terraform", "AWS"],
    baseMilestones: [
      "Connection Pooling and Session State Management",
      "Multi-Region Query Routing and Cache Strategy",
      "SQL Protocol Parsing and Execution Engine",
      "Gateway Observability and Metrics Dashboard",
      "Load Testing and Connection Spike Simulation"
    ]
  },
  {
    id: "99",
    title: "Thesis-Capstone Cloud Computing Infrastructure-as-Code Drift Detection and Compliance Remediation Engine",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A thesis-capstone cloud platform for computer science and information technology students that scans cloud infrastructures, detects drift from Terraform configurations, evaluates security policies, and automatically applies auto-healing remediations.",
    techStack: ["Terraform", "Kubernetes", "OPA Gatekeeper", "Python", "AWS"],
    baseMilestones: [
      "State Configuration Parsing and Ingestion",
      "Real-Time Resource Drift Discovery Pipeline",
      "Open Policy Agent (OPA) Evaluation Integration",
      "Auto-Remediation and Healing Workflows",
      "Compliance Auditing and Dashboard UI"
    ]
  },
  {
    id: "100",
    title: "Thesis-Capstone Cloud Computing Serverless Multi-Region Event Broker and Schema Registry Platform",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A thesis-capstone cloud platform for computer science and information technology students that acts as a multi-region, low-latency serverless event broker with automatic schema registration, evolution checks, and policy-driven routing rules.",
    techStack: ["Apache Kafka", "Kubernetes", "Go", "Terraform", "AWS"],
    baseMilestones: [
      "Event Broker and Multi-Region Replicator",
      "Schema Registry and Evolution Validator",
      "Policy-Driven Event Routing Engine",
      "Event Stream Monitoring & Audit Log",
      "Load Testing and Latency Benchmarking"
    ]
  },
  {
    id: "101",
    title: "Thesis-Capstone Cloud Computing Serverless Media Transcoding and Dynamic Content Delivery Platform",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A serverless cloud architecture that automatically transcodes uploaded video assets into multiple resolutions and formats, dynamically packages streams, and distributes content globally with low latency.",
    techStack: ["AWS Lambda", "AWS Elemental MediaConvert", "S3", "CloudFront", "Python"],
    baseMilestones: [
      "Asset Ingestion and Trigger Setup",
      "Transcoding Profile Configuration",
      "Dynamic Packaging and DRM Integration",
      "CDN Distribution and Edge Caching",
      "Performance and Cost Optimization Analysis"
    ]
  },
  {
    id: "102",
    title: "Thesis-Capstone Cloud Computing Multi-Region Kubernetes Service Mesh Traffic Orchestrator",
    category: "Cloud Computing",
    baseComplexity: "Expert",
    description: "A platform that deploys and configures a service mesh across multiple Kubernetes clusters in different cloud regions, managing global traffic routing, failover, and secure inter-cluster communications.",
    techStack: ["Kubernetes", "Istio", "Terraform", "AWS", "Azure"],
    baseMilestones: [
      "Multi-Cluster Infrastructure Provisioning",
      "Service Mesh Installation and Trust Federation",
      "Global Load Balancing and Traffic Routing Policies",
      "Automated Region Failover Testing",
      "Observability and Telemetry Integration"
    ]
  },
  {
    id: "103",
    title: "Thesis-Capstone Cloud Computing Cloud-Native Microservices Security Auditing and Compliance Engine",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A compliance engine that continuously audits cloud resources, scans running containers for vulnerabilities, checks IAM configurations against security baselines, and reports drift in real-time.",
    techStack: ["Kubernetes", "Trivy", "OPA Gatekeeper", "AWS", "Next.js"],
    baseMilestones: [
      "Security Policy and Audit Schema Definition",
      "Container Image Vulnerability Scanning Pipeline",
      "IAM and Infrastructure Drift Auditing",
      "Compliance Dashboard Development",
      "Real-Time Alert and Remediation Workflows"
    ]
  },
  {
    id: "104",
    title: "Thesis-Capstone Cloud Computing Serverless Event-Driven IoT Data Processing Pipeline",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "An event-driven pipeline that ingests high-throughput IoT telemetry data, cleans and enriches the data stream in real-time, and stores aggregates in a time-series database for analytics.",
    techStack: ["AWS IoT Core", "Kinesis", "AWS Lambda", "Timestream", "Node.js"],
    baseMilestones: [
      "IoT Device Connectivity and Ingestion Layer",
      "Stream Processing and Enrichment Logic",
      "Time-Series Database Schema Design",
      "Real-Time Analytics Dashboard",
      "Scalability and Throughput Stress Testing"
    ]
  },
  {
    id: "105",
    title: "Thesis-Capstone Cloud Computing Multi-Tenant Cloud Cost Allocation and Optimization Dashboard",
    category: "Cloud Computing",
    baseComplexity: "Medium",
    description: "A cost management dashboard that aggregates billing data across multi-tenant cloud environments, attributes usage costs to specific teams, and suggests optimization strategies for idle resources.",
    techStack: ["AWS Cost Explorer API", "Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    baseMilestones: [
      "Billing Data Ingestion and Normalization",
      "Cost Allocation and Tagging Rules",
      "Optimization Recommendation Engine",
      "Interactive Financial Analytics UI",
      "Report Generation and Export Tools"
    ]
  },
  {
    id: "106",
    title: "Thesis-Capstone Cloud Computing Hybrid Cloud Container Migration and Workload Portability Platform",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A cloud platform that automates the assessment, containerization, and live migration of legacy workloads between on-premises infrastructure and multiple public cloud providers while preserving data integrity and minimizing downtime.",
    techStack: ["Kubernetes", "Docker", "Terraform", "AWS", "Azure"],
    baseMilestones: [
      "Legacy Workload Discovery and Assessment",
      "Containerization and Dependency Mapping",
      "Cross-Cloud Migration Pipeline Design",
      "Live Migration Orchestration and Cutover",
      "Post-Migration Validation and Rollback Testing"
    ]
  },
  {
    id: "107",
    title: "Thesis-Capstone Cloud Computing Autonomous Cloud Infrastructure Self-Healing and Incident Response Orchestrator",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A self-healing orchestrator that monitors cloud infrastructure health, detects anomalies across services, automatically executes runbook-driven remediation workflows, and escalates unresolved incidents to on-call teams.",
    techStack: ["Kubernetes", "Prometheus", "PagerDuty API", "Terraform", "Python"],
    baseMilestones: [
      "Infrastructure Health Monitoring and Alerting",
      "Anomaly Detection and Incident Classification",
      "Automated Runbook Execution Engine",
      "Escalation and On-Call Integration",
      "Chaos Engineering and Self-Healing Validation"
    ]
  },
  {
    id: "108",
    title: "Thesis-Capstone Cloud Computing Real-Time Multi-Cloud Log Aggregation and Threat Intelligence Platform",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A centralized log aggregation platform that collects, normalizes, and correlates security logs from multiple cloud providers, applies threat intelligence feeds, and surfaces actionable security insights through a unified SIEM dashboard.",
    techStack: ["Elasticsearch", "Logstash", "Kibana", "AWS", "Python"],
    baseMilestones: [
      "Multi-Cloud Log Collection and Normalization",
      "Threat Intelligence Feed Integration",
      "Correlation Rules and Detection Logic",
      "SIEM Dashboard and Alerting Interface",
      "Incident Replay and Forensics Toolkit"
    ]
  },
  {
    id: "109",
    title: "Thesis-Capstone Cloud Computing Intelligent Cloud Resource Right-Sizing and Auto-Scaling Advisor",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A resource optimization platform that continuously profiles cloud workloads, identifies over-provisioned and under-utilized instances, recommends right-sizing actions, and dynamically adjusts auto-scaling policies based on predictive demand forecasting.",
    techStack: ["AWS CloudWatch", "Kubernetes", "Python", "Grafana", "Terraform"],
    baseMilestones: [
      "Workload Profiling and Utilization Telemetry",
      "Right-Sizing Recommendation Algorithm",
      "Predictive Demand Forecasting Model",
      "Dynamic Auto-Scaling Policy Engine",
      "Savings Analysis Dashboard and Reporting"
    ]
  },
  {
    id: "110",
    title: "Thesis-Capstone Cloud Computing Distributed API Gateway with Rate Limiting and Usage Metering Platform",
    category: "Cloud Computing",
    baseComplexity: "High",
    description: "A distributed API gateway platform that enforces rate limiting, authentication, and usage metering across microservices deployed in multiple cloud regions, providing real-time analytics and billing integration for API consumers.",
    techStack: ["Kong", "Kubernetes", "Redis", "Prometheus", "Next.js"],
    baseMilestones: [
      "API Gateway Cluster and Routing Configuration",
      "Rate Limiting and Throttling Policy Engine",
      "Authentication and API Key Management",
      "Usage Metering and Billing Integration",
      "Real-Time Analytics Dashboard and Alerting"
    ]
  },
  {
    id: "111",
    title: "Thesis-Capstone Mobile Real-Time Multi-Language Video Conferencing and Translation App",
    category: "Mobile App",
    baseComplexity: "High",
    description: "A thesis-capstone mobile application for a 4-10 member team that enables real-time video conferencing with live speech-to-text translation across multiple languages, speaker identification, and meeting summarization powered by on-device and cloud AI models.",
    techStack: ["React Native", "WebRTC", "Firebase", "TypeScript", "Whisper API"],
    baseMilestones: [
      "WebRTC Video and Audio Pipeline Setup",
      "Real-Time Speech-to-Text Integration",
      "Multi-Language Translation Engine",
      "Speaker Identification and Meeting Notes",
      "Performance Optimization and Cross-Platform Testing"
    ]
  },
  {
    id: "112",
    title: "Thesis-Capstone Mobile Offline-First Emergency Medical Records and Field Triage App",
    category: "Mobile App",
    baseComplexity: "High",
    description: "A thesis-capstone mobile application for a 4-10 member team that enables paramedics and field responders to capture patient vitals, perform triage scoring, store encrypted medical records offline, and sync seamlessly when connectivity resumes in disaster or remote settings.",
    techStack: ["React Native", "WatermelonDB", "Firebase", "TypeScript", "Expo"],
    baseMilestones: [
      "Offline-First Database Architecture and Sync Engine",
      "Patient Intake and Vitals Capture Module",
      "Triage Scoring Algorithm and Priority Queue",
      "End-to-End Encryption and HIPAA Compliance Layer",
      "Connectivity Recovery and Conflict Resolution Testing"
    ]
  },
  {
    id: "113",
    title: "Thesis-Capstone Mobile AI-Powered Sign Language Interpreter and Communication Bridge App",
    category: "Mobile App",
    baseComplexity: "High",
    description: "A thesis-capstone mobile application for a 4-10 member team that uses on-device computer vision to recognize sign language gestures in real time, converts them to spoken text, and translates spoken language back into sign language animations for accessible two-way communication.",
    techStack: ["React Native", "TensorFlow Lite", "Expo", "TypeScript", "MediaPipe"],
    baseMilestones: [
      "Hand and Pose Landmark Detection Pipeline",
      "Sign Language Gesture Classification Model",
      "Real-Time Sign-to-Text Conversion Engine",
      "Text-to-Sign Animation Renderer",
      "Accessibility Testing and Model Accuracy Validation"
    ]
  },
  {
    id: "114",
    title: "Thesis-Capstone Mobile Blockchain-Verified Digital Evidence Collection and Chain-of-Custody App",
    category: "Mobile App",
    baseComplexity: "High",
    description: "A thesis-capstone mobile application for a 4-10 member team that captures photos, videos, and audio with tamper-proof metadata, anchors evidence hashes on-chain for chain-of-custody integrity, and provides a secure review portal for legal and forensic workflows.",
    techStack: ["React Native", "Expo", "Ethers.js", "Firebase", "TypeScript"],
    baseMilestones: [
      "Tamper-Proof Media Capture and Metadata Stamping",
      "On-Chain Evidence Hash Registration",
      "Chain-of-Custody Transfer and Audit Trail",
      "Secure Evidence Review and Export Portal",
      "Forensic Integrity Testing and Legal Compliance Validation"
    ]
  },
  {
    id: "115",
    title: "Thesis-Capstone Mobile Peer-to-Peer Encrypted Mesh Communication and Emergency Relay App",
    category: "Mobile App",
    baseComplexity: "High",
    description: "A thesis-capstone mobile application for a 4-10 member team that creates an ad-hoc mesh network between nearby devices using Bluetooth and Wi-Fi Direct, enabling encrypted messaging, file sharing, and SOS relay when cellular and internet connectivity is unavailable.",
    techStack: ["React Native", "Bridgefy SDK", "Expo", "TypeScript", "SQLite"],
    baseMilestones: [
      "Mesh Network Discovery and Peer Connection Layer",
      "End-to-End Encrypted Messaging Protocol",
      "Multi-Hop Message Relay and Routing Algorithm",
      "SOS Broadcast and Emergency Beacon Module",
      "Network Resilience and Range Testing"
    ]
  },
  {
    id: "116",
    title: "Thesis-Capstone Mobile Intelligent Indoor Navigation and Accessibility Wayfinding App",
    category: "Mobile App",
    baseComplexity: "High",
    description: "A thesis-capstone mobile application for a 4-10 member team that provides turn-by-turn indoor navigation using BLE beacons and visual positioning, with dedicated accessibility features for visually impaired users including haptic feedback, voice guidance, and obstacle alerts.",
    techStack: ["React Native", "Expo", "Firebase", "TypeScript", "ARCore"],
    baseMilestones: [
      "BLE Beacon Mapping and Indoor Positioning Engine",
      "Visual Positioning and AR Overlay Navigation",
      "Accessible Route Planning with Elevator and Ramp Priority",
      "Haptic Feedback and Voice-Guided Turn-by-Turn Directions",
      "Multi-Floor Campus Pilot Testing and Calibration"
    ]
  },
  {
    id: "117",
    title: "Thesis-Capstone Mobile Multi-Sensor Environmental Pollution Tracker and Community Reporting App",
    category: "Mobile App",
    baseComplexity: "High",
    description: "A thesis-capstone mobile application for a 4-10 member team that connects to portable air quality and noise sensors via Bluetooth, aggregates pollution data with GPS coordinates, generates heatmaps, and enables citizens to file community reports to local authorities.",
    techStack: ["React Native", "Expo", "Firebase", "TypeScript", "Mapbox"],
    baseMilestones: [
      "Bluetooth Sensor Pairing and Data Ingestion",
      "Geo-Tagged Pollution Data Aggregation Pipeline",
      "Real-Time Heatmap Visualization and Trend Analytics",
      "Community Incident Reporting and Authority Notification",
      "Sensor Calibration and Field Deployment Validation"
    ]
  },
  {
    id: "118",
    title: "Thesis-Capstone Mobile Wearable-Integrated Elderly Fall Detection and Caregiver Alert App",
    category: "Mobile App",
    baseComplexity: "High",
    description: "A thesis-capstone mobile application for a 4-10 member team that integrates with smartwatch accelerometer and gyroscope data to detect falls in real time, sends automatic alerts to designated caregivers with GPS location, and maintains a health event timeline for clinical review.",
    techStack: ["React Native", "Expo", "Firebase", "TypeScript", "HealthKit"],
    baseMilestones: [
      "Wearable Sensor Data Stream and Pairing Module",
      "Fall Detection Algorithm with False-Positive Filtering",
      "Automated Caregiver Alert and GPS Location Sharing",
      "Health Event Timeline and Clinical Report Export",
      "Real-World Fall Simulation and Accuracy Benchmarking"
    ]
  },
  {
    id: "119",
    title: "Thesis-Capstone Mobile Collaborative AR Campus Tour and Interactive Learning Experience App",
    category: "Mobile App",
    baseComplexity: "High",
    description: "A thesis-capstone mobile application for a 4-10 member team that overlays augmented reality content on campus landmarks, enables collaborative group tours with shared AR annotations, embeds interactive quizzes and historical timelines, and supports multi-user sessions via real-time sync.",
    techStack: ["React Native", "Expo", "ARCore", "Firebase", "TypeScript"],
    baseMilestones: [
      "AR Scene Anchoring and Landmark Registration",
      "Interactive Content Overlay and Quiz Engine",
      "Multi-User Session Sync and Shared Annotations",
      "Tour Route Builder and Progress Tracking",
      "Campus Pilot Deployment and User Experience Testing"
    ]
  },
  {
    id: "120",
    title: "Thesis-Capstone Mobile Smart City Transit Planner and Multimodal Route Optimization App",
    category: "Mobile App",
    baseComplexity: "High",
    description: "A thesis-capstone mobile application for a 4-10 member team that aggregates real-time transit feeds, ride-share availability, bike-share stations, and pedestrian routes to compute optimal multimodal journeys, predict delays using machine learning, and provide dynamic rerouting with accessibility-aware options.",
    techStack: ["React Native", "Expo", "Firebase", "TypeScript", "Google Maps API"],
    baseMilestones: [
      "Transit Feed Aggregation and Real-Time Data Pipeline",
      "Multimodal Route Computation and Optimization Algorithm",
      "Delay Prediction Model and Dynamic Rerouting Engine",
      "Accessibility-Aware Journey Planner and UI",
      "City-Scale Load Testing and Commuter Usability Validation"
    ]
  },
  {
    id: "121",
    title: "IoT-Driven Autonomous Swarm Robotics for Precision Agriculture",
    category: "Internet of Things",
    baseComplexity: "Expert",
    description: "A coordinated swarm of IoT-enabled terrestrial and aerial robots for targeted pesticide application, soil analysis, and real-time crop health monitoring using edge computing.",
    techStack: [
      "ROS 2",
      "Python",
      "MQTT",
      "C++",
      "NVIDIA Jetson"
    ],
    baseMilestones: [
      "Swarm Communication Protocol Design",
      "Edge-AI Crop Analysis Integration",
      "Autonomous Path Planning and Obstacle Avoidance",
      "Real-Time Telemetry Dashboard",
      "Field Testing and Hardware Calibration"
    ]
  },
  {
    id: "122",
    title: "Edge-AI Enabled Predictive Maintenance for Industrial Turbines",
    category: "Internet of Things",
    baseComplexity: "High",
    description: "An industrial IoT platform that aggregates high-frequency vibration and acoustic data from gas turbines, running localized deep learning models to predict catastrophic failures.",
    techStack: [
      "C++",
      "TensorFlow Lite",
      "Apache Kafka",
      "Go",
      "InfluxDB"
    ],
    baseMilestones: [
      "High-Frequency Sensor Integration",
      "Edge Model Training and Quantization",
      "Data Ingestion and Stream Processing",
      "Anomaly Alerting Engine",
      "System Scalability and Stress Testing"
    ]
  },
  {
    id: "123",
    title: "Blockchain-Secured IoT Supply Chain Provenance Network",
    category: "Internet of Things",
    baseComplexity: "Expert",
    description: "A secure supply chain network utilizing tamper-proof IoT sensors with hardware roots of trust, anchoring temperature and location data directly to a distributed ledger.",
    techStack: [
      "Solidity",
      "Rust",
      "Hyperledger Fabric",
      "Node.js",
      "ESP32"
    ],
    baseMilestones: [
      "Hardware Root-of-Trust Integration",
      "Smart Contract Oracle Development",
      "Secure Sensor Telemetry Pipeline",
      "Provenance Tracking Dashboard",
      "End-to-End Cryptographic Audit"
    ]
  },
  {
    id: "124",
    title: "Smart Grid Demand Response and Virtual Power Plant Orchestrator",
    category: "Internet of Things",
    baseComplexity: "Expert",
    description: "An IoT orchestrator that aggregates distributed energy resources (solar, batteries, EVs) into a Virtual Power Plant, responding to grid load dynamically in real-time.",
    techStack: [
      "Python",
      "Kubernetes",
      "PostgreSQL",
      "React",
      "OpenADR"
    ],
    baseMilestones: [
      "DER (Distributed Energy Resource) Protocol Integration",
      "Demand Response Logic Engine",
      "Grid Load Forecasting Model",
      "VPP Control Dashboard",
      "Grid Simulation and Load Testing"
    ]
  },
  {
    id: "125",
    title: "5G-Enabled Remote Robotic Surgery Telemetry Pipeline",
    category: "Internet of Things",
    baseComplexity: "Expert",
    description: "An ultra-low latency IoT pipeline over 5G networks, transmitting high-fidelity haptic feedback and 4K video streams to enable remote robotic surgery safely.",
    techStack: [
      "C++",
      "WebRTC",
      "Rust",
      "5G Core",
      "Kubernetes"
    ],
    baseMilestones: [
      "Ultra-Low Latency Protocol Optimization",
      "Haptic Feedback Telemetry Engine",
      "Real-Time Video Encoding Pipeline",
      "Failover and Safety Subsystems",
      "Network Jitter and Packet Loss Simulation"
    ]
  },
  {
    id: "126",
    title: "IoT-Based Autonomous Underwater Vehicle for Pipeline Inspection",
    category: "Internet of Things",
    baseComplexity: "Expert",
    description: "An untethered AUV that utilizes acoustic IoT modems and edge computer vision to autonomously inspect subsea oil and gas pipelines for leaks and structural integrity.",
    techStack: [
      "C++",
      "ROS 2",
      "Python",
      "OpenCV",
      "Acoustic Modems"
    ],
    baseMilestones: [
      "Acoustic Communication Protocol Setup",
      "Computer Vision Defect Detection",
      "Autonomous Subsea Navigation",
      "Sensor Fusion (Sonar and Optical)",
      "Deep Water Pressure and Navigation Simulation"
    ]
  },
  {
    id: "127",
    title: "Federated Learning on Edge IoT Devices for Predictive Healthcare",
    category: "Internet of Things",
    baseComplexity: "High",
    description: "A privacy-preserving IoT network of wearable health monitors that collaboratively train anomaly detection models without transmitting raw patient data to the cloud.",
    techStack: [
      "Python",
      "PySyft",
      "TensorFlow Federated",
      "C++",
      "React Native"
    ],
    baseMilestones: [
      "Wearable Sensor Integration",
      "Federated Learning Architecture Design",
      "Local Model Training and Weight Aggregation",
      "Privacy and Security Hardening",
      "Clinical Accuracy Validation"
    ]
  },
  {
    id: "128",
    title: "Digital Twin for Smart Manufacturing and Real-Time IoT Telemetry",
    category: "Internet of Things",
    baseComplexity: "Expert",
    description: "A highly complex digital twin platform that mirrors an entire factory floor in 3D, synchronized with sub-second latency IoT data for simulation and predictive maintenance.",
    techStack: [
      "Unity",
      "C#",
      "Node.js",
      "MQTT",
      "TimescaleDB"
    ],
    baseMilestones: [
      "3D Factory Floor Modeling",
      "IoT Telemetry Ingestion Engine",
      "Digital Twin Synchronization Logic",
      "Simulation and What-If Analysis Tools",
      "Latency and Synchronization Stress Testing"
    ]
  },
  {
    id: "129",
    title: "IoT-Driven Early Warning System for Seismic and Volcanic Activity",
    category: "Internet of Things",
    baseComplexity: "High",
    description: "A distributed network of deep-earth sensors and gas analyzers that use edge computing to detect pre-seismic micro-fractures and volcanic gas emissions.",
    techStack: [
      "C++",
      "Python",
      "LoRaWAN",
      "AWS IoT",
      "Grafana"
    ],
    baseMilestones: [
      "Sensor Array Deployment and Calibration",
      "Edge Anomaly Detection Algorithms",
      "Long-Range Telemetry (LoRaWAN) Setup",
      "Early Warning Alert Orchestrator",
      "False Positive Reduction and Tuning"
    ]
  },
  {
    id: "130",
    title: "Autonomous Drone-Based IoT Sensor Deployment System",
    category: "Internet of Things",
    baseComplexity: "High",
    description: "A drone-based system capable of autonomously navigating hazardous environments (e.g., post-wildfire zones) to airdrop and activate mesh-networked environmental sensors.",
    techStack: [
      "ROS 2",
      "PX4",
      "Python",
      "C++",
      "Mesh Networking"
    ],
    baseMilestones: [
      "Drone Flight Controller Integration",
      "Sensor Drop Mechanism and Activation",
      "Mesh Network Auto-Configuration",
      "Path Planning in Unmapped Terrain",
      "Hardware Reliability and Drop Testing"
    ]
  },
  {
    id: "131",
    title: "IoT Mesh Network for Deep-Mine Tracking and Safety Orchestration",
    category: "Internet of Things",
    baseComplexity: "Expert",
    description: "A resilient subterranean IoT mesh network providing real-time tracking of miners, air quality monitoring, and automated ventilation control in environments without GPS or standard RF.",
    techStack: [
      "C",
      "Zephyr RTOS",
      "Ultra-Wideband (UWB)",
      "Python",
      "React"
    ],
    baseMilestones: [
      "UWB Positioning and Mesh Architecture",
      "Air Quality and Gas Sensor Integration",
      "Automated Ventilation Actuation",
      "Real-Time Subterranean Dashboard",
      "System Resilience and Node-Failure Testing"
    ]
  },
  {
    id: "132",
    title: "Smart Port Automation using IoT, Digital Twins, and 5G",
    category: "Internet of Things",
    baseComplexity: "Expert",
    description: "An orchestration platform for shipping ports that integrates IoT data from autonomous cranes, container tracking sensors, and automated guided vehicles (AGVs) for optimized logistics.",
    techStack: [
      "Java",
      "Spring Boot",
      "Kafka",
      "Python",
      "Vue.js"
    ],
    baseMilestones: [
      "AGV and Crane Telemetry Ingestion",
      "Container Tracking using RFID/IoT",
      "Port Logistics Optimization Engine",
      "3D Digital Twin Command Center",
      "End-to-End Port Simulation"
    ]
  },
  {
    id: "133",
    title: "IoT-Enabled Bionic Prosthetics with Edge-Based Neural Interface",
    category: "Internet of Things",
    baseComplexity: "Expert",
    description: "A highly advanced prosthetic limb that uses edge AI to decode myoelectric signals, adjusting grip and movement in real-time while streaming performance data to clinicians via IoT.",
    techStack: [
      "C++",
      "TensorFlow Lite",
      "Bluetooth LE",
      "Python",
      "Next.js"
    ],
    baseMilestones: [
      "Myoelectric Sensor Data Acquisition",
      "Edge-AI Signal Decoding and Motor Control",
      "BLE Telemetry and OTA Updates",
      "Clinician Analytics Dashboard",
      "Patient Trial and Feedback Loop"
    ]
  },
  {
    id: "134",
    title: "Real-Time AI-Driven Water Distribution and Leak Detection Network",
    category: "Internet of Things",
    baseComplexity: "High",
    description: "A city-scale IoT network utilizing acoustic sensors and smart valves to detect leaks in water pipelines, isolate bursts autonomously, and optimize pump pressure.",
    techStack: [
      "Go",
      "Python",
      "InfluxDB",
      "LoRaWAN",
      "React"
    ],
    baseMilestones: [
      "Acoustic Leak Detection Algorithms",
      "Smart Valve Actuation Protocol",
      "Pump Pressure Optimization Logic",
      "City-Wide Telemetry Dashboard",
      "Hydraulic Simulation and Testing"
    ]
  },
  {
    id: "135",
    title: "Cognitive IoT System for Dynamic Urban Traffic Flow Orchestration",
    category: "Internet of Things",
    baseComplexity: "Expert",
    description: "An intelligent traffic management system that integrates data from connected vehicles (V2I), smart traffic lights, and pedestrian sensors to reduce congestion using reinforcement learning.",
    techStack: [
      "Python",
      "Ray RLlib",
      "Apache Flink",
      "C++",
      "PostgreSQL"
    ],
    baseMilestones: [
      "V2I (Vehicle-to-Infrastructure) Integration",
      "Real-Time Stream Processing Pipeline",
      "Reinforcement Learning Traffic Optimizer",
      "Dynamic Traffic Light Actuation",
      "City-Scale Traffic Simulation"
    ]
  },
  {
    id: "136",
    title: "IoT-Powered Automated Hydroponic Vertical Farming Infrastructure",
    category: "Internet of Things",
    baseComplexity: "High",
    description: "An industrial-scale vertical farm orchestration system that manages nutrient dosing, climate control, and lighting spectrums dynamically based on plant growth stage computer vision.",
    techStack: [
      "Python",
      "C++",
      "OpenCV",
      "GraphQL",
      "React"
    ],
    baseMilestones: [
      "Climate and Nutrient Sensor Integration",
      "Computer Vision for Growth Tracking",
      "Automated Dosing and Control Logic",
      "Farm Operations Dashboard",
      "Yield Optimization and Tuning"
    ]
  },
  {
    id: "137",
    title: "Space-Based IoT Constellation for Global Asset Tracking",
    category: "Internet of Things",
    baseComplexity: "Expert",
    description: "A low-earth orbit (LEO) satellite IoT platform that connects remote terrestrial sensors (e.g., maritime containers, wildlife trackers) in areas without cellular coverage.",
    techStack: [
      "C",
      "Python",
      "Kubernetes",
      "PostgreSQL",
      "Go"
    ],
    baseMilestones: [
      "Satellite Communication Protocol",
      "Low-Power Ground Sensor Design",
      "Cloud Telemetry Ingestion Pipeline",
      "Global Tracking and Analytics Dashboard",
      "Latency and Constellation Pass Simulation"
    ]
  },
  {
    id: "138",
    title: "Hyper-Connected Smart Hospital Ecosystem with Edge-AI Analytics",
    category: "Internet of Things",
    baseComplexity: "Expert",
    description: "A hospital-wide IoT deployment tracking patient beds, medical equipment, and staff locations, integrating with edge AI to predict patient flow and optimize resource allocation.",
    techStack: [
      "Java",
      "Python",
      "MQTT",
      "Apache Kafka",
      "Next.js"
    ],
    baseMilestones: [
      "Indoor Asset Tracking (BLE/UWB)",
      "Medical Equipment Telemetry Integration",
      "Patient Flow Prediction Engine",
      "Hospital Command Center UI",
      "Load Testing and Security Hardening"
    ]
  }
];
