
import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Mail, 
  Phone, 
  MessageCircle, 
  ExternalLink, 
  Share2, 
  Globe, 
  Briefcase, 
  Shield, 
  Award,
  Star,
  UserCheck,
  Activity,
  Download,
  Sparkles,
  Check,
  BookOpen,
  HelpCircle,
  FileSearch,
  Users,
  Scale,
  Zap,
  Clock,
  Navigation
} from 'lucide-react';

export const Icons = {
  ShieldCheck,
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  ExternalLink,
  Share2,
  Globe,
  Briefcase,
  Shield,
  Award,
  Star,
  UserCheck,
  Activity,
  Download,
  Sparkles,
  Check,
  BookOpen,
  HelpCircle,
  FileSearch,
  Users,
  Scale,
  Zap,
  Clock,
  Navigation
};

export const BIZ_INFO = {
  name: "North Mississippi Notary Bureau",
  siteUrl: 'https://northmsnotary.com',
  email: 'notary@northmsnotary.com',
  phone: '601-327-8333',
  hub: "Tillatoba, MS 38961",
  geo: { lat: 34.0154, lng: -89.8851 }
};

export const HUBS = [
  { id: '1', name: 'Oxford', zip: '38655' },
  { id: '2', name: 'Tillatoba', zip: '38961' },
  { id: '3', name: 'Grenada', zip: '38901' },
  { id: '4', name: 'Batesville', zip: '38606' },
  { id: '5', name: 'Charleston', zip: '38921' },
  { id: '6', name: 'Water Valley', zip: '38965' },
  { id: '7', name: 'Coffeeville', zip: '38922' },
  { id: '8', name: 'Sardis', zip: '38666' },
  { id: '9', name: 'Como', zip: '38619' },
  { id: '10', name: 'Abbeville', zip: '38601' }
];

export const FULL_REGIONAL_INDEX = [
  "Oxford, MS 38655", "Tillatoba, MS 38961", "Grenada, MS 38901", "Batesville, MS 38606",
  "Charleston, MS 38921", "Water Valley, MS 38965", "Coffeeville, MS 38922", "Sardis, MS 38666",
  "Como, MS 38619", "Abbeville, MS 38601", "Taylor, MS 38673", "University, MS 38677",
  "Holcomb, MS 38940", "Elliott, MS 38926", "Gore Springs, MS 38929", "Tie Plant, MS 38960",
  "Philipp, MS 38950", "Cascilla, MS 38920", "Tippo, MS 38962", "Vance, MS 38964",
  "Glendora, MS 38928", "Pope, MS 38658", "Crenshaw, MS 38621", "Crowder, MS 38622",
  "Oakland, MS 38948", "Enid, MS 38927", "Scobey, MS 38953", "Tutwiler, MS 38963",
  "Webb, MS 38966", "Sumner, MS 38957", "Courtland, MS 38620", "Lambert, MS 38643",
  "Marks, MS 38646", "Falcon, MS 38628", "Bruce, MS 38915", "Pittsboro, MS 38951",
  "Vardaman, MS 38878", "Derma, MS 38839", "Calhoun City, MS 38916", "Slate Springs, MS 38957",
  "Big Creek, MS 38914", "Quitman County, MS", "Tallahatchie County, MS", "Yalobusha County, MS",
  "Grenada County, MS", "Lafayette County, MS", "Panola County, MS", "Calhoun County, MS"
];

export const MASTER_COUNTY_LIST = [
  {
    county: "Lafayette",
    hubs: [{ name: "Oxford", zip: "38655" }, { name: "Abbeville", zip: "38601" }, { name: "Taylor", zip: "38673" }, { name: "University", zip: "38677" }],
    communities: ["Denmark (38655)", "Springdale (38655)", "Yocona (38655)", "Paris (38949)", "Tula (38655)", "Harmontown (38619)", "Lafayette Springs (38601)", "Splinter (38655)", "Etta (38627)"]
  },
  {
    county: "Grenada",
    hubs: [{ name: "Grenada", zip: "38901" }, { name: "Holcomb", zip: "38940" }],
    communities: ["Elliott (38926)", "Gore Springs (38929)", "Tie Plant (38960)", "Bew Springs (38901)", "Dubard (38901)", "Glenwild (38901)", "Hardy (38901)", "LeFlore (38935)", "Oxberry (38901)"]
  },
  {
    county: "Tallahatchie",
    hubs: [{ name: "Charleston", zip: "38921" }, { name: "Sumner", zip: "38957" }, { name: "Webb", zip: "38966" }, { name: "Tutwiler", zip: "38963" }],
    communities: ["Philipp (38950)", "Cascilla (38920)", "Tippo (38962)", "Paynes (38921)", "Brazil (38957)", "Enid Dam (38927)", "Minter City (38944)", "Swan Lake (38966)", "Teasdale (38921)", "Vance (38964)", "Glendora (38928)"]
  },
  {
    county: "Panola",
    hubs: [{ name: "Batesville", zip: "38606" }, { name: "Sardis", zip: "38666" }, { name: "Como", zip: "38619" }, { name: "Courtland", zip: "38620" }],
    communities: ["Pleasant Grove (38666)", "Longtown (38666)", "Curtis Station (38606)", "Ballentine (38666)", "Locke Station (38606)", "Falcon (38628)", "Pope (38658)", "Crenshaw (38621)", "Crowder (38622)"]
  },
  {
    county: "Yalobusha",
    hubs: [{ name: "Coffeeville", zip: "38922" }, { name: "Water Valley", zip: "38965" }, { name: "Oakland", zip: "38948" }, { name: "Tillatoba", zip: "38961" }],
    communities: ["Enid (38927)", "Scobey (38953)", "Sylva Rena (38965)", "Jeffries (38922)", "Torrance (38922)", "Gums (38922)"]
  },
  {
    county: "Calhoun",
    hubs: [{ name: "Bruce", zip: "38915" }, { name: "Pittsboro", zip: "38951" }, { name: "Calhoun City", zip: "38916" }],
    communities: ["Vardaman (38878)", "Derma (38839)", "Slate Springs (38957)", "Big Creek (38914)"]
  }
];

export const SERVICE_MATRIX = [
  { 
    title: "Loan Signing Agent", 
    desc: "Precision-guided real estate and mortgage closings.",
    longDesc: "Expert facilitation of comprehensive mortgage loan packages including FHA, VA, Conventional, Refinances, Purchases, and HELOCs. We serve as the vital liaison between the lender, title company, and borrower, ensuring a flawless closing experience.",
    useCases: [
      "Residential mortgage refinances for Oxford and University residents.",
      "New home purchase closings in the rapidly growing Grenada districts.",
      "Home Equity Line of Credit (HELOC) signings for Panola County homeowners.",
      "Commercial real estate closings in industrial zones across North MS."
    ],
    benefits: [
      "Error-free document execution prevents costly funding delays.",
      "In-depth knowledge of complex loan docs (CD, Note, Deed of Trust).",
      "Impartial, professional third-party witness at the closing table.",
      "High-speed dual-tray printing and secure mobile scanning capabilities."
    ]
  },
  { 
    title: "Mobile General Notary", 
    desc: "Door-to-door legal document authentication.",
    longDesc: "Rapid-response mobile services for critical legal instruments. We bring the 'Notary Office' directly to your residence, place of business, or a public location of your choosing, ensuring total convenience.",
    useCases: [
      "Durable Power of Attorney for family legal planning.",
      "Last Will and Testament signings at private residences.",
      "Affidavits, Oaths, and Affirmations for legal proceedings.",
      "Automobile title transfers and bill of sale notarization."
    ],
    benefits: [
      "Saves time by eliminating travel to a physical office.",
      "Available after-hours and on weekends for urgent needs.",
      "Comfortable signing environment in your own home or office.",
      "Direct verification of signer identity and willingness."
    ]
  },
  { 
    title: "Clinical Notary Units", 
    desc: "Hospital and hospice bedside documentation.",
    longDesc: "Compassionate and professional service for patients in medical facilities. We understand the sensitivity and urgency required for healthcare directives and powers of attorney.",
    useCases: [
      "Advance Healthcare Directives at Baptist Memorial Hospital-North MS.",
      "Medical Power of Attorney at Grenada area health centers.",
      "Living Will execution for hospice and palliative care patients.",
      "Emergency document witnessing for surgical consent."
    ],
    benefits: [
      "Respectful, patient-centric approach in medical settings.",
      "Thorough vetting of signer awareness and mental capacity.",
      "Familiarity with hospital security and visitation protocols.",
      "Rapid deployment for time-sensitive healthcare decisions."
    ]
  },
  { 
    title: "Estate & Trust Services", 
    desc: "Secure witness for wealth and legacy planning.",
    longDesc: "Specialized support for estate planning attorneys and their clients. We provide high-integrity witnessing for complex trusts, deeds, and legacy documents.",
    useCases: [
      "Irrevocable Trust signatures for wealth management clients.",
      "Quitclaim deeds and property transfers for family estates.",
      "Safe deposit box inventory witnessing for probate.",
      "Guardian appointments and parental consent forms."
    ],
    benefits: [
      "Discreet and professional handling of sensitive financial info.",
      "GLBA-compliant privacy protocols for all client data.",
      "Expertise in multi-document estate planning binders.",
      "Consistent communication with legal counsel for seamless execution."
    ]
  },
  { 
    title: "Global/Apostille Support", 
    desc: "Authentication for international legal use.",
    longDesc: "Preparation and notarization of documents destined for foreign jurisdictions. We ensure your paperwork meets the strict requirements for international acceptance.",
    useCases: [
      "Foreign adoption paperwork for international agencies.",
      "Educational transcripts and diplomas for students going abroad.",
      "Power of Attorney for international real estate transactions.",
      "Corporate bylaws and certificates for foreign business operations."
    ],
    benefits: [
      "Knowledge of Mississippi Secretary of State Apostille requirements.",
      "Precision notarization prevents document rejection by state authorities.",
      "Assistance with multi-lingual signers and translated documents.",
      "Guidance on the proper order of authentication steps."
    ]
  },
  { 
    title: "Identity Verification", 
    desc: "Authorized I-9 and identity vetting bureau.",
    longDesc: "Serving as an authorized representative for remote employee onboarding and secure identity verification. We help businesses comply with federal employment eligibility requirements.",
    useCases: [
      "Form I-9 verification for remote employees in the North MS region.",
      "Identity proofing for secure government or corporate access.",
      "Background check consent and fingerprinting authorization.",
      "Student athlete residency and eligibility verification."
    ],
    benefits: [
      "Reduces HR overhead by handling remote verification locally.",
      "Ensures compliance with USCIS Form I-9 guidelines.",
      "Convenient for employees who live far from headquarters.",
      "Professional identity vetting mitigates risk of fraud."
    ]
  }
];

export const KNOWLEDGE_BASE = [
  {
    category: "Notary Fundamentals",
    faqs: [
      { q: "What is a Mobile Notary?", a: "A mobile notary is a commissioned official who travels to a client's location to perform notarial acts. This is ideal for individuals who cannot easily visit an office or require services outside of standard business hours." },
      { q: "What identification is required?", a: "Signers must present a valid, government-issued photo ID, such as a driver's license, passport, or military ID. The ID must be current and the name must match the document being signed." },
      { q: "Can a notary give legal advice?", a: "No. Notaries are impartial witnesses and are strictly prohibited by law from providing legal advice, explaining document contents, or drafting legal instruments unless they are also a licensed attorney." }
    ]
  },
  {
    category: "Loan Signing Specialty",
    faqs: [
      { q: "What is a Loan Signing Agent (LSA)?", a: "An LSA is a notary specifically trained to handle mortgage loan documents. They ensure all signatures, initials, and dates are captured correctly so the loan can be funded without delay." },
      { q: "Do you offer dual-tray printing?", a: "Yes. Our mobile units are equipped with high-speed dual-tray laser printers to handle legal and letter-sized documents required for professional loan packages." },
      { q: "What counties do you cover for closings?", a: "We provide priority coverage for Lafayette, Grenada, Panola, Tallahatchie, and Yalobusha counties, with extended service available upon request." }
    ]
  },
  {
    category: "International & Apostille",
    faqs: [
      { q: "What is an Apostille?", a: "An Apostille is a certificate issued by the Secretary of State that authenticates the seal and signature of a notary for use in foreign countries that are members of the Hague Convention." },
      { q: "Can you help with the Apostille process?", a: "We provide the initial notarization required for the document. While we don't 'issue' the Apostille, we can guide you on the submission process to the Mississippi Secretary of State." },
      { q: "Do you notarize foreign language documents?", a: "Yes, provided the notarial certificate itself is in English and the signer can communicate directly with the notary or via a qualified translator as per MS law." }
    ]
  }
];
