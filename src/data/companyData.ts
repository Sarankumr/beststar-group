export interface Subsidiary {
  id: string;
  name: string;
  shortName: string;
  sector: "Healthcare & Pharma" | "Engineering & Facilities" | "Logistics & Fleet" | "Tourism & Hospitality" | "Automotive & Technical" | "Trading & Energy";
  tagline: string;
  description: string;
  detailedOverview: string;
  keyHighlights: string[];
  capabilities: string[];
  operatingCountries: string[];
  headquarters: string;
  establishedDate: string;
  badgeText: string;
  image?: string;
  stats?: { label: string; value: string }[];
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: "Contract" | "Acquisition" | "Partnership" | "Infrastructure" | "Fleet Expansion";
  summary: string;
  fullStory: string;
  location: string;
  referenceNo?: string;
  author?: string;
  spokespersonQuote?: {
    quote: string;
    speaker: string;
    designation: string;
  };
  keyHighlights?: string[];
  image?: string;
}

export interface CountryOffice {
  code: string;
  country: string;
  flag: string;
  city: string;
  role: string;
  address: string;
  phone: string;
  email: string;
  keyOperations: string[];
  localTimezone: string;
}

export interface CareerOpening {
  id: string;
  title: string;
  subsidiary: string;
  location: string;
  type: string;
  experience: string;
  department: string;
  description: string;
  overview?: string;
  responsibilities?: string[];
  qualifications?: string[];
  skills?: string[];
  benefits?: string[];
  salaryRange?: string;
  workSchedule?: string;
}

export const COMPANY_INFO = {
  name: "Best Star Group FZE",
  tagline: "A Diversified Global Conglomerate",
  visionStatement: "To be an ethically strong, value-based conglomerate propelling successful innovations and constantly exploring new frontiers across the Middle East and Asia.",
  missionStatement: "To collaborate with visionary entrepreneurs, investing in breakthrough talent and viable enterprises while delivering uncompromising safety, service, and quality.",
  foundedYear: "2006",
  chairmanName: "Ibunu Suwoothu Kamal",
  chairmanTitle: "Chairman, Best Star Group",
  globalWorkforce: "2,000+",
  operatingCountries: ["United Arab Emirates", "Kingdom of Saudi Arabia", "India", "Malaysia"],
  enterpriseVision: "AED 1 Billion+",
  operatingEntitiesCount: "9+ Operating Companies in UAE & Global Joint Ventures",
};

export const CHAIRMAN_MESSAGE = {
  salutation: "Message from the Chairman's Desk",
  author: "IBUNU SUWOOTHU KAMAL",
  title: "Chairman, Best Star Group FZE",
  quote: "Safety, Service, and Quality are the cornerstones on which we have traversed our journey to growth and that alone sets us apart.",
  leadParagraph: "At Best Star Group, we believe that success comes from relentless focus on shared vision, innovation, and disciplined execution. Our decision to establish ourselves as a premier holding company has laid the foundation for an expansive, resilient global structure.",
  paragraphs: [
    "From humble beginnings in tourism, we have evolved rapidly. Today, our nine operating verticals in diversified fields in the UAE alone demonstrate a crucial transition, leaving behind milestone after milestone across our journey of continuous growth.",
    "Our success lies in our diversity, which contributes immensely to the strength of our group. On one hand, our multifaceted sector expertise provides stability; on the other, our Group's entrepreneurial spirit drives our sustained momentum into international markets.",
    "Our entrepreneurial instincts have enabled us to make vibrant inroads into Malaysia with high-performing restaurants, supermarkets, and next-generation mobile retail hubs. In India, our significant stake in Moon TV and our partnership in diagnostic healthcare through Win Path Lab underscore our commitment to high-impact sectors.",
    "The world has shrunk, and any business aspiring to lead must think in global terms. Best Star Group FZE identified this imperative early and aligned our corporate posture accordingly. When I speak about innovation and execution, we gravitate around getting the right solutions, the right talent at the right time, and the optimal cost structure.",
    "We look forward to continuing our mission of innovation, identifying promising entrepreneurial leaders to partner with us, and keeping our workplace supportive, inclusive, and committed to societal well-being."
  ]
};

export const SUBSIDIARIES: Subsidiary[] = [
  {
    id: "pharma-healthcare",
    name: "Best Star Pharma Trading L.L.C",
    shortName: "Best Star Pharma",
    sector: "Healthcare & Pharma",
    tagline: "Essential Healthcare Solutions & Pharmaceutical Distribution",
    description: "Leading pharmaceutical distributor and retail pharmacy network across the United Arab Emirates, delivering life-saving therapies and diagnostic lab services.",
    detailedOverview: "Best Star Pharma Trading L.L.C stands at the vanguard of healthcare delivery in the UAE. Through our strategic acquisition of M/S Ajmal Pharmacy in Sharjah and our landmark equal-stake partnership with Win Path Lab and Health Care in India, we integrate retail pharmacy accessibility, pharmaceutical import-export, and precision pathology diagnostics under one trusted banner.",
    keyHighlights: [
      "Strategic acquisition and retail modernization of M/S Ajmal Pharmacy chain in Sharjah",
      "International 50-50 healthcare partnership with Win Path Lab & Health Care",
      "Full compliance with UAE Ministry of Health and Prevention (MOHAP) and Dubai Health Authority (DHA)",
      "State-of-the-art cold chain temperature-controlled storage and rapid medical dispatch"
    ],
    capabilities: [
      "Bulk Pharmaceutical Distribution",
      "Retail Community Pharmacy Operations",
      "Clinical Laboratory Diagnostics & Pathology",
      "Hospital Consumables & Medical Equipment Supply",
      "Regulatory Filing & MOHAP Product Registrations"
    ],
    operatingCountries: ["United Arab Emirates", "India"],
    headquarters: "Sharjah / Dubai, UAE",
    establishedDate: "2014",
    badgeText: "Healthcare Leader",
    image: "/images/healthcare.jpg",
    stats: [
      { label: "Retail Pharmacies", value: "Multiple Units" },
      { label: "Lab Diagnostic Tests", value: "500k+ / Year" },
      { label: "Compliance Standard", value: "MOHAP & GMP" }
    ]
  },
  {
    id: "facility-management",
    name: "Best Star Facility Management",
    shortName: "Best Star FM",
    sector: "Engineering & Facilities",
    tagline: "Integrated Engineering, Smart HVAC & Building Lifecycle Operations",
    description: "Premier MEP and facility management partner for commercial towers, industrial installations, and institutional complexes across the GCC.",
    detailedOverview: "Best Star Facility Management delivers end-to-end building engineering solutions. We specialize in precision HVAC control systems, complex electrical distributions, automated BMS controls, and comprehensive preventative maintenance programs that maximize operational uptime and slash energy expenditures.",
    keyHighlights: [
      "Awarded major multi-year HVAC and Electrical Controls contracts for prime commercial properties in UAE",
      "Certified energy optimization protocols conforming to green building standards",
      "24/7 centralized emergency engineering dispatch and IoT asset telemetry",
      "Specialized cleanroom HVAC and critical power backup solutions"
    ],
    capabilities: [
      "HVAC Chiller & Ducting System Controls",
      "Commercial & Industrial Electrical MEP Contracting",
      "Building Automation Systems (BMS) & Energy Audits",
      "Fire Safety, Life Support Systems & Emergency Generators",
      "Preventive & Corrective Maintenance SLA Contracts"
    ],
    operatingCountries: ["United Arab Emirates", "Kingdom of Saudi Arabia"],
    headquarters: "Dubai, UAE",
    establishedDate: "2010",
    badgeText: "MEP & HVAC Specialist",
    image: "/images/engineering.jpg",
    stats: [
      { label: "Commercial Sq.Ft Managed", value: "3.5M+" },
      { label: "SLA Response Time", value: "< 45 Mins" },
      { label: "System Uptime", value: "99.8%" }
    ]
  },
  {
    id: "cargo-logistics",
    name: "Best Star Cargo",
    shortName: "Best Star Cargo",
    sector: "Logistics & Fleet",
    tagline: "Global Air, Sea & Land Freight Forwarding and Supply Chain Logistics",
    description: "International cargo forwarder offering bonded customs clearance, door-to-door global logistics, and time-critical intermodal transport.",
    detailedOverview: "Best Star Cargo links the Arabian Gulf to major global trading centers across Europe, Asia, Africa, and the Americas. Leveraging strategic air hubs in Dubai and maritime gateways in Jebel Ali and Sharjah, we ensure frictionless transit of commercial breakbulk, perishable cold cargo, and high-value consignments.",
    keyHighlights: [
      "Comprehensive multi-modal door-to-door freight forwarding network",
      "Express customs clearance and automated port document processing in UAE free zones",
      "Dedicated refrigerated fleets for temperature-sensitive pharmaceuticals and foods",
      "Real-time GPS tracking and dedicated enterprise account management"
    ],
    capabilities: [
      "Air Cargo Charters & Scheduled Consolidation",
      "Full Container Load (FCL) & Less Container Load (LCL) Ocean Freight",
      "GCC Cross-Border Land Transport & Bonded Trucking",
      "Customs Brokerage & Port Clearance Management",
      "Warehousing, Packaging & Project Cargo Handling"
    ],
    operatingCountries: ["United Arab Emirates", "Saudi Arabia", "India", "Global"],
    headquarters: "Dubai Cargo Village / Sharjah, UAE",
    establishedDate: "2008",
    badgeText: "Global Freight",
    image: "/images/dubai-skyline.jpg",
    stats: [
      { label: "Global Destinations", value: "85+ Ports" },
      { label: "Tonnage Moved Annually", value: "45,000+ Tons" },
      { label: "Clearance Speed", value: "Same-Day Express" }
    ]
  },
  {
    id: "tourism-hospitality",
    name: "Best Star Tourism L.L.C",
    shortName: "Best Star Tourism",
    sector: "Tourism & Hospitality",
    tagline: "Exclusive VIP Destination Management & Luxury Travel Curation",
    description: "The founding vertical of Best Star Group, delivering world-class hospitality, executive corporate travel, and bespoke experiential journeys in the UAE.",
    detailedOverview: "As the foundational enterprise of the Best Star Group, Best Star Tourism has set benchmark standards in Emirati hospitality for nearly two decades. We cater to high-net-worth individuals, corporate executive delegations, and discerning international leisure travelers seeking unforgettable luxury experiences.",
    keyHighlights: [
      "The historic foundation of Best Star Group with over 18 years of continuous operational excellence",
      "Exclusive partnerships with 5-star luxury hotel chains, private jet charters, and desert reserves",
      "End-to-end concierge services: VIP airport transfers, luxury yacht charters, and curated excursions",
      "Official visa assistance and international corporate MICE (Meetings, Incentives, Conferences, Exhibitions) management"
    ],
    capabilities: [
      "VIP Destination Management (DMC)",
      "Luxury Yacht & Desert Safari Expeditions",
      "Corporate MICE & Delegation Event Logistics",
      "Inbound & Outbound Visa Processing",
      "5-Star Concierge & Executive Chauffeur Services"
    ],
    operatingCountries: ["United Arab Emirates", "Malaysia", "Global"],
    headquarters: "Dubai, UAE",
    establishedDate: "2006",
    badgeText: "Heritage Enterprise",
    image: "/images/dubai-skyline.jpg",
    stats: [
      { label: "Happy Travelers", value: "150,000+" },
      { label: "Years of Heritage", value: "18+ Years" },
      { label: "Luxury Hotel Partners", value: "120+" }
    ]
  },
  {
    id: "igts-technical",
    name: "IGTS Technical Services L.L.C & Indo Gulf Testing",
    shortName: "IGTS Technical",
    sector: "Automotive & Technical",
    tagline: "Non-Destructive Testing (NDT), Engineering QA/QC & Plant Integrity",
    description: "Accredited inspection and testing laboratory delivering precision engineering verification, weld testing, and industrial safety audits.",
    detailedOverview: "Indo Gulf Inspection & Testing Services (IGTS) LLC and IGTS Technical Services represent our deep commitment to industrial integrity. We support major oil refineries, maritime docks, pipeline networks, and civil infrastructure projects with certified non-destructive testing (NDT), metallurgical evaluations, and structural fitness assessments.",
    keyHighlights: [
      "Certified ASNT Level II & Level III certified inspection engineers",
      "Radiographic testing (RT), Ultrasonic testing (UT), and Magnetic particle testing (MT)",
      "Industrial third-party inspection for pipeline welds, pressure vessels, and storage tanks",
      "Rigorous adherence to ASME, API, AWS, and ISO international safety standards"
    ],
    capabilities: [
      "Non-Destructive Testing (NDT) & Radiography",
      "Ultrasonic Flaw Detection & Thickness Gauging",
      "Hydrostatic Testing & Pressure Vessel Verification",
      "Welding Inspection (CWI / CSWIP Certified)",
      "Plant Asset Integrity & Corrosion Management"
    ],
    operatingCountries: ["United Arab Emirates", "India"],
    headquarters: "Abu Dhabi / Sharjah, UAE",
    establishedDate: "2011",
    badgeText: "Engineering Integrity",
    image: "/images/engineering.jpg",
    stats: [
      { label: "Inspection Audits", value: "10,000+" },
      { label: "Safety Record", value: "Zero Incident" },
      { label: "Accreditation", value: "ASNT & ISO 9001" }
    ]
  },
  {
    id: "mak-auto",
    name: "MAK Auto Services L.L.C",
    shortName: "MAK Auto Services",
    sector: "Automotive & Technical",
    tagline: "Precision Automotive Engineering, Fleet Care & Heavy Diagnostics",
    description: "Cutting-edge automotive maintenance center equipped with German diagnostic computers, bodywork precision bays, and fleet care solutions.",
    detailedOverview: "MAK Auto Services L.L.C operates state-of-the-art automotive engineering hubs serving luxury private vehicles, commercial passenger coaches, and heavy transport fleets. Our expert technicians combine computerized diagnostics with OEM genuine parts to deliver maximum safety and mechanical endurance.",
    keyHighlights: [
      "Advanced computerized diagnostic scanners for European, American, and Asian marques",
      "Comprehensive maintenance provider for Best Star Group's passenger and cargo fleet",
      "Climate-controlled paint booths and computerized frame alignment systems",
      "Rapid turnaround time minimizing commercial vehicle fleet downtime"
    ],
    capabilities: [
      "Computerized Engine, Transmission & ECU Diagnostics",
      "Commercial Fleet Preventive Maintenance Agreements",
      "Brake, Suspension & Steering Overhauls",
      "Precision Bodywork & Robotic Paint Booths",
      "24/7 Roadside Mechanical Assistance & Towing"
    ],
    operatingCountries: ["United Arab Emirates"],
    headquarters: "Sharjah / Dubai, UAE",
    establishedDate: "2012",
    badgeText: "Automotive Precision",
    image: "/images/dubai-skyline.jpg",
    stats: [
      { label: "Vehicles Serviced", value: "25,000+" },
      { label: "Fleet Capacity", value: "500+ Units" },
      { label: "Diagnostic Accuracy", value: "99.9%" }
    ]
  },
  {
    id: "transport-leasing",
    name: "Best Star Transport and Leasing L.L.C & Al Saqer",
    shortName: "Best Star Transport",
    sector: "Logistics & Fleet",
    tagline: "Commercial Passenger Transit, Luxury Coaches & Fleet Leasing",
    description: "Supplying premier passenger transportation, corporate staff mobility networks, and commercial vehicle leasing to government and private corporations.",
    detailedOverview: "Operating through Best Star Transport and Leasing L.L.C alongside Al Saqer Buses Rental, we command a modern fleet of luxury executive coaches, commuter buses, and specialized passenger vans. We manage reliable daily employee mobility for multinational industrial enterprises, educational institutions, and VIP delegations.",
    keyHighlights: [
      "Extensive fleet of late-model, GPS-tracked, air-conditioned buses and coaches",
      "Dedicated corporate commuter shuttle services across Dubai, Sharjah, and Abu Dhabi",
      "RTA and DOT-certified professional drivers with comprehensive safety certifications",
      "Flexible short-term and multi-year corporate vehicle leasing packages"
    ],
    capabilities: [
      "Corporate Staff & Industrial Labor Transit Operations",
      "Luxury Tourist Coach Charters (50-Seater Executive)",
      "School & University Transportation Management",
      "Commercial Van & Pickup Truck Leasing",
      "Automated Route Optimization & Passenger Safety Tracking"
    ],
    operatingCountries: ["United Arab Emirates"],
    headquarters: "Sharjah, UAE",
    establishedDate: "2010",
    badgeText: "Fleet Powerhouse",
    image: "/images/dubai-skyline.jpg",
    stats: [
      { label: "Daily Passengers Moved", value: "30,000+" },
      { label: "Active Fleet Vehicles", value: "350+ Units" },
      { label: "On-Time Dispatch Rate", value: "99.4%" }
    ]
  },
  {
    id: "trans-ocean",
    name: "Trans Ocean International Trading FZE",
    shortName: "Trans Ocean Trading",
    sector: "Trading & Energy",
    tagline: "Global Commodity Trading, Raw Materials & Maritime Logistics",
    description: "Multinational commodity trading house connecting high-growth Asian markets with Middle Eastern supply corridors.",
    detailedOverview: "Trans Ocean International Trading FZE orchestrates cross-continental commodity trade, focusing on building materials, industrial metals, chemical intermediaries, and fast-moving consumer supplies. Operating out of UAE's premier tax-free international economic zones, we leverage world-class banking and logistics infrastructure to execute high-volume transactions.",
    keyHighlights: [
      "Strategic presence in premier UAE Free Trade Zones with global banking facilities",
      "Diversified commodity portfolios across construction steel, cement, and bulk goods",
      "Robust risk mitigation, hedging mechanisms, and letter-of-credit financing",
      "Long-term supply agreements with industrial producers across GCC and Southeast Asia"
    ],
    capabilities: [
      "International Bulk Commodity Brokering",
      "Industrial Raw Materials Sourcing & Supply",
      "Cross-Border Trade Finance & Letters of Credit",
      "Maritime Chartering & Port Stevedoring Logistics",
      "Wholesale Consumer Goods Distribution"
    ],
    operatingCountries: ["United Arab Emirates", "Malaysia", "India", "Global"],
    headquarters: "Hamriyah Free Zone, Sharjah, UAE",
    establishedDate: "2013",
    badgeText: "Global Trade",
    image: "/images/dubai-skyline.jpg",
    stats: [
      { label: "Trade Volume", value: "$120M+ Annually" },
      { label: "Partner Countries", value: "22 Nations" },
      { label: "Port Terminals", value: "14 Hubs" }
    ]
  },
  {
    id: "power-megaprojects",
    name: "Best Star Power & Infrastructure Projects",
    shortName: "Power & Infrastructure",
    sector: "Engineering & Facilities",
    tagline: "High-Voltage Power Grids, Electrical Substations & Urban Electrification",
    description: "Execution partner for landmark infrastructure projects including the 380kV/132kV KAFC New Bulk Supply Point in Riyadh, Saudi Arabia.",
    detailedOverview: "Demonstrating our technical capability in national mega-projects, our engineering division has contributed to critical utility infrastructure in the Kingdom of Saudi Arabia, including the construction of the landmark KAFC New 380kv/132kv/13.8kv BSP#9020 in King Abdullah Financial City, Riyadh.",
    keyHighlights: [
      "Execution of high-voltage transmission substation infrastructure (380kV/132kV/13.8kV)",
      "Pioneering contributions to King Abdullah Financial City (KAFC) energy grid in Riyadh",
      "Strict compliance with Saudi Electricity Company (SEC) technical specifications",
      "Integration of high-voltage gas-insulated switchgear (GIS) and power transformers"
    ],
    capabilities: [
      "Extra High Voltage (EHV) Substation Construction",
      "Underground Transmission Cable Laying & Termination",
      "Testing & Commissioning of GIS and Power Transformers",
      "SCADA Automation & Protection Relay Testing",
      "Industrial Power Distribution Networks"
    ],
    operatingCountries: ["Kingdom of Saudi Arabia", "United Arab Emirates"],
    headquarters: "Riyadh, KSA / Dubai, UAE",
    establishedDate: "2013",
    badgeText: "Mega Infrastructure",
    image: "/images/engineering.jpg",
    stats: [
      { label: "Voltage Capacity", value: "Up to 380 kV" },
      { label: "Flagship Project", value: "KAFC BSP #9020" },
      { label: "Grid Reliability", value: "100% Tested" }
    ]
  },
  {
    id: "aviation-aerospace",
    name: "Best Star Aviation",
    shortName: "Best Star Aviation",
    sector: "Tourism & Hospitality",
    tagline: "Private Executive Jet Charters & Aircraft Lease Management",
    description: "Bespoke executive aviation solutions, private jet brokering, and aerospace logistics serving dignitaries and business leaders worldwide.",
    detailedOverview: "Best Star Aviation provides discreet, unparalleled private charter and aviation consulting services. Whether arranging intercontinental jet flights for royal delegations or coordinating critical air-cargo charter flights for high-value industrial components, we embody the zenith of luxury and operational precision.",
    keyHighlights: [
      "Access to a worldwide network of light, midsize, and ultra-long-range executive jets",
      "Bespoke inflight dining, private terminal handling (FBO), and discreet security coordination",
      "Rapid air medical evacuation (Medevac) charter availability",
      "Aircraft lease management and aerospace spare parts procurement"
    ],
    capabilities: [
      "On-Demand Private Jet Charters Worldwide",
      "Corporate Aircraft Leasing & Portfolio Management",
      "VIP Ground Handling & FBO Lounge Coordination",
      "Air Ambulance & Emergency Medevac Repatriation",
      "Aerospace Logistics & AOG Urgent Delivery"
    ],
    operatingCountries: ["United Arab Emirates", "Saudi Arabia", "Global"],
    headquarters: "Dubai World Central (DWC) / Dubai, UAE",
    establishedDate: "2014",
    badgeText: "Aviation Prestige",
    image: "/images/dubai-skyline.jpg",
    stats: [
      { label: "Charter Network", value: "1,200+ Aircraft" },
      { label: "Airports Served", value: "500+ Worldwide" },
      { label: "Discretion & Safety", value: "100% Guaranteed" }
    ]
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "hvac-contract",
    title: "Best Star Facility Management signs major HVAC Controls and Electrical Contract",
    date: "October 2026",
    category: "Contract",
    summary: "Best Star Facility Management proudly announces the signing of a landmark contract for HVACs' automated controls and commercial electrical systems in Dubai.",
    fullStory: "In a major stride strengthening our MEP engineering division, Best Star Facility Management has secured an extensive multi-year contract covering computerized HVAC automation controls, smart energy sensors, and primary electrical distribution for high-profile commercial properties in the UAE. The project incorporates intelligent energy conservation algorithms anticipated to reduce building power consumption by 24%, establishing a benchmark for sustainable smart facility engineering in the region.",
    location: "Dubai, United Arab Emirates",
    referenceNo: "BSG-PR-2026-104",
    author: "Best Star Corporate Communications & Infrastructure Desk",
    spokespersonQuote: {
      quote: "This landmark award represents a powerful affirmation of our engineering precision and smart energy management capabilities. We are enabling landmark UAE assets to operate with 24% higher energy efficiency while maintaining zero disruption to commercial tenants.",
      speaker: "Ibunu Suwoothu Kamal",
      designation: "Executive Chairman, Best Star Group FZE"
    },
    keyHighlights: [
      "Multi-year turnkey automated MEP and BMS instrumentation contract",
      "Algorithmic chiller plant staging delivering up to 24% documented energy savings",
      "Direct integration of IoT vibration sensors and predictive refrigerant telemetry",
      "Strict conformance to ASHRAE 90.1 energy standards and Dubai Green Building Regulations",
      "Centralized 24/7 engineering command center support with guaranteed 45-minute dispatch SLA"
    ],
    image: "/images/engineering.jpg"
  },
  {
    id: "ajmal-pharmacy-acquisition",
    title: "Best Star Pharma completes strategic acquisition of M/S Ajmal Pharmacy",
    date: "September 2026",
    category: "Acquisition",
    summary: "Expanding community healthcare footprint across Sharjah through the complete integration of M/S Ajmal Pharmacy under the Best Star Group banner.",
    fullStory: "Under the strategic vision of Chairman Ibunu Suwoothu Kamal, Best Star Pharma Trading L.L.C has completed the 100% equity takeover of M/S Ajmal Pharmacy in Sharjah. The acquisition brings prime retail pharmacy locations into our group healthcare network, modernizing patient care with digitized prescription fulfillment, free cold-chain home medication delivery, and access to internationally approved therapeutic brands directly imported via our licensed wholesale distribution channels.",
    location: "Sharjah, United Arab Emirates",
    referenceNo: "BSG-PR-2026-092",
    author: "Best Star Life Sciences & Healthcare Investment Directorate",
    spokespersonQuote: {
      quote: "The acquisition of Ajmal Pharmacy fulfills our covenant to bring premier, empathetic community pharmacy services within reach of every neighborhood in Sharjah and the Northern Emirates, backed by UAE MOHAP certified standards.",
      speaker: "Dr. K. Rahim",
      designation: "Director of Healthcare & Life Sciences, Best Star Pharma"
    },
    keyHighlights: [
      "100% equity acquisition expanding Best Star Pharma community footprint in Sharjah",
      "Full digital integration with UAE MOHAP Tatmeen drug track-and-trace system",
      "24/7 dedicated cold-chain home medicine delivery fleet across residential districts",
      "Comprehensive formulary expansion introducing 1,200+ specialty therapeutic lines",
      "Modernized digital point-of-sale and chronic disease patient management programs"
    ],
    image: "/images/healthcare.jpg"
  },
  {
    id: "win-path-lab-partnership",
    title: "Best Star Group signs international healthcare partnership with Win Path Lab",
    date: "August 2026",
    category: "Partnership",
    summary: "Equal 50-50 equity partnership established with Win Path Lab and Health Care to expand clinical diagnostic centers and pathology labs.",
    fullStory: "As part of its long-term strategic investments in life sciences and preventative medicine, Best Star Group has finalized a formal partnership agreement with equal stakes in Win Path Lab and Health Care in India. This cross-border collaboration establishes advanced automated biochemistry, molecular diagnostic screening, and high-accuracy pathology infrastructure serving over 500,000 diagnostic patients annually across our shared network.",
    location: "India & UAE",
    referenceNo: "BSG-PR-2026-081",
    author: "Best Star International Joint Ventures Directorate",
    spokespersonQuote: {
      quote: "Diagnostic precision is the prerequisite for all therapeutic outcomes. By uniting Best Star Group's cross-border logistics and capital strength with Win Path Lab's clinical excellence, we are scaling accessible diagnostic medicine across India and the GCC.",
      speaker: "Ibunu Suwoothu Kamal",
      designation: "Executive Chairman, Best Star Group FZE"
    },
    keyHighlights: [
      "50-50 cross-border equity joint venture uniting Indian and UAE diagnostic expertise",
      "Over 500,000 patient diagnostic assays processed annually across automated platforms",
      "Full molecular pathology, immunohistochemistry, and automated biochemistry testing",
      "ISO 15189 compliance pathway and NABL accreditation standards",
      "Seamless cross-border telemedicine and second-opinion reporting integration"
    ],
    image: "/images/healthcare.jpg"
  },
  {
    id: "kafc-power-project",
    title: "High-Voltage Power Construction Milestone: KAFC BSP#9020 Riyadh",
    date: "July 2026",
    category: "Infrastructure",
    summary: "Engineering teams advance construction works on KAFC New 380kv/132kv/13.8kv Bulk Supply Point substation at King Abdullah Financial City.",
    fullStory: "Our high-voltage infrastructure engineering division continues its landmark execution of technical substation packages at King Abdullah Financial City (KAFC) in Riyadh, Kingdom of Saudi Arabia. Project BSP#9020 encompasses extra-high-voltage switchgear installations (380kV/132kV/13.8kV), power transformer bay assemblies, and computerized protection relay integrations to energize financial towers and commercial headquarters under the Saudi Vision 2030 modernization mandate.",
    location: "Riyadh, Kingdom of Saudi Arabia",
    referenceNo: "BSG-PR-2026-070",
    author: "Best Star Heavy Engineering & Energy Directorate",
    spokespersonQuote: {
      quote: "Participating in the power infrastructure backbone of King Abdullah Financial City is an honor. Our high-voltage team adheres to the most stringent Saudi Electricity Company (SEC) technical specifications to guarantee 100% grid reliability.",
      speaker: "Eng. Tariq Al-Nuaimi",
      designation: "Lead Infrastructure Project Director, Riyadh Directorate"
    },
    keyHighlights: [
      "Execution of Extra High Voltage (EHV) substation capacity up to 380 kV",
      "Direct power delivery to financial headquarters in King Abdullah Financial City (KAFC)",
      "Strict compliance with Saudi Electricity Company (SEC) technical guidelines",
      "Integration of high-voltage Gas Insulated Switchgear (GIS) and 500MVA power transformers",
      "Zero-Lost-Time-Injury (LTI) record maintained across 650,000 safe man-hours"
    ],
    image: "/images/engineering.jpg"
  },
  {
    id: "fleet-expansion",
    title: "Al Saqer Buses and Best Star Transport expand commercial passenger fleet",
    date: "June 2026",
    category: "Fleet Expansion",
    summary: "Addition of 45 new Euro-5 environmentally compliant luxury passenger coaches to service corporate staff contracts across the UAE.",
    fullStory: "To accommodate surging demand for corporate employee transit and luxury tourism charters, Best Star Transport and Leasing L.L.C together with Al Saqer Buses Rental has taken delivery of 45 brand-new luxury coaches. Equipped with advanced telematics, passenger USB charging, ergonomic seating, and automated collision-avoidance radar, the new fleet underscores our commitment to passenger comfort, driver safety, and zero-emission goals across the United Arab Emirates.",
    location: "United Arab Emirates",
    referenceNo: "BSG-PR-2026-061",
    author: "Best Star Fleet & Mobility Directorate",
    spokespersonQuote: {
      quote: "Corporate mobility in the UAE demands both unyielding punctual reliability and passenger comfort. This fleet expansion enhances our daily transit capacity while slashing greenhouse emissions through Euro-5 compliant powertrains.",
      speaker: "M. Faris",
      designation: "Head of Fleet Operations, Best Star Transport"
    },
    keyHighlights: [
      "45 brand-new Euro-5 compliant luxury coaches added to commercial operations",
      "Servicing top-tier multinational corporate employee transit contracts across UAE free zones",
      "Equipped with GPS telematics, live route monitoring, and collision mitigation radar",
      "Ergonomic executive reclining seating with individual USB power outlets and Wi-Fi",
      "Full preventive maintenance SLA backed by Best Star Automotive workshops"
    ],
    image: "/images/dubai-skyline.jpg"
  }
];

export const GLOBAL_OFFICES: CountryOffice[] = [
  {
    code: "UAE",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    city: "Dubai & Sharjah (Global HQ)",
    role: "Corporate Global Headquarters",
    address: "Best Star Group FZE, Executive Tower, Sheikh Zayed Road, Dubai & Hamriyah Free Zone, Sharjah, UAE",
    phone: "+971 4 288 9123 / +971 6 526 8450",
    email: "info@beststargroup.com",
    keyOperations: [
      "Group Executive Holding & Investment Directorate",
      "Pharmaceutical Trading & Healthcare Chains",
      "Integrated Facility Management & HVAC Controls",
      "Cargo Logistics, Bonded Warehousing & Port Clearance",
      "Luxury Tourism, Executive Travel & Aviation Charters",
      "Automotive Engineering Hubs & Fleet Leasing"
    ],
    localTimezone: "GST (UTC+4)"
  },
  {
    code: "KSA",
    country: "Kingdom of Saudi Arabia",
    flag: "🇸🇦",
    city: "Riyadh",
    role: "Power & Infrastructure Regional Hub",
    address: "King Abdullah Financial City (KAFC) District, Northern Ring Road, Riyadh, Kingdom of Saudi Arabia",
    phone: "+966 11 482 7100",
    email: "ksa@beststargroup.com",
    keyOperations: [
      "High-Voltage Substation Construction (380kV/132kV)",
      "KAFC Power Grid Electrification & Commissioning",
      "Industrial MEP Contracting & Facility Operations",
      "Corporate Transport Fleet Leasing in Central Province"
    ],
    localTimezone: "AST (UTC+3)"
  },
  {
    code: "IND",
    country: "India",
    flag: "🇮🇳",
    city: "Chennai & Bangalore",
    role: "Media, Diagnostic Healthcare & CSR Hub",
    address: "Best Star India Services Pvt Ltd, Apex Plaza, Nungambakkam, Chennai, Tamil Nadu, India",
    phone: "+91 44 2822 5590",
    email: "india@beststargroup.com",
    keyOperations: [
      "Moon TV Satellite Broadcast Network (Major Stakeholder)",
      "Win Path Lab & Health Care Diagnostic Centers",
      "MAKE Trust Educational CSR & Youth Skill Development",
      "Engineering Offshore Design Support & Testing Operations"
    ],
    localTimezone: "IST (UTC+5:30)"
  },
  {
    code: "MYS",
    country: "Malaysia",
    flag: "🇲🇾",
    city: "Kuala Lumpur",
    role: "Hospitality, Retail & Telecommunications Hub",
    address: "Best Star Enterprise Sdn Bhd, Bukit Bintang Central, Kuala Lumpur, Malaysia",
    phone: "+60 3 2148 6788",
    email: "malaysia@beststargroup.com",
    keyOperations: [
      "Premier Fine Dining Restaurants & Culinary Brands",
      "Retail Supermarkets & Imported Halal Goods Hub",
      "Next-Gen Mobile Telecommunications Accessories Stores",
      "ASEAN Regional Sourcing & Trade Gateway"
    ],
    localTimezone: "MYT (UTC+8)"
  }
];

export const CAREER_OPENINGS: CareerOpening[] = [
  {
    id: "hvac-lead-engineer",
    title: "Senior HVAC & BMS Automation Engineer",
    subsidiary: "Best Star Facility Management",
    location: "Dubai, UAE",
    type: "Full-Time",
    experience: "5 - 8 Years",
    department: "Engineering & Operations",
    description: "Lead chiller control retrofits, BMS programming, and electrical troubleshooting for prime commercial real estate portfolios.",
    overview: "Best Star Facility Management is seeking an accomplished Senior HVAC & BMS Automation Engineer to oversee central chiller plants, building management system (BMS) architectures, and precision airflow controls across commercial towers, hospital centers, and industrial facilities in Dubai and Abu Dhabi. In this role, you will lead a multidisciplinary team of field technicians, optimize energy performance, and interface directly with corporate facility directors.",
    responsibilities: [
      "Direct the preventative and corrective maintenance of large-capacity centrifugal and screw chillers (Carrier, Trane, York, Daikin).",
      "Program, configure, and troubleshoot automated Building Management Systems (BMS) utilizing BACnet, Modbus, and LonWorks protocols.",
      "Conduct thermodynamic load calculations, airflow balancing (TAB), and IAQ (Indoor Air Quality) compliance audits across commercial client portfolios.",
      "Analyze electrical single-line diagrams, VFD controllers, PLC automation panels, and backup emergency generator transfers.",
      "Manage client SLAs, prepare detailed root-cause engineering incident reports, and implement predictive maintenance schedules."
    ],
    qualifications: [
      "Bachelor's Degree in Mechanical or Electrical Engineering from an accredited university.",
      "Minimum 5 to 8 years of hands-on Gulf experience in high-rise MEP facility management and HVAC controls.",
      "Certified BMS Automation Specialist (Schneider EcoStruxure, Honeywell Enterprise, or Johnson Controls Metasys).",
      "Valid UAE Driving License.",
      "Registered with UAE Society of Engineers (SOE)."
    ],
    skills: [
      "Centrifugal Chiller Overhauls",
      "BACnet & Modbus BMS Programming",
      "Variable Frequency Drives (VFD)",
      "Energy Efficiency Auditing",
      "Team Leadership & Vendor Governance"
    ],
    benefits: [
      "Competitive Tax-Free Executive Salary (AED 16,000 - 22,000 / month)",
      "Comprehensive Family Medical Insurance (Top-tier network)",
      "Annual Roundtrip Business/Economy Flight Allowance to Home Country",
      "Company Executive Vehicle & Fuel Allowance",
      "End of Service Gratuity & Performance Bonus Scheme"
    ],
    salaryRange: "AED 16,000 - 22,000 per month",
    workSchedule: "Full-Time • 48 Hours/Week • Monday to Friday"
  },
  {
    id: "licensed-pharmacist",
    title: "Licensed Chief Pharmacist (MOH / DHA Certified)",
    subsidiary: "Best Star Pharma Trading L.L.C",
    location: "Sharjah, UAE",
    type: "Full-Time",
    experience: "3 - 6 Years",
    department: "Healthcare & Retail",
    description: "Manage pharmacy dispensaries, patient counseling, regulatory MOH inspections, and inventory cold-chain compliance.",
    overview: "Best Star Pharma Trading L.L.C operates retail pharmacies and wholesale distribution networks across the UAE, including the historic M/S Ajmal Pharmacy chain in Sharjah. We are recruiting an experienced Licensed Chief Pharmacist to lead clinical pharmacy operations, oversee GDP (Good Distribution Practice) warehousing, ensure cold-chain vaccine integrity, and deliver compassionate, professional patient counseling.",
    responsibilities: [
      "Dispense prescription medications, conduct clinical drug-drug interaction reviews, and provide patient medication therapy management.",
      "Ensure 100% regulatory compliance with UAE Ministry of Health and Prevention (MOHAP) and Dubai Health Authority (DHA) mandates.",
      "Supervise pharmaceutical cold-chain storage (2°C - 8°C) and automated digital data-logger monitoring.",
      "Manage computerized inventory, stock replenishment, fast-moving OTC retail lines, and narcotics register audits.",
      "Train pharmacy assistants, oversee retail merchandising, and represent Best Star Pharma during ministry inspections."
    ],
    qualifications: [
      "Bachelor of Pharmacy (B.Pharm) or Doctor of Pharmacy (Pharm.D) degree.",
      "Valid and active UAE MOHAP or DHA Pharmacist License / Evaluation Certificate.",
      "Minimum 3 to 6 years of clinical retail pharmacy or pharmaceutical trading experience in the UAE.",
      "Fluent bilingual proficiency in English and Arabic (mandatory for patient consultations).",
      "Sound knowledge of UAE Federal Pharmacy laws and controlled medicine registers."
    ],
    skills: [
      "MOHAP / DHA Compliance Protocols",
      "GDP Cold-Chain Management",
      "Clinical Patient Counseling",
      "Pharmacy ERP & POS Systems",
      "Insurance Claim Adjudication (Daman, NextCare, MetLife)"
    ],
    benefits: [
      "Tax-Free Professional Salary (AED 9,000 - 13,000 / month)",
      "Comprehensive Medical & Malpractice Insurance",
      "Annual Flight Ticket to Home Country",
      "Performance Commission on Pharmacy Retail Sales",
      "Statutory UAE End of Service Gratuity"
    ],
    salaryRange: "AED 9,000 - 13,000 per month + Incentives",
    workSchedule: "Full-Time • Shift-based rotation"
  },
  {
    id: "freight-operations-manager",
    title: "International Freight Forwarding Operations Lead",
    subsidiary: "Best Star Cargo",
    location: "Dubai Cargo Village, UAE",
    type: "Full-Time",
    experience: "4 - 7 Years",
    department: "Logistics & Supply Chain",
    description: "Oversee air and sea cargo consolidation, customs tariff classifications, and carrier rate negotiations.",
    overview: "Best Star Cargo connects global supply routes linking Dubai's multi-modal logistics hub to Asia, Europe, Africa, and the Americas. As our International Freight Forwarding Operations Lead, you will manage end-to-end import/export shipments, air-freight charters via Dubai World Central (DWC), sea-freight containers via Jebel Ali Port, bonded warehousing, and customs clearance protocols.",
    responsibilities: [
      "Coordinate international air cargo bookings, sea freight FCL/LCL consolidations, and breakbulk chartering.",
      "Direct customs declaration processes via Dubai Customs Mirsal 2 platform, HS tariff classification, and bonded port transfers.",
      "Negotiate competitive carrier rates with major shipping lines (Maersk, MSC, CMA CGM) and air cargo carriers (Emirates SkyCargo, Qatar Airways).",
      "Manage cold-chain perishable cargo transit, dangerous goods (IATA DGR), and high-value time-critical consignments.",
      "Resolve demurrage, transshipment delays, and client documentation requirements (Bills of Lading, Air Waybills, Certificates of Origin)."
    ],
    qualifications: [
      "Bachelor's Degree in Supply Chain Management, Logistics, International Trade, or Business Administration.",
      "Minimum 4 to 7 years in freight forwarding operations within UAE / GCC ports and airports.",
      "Valid IATA Dangerous Goods (DGR) and FIATA certifications preferred.",
      "Expert knowledge of Dubai Trade, Mirsal 2, and international Incoterms 2020.",
      "Demonstrated carrier relationship network across Arabian Gulf shipping lanes."
    ],
    skills: [
      "Mirsal 2 Customs Clearance",
      "Air & Ocean Freight Consolidation",
      "IATA DGR Regulations",
      "Carrier Freight Rate Negotiation",
      "Intermodal Supply Chain Optimization"
    ],
    benefits: [
      "Tax-Free Package (AED 12,000 - 17,000 / month)",
      "Full Medical Insurance Coverage",
      "Annual Roundtrip Airline Ticket",
      "Quarterly Freight Volume Performance Bonus",
      "End of Service Gratuity & Gratuity Enhancements"
    ],
    salaryRange: "AED 12,000 - 17,000 per month",
    workSchedule: "Full-Time • Sunday to Thursday (On-call port support)"
  },
  {
    id: "ndt-level-ii-inspector",
    title: "Certified NDT Inspector (RT / UT / MT)",
    subsidiary: "IGTS Technical Services L.L.C",
    location: "Abu Dhabi & Offshore, UAE",
    type: "Full-Time",
    experience: "3 - 5 Years",
    department: "Engineering QA/QC",
    description: "Perform ultrasonic flaw detection, weld radiographic interpretation, and safety documentation for industrial pipeline clients.",
    overview: "IGTS Technical Services L.L.C and Indo Gulf Testing Services deliver accredited engineering inspection and structural fitness verification for petrochemical refineries, power generation plants, and cross-country gas pipelines across the UAE. We are hiring certified ASNT Level II NDT Inspectors to perform advanced non-destructive examinations in onshore and offshore environments.",
    responsibilities: [
      "Execute Non-Destructive Testing (NDT) using Ultrasonic Testing (UT), Radiographic Testing (RT), Magnetic Particle (MT), and Dye Penetrant (PT).",
      "Interpret weld radiographs according to ASME Section VIII, Section IX, API 1104, and AWS D1.1 standards.",
      "Perform ultrasonic thickness gauging and corrosion mapping on high-pressure vessels, storage tanks, and structural steel beams.",
      "Generate calibrated inspection reports, non-conformance logs (NCRs), and QA/QC punch lists for client engineering approval.",
      "Enforce zero-accident HSE standards and industrial radiation safety regulations at all job sites."
    ],
    qualifications: [
      "Diploma or Bachelor's Degree in Mechanical, Metallurgical, or Materials Engineering.",
      "Valid ASNT Level II certifications in RT, UT, MT, and PT (PCN or CSWIP certification is an added advantage).",
      "Minimum 3 to 5 years of verified field inspection experience in UAE oil & gas or power plants.",
      "Valid UAE Radiation Protection Officer (RPO) license is highly desirable.",
      "Offshore safety passport (BOSIET / OPITO) is advantageous."
    ],
    skills: [
      "ASNT Level II UT/RT/MT/PT",
      "ASME / API / AWS Code Compliance",
      "Weld Quality & Defect Characterization",
      "Corrosion Mapping & Flaw Sizing",
      "Radiation Safety & HSE Compliance"
    ],
    benefits: [
      "Tax-Free Base Salary (AED 8,500 - 13,500 / month) + Offshore Field Allowances",
      "Full Site Accommodation, Transportation, and Per Diem Meals",
      "Comprehensive High-Risk Medical & Life Insurance",
      "Annual Home Flight Ticket Allowance",
      "Continuous Sponsorship for Level III Certifications"
    ],
    salaryRange: "AED 8,500 - 13,500 per month + Field Allowances",
    workSchedule: "Full-Time • Rotational site schedule"
  },
  {
    id: "executive-travel-consultant",
    title: "Luxury Travel & VIP Concierge Consultant",
    subsidiary: "Best Star Tourism L.L.C",
    location: "Downtown Dubai, UAE",
    type: "Full-Time",
    experience: "2 - 5 Years",
    department: "Hospitality & Tourism",
    description: "Curate high-end itineraries, private jet charter bookings, luxury yacht excursions, and corporate VIP guest management.",
    overview: "Best Star Tourism L.L.C is the founding enterprise of Best Star Group, delivering benchmark hospitality, VIP corporate travel, and bespoke experiential excursions in the UAE for nearly two decades. We are seeking a refined Luxury Travel & VIP Concierge Consultant to curate high-net-worth individual (HNWI) travel itineraries, manage luxury hotel partnerships, arrange private aviation charters, and coordinate official government delegations.",
    responsibilities: [
      "Design personalized luxury travel itineraries including 5-star resort suites, private yacht charters, helicopter transfers, and VIP desert safaris.",
      "Liaise with Best Star Aviation to coordinate private jet charter flight requests and executive terminal handling at DWC / DXB.",
      "Oversee corporate MICE (Meetings, Incentives, Conferences, Exhibitions) travel logistics for international delegations.",
      "Manage VIP airport fast-track immigration, executive chauffeur limousine fleets, and personalized concierge services.",
      "Cultivate commercial relationships with luxury hotel chains (Atlantis, Burj Al Arab, Ritz-Carlton, Four Seasons)."
    ],
    qualifications: [
      "Degree in Hospitality Management, Tourism, or International Communications.",
      "Minimum 2 to 5 years in luxury VIP travel curation or 5-star concierge services in Dubai.",
      "Proficient in Global Distribution Systems (Amadeus, Sabre) and luxury hospitality booking engines.",
      "Flawless English communication skills; Arabic or Russian fluency is a major asset.",
      "High emotional intelligence, discretion, and problem-solving agility under tight deadlines."
    ],
    skills: [
      "VIP Destination Management (DMC)",
      "Private Jet & Yacht Charter Coordination",
      "Corporate MICE Operations",
      "Amadeus / Sabre GDS Ticketing",
      "Luxury Client Relationship Management"
    ],
    benefits: [
      "Tax-Free Salary (AED 8,000 - 12,000 / month) + Attractive Commission Structure",
      "Comprehensive Medical Insurance",
      "Annual Flight Ticket to Home Country",
      "Luxury Hotel & Familiarization Trip Privileges",
      "UAE End of Service Gratuity"
    ],
    salaryRange: "AED 8,000 - 12,000 per month + Commission",
    workSchedule: "Full-Time • Sunday to Thursday"
  }
];

export const CORPORATE_VALUES = [
  {
    title: "Open Innovation Strategy",
    subtitle: "Smarter Execution over Bureaucracy",
    description: "We do not believe innovation requires inflated budgets. We make existing capital work smarter through open collaboration with agile entrepreneurs and world-class domain specialists."
  },
  {
    title: "Uncompromising Quality",
    subtitle: "Excellence as our Signature",
    description: "Every product distributed, facility managed, and structure built adheres to the most stringent international standards including ISO 9001, MOHAP, and ASNT protocols."
  },
  {
    title: "Safety, Health & Environment (HSE)",
    subtitle: "Zero Compromise, Zero Harm",
    description: "Our greatest asset is our human capital. We foster an uncompromising safety culture that protects our workforce, our partners, and the communities we operate within."
  },
  {
    title: "Customer-Centric Leadership",
    subtitle: "Our Partners are our Ambassadors",
    description: "We measure success not by internal metrics, but by the tangible commercial and social value generated for our clients, partners, and stakeholders."
  }
];

export const CSR_INITIATIVES = [
  {
    title: "MAKE Trust Education Mission",
    focus: "Youth Empowerment & Scholarships",
    description: "Our flagship charitable foundation dedicated to promoting higher education, digital skills training, and scholarships for underprivileged students across India.",
    stat: "1,200+ Scholarships Granted"
  },
  {
    title: "Community Health & Wellness Drives",
    focus: "Preventative Healthcare Access",
    description: "Organized via Best Star Pharma and Win Path Labs, providing free biometric screenings, diabetes diagnostics, and essential medications to blue-collar workers.",
    stat: "25,000+ Screenings Conducted"
  },
  {
    title: "Sustainable Fleet & Energy Efficiency",
    focus: "Environmental Stewardship",
    description: "Transitioning passenger buses to eco-friendly clean emissions standards and implementing smart chiller optimization to lower carbon footprints across commercial complexes.",
    stat: "24% Energy Reductions"
  }
];

export interface BusinessIdea {
  id: string;
  title: string;
  shortName: string;
  category: "AI & Smart Infrastructure" | "Cold-Chain & MedTech" | "Clean Energy & Mobility" | "Industrial IoT & SCADA" | "Luxury Concierge & Fintech";
  stage: "Active Incubation" | "Pilot Testing" | "Feasibility Study" | "Open for Co-Investment" | "Concept Validation";
  tagline: string;
  projectDescription: string;
  executiveSummary: string;
  problemStatement: string;
  proposedSolution: string;
  synergyWithBestStar: string;
  marketPotential: string;
  tam: string;
  targetTimeline: string;
  capitalRequirement: string;
  hubLocation: string;
  technologyStack: string[];
  projectedMilestones: {
    phase: string;
    timeline: string;
    objective: string;
    status: "Completed" | "In Progress" | "Upcoming";
  }[];
  coFounderProfileNeeded: string[];
  contactEmail: string;
  image: string;
}

export const BUSINESS_IDEAS: BusinessIdea[] = [
  {
    id: "ai-bms-diagnostics",
    title: "NeuralFacility: Autonomous AI Chiller & Building Energy Optimization",
    shortName: "NeuralFacility AI",
    category: "AI & Smart Infrastructure",
    stage: "Pilot Testing",
    tagline: "Autonomous edge-AI software lowering commercial tower cooling energy consumption by up to 28%.",
    projectDescription: "NeuralFacility is an industrial-grade enterprise IoT and artificial intelligence system designed to optimize large-scale district cooling and central chiller plant operations across Gulf commercial towers. The project deploys localized edge-computing controllers directly adjacent to industrial chiller switchboards, communicating bi-directionally via BACnet/IP and Modbus protocols without requiring core building management system replacements.\n\nThe system continuously aggregates ambient external weather data, solar radiation forecasts, internal occupancy density patterns, and chilled water return temperatures. Utilizing deep reinforcement learning models calibrated specifically to extreme Middle Eastern climatic conditions (reaching 50°C ambient temperatures), NeuralFacility preemptively adjusts chilled water setpoints, valve openings, and variable frequency drive (VFD) motor speeds. In active field validations, the project delivers documented electrical consumption reductions of 22% to 28%, significantly lowering carbon emissions and participating in dynamic utility demand-response tariff programs.",
    executiveSummary: "NeuralFacility deploys edge-computing telemetry on existing HVAC chillers, air-handling units, and cooling towers across Dubai and GCC high-rises. Using reinforcement learning tuned to Gulf ambient temperatures (48°C+), it dynamically recalibrates refrigerant flow, chilled water temperature, and fan speeds in real time without human intervention.",
    problemStatement: "Cooling accounts for more than 70% of peak electricity demand across GCC commercial towers, hospital centers, and retail complexes. Existing BMS systems operate on static timer schedules that fail to adapt to ambient humidity spikes, resulting in millions of kilowatt-hours wasted annually.",
    proposedSolution: "A non-invasive, bolt-on IoT sensor array coupled with an on-premises neural network that interfaces directly with BACnet/Modbus protocols. The model predicts thermal inertia and solar radiance 4 hours in advance to precool facilities at low-tariff periods.",
    synergyWithBestStar: "Immediate live operational deployment across Best Star Facility Management's 8.5 million sq.ft managed asset portfolio across Dubai, Sharjah, and Abu Dhabi. Instant captive pilot grounds and MEP engineering technicians ready for field installation.",
    marketPotential: "GCC commercial smart building market projected to surpass $12.4 Billion by 2030, driven by UAE Net Zero 2050 charter and mandatory green building energy compliance.",
    tam: "USD $4.2 Billion (GCC & Middle East)",
    targetTimeline: "Commercial Rollout Q3 2026",
    capitalRequirement: "AED 3.5 Million (Seed Round / Co-Investment)",
    hubLocation: "Dubai Silicon Oasis, UAE",
    technologyStack: ["Edge AI Microcontrollers", "BACnet/IP Gateway", "TensorFlow Lite Embedded", "MQTT Telemetry Broker", "Next.js Executive Dashboard", "AWS GovCloud (UAE)"],
    projectedMilestones: [
      { phase: "Phase 1: Proof of Concept", timeline: "Q1-Q2 2025", objective: "Benchmarked 32 chiller sensors at Best Star HQ tower; achieved 22.4% measured energy savings.", status: "Completed" },
      { phase: "Phase 2: Multi-Site Pilot Testing", timeline: "Q3 2025 - Q1 2026", objective: "Expanded to 4 commercial complexes and 1 private hospital in Dubai; integrated automated DEWA tariff arbitrage.", status: "In Progress" },
      { phase: "Phase 3: Commercial Licensure & GCC Rollout", timeline: "Q3-Q4 2026", objective: "ESCo (Energy Service Company) certification and subscription SaaS rollout to third-party developers in Riyadh and Dubai.", status: "Upcoming" },
      { phase: "Phase 4: Series A & Global Scaling", timeline: "2027", objective: "Expansion into Southeast Asian mega-cities (Kuala Lumpur, Singapore, Jakarta).", status: "Upcoming" }
    ],
    coFounderProfileNeeded: ["Senior IoT Embedded Engineer", "Building Automation (BACnet) Domain Specialist", "B2B Enterprise Real Estate Sales Executive"],
    contactEmail: "ventures.ai@beststargroup.com",
    image: "/images/engineering-facility.jpg"
  },
  {
    id: "coldchain-pharma-drone",
    title: "AeroPharma: Autonomous Cold-Chain Drone Delivery for Critical Biologics",
    shortName: "AeroPharma Logistics",
    category: "Cold-Chain & MedTech",
    stage: "Feasibility Study",
    tagline: "Autonomous UAV network transporting temperature-critical vaccines, antivenoms, and oncology biologics in sub-30 minutes.",
    projectDescription: "AeroPharma Logistics is a sovereign-compliant autonomous aerial transport network developed to guarantee sub-30 minute delivery of emergency pharmaceuticals, biological reagents, and high-value medical supplies across the UAE and broader GCC. The project combines fixed-wing VTOL (Vertical Takeoff and Landing) electric unmanned aerial systems (UAS) with hermetically sealed active refrigeration capsules operating strictly between +2°C and +8°C in accordance with MOHAP and WHO Good Distribution Practice (GDP) standards.\n\nThe flight platform features redundant autopilot avionics, obstacle-avoidance lidar, fail-safe parachute deployment systems, and dual LTE/Iridium satellite telemetry links providing continuous real-time temperature tracking to hospital central pharmacies. Autonomous docking stations situated on hospital rooftops enable hands-free battery swapping, robotic capsule loading, and immediate dispatch without ground crew handling, eliminating transit delays caused by dense highway traffic.",
    executiveSummary: "AeroPharma bridges critical pharmaceutical logistics bottlenecks across the Northern Emirates, desert industrial developments, and island hubs. Utilizing VTOL (Vertical Takeoff and Landing) electric aircraft equipped with phase-change active thermal refrigeration (2°C to 8°C), it delivers time-critical pharmaceuticals while eliminating urban traffic delays.",
    problemStatement: "Emergency biologic transfers (e.g., antivenoms, rare blood factors, diagnostic biopsies, urgent surgical reagents) between central hospital pharmacies and remote clinics frequently face 90-120 minute highway congestions, jeopardizing cold-chain stability and patient outcomes.",
    proposedSolution: "A secure, regulatory-compliant autonomous delivery corridor utilizing fixed-wing VTOL drones with 90 km operating radii, autonomous landing cradles, and satellite telemetry continuously streaming real-time temperature logs compliant with MOHAP GDP standards.",
    synergyWithBestStar: "Direct integration with Best Star Pharma Trading L.L.C's MOHAP-licensed distribution network and Best Star Cargo's customs bonded clearance hubs at Dubai Cargo Village.",
    marketPotential: "Global medical drone delivery market expanding at 24.5% CAGR, with the UAE leading Middle East autonomous flight and civil aviation sandbox legislation.",
    tam: "USD $1.8 Billion (GCC Medical Logistics)",
    targetTimeline: "Sandbox Regulatory Approval Q4 2026",
    capitalRequirement: "AED 5.0 Million (Joint Venture Structure)",
    hubLocation: "Sharjah Airport Free Zone (SAIF Zone), UAE",
    technologyStack: ["VTOL Electric Drones", "Phase-Change Active Coolers", "Cellular LTE/5G + Iridium Satellite Link", "MOHAP GDP Compliance API", "Geo-Fencing Autopilot"],
    projectedMilestones: [
      { phase: "Phase 1: Regulatory Sandbox Entry", timeline: "Q4 2025", objective: "Initial corridor clearance filings with UAE GCAA and Sharjah Civil Aviation.", status: "In Progress" },
      { phase: "Phase 2: Thermal Capsule Validation", timeline: "Q2 2026", objective: "Simulated 50°C ambient test flights ensuring 2°C to 8°C payload integrity for 60 minutes.", status: "Upcoming" },
      { phase: "Phase 3: Hospital Pilot Corridors", timeline: "Q4 2026", objective: "Scheduled medical transport between Sharjah central warehouse and suburban clinical partners.", status: "Upcoming" },
      { phase: "Phase 4: Full GCC Commercial Launch", timeline: "2027", objective: "Cross-border logistics expansion into Eastern Province, Saudi Arabia.", status: "Upcoming" }
    ],
    coFounderProfileNeeded: ["Aeronautical Autopilot & Drone Systems Engineer", "Pharmaceutical Cold-Chain Quality Assurance Officer", "Aviation Regulatory Compliance Counsel"],
    contactEmail: "ventures.pharma@beststargroup.com",
    image: "/images/pharma-healthcare.jpg"
  },
  {
    id: "green-hydrogen-coaches",
    title: "H2Fleet: Zero-Emission Hydrogen Passenger Coaches & Smart Depots",
    shortName: "H2Fleet Mobility",
    category: "Clean Energy & Mobility",
    stage: "Active Incubation",
    tagline: "Converting commercial passenger transit into zero-emission hydrogen fuel-cell power with 600km range.",
    projectDescription: "H2Fleet Mobility is an industrial fleet decarbonization project converting commercial transit buses and long-haul intercity coaches from fossil-fuel diesel to zero-emission hydrogen fuel-cell electric powertrains (FCEV). Engineered to overcome the severe thermal degradation and excessive charging down-times that cripple battery-electric buses in desert environments, H2Fleet provides a full 650 km range on a single 10-minute refueling cycle.\n\nThe project integrates 120kW heavy-duty proton-exchange membrane (PEM) fuel-cell stacks, 350-bar Type IV lightweight composite hydrogen cylinders, and customized high-ambient cooling radiators capable of sustained continuous operation in 50°C summer heat. Concurrently, the project commissions turnkey containerized green hydrogen refueling depots equipped with localized solar-powered alkaline electrolyzers, providing captive fleets with clean fuel independence and zero-carbon compliance.",
    executiveSummary: "H2Fleet develops high-capacity 50-passenger hydrogen fuel cell buses tailored specifically for Gulf extreme climates. By combining onboard cryogenic hydrogen storage with localized electrolyzer-powered smart filling depots, H2Fleet allows corporate employers and tourist operators to decarbonize staff transportation without the 4-hour charging downtimes of heavy battery-EVs.",
    problemStatement: "Over 85,000 diesel-powered passenger buses circulate daily across UAE and Saudi industrial corridors. Heavy battery-electric buses suffer severe battery thermal degradation in 50°C summer heat, with significant battery weight reducing passenger capacity.",
    proposedSolution: "Hydrogen fuel-cell electric powertrains with fast 10-minute refueling, 650 km range per tank, and zero tailpipe emissions (pure water vapor). The system utilizes surplus regional solar power for green hydrogen generation at centralized fleet depots.",
    synergyWithBestStar: "Best Star Transport's 1,200+ passenger bus fleet and dedicated maintenance depots in Sharjah and Dubai provide immediate fleet conversion, captive passenger routes, and established corporate transport contracts.",
    marketPotential: "Saudi Vision 2030 and UAE Net Zero transportation mandates requiring 100% clean energy public and corporate transit fleets by 2040.",
    tam: "USD $6.5 Billion (GCC Fleet Decarbonization)",
    targetTimeline: "Pilot Prototype Fleet Q1 2027",
    capitalRequirement: "AED 12.0 Million (Co-Investment & Green Bond Facility)",
    hubLocation: "Sharjah & Dubai Industrial Park, UAE",
    technologyStack: ["PEM Fuel Cell Stacks (120kW)", "Type IV 350-bar Hydrogen Tanks", "Heavy-Duty Liquid Cooling System", "Fleet Telematics & Hydrogen SCADA", "Predictive Fuel Dispatch"],
    projectedMilestones: [
      { phase: "Phase 1: Engineering Feasibility & OEM Sourcing", timeline: "Q2-Q4 2025", objective: "Chassis integration partnerships with global hydrogen fuel-cell bus manufacturers.", status: "Completed" },
      { phase: "Phase 2: First 5-Bus Prototype Deployment", timeline: "Q3 2026", objective: "Field testing on daily Sharjah-Dubai corporate employee shuttle routes.", status: "In Progress" },
      { phase: "Phase 3: Dedicated Green Depot Commissioning", timeline: "Q1 2027", objective: "Solar-powered hydrogen compression and fueling station in Sharjah Industrial Area.", status: "Upcoming" },
      { phase: "Phase 4: Commercial Fleet Scale", timeline: "2027-2028", objective: "Scaling to 150 hydrogen buses across UAE and NEOM / Riyadh transit routes.", status: "Upcoming" }
    ],
    coFounderProfileNeeded: ["Hydrogen Fuel-Cell Systems Integration Engineer", "Commercial Fleet Operations Director", "Clean Infrastructure Project Finance Specialist"],
    contactEmail: "ventures.fleet@beststargroup.com",
    image: "/images/dubai-skyline.jpg"
  },
  {
    id: "predictive-substation-scada",
    title: "VoltGuard SCADA: Subsea & High-Voltage Grid Predictive Maintenance",
    shortName: "VoltGuard SCADA",
    category: "Industrial IoT & SCADA",
    stage: "Active Incubation",
    tagline: "Acoustic and partial-discharge AI sensing preventing catastrophic power transformer failures across high-voltage grids.",
    projectDescription: "VoltGuard SCADA is an advanced cyber-physical predictive maintenance system engineered for high-voltage (132kV to 400kV) transmission substations, industrial power plants, and critical grid interconnection nodes. The project deploys non-invasive ultra-high-frequency (UHF) radio-frequency sensors, acoustic partial-discharge monitors, and optoelectronic dissolved gas analysis (DGA) probes on live power transformers without requiring power outages or grid interruptions.\n\nCollected telemetry is ingested into on-premises edge computing appliances running predictive machine learning models compliant with IEC 61850 substation automation standards. The algorithms detect microscopic dielectric insulation degradation, partial discharge anomalies, and trace hydrogen/acetylene gas accumulations up to six months before potential catastrophic dielectric flashovers occur, preventing multi-million dollar transformer explosions and protecting critical national energy security.",
    executiveSummary: "VoltGuard SCADA provides non-intrusive partial discharge, acoustic emission, and dissolved gas analysis (DGA) sensors for 132kV/400kV electrical substations and industrial facilities. Its machine learning model detects microscopic dielectric insulation breakdown months before catastrophic flashovers or fire events occur.",
    problemStatement: "A single transmission substation transformer failure costs utilities between $2M - $8M in physical damage, weeks of industrial blackout penalties, and massive safety risks.",
    proposedSolution: "Real-time non-invasive ultra-high-frequency (UHF) sensors, fiber-optic vibration monitors, and cloud-synchronized SCADA digital twins that predict asset failure probabilities with 99.2% precision.",
    synergyWithBestStar: "Direct operational synergy with Best Star Power Infrastructure and IGTS Technical Services' ISO/IEC 17020 certified high-voltage testing and inspection division.",
    marketPotential: "Global power substation automation and predictive maintenance market surging to $24.7 Billion by 2031, with massive capital investments in GCC grid modernization.",
    tam: "USD $3.1 Billion (Middle East & North Africa)",
    targetTimeline: "Substation Pilot Deployment Q2 2026",
    capitalRequirement: "AED 4.0 Million (Strategic Equity / Angel Syndicate)",
    hubLocation: "Abu Dhabi & Dubai, UAE",
    technologyStack: ["Ultra-High Frequency (UHF) RF Sensors", "Dissolved Gas Analysis (DGA) Optoelectronics", "IEC 61850 Substation Protocol", "Industrial Edge Gateways", "Predictive Transformer Twin"],
    projectedMilestones: [
      { phase: "Phase 1: Sensor Hardware Lab Validation", timeline: "Q1-Q3 2025", objective: "High-voltage impulse laboratory testing in cooperation with accredited regional university.", status: "Completed" },
      { phase: "Phase 2: Live Substation Beta Deployment", timeline: "Q1-Q2 2026", objective: "Installation on three 132kV transformers in industrial manufacturing freezones.", status: "In Progress" },
      { phase: "Phase 3: Utility Qualification Testing", timeline: "Q3-Q4 2026", objective: "Vendor pre-qualification submissions for DEWA, SEWA, and SEC (Saudi Electricity Company).", status: "Upcoming" },
      { phase: "Phase 4: GCC Regional Grid Contracting", timeline: "2027", objective: "Enterprise predictive maintenance contracts across GCC interconnection grid authority.", status: "Upcoming" }
    ],
    coFounderProfileNeeded: ["High-Voltage (HV/EHV) Electrical Engineer", "Industrial SCADA & IEC 61850 Protocol Architect", "Utility Infrastructure Business Development Executive"],
    contactEmail: "ventures.power@beststargroup.com",
    image: "/images/engineering-facility.jpg"
  },
  {
    id: "ultra-luxury-ev-concierge",
    title: "Apex Mobility: On-Demand Chauffeur-Driven Armored & Electric VIP Fleet",
    shortName: "Apex VIP Mobility",
    category: "Luxury Concierge & Fintech",
    stage: "Pilot Testing",
    tagline: "Ultra-luxury electric and VR-certified armored concierge mobility for heads of state, family offices, and VIPs across the GCC.",
    projectDescription: "Apex VIP Mobility is a bespoke executive transport and security logistics platform created to serve heads of state, diplomatic delegations, sovereign wealth executives, and ultra-high-net-worth family offices operating in the GCC. The project unites an elite zero-emission and ballistic-certified vehicle fleet—comprising Rolls-Royce Spectre, Mercedes-Maybach EQS, and certified VR7/VR9 armored Cadillac Escalades—with a private cryptographic concierge platform.\n\nOperating through dedicated airside tarmac agreements at major executive aviation terminals (Dubai South DWC, Al Bateen Executive Abu Dhabi, and Riyadh Private Aviation), the platform guarantees verified executive security details within 15 minutes of landing. All chauffeurs undergo rigorous tactical evasive driving and close protection certification, while in-vehicle satellite systems provide tamper-proof encrypted communications and real-time sovereign tracking.",
    executiveSummary: "Apex Mobility combines a zero-emission fleet of Rolls-Royce Spectre, Mercedes-Maybach EQS, and ballistic-armored Cadillac Escalades with a proprietary blockchain-verified concierge booking platform. Serving private aviation terminals, royal protocols, and sovereign delegations, Apex provides white-glove security chauffeurs trained in executive protective driving.",
    problemStatement: "High-net-worth visitors, royal delegations, and international corporate boards visiting the UAE demand carbon-neutral mobility without compromising on ballistic security, ultimate acoustic comfort, or discretionary confidentiality.",
    proposedSolution: "A bespoke fleet management platform guaranteeing sub-15 minute tarmac access at private jet FBOs (Dubai South, Al Bateen Executive), real-time encrypted communications, biometric driver verification, and customized security details.",
    synergyWithBestStar: "Direct partnership with Best Star Tourism & Travel, VIP Charter Services, and Best Star Transport's established luxury licensing and airport operations infrastructure.",
    marketPotential: "Dubai and Riyadh represent the two highest-density VIP chauffeur and private aviation markets globally, with luxury hospitality spending exceeding $18 Billion annually.",
    tam: "USD $2.6 Billion (GCC Luxury Chauffeur & Armored Mobility)",
    targetTimeline: "Commercial Launch Q3 2026",
    capitalRequirement: "AED 8.0 Million (Asset-Backed Co-Investment)",
    hubLocation: "DIFC & Dubai South (DWC), UAE",
    technologyStack: ["Private iOS/Android Concierge App", "Encrypted Dispatch SCADA", "Ballistic VR7/VR9 Armored Enclosures", "Telematics & Biometric Driver Auth", "Crypto & Corporate Payment Gateway"],
    projectedMilestones: [
      { phase: "Phase 1: Fleet Licensing & Driver Academy", timeline: "Q1-Q3 2025", objective: "Acquired RTA luxury limousine operator licenses; completed British Security Chauffeur certification for initial 15 chauffeurs.", status: "Completed" },
      { phase: "Phase 2: Private Aviation FBO Beta Trials", timeline: "Q4 2025 - Q2 2026", objective: "Exclusive tarmac handling agreements at Jetex Dubai South and Al Bateen Executive Abu Dhabi.", status: "In Progress" },
      { phase: "Phase 3: Digital Concierge Platform Launch", timeline: "Q3 2026", objective: "Rollout of private invitation-only executive mobile app for family offices and luxury hotels.", status: "Upcoming" },
      { phase: "Phase 4: Riyadh & Doha Regional Expansion", timeline: "2027", objective: "Expansion into Riyadh season, Diriyah gate, and diplomatic quarters in Saudi Arabia.", status: "Upcoming" }
    ],
    coFounderProfileNeeded: ["Luxury Brand / VIP Hospitality Director", "Armored Fleet & Security Operations Specialist", "Mobile Product Experience Architect"],
    contactEmail: "ventures.apex@beststargroup.com",
    image: "/images/dubai-skyline.jpg"
  }
];

export interface Achievement {
  id: string;
  title: string;
  year: string;
  category: "Government & Regulatory Citation" | "Engineering & Infrastructure" | "Healthcare & Quality Benchmark" | "Sustainability & ESG" | "Corporate Growth & Logistics" | "Social Impact & Philanthropy";
  badge: string;
  awardingBody: string;
  summary: string;
  fullDossier: string;
  significance: string;
  location: string;
  image: string;
  referenceCode: string;
  keyMetrics: { label: string; value: string }[];
  executiveQuote: {
    quote: string;
    speaker: string;
    designation: string;
  };
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "mohap-gdp-excellence",
    title: "UAE Ministry of Health (MOHAP) GDP Cold-Chain Excellence Citation",
    year: "2025",
    category: "Healthcare & Quality Benchmark",
    badge: "MOHAP Sovereign Citation",
    awardingBody: "UAE Ministry of Health and Prevention (MOHAP)",
    summary: "Conferred for maintaining 99.98% cold-chain thermal integrity across 12 million units of critical temperature-sensitive vaccines and biologics distributed throughout the GCC.",
    fullDossier: "In recognition of uncompromising adherence to World Health Organization (WHO) and UAE MOHAP Good Distribution Practice (GDP) standards, Best Star Pharma Trading L.L.C was officially awarded the 2025 Sovereign Citation for Pharmaceutical Cold-Chain Reliability. Through continuous real-time IoT temperature telemetry, phase-change passive secondary packaging, and automated climate control in our central Sharjah logistics facilities, the enterprise distributed over 12 million therapeutic doses with zero temperature deviation incidents.",
    significance: "Establishes Best Star Pharma as one of only five private holding entities in the Northern Emirates authorized to handle ultra-low temperature cryogenic vaccines and oncology biologics at sovereign scale.",
    location: "Sharjah & Dubai, UAE",
    image: "/images/achievement-pharma-excellence.jpg",
    referenceCode: "BSG-AWD-MOHAP-2025-09",
    keyMetrics: [
      { label: "Cold-Chain Integrity", value: "99.98%" },
      { label: "Doses Distributed", value: "12M+ Units" },
      { label: "Audit Rating", value: "Class A Superior" },
      { label: "Partner Facilities", value: "480+ Pharmacies" }
    ],
    executiveQuote: {
      quote: "Quality in healthcare distribution is not a marketing metric; it is an irrevocable pact with every patient receiving our medicines across the Emirates.",
      speaker: "Ibunu Suwoothu Kamal",
      designation: "Chairman & Founder, Best Star Group"
    }
  },
  {
    id: "dewa-substation-zero-harm",
    title: "DEWA 132kV Infrastructure Excellence & Zero-Harm Safety Trophy",
    year: "2024",
    category: "Engineering & Infrastructure",
    badge: "Zero-Harm Safety Record",
    awardingBody: "Dubai Electricity and Water Authority (DEWA)",
    summary: "Awarded to Best Star Power Infrastructure and IGTS for completing 2.4 million safe man-hours with zero lost-time injuries (LTI) during high-voltage substation commissioning.",
    fullDossier: "During the high-stakes engineering, testing, and commissioning of three primary 132/11kV electrical substations powering the Dubai South industrial logistics zone, Best Star Power Infrastructure and IGTS Technical Services achieved a flawless safety milestone of 2.4 million consecutive man-hours with zero lost-time incidents (LTI). The citation honors our ASNT Level III non-destructive testing rigor, electrical lock-out tag-out (LOTO) protocols, and daily safety briefings conducted in multiple languages across all site engineers.",
    significance: "Demonstrates institutional MEP and high-voltage transmission engineering capability qualified for Tier-1 utility and national infrastructure megaprojects across the Arabian Gulf.",
    location: "Dubai South (Expo City Corridors), UAE",
    image: "/images/achievement-substation-record.jpg",
    referenceCode: "BSG-AWD-DEWA-2024-41",
    keyMetrics: [
      { label: "Safe Man-Hours", value: "2.4 Million" },
      { label: "Lost-Time Incidents", value: "0 (Zero LTI)" },
      { label: "Substations Commissioned", value: "3 Facilities" },
      { label: "Peak Voltage Tested", value: "132 kV EHV" }
    ],
    executiveQuote: {
      quote: "Our engineers returned home safely every single day while energizing critical power grids in extreme desert summer temperatures. That is true engineering triumph.",
      speaker: "Chief Engineering Officer",
      designation: "IGTS Technical Services & Best Star Power"
    }
  },
  {
    id: "dso-green-building-trophy",
    title: "Dubai Silicon Oasis Commercial Energy Efficiency Leadership Trophy",
    year: "2024",
    category: "Sustainability & ESG",
    badge: "DSO Green Complex Trophy",
    awardingBody: "Dubai Integrated Economic Zones Authority (DIEZ / DSO)",
    summary: "Recognized for deploying smart chilled water optimization across commercial complexes, reducing annualized HVAC electricity consumption by 24.3% in line with UAE Net Zero 2050.",
    fullDossier: "Best Star Facility Management received top honors in the Commercial Energy Conservation category from the Dubai Integrated Economic Zones Authority. By retrofitting variable-frequency drives (VFDs), algorithmic chiller sequencing, and thermal predictive telemetry across 8.5 million square feet of managed real estate, the facility team eliminated 1,420 metric tons of carbon emissions annually, providing substantial utility cost savings to corporate tenants.",
    significance: "Validates Best Star Group's operational readiness for UAE Net Zero 2050 directives and positions the group as an accredited Energy Service Company (ESCo) partner.",
    location: "Dubai Silicon Oasis, UAE",
    image: "/images/achievement-facility-green.jpg",
    referenceCode: "BSG-AWD-DSO-2024-18",
    keyMetrics: [
      { label: "Energy Reduction", value: "24.3% YoY" },
      { label: "Carbon Offset", value: "1,420 Tons CO2e" },
      { label: "Managed Assets", value: "8.5M Sq. Ft" },
      { label: "Chiller Efficiency", value: "0.68 kW/Ton" }
    ],
    executiveQuote: {
      quote: "Intelligent asset management does not just protect client equipment—it fundamentally preserves the environmental future of our shared desert home.",
      speaker: "Head of Facility Engineering",
      designation: "Best Star Facility Management"
    }
  },
  {
    id: "corporate-growth-holding-award",
    title: "MENA Conglomerate Enterprise Growth & Cross-Border Expansion Award",
    year: "2025",
    category: "Corporate Growth & Logistics",
    badge: "MENA Enterprise Leader",
    awardingBody: "Arabian Business Council & Middle East Trade Forum",
    summary: "Honored for multi-sector capital allocation, scaling from 3 to 10 operating entities across 4 countries with zero external holding debt and continuous profitability since 2008.",
    fullDossier: "Presented at the Dubai World Trade Centre gala, this accolade celebrates Best Star Group's disciplined private equity model and sustained international expansion. Over nearly two decades, the holding group expanded its operational footprint from its UAE foundation into Saudi Arabia, India, and Malaysia, deploying retained corporate earnings into synergistic high-margin verticals without encumbering operating balance sheets with speculative external debt.",
    significance: "Solidifies Best Star Group Holding FZE as a benchmark institutional family holding group with investment-grade operational governance.",
    location: "Dubai & Riyadh, GCC",
    image: "/images/achievement-corporate-growth.jpg",
    referenceCode: "BSG-AWD-MENA-2025-03",
    keyMetrics: [
      { label: "Operating Entities", value: "10 Subsidiaries" },
      { label: "Regional Hubs", value: "4 Countries" },
      { label: "Specialized Staff", value: "1,500+ Experts" },
      { label: "Financial Health", value: "Zero Holding Debt" }
    ],
    executiveQuote: {
      quote: "We believe in authentic equity, patient compounding, and building generational industrial enterprises that outlast economic cycles.",
      speaker: "Ibunu Suwoothu Kamal",
      designation: "Chairman & Founder, Best Star Group"
    }
  },
  {
    id: "make-trust-philanthropy-milestone",
    title: "MAKE Trust Foundation 25,000 Free Biometrics & Education Milestone",
    year: "2023",
    category: "Social Impact & Philanthropy",
    badge: "CSR & Community Impact",
    awardingBody: "Global Diaspora Philanthropy Council & Medical Federation",
    summary: "Best Star Group's philanthropic wing completed 25,000 free preventative biometric health screenings for blue-collar workers and endowed 1,200 higher education scholarships.",
    fullDossier: "The MAKE Trust, endowed and privately funded by Best Star Group Holding FZE, achieved historic milestones in community health equity and digital education. Through mobile biometric diagnostic clinics staffed by Win Path Labs and Best Star Pharma volunteers, the foundation delivered preventative diabetes, hypertension, and vision checkups to over 25,000 frontline workers across industrial accommodations in the UAE and underserved rural regions of India, alongside distributing 1,200 merit-based academic scholarships.",
    significance: "Demonstrates that corporate prosperity and humanitarian fiduciaries are inextricably linked across every enterprise under the Best Star umbrella.",
    location: "UAE & India",
    image: "/images/achievement-make-trust-csr.jpg",
    referenceCode: "BSG-AWD-CSR-2023-77",
    keyMetrics: [
      { label: "Free Screenings", value: "25,000+ Workers" },
      { label: "Full Scholarships", value: "1,200+ Scholars" },
      { label: "Mobile Clinics", value: "18 Outreaches" },
      { label: "Charitable Fund", value: "AED 4.5M Invested" }
    ],
    executiveQuote: {
      quote: "True legacy is measured not by corporate balance sheets, but by the dignity and health restored to the hardworking builders of our society.",
      speaker: "Ibunu Suwoothu Kamal",
      designation: "Founder & Trustee, The MAKE Trust"
    }
  },
  {
    id: "fleet-safety-15m-km",
    title: "Federal Transport Authority 15 Million Safe Kilometers Fleet Award",
    year: "2024",
    category: "Corporate Growth & Logistics",
    badge: "Fleet Safety Benchmark",
    awardingBody: "UAE Federal Transport Authority & Sharjah Police Directorate",
    summary: "Conferred to Best Star Transport and Al Saqer Passenger Buses for completing 15 million passenger transit kilometers without a single major collision across 2022-2024.",
    fullDossier: "With an operational fleet of more than 1,200 luxury and passenger buses transporting over 45,000 corporate staff, aviation crew, and school students daily across the UAE, Best Star Transport was recognized by federal transport and traffic authorities for maintaining a 100% collision-free safety record over 15 million recorded telematics kilometers. The distinction recognizes our in-house driver simulation academy, computerized speed governors, and 24/7 GPS speed and fatigue monitoring control center.",
    significance: "Positions Best Star Transport as the premier trusted fleet partner for federal entities, multinational airlines, and global EPC contractors across the Emirates.",
    location: "Sharjah, Dubai & Abu Dhabi, UAE",
    image: "/images/achievement-logistics-fleet.jpg",
    referenceCode: "BSG-AWD-FTA-2024-52",
    keyMetrics: [
      { label: "Safe Kilometers", value: "15,000,000+ Km" },
      { label: "Active Fleet", value: "1,200+ Coaches" },
      { label: "Major Collisions", value: "0 (Zero Incidents)" },
      { label: "Daily Commuters", value: "45,000+ People" }
    ],
    executiveQuote: {
      quote: "Every passenger on a Best Star bus is someone's family member. Our drivers are trained to hold that sacred responsibility on every single journey.",
      speaker: "Director of Fleet Operations",
      designation: "Best Star Transport L.L.C"
    }
  }
];


