// Sample data for the quiz engine and college directory
export interface QuizQuestion {
  id: string;
  text: string;
  options: string[];
  scoring: {
    [key: string]: { [subject: string]: number }; // option_index -> subject -> weight
  };
}

export interface QuizResult {
  scores: {
    [subject: string]: number;
  };
  recommendedStreams: string[];
  recommendedCourses: Course[];
  careerPaths: string[];
  userPreference?: string;
}

export interface College {
  id: string;
  name: string;
  district: string;
  state: string;
  lat: number;
  lng: number;
  courses: string[];
  hostel: boolean;
  lab: boolean;
  library: boolean;
  internet: boolean;
  contact: {
    phone: string;
    email: string;
    website?: string;
  };
  cutoffInfo?: string;
  images: string[];
  established: number;
  type: 'government' | 'aided' | 'private';
}

export interface Course {
  id: string;
  title: string;
  degreeType: string;
  streams: string[];
  typicalCareers: string[];
  skills: string[];
  nextSteps: string[];
  salaryRange: string;
  duration: string;
  eligibility: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    text: "Which of these activities do you enjoy most?",
    options: [
      "Solving mathematical problems",
      "Reading and writing stories", 
      "Conducting experiments",
      "Drawing and designing"
    ],
    scoring: {
      "0": { "science": 3, "mathematics": 3 },
      "1": { "arts": 3, "humanities": 2 },
      "2": { "science": 3, "research": 2 },
      "3": { "arts": 2, "design": 3 }
    }
  },
  {
    id: "q2", 
    text: "What type of work environment appeals to you?",
    options: [
      "Laboratory or research facility",
      "Office with computers and data",
      "Creative studio or workshop",
      "Outdoors or field work"
    ],
    scoring: {
      "0": { "science": 2, "research": 3 },
      "1": { "technology": 3, "business": 2 },
      "2": { "arts": 3, "design": 2 },
      "3": { "agriculture": 2, "environment": 2 }
    }
  },
  {
    id: "q3",
    text: "Which subject did you perform best in during Class 10?",
    options: [
      "Mathematics",
      "Science (Physics, Chemistry, Biology)",
      "Social Sciences (History, Geography)",
      "Languages (English, Hindi, Regional)"
    ],
    scoring: {
      "0": { "mathematics": 3, "engineering": 2 },
      "1": { "science": 3, "medical": 2 },
      "2": { "humanities": 3, "arts": 2 },
      "3": { "languages": 3, "communication": 2 }
    }
  },
  {
    id: "q4",
    text: "What motivates you most in your studies?",
    options: [
      "Understanding how things work",
      "Helping people solve problems", 
      "Creating something new",
      "Earning good money in future"
    ],
    scoring: {
      "0": { "science": 2, "engineering": 2, "research": 2 },
      "1": { "social_work": 2, "medical": 2, "education": 2 },
      "2": { "arts": 2, "design": 2, "entrepreneurship": 1 },
      "3": { "business": 2, "technology": 1, "finance": 2 }
    }
  },
  {
    id: "q5",
    text: "How do you prefer to learn new concepts?",
    options: [
      "Through hands-on experiments",
      "By reading books and articles",
      "Through visual aids and diagrams", 
      "By discussing with others"
    ],
    scoring: {
      "0": { "science": 2, "engineering": 2 },
      "1": { "humanities": 2, "research": 2 },
      "2": { "design": 2, "arts": 1 },
      "3": { "social_work": 2, "communication": 2 }
    }
  }
];

export const sampleColleges: College[] = [
  {
    id: "1",
    name: "Government Degree College, Hyderabad",
    district: "Hyderabad",
    state: "Telangana", 
    lat: 17.3850,
    lng: 78.4867,
    courses: ["B.A.", "B.Sc.", "B.Com", "BCA"],
    hostel: true,
    lab: true,
    library: true,
    internet: true,
    contact: {
      phone: "040-2345-6789",
      email: "gdc.hyd@telangana.gov.in",
      website: "https://gdchyd.ac.in"
    },
    cutoffInfo: "60% in 12th grade",
    images: ["/college1.jpg"],
    established: 1965,
    type: "government"
  },
  {
    id: "2", 
    name: "Dr. B.R. Ambedkar Government Degree College",
    district: "Bangalore",
    state: "Karnataka",
    lat: 12.9716,
    lng: 77.5946,
    courses: ["B.A.", "B.Sc.", "B.Com", "BBA"],
    hostel: false,
    lab: true,
    library: true, 
    internet: true,
    contact: {
      phone: "080-1234-5678",
      email: "ambedkar.college@karnataka.gov.in"
    },
    cutoffInfo: "55% in 12th grade",
    images: ["/college2.jpg"],
    established: 1972,
    type: "government"
  },
  {
    id: "3",
    name: "Government Arts & Science College",
    district: "Chennai",
    state: "Tamil Nadu",
    lat: 13.0827,
    lng: 80.2707,
    courses: ["B.A.", "B.Sc.", "B.Com", "BCA", "B.Ed"],
    hostel: true,
    lab: true,
    library: true,
    internet: true,
    contact: {
      phone: "044-9876-5432", 
      email: "gasc.chennai@tn.gov.in"
    },
    cutoffInfo: "65% in 12th grade",
    images: ["/college3.jpg"],
    established: 1958,
    type: "government"
  }
];

export const courses: Course[] = [
  {
    id: "ba",
    title: "Bachelor of Arts (B.A.)",
    degreeType: "Undergraduate",
    streams: ["Humanities", "Social Sciences", "Languages"],
    typicalCareers: ["Civil Services", "Teaching", "Journalism", "Social Work"],
    skills: ["Critical Thinking", "Communication", "Research", "Analysis"],
    nextSteps: ["M.A.", "B.Ed.", "MBA", "Civil Services Preparation"],
    salaryRange: "₹3-8 LPA",
    duration: "3 years",
    eligibility: "10+2 in any stream"
  },
  {
    id: "bsc",
    title: "Bachelor of Science (B.Sc.)",
    degreeType: "Undergraduate", 
    streams: ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science"],
    typicalCareers: ["Research Scientist", "Lab Technician", "Data Analyst", "Teacher"],
    skills: ["Scientific Method", "Data Analysis", "Problem Solving", "Technical Skills"],
    nextSteps: ["M.Sc.", "B.Ed.", "Medical Entrance", "Engineering"], 
    salaryRange: "₹4-10 LPA",
    duration: "3 years",
    eligibility: "10+2 with Science"
  },
  {
    id: "bcom",
    title: "Bachelor of Commerce (B.Com)",
    degreeType: "Undergraduate",
    streams: ["Accounting", "Finance", "Business Studies"],
    typicalCareers: ["Accountant", "Financial Analyst", "Banking", "Business Development"],
    skills: ["Financial Analysis", "Accounting", "Business Communication", "Taxation"],
    nextSteps: ["M.Com", "MBA", "CA", "CS"],
    salaryRange: "₹3-12 LPA", 
    duration: "3 years",
    eligibility: "10+2 in any stream"
  },
  {
    id: "bca",
    title: "Bachelor of Computer Applications (BCA)",
    degreeType: "Undergraduate",
    streams: ["Computer Science", "Information Technology"],
    typicalCareers: ["Software Developer", "System Analyst", "Web Developer", "Database Administrator"],
    skills: ["Programming", "Database Management", "Web Development", "System Analysis"],
    nextSteps: ["MCA", "MBA", "Software Certifications", "Entrepreneurship"],
    salaryRange: "₹4-15 LPA",
    duration: "3 years", 
    eligibility: "10+2 with Mathematics"
  },
  {
    id: "bba",
    title: "Bachelor of Business Administration (BBA)",
    degreeType: "Undergraduate",
    streams: ["Management", "Business Studies", "Entrepreneurship"],
    typicalCareers: ["Business Manager", "Marketing Executive", "HR Professional", "Entrepreneur"],
    skills: ["Leadership", "Management", "Marketing", "Strategic Thinking"],
    nextSteps: ["MBA", "Entrepreneurship", "Specialized Certifications"],
    salaryRange: "₹3-10 LPA",
    duration: "3 years",
    eligibility: "10+2 in any stream"
  }
];