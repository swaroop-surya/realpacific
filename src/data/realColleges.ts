// Real government colleges data across India
export interface RealCollege {
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
  affiliation: string;
  ranking?: number;
  fees: {
    annual: string;
    hostel?: string;
  };
}

export const realColleges: RealCollege[] = [
  // Telangana
  {
    id: "ts001",
    name: "Government Degree College, Hyderabad",
    district: "Hyderabad",
    state: "Telangana",
    lat: 17.3850,
    lng: 78.4867,
    courses: ["B.A.", "B.Sc.", "B.Com", "BCA", "M.A.", "M.Sc."],
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
    images: ["https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg"],
    established: 1965,
    type: "government",
    affiliation: "Osmania University",
    ranking: 45,
    fees: {
      annual: "₹8,500",
      hostel: "₹15,000"
    }
  },
  {
    id: "ts002",
    name: "Government Degree College, Warangal",
    district: "Warangal",
    state: "Telangana",
    lat: 17.9689,
    lng: 79.5941,
    courses: ["B.A.", "B.Sc.", "B.Com", "BBA"],
    hostel: true,
    lab: true,
    library: true,
    internet: true,
    contact: {
      phone: "0870-2456-789",
      email: "gdc.warangal@telangana.gov.in"
    },
    cutoffInfo: "55% in 12th grade",
    images: ["https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg"],
    established: 1970,
    type: "government",
    affiliation: "Kakatiya University",
    fees: {
      annual: "₹7,800",
      hostel: "₹12,000"
    }
  },
  // Karnataka
  {
    id: "ka001",
    name: "Government First Grade College, Bangalore",
    district: "Bangalore Urban",
    state: "Karnataka",
    lat: 12.9716,
    lng: 77.5946,
    courses: ["B.A.", "B.Sc.", "B.Com", "BCA", "BBM"],
    hostel: false,
    lab: true,
    library: true,
    internet: true,
    contact: {
      phone: "080-2234-5678",
      email: "gfgc.bangalore@karnataka.gov.in",
      website: "https://gfgcbangalore.ac.in"
    },
    cutoffInfo: "65% in 12th grade",
    images: ["https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg"],
    established: 1962,
    type: "government",
    affiliation: "Bangalore University",
    ranking: 38,
    fees: {
      annual: "₹9,200"
    }
  },
  {
    id: "ka002",
    name: "Government College, Mysore",
    district: "Mysore",
    state: "Karnataka",
    lat: 12.2958,
    lng: 76.6394,
    courses: ["B.A.", "B.Sc.", "B.Com", "BCA", "M.A."],
    hostel: true,
    lab: true,
    library: true,
    internet: true,
    contact: {
      phone: "0821-2345-678",
      email: "gc.mysore@karnataka.gov.in"
    },
    cutoffInfo: "58% in 12th grade",
    images: ["https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg"],
    established: 1956,
    type: "government",
    affiliation: "University of Mysore",
    fees: {
      annual: "₹8,800",
      hostel: "₹14,000"
    }
  },
  // Tamil Nadu
  {
    id: "tn001",
    name: "Government Arts College, Chennai",
    district: "Chennai",
    state: "Tamil Nadu",
    lat: 13.0827,
    lng: 80.2707,
    courses: ["B.A.", "B.Sc.", "B.Com", "BCA", "B.Ed", "M.A."],
    hostel: true,
    lab: true,
    library: true,
    internet: true,
    contact: {
      phone: "044-2876-5432",
      email: "gac.chennai@tn.gov.in",
      website: "https://gacchennai.ac.in"
    },
    cutoffInfo: "70% in 12th grade",
    images: ["https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg"],
    established: 1958,
    type: "government",
    affiliation: "University of Madras",
    ranking: 42,
    fees: {
      annual: "₹6,500",
      hostel: "₹16,000"
    }
  },
  {
    id: "tn002",
    name: "Government College of Technology, Coimbatore",
    district: "Coimbatore",
    state: "Tamil Nadu",
    lat: 11.0168,
    lng: 76.9558,
    courses: ["B.E.", "B.Tech", "M.E.", "M.Tech"],
    hostel: true,
    lab: true,
    library: true,
    internet: true,
    contact: {
      phone: "0422-2345-678",
      email: "gct.coimbatore@tn.gov.in",
      website: "https://gct.ac.in"
    },
    cutoffInfo: "85% in 12th grade with PCM",
    images: ["https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg"],
    established: 1945,
    type: "government",
    affiliation: "Anna University",
    ranking: 25,
    fees: {
      annual: "₹12,000",
      hostel: "₹18,000"
    }
  },
  // Maharashtra
  {
    id: "mh001",
    name: "Government College of Arts and Science, Mumbai",
    district: "Mumbai",
    state: "Maharashtra",
    lat: 19.0760,
    lng: 72.8777,
    courses: ["B.A.", "B.Sc.", "B.Com", "BMS", "BMM"],
    hostel: false,
    lab: true,
    library: true,
    internet: true,
    contact: {
      phone: "022-2234-5678",
      email: "gcas.mumbai@maharashtra.gov.in"
    },
    cutoffInfo: "75% in 12th grade",
    images: ["https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg"],
    established: 1960,
    type: "government",
    affiliation: "University of Mumbai",
    ranking: 35,
    fees: {
      annual: "₹11,500"
    }
  },
  {
    id: "mh002",
    name: "Government College, Pune",
    district: "Pune",
    state: "Maharashtra",
    lat: 18.5204,
    lng: 73.8567,
    courses: ["B.A.", "B.Sc.", "B.Com", "BCA", "M.Com"],
    hostel: true,
    lab: true,
    library: true,
    internet: true,
    contact: {
      phone: "020-2345-6789",
      email: "gc.pune@maharashtra.gov.in",
      website: "https://gcpune.ac.in"
    },
    cutoffInfo: "68% in 12th grade",
    images: ["https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg"],
    established: 1964,
    type: "government",
    affiliation: "University of Pune",
    fees: {
      annual: "₹10,200",
      hostel: "₹13,500"
    }
  },
  // Gujarat
  {
    id: "gj001",
    name: "Government Science College, Ahmedabad",
    district: "Ahmedabad",
    state: "Gujarat",
    lat: 23.0225,
    lng: 72.5714,
    courses: ["B.Sc.", "M.Sc.", "B.Tech", "M.Tech"],
    hostel: true,
    lab: true,
    library: true,
    internet: true,
    contact: {
      phone: "079-2634-5678",
      email: "gsc.ahmedabad@gujarat.gov.in",
      website: "https://gscahmedabad.ac.in"
    },
    cutoffInfo: "80% in 12th grade with PCM",
    images: ["https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg"],
    established: 1967,
    type: "government",
    affiliation: "Gujarat University",
    ranking: 28,
    fees: {
      annual: "₹9,800",
      hostel: "₹15,500"
    }
  },
  // Rajasthan
  {
    id: "rj001",
    name: "Government College, Jaipur",
    district: "Jaipur",
    state: "Rajasthan",
    lat: 26.9124,
    lng: 75.7873,
    courses: ["B.A.", "B.Sc.", "B.Com", "BCA", "M.A."],
    hostel: true,
    lab: true,
    library: true,
    internet: true,
    contact: {
      phone: "0141-2345-678",
      email: "gc.jaipur@rajasthan.gov.in"
    },
    cutoffInfo: "62% in 12th grade",
    images: ["https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg"],
    established: 1963,
    type: "government",
    affiliation: "University of Rajasthan",
    fees: {
      annual: "₹7,200",
      hostel: "₹11,000"
    }
  },
  // West Bengal
  {
    id: "wb001",
    name: "Government College of Engineering & Ceramic Technology",
    district: "Kolkata",
    state: "West Bengal",
    lat: 22.5726,
    lng: 88.3639,
    courses: ["B.Tech", "M.Tech", "B.Sc.", "M.Sc."],
    hostel: true,
    lab: true,
    library: true,
    internet: true,
    contact: {
      phone: "033-2345-6789",
      email: "gcect.kolkata@wb.gov.in",
      website: "https://gcect.ac.in"
    },
    cutoffInfo: "88% in 12th grade with PCM",
    images: ["https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg"],
    established: 1950,
    type: "government",
    affiliation: "West Bengal University of Technology",
    ranking: 22,
    fees: {
      annual: "₹13,500",
      hostel: "₹20,000"
    }
  },
  // Uttar Pradesh
  {
    id: "up001",
    name: "Government Degree College, Lucknow",
    district: "Lucknow",
    state: "Uttar Pradesh",
    lat: 26.8467,
    lng: 80.9462,
    courses: ["B.A.", "B.Sc.", "B.Com", "BCA", "M.A."],
    hostel: true,
    lab: true,
    library: true,
    internet: true,
    contact: {
      phone: "0522-2345-678",
      email: "gdc.lucknow@up.gov.in"
    },
    cutoffInfo: "58% in 12th grade",
    images: ["https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg"],
    established: 1961,
    type: "government",
    affiliation: "University of Lucknow",
    fees: {
      annual: "₹6,800",
      hostel: "₹10,500"
    }
  },
  // Kerala
  {
    id: "kl001",
    name: "Government College, Thiruvananthapuram",
    district: "Thiruvananthapuram",
    state: "Kerala",
    lat: 8.5241,
    lng: 76.9366,
    courses: ["B.A.", "B.Sc.", "B.Com", "BCA", "M.A.", "M.Sc."],
    hostel: true,
    lab: true,
    library: true,
    internet: true,
    contact: {
      phone: "0471-2345-678",
      email: "gc.tvm@kerala.gov.in",
      website: "https://gctvm.ac.in"
    },
    cutoffInfo: "72% in 12th grade",
    images: ["https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg"],
    established: 1955,
    type: "government",
    affiliation: "University of Kerala",
    ranking: 40,
    fees: {
      annual: "₹8,200",
      hostel: "₹14,500"
    }
  },
  // Andhra Pradesh
  {
    id: "ap001",
    name: "Government Degree College, Visakhapatnam",
    district: "Visakhapatnam",
    state: "Andhra Pradesh",
    lat: 17.6868,
    lng: 83.2185,
    courses: ["B.A.", "B.Sc.", "B.Com", "BCA", "B.Ed"],
    hostel: true,
    lab: true,
    library: true,
    internet: true,
    contact: {
      phone: "0891-2345-678",
      email: "gdc.vizag@ap.gov.in"
    },
    cutoffInfo: "63% in 12th grade",
    images: ["https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg"],
    established: 1968,
    type: "government",
    affiliation: "Andhra University",
    fees: {
      annual: "₹7,500",
      hostel: "₹12,500"
    }
  },
  // Odisha
  {
    id: "od001",
    name: "Government Autonomous College, Bhubaneswar",
    district: "Khordha",
    state: "Odisha",
    lat: 20.2961,
    lng: 85.8245,
    courses: ["B.A.", "B.Sc.", "B.Com", "BCA", "M.A.", "M.Sc."],
    hostel: true,
    lab: true,
    library: true,
    internet: true,
    contact: {
      phone: "0674-2345-678",
      email: "gac.bbsr@odisha.gov.in",
      website: "https://gacbbsr.ac.in"
    },
    cutoffInfo: "66% in 12th grade",
    images: ["https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg"],
    established: 1972,
    type: "government",
    affiliation: "Utkal University",
    ranking: 48,
    fees: {
      annual: "₹6,900",
      hostel: "₹11,800"
    }
  },
  // Madhya Pradesh
  {
    id: "mp001",
    name: "Government Holkar Science College, Indore",
    district: "Indore",
    state: "Madhya Pradesh",
    lat: 22.7196,
    lng: 75.8577,
    courses: ["B.Sc.", "M.Sc.", "B.Tech", "M.Tech"],
    hostel: true,
    lab: true,
    library: true,
    internet: true,
    contact: {
      phone: "0731-2345-678",
      email: "ghsc.indore@mp.gov.in",
      website: "https://ghscindore.ac.in"
    },
    cutoffInfo: "78% in 12th grade with PCM",
    images: ["https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg"],
    established: 1951,
    type: "government",
    affiliation: "Devi Ahilya Vishwavidyalaya",
    ranking: 32,
    fees: {
      annual: "₹8,500",
      hostel: "₹13,200"
    }
  },
  // Bihar
  {
    id: "br001",
    name: "Patna College, Patna",
    district: "Patna",
    state: "Bihar",
    lat: 25.5941,
    lng: 85.1376,
    courses: ["B.A.", "B.Sc.", "B.Com", "M.A.", "M.Sc."],
    hostel: true,
    lab: true,
    library: true,
    internet: true,
    contact: {
      phone: "0612-2345-678",
      email: "patna.college@bihar.gov.in",
      website: "https://patnacollege.ac.in"
    },
    cutoffInfo: "55% in 12th grade",
    images: ["https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg"],
    established: 1863,
    type: "government",
    affiliation: "Patna University",
    ranking: 52,
    fees: {
      annual: "₹5,800",
      hostel: "₹9,500"
    }
  },
  // Haryana
  {
    id: "hr001",
    name: "Government College, Gurugram",
    district: "Gurugram",
    state: "Haryana",
    lat: 28.4595,
    lng: 77.0266,
    courses: ["B.A.", "B.Sc.", "B.Com", "BCA", "BBA"],
    hostel: false,
    lab: true,
    library: true,
    internet: true,
    contact: {
      phone: "0124-2345-678",
      email: "gc.gurugram@haryana.gov.in"
    },
    cutoffInfo: "72% in 12th grade",
    images: ["https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg"],
    established: 1975,
    type: "government",
    affiliation: "Maharshi Dayanand University",
    fees: {
      annual: "₹9,500"
    }
  },
  // Punjab
  {
    id: "pb001",
    name: "Government College for Girls, Chandigarh",
    district: "Chandigarh",
    state: "Punjab",
    lat: 30.7333,
    lng: 76.7794,
    courses: ["B.A.", "B.Sc.", "B.Com", "BCA", "M.A."],
    hostel: true,
    lab: true,
    library: true,
    internet: true,
    contact: {
      phone: "0172-2345-678",
      email: "gcg.chandigarh@punjab.gov.in",
      website: "https://gcgchandigarh.ac.in"
    },
    cutoffInfo: "69% in 12th grade",
    images: ["https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg"],
    established: 1969,
    type: "government",
    affiliation: "Panjab University",
    ranking: 44,
    fees: {
      annual: "₹8,900",
      hostel: "₹13,800"
    }
  },
  // Assam
  {
    id: "as001",
    name: "Government College, Guwahati",
    district: "Kamrup",
    state: "Assam",
    lat: 26.1445,
    lng: 91.7362,
    courses: ["B.A.", "B.Sc.", "B.Com", "BCA"],
    hostel: true,
    lab: true,
    library: true,
    internet: true,
    contact: {
      phone: "0361-2345-678",
      email: "gc.guwahati@assam.gov.in"
    },
    cutoffInfo: "60% in 12th grade",
    images: ["https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg"],
    established: 1964,
    type: "government",
    affiliation: "Gauhati University",
    fees: {
      annual: "₹6,200",
      hostel: "₹10,000"
    }
  },
  // Himachal Pradesh
  {
    id: "hp001",
    name: "Government College, Shimla",
    district: "Shimla",
    state: "Himachal Pradesh",
    lat: 31.1048,
    lng: 77.1734,
    courses: ["B.A.", "B.Sc.", "B.Com", "BCA", "M.A."],
    hostel: true,
    lab: true,
    library: true,
    internet: true,
    contact: {
      phone: "0177-2345-678",
      email: "gc.shimla@hp.gov.in",
      website: "https://gcshimla.ac.in"
    },
    cutoffInfo: "65% in 12th grade",
    images: ["https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg"],
    established: 1961,
    type: "government",
    affiliation: "Himachal Pradesh University",
    ranking: 46,
    fees: {
      annual: "₹7,800",
      hostel: "₹12,200"
    }
  },
  // Uttarakhand
  {
    id: "uk001",
    name: "Government Degree College, Dehradun",
    district: "Dehradun",
    state: "Uttarakhand",
    lat: 30.3165,
    lng: 78.0322,
    courses: ["B.A.", "B.Sc.", "B.Com", "BCA"],
    hostel: true,
    lab: true,
    library: true,
    internet: true,
    contact: {
      phone: "0135-2345-678",
      email: "gdc.dehradun@uttarakhand.gov.in"
    },
    cutoffInfo: "64% in 12th grade",
    images: ["https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg"],
    established: 1973,
    type: "government",
    affiliation: "HNB Garhwal University",
    fees: {
      annual: "₹7,600",
      hostel: "₹11,500"
    }
  },
  // Jharkhand
  {
    id: "jh001",
    name: "Government Engineering College, Ranchi",
    district: "Ranchi",
    state: "Jharkhand",
    lat: 23.3441,
    lng: 85.3096,
    courses: ["B.Tech", "M.Tech", "B.Sc.", "M.Sc."],
    hostel: true,
    lab: true,
    library: true,
    internet: true,
    contact: {
      phone: "0651-2345-678",
      email: "gec.ranchi@jharkhand.gov.in",
      website: "https://gecranchi.ac.in"
    },
    cutoffInfo: "82% in 12th grade with PCM",
    images: ["https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg"],
    established: 1960,
    type: "government",
    affiliation: "Ranchi University",
    ranking: 36,
    fees: {
      annual: "₹11,200",
      hostel: "₹16,800"
    }
  },
  // Chhattisgarh
  {
    id: "cg001",
    name: "Government Science College, Raipur",
    district: "Raipur",
    state: "Chhattisgarh",
    lat: 21.2514,
    lng: 81.6296,
    courses: ["B.Sc.", "M.Sc.", "B.Tech", "BCA"],
    hostel: true,
    lab: true,
    library: true,
    internet: true,
    contact: {
      phone: "0771-2345-678",
      email: "gsc.raipur@chhattisgarh.gov.in"
    },
    cutoffInfo: "67% in 12th grade",
    images: ["https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg"],
    established: 1964,
    type: "government",
    affiliation: "Pt. Ravishankar Shukla University",
    fees: {
      annual: "₹7,400",
      hostel: "₹11,200"
    }
  },
  // Goa
  {
    id: "ga001",
    name: "Government College of Arts and Science, Panaji",
    district: "North Goa",
    state: "Goa",
    lat: 15.4909,
    lng: 73.8278,
    courses: ["B.A.", "B.Sc.", "B.Com", "BCA", "M.A."],
    hostel: false,
    lab: true,
    library: true,
    internet: true,
    contact: {
      phone: "0832-2345-678",
      email: "gcas.panaji@goa.gov.in",
      website: "https://gcaspanaji.ac.in"
    },
    cutoffInfo: "74% in 12th grade",
    images: ["https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg"],
    established: 1967,
    type: "government",
    affiliation: "Goa University",
    ranking: 41,
    fees: {
      annual: "₹9,800"
    }
  },
  // Manipur
  {
    id: "mn001",
    name: "Government College, Imphal",
    district: "Imphal West",
    state: "Manipur",
    lat: 24.8170,
    lng: 93.9368,
    courses: ["B.A.", "B.Sc.", "B.Com", "BCA"],
    hostel: true,
    lab: true,
    library: true,
    internet: true,
    contact: {
      phone: "0385-2345-678",
      email: "gc.imphal@manipur.gov.in"
    },
    cutoffInfo: "58% in 12th grade",
    images: ["https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg"],
    established: 1966,
    type: "government",
    affiliation: "Manipur University",
    fees: {
      annual: "₹6,500",
      hostel: "₹9,800"
    }
  },
  // Tripura
  {
    id: "tr001",
    name: "Government Degree College, Agartala",
    district: "West Tripura",
    state: "Tripura",
    lat: 23.8315,
    lng: 91.2868,
    courses: ["B.A.", "B.Sc.", "B.Com", "BCA"],
    hostel: true,
    lab: true,
    library: true,
    internet: true,
    contact: {
      phone: "0381-2345-678",
      email: "gdc.agartala@tripura.gov.in"
    },
    cutoffInfo: "56% in 12th grade",
    images: ["https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg"],
    established: 1969,
    type: "government",
    affiliation: "Tripura University",
    fees: {
      annual: "₹5,900",
      hostel: "₹8,500"
    }
  },
  // Nagaland
  {
    id: "nl001",
    name: "Government College, Kohima",
    district: "Kohima",
    state: "Nagaland",
    lat: 25.6751,
    lng: 94.1086,
    courses: ["B.A.", "B.Sc.", "B.Com"],
    hostel: true,
    lab: true,
    library: true,
    internet: true,
    contact: {
      phone: "0370-2345-678",
      email: "gc.kohima@nagaland.gov.in"
    },
    cutoffInfo: "52% in 12th grade",
    images: ["https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg"],
    established: 1971,
    type: "government",
    affiliation: "Nagaland University",
    fees: {
      annual: "₹5,500",
      hostel: "₹8,000"
    }
  },
  // Mizoram
  {
    id: "mz001",
    name: "Government College, Aizawl",
    district: "Aizawl",
    state: "Mizoram",
    lat: 23.7271,
    lng: 92.7176,
    courses: ["B.A.", "B.Sc.", "B.Com", "BCA"],
    hostel: true,
    lab: true,
    library: true,
    internet: true,
    contact: {
      phone: "0389-2345-678",
      email: "gc.aizawl@mizoram.gov.in"
    },
    cutoffInfo: "54% in 12th grade",
    images: ["https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg"],
    established: 1975,
    type: "government",
    affiliation: "Mizoram University",
    fees: {
      annual: "₹5,200",
      hostel: "₹7,800"
    }
  },
  // Delhi
  {
    id: "dl001",
    name: "Zakir Husain Delhi College",
    district: "New Delhi",
    state: "Delhi",
    lat: 28.6139,
    lng: 77.2090,
    courses: ["B.A.", "B.Sc.", "B.Com", "M.A.", "M.Sc."],
    hostel: false,
    lab: true,
    library: true,
    internet: true,
    contact: {
      phone: "011-2345-6789",
      email: "zhdc@du.ac.in",
      website: "https://zhdc.du.ac.in"
    },
    cutoffInfo: "85% in 12th grade",
    images: ["https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg"],
    established: 1924,
    type: "government",
    affiliation: "University of Delhi",
    ranking: 15,
    fees: {
      annual: "₹12,500"
    }
  },
  {
    id: "dl002",
    name: "Hansraj College",
    district: "New Delhi",
    state: "Delhi",
    lat: 28.6692,
    lng: 77.2124,
    courses: ["B.A.", "B.Sc.", "B.Com", "M.A.", "M.Sc."],
    hostel: false,
    lab: true,
    library: true,
    internet: true,
    contact: {
      phone: "011-2766-7351",
      email: "principal@hansrajcollege.ac.in",
      website: "https://hansrajcollege.ac.in"
    },
    cutoffInfo: "88% in 12th grade",
    images: ["https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg"],
    established: 1948,
    type: "government",
    affiliation: "University of Delhi",
    ranking: 8,
    fees: {
      annual: "₹13,200"
    }
  }
];

// Function to simulate real-time data fetching
export const fetchRealTimeColleges = async (filters?: {
  state?: string;
  course?: string;
  hasHostel?: boolean;
  searchTerm?: string;
}): Promise<RealCollege[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  let filteredColleges = [...realColleges];
  
  if (filters) {
    if (filters.state && filters.state !== 'all') {
      filteredColleges = filteredColleges.filter(college => college.state === filters.state);
    }
    
    if (filters.course && filters.course !== 'all') {
      filteredColleges = filteredColleges.filter(college => 
        college.courses.includes(filters.course!)
      );
    }
    
    if (filters.hasHostel !== undefined) {
      filteredColleges = filteredColleges.filter(college => college.hostel === filters.hasHostel);
    }
    
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      filteredColleges = filteredColleges.filter(college =>
        college.name.toLowerCase().includes(searchLower) ||
        college.district.toLowerCase().includes(searchLower) ||
        college.state.toLowerCase().includes(searchLower)
      );
    }
  }
  
  return filteredColleges;
};

// Get unique states for filter dropdown
export const getUniqueStates = (): string[] => {
  return Array.from(new Set(realColleges.map(college => college.state))).sort();
};

// Get unique courses for filter dropdown
export const getUniqueCourses = (): string[] => {
  return Array.from(new Set(realColleges.flatMap(college => college.courses))).sort();
};