type Tiers = inKind | bronze | silver | gold | platinum 

interface Sponsor {
  name: "apple";
  url: "apple.com";
  imgURL: "link-to-image";
  imgName: "name of image in storage";
  lastmod: Date().toLocaleString();
  lastmodBy: "username";
  tier: Tiers = "platinum";
}

interface Event {
  name: "event name";
  description: "this is an event";
  imgURL?: "link-to-event-image";
  order: "ordering of the event";
  
}

interface WebsiteData {
  [key]: any;
  startTime: string;
  endTime: string;
  //eg
  Intro: {
    title: "Intro",
    content: "Come make things and break things, and then make them cooler. You'll never be short on inspiration when you're surrounded by 650 of the brightest minds in the Pacific Northwest. All you need to bring is an open mind and an insatiable desire to learn; we'll take care of the rest. After all, we're western Canada's largest hackathon - we make the west coast the best coast",
    editor: "Derek Chen",
    header: "This is nwHacks 2019",
    time: "July 14, 2020 at 10:30:03 AM UTC-7",
    imgURL: "link"
  },
  otherSection: {
    title: "Other Text Section(s)",
    content: "Vancouver is breathtaking and so are you",
    editor: "Ian Mah",
    header: "Why nwHacks?",
    time: "July 8, 2020 at 12:00:00PM UTC-7",
    imgURL: "link"
  }
}

interface Quicklink {
  label: string;
  href: string;
  category: string;
  common: boolean;
}

interface Prize {
  place: number | boolean; // number if a main prize, false if sponsor prize
  sponsor: string;
  title: string;
  content: string[]; 
}

interface DayOfEvent {
  name: "name";
  type: "notices" | "main" | "workshops" | "minievents";
  delayed: boolean;
  startTime: "July 8, 2020 at 12:00:00PM UTC-7";
  endTime: "July 8, 2020 at 2:00:00PM UTC-7";
  description: string;
}

type EducationLevels = highSchool | undergraduate | graduate | professional | doctorate

type HackerRoles = developer | designer | hardware | product | data | business | other

type Engagements = facebook | instagram | twitter | medium | linkedin | event

type ApplicationStatus = applied | accepted | rejected | waitlisted | inProgress

interface Application {
  _id: string;  // same as user ID
  projectsAssigned: string[] // project ids
  basicInfo: {
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    ethnicity: string[];
    isOfLegalAge: boolean;
    phoneNumber: string;
    school: string;
    major: string;
    educationLevel: EducationLevels = "bachelors";
    graduation: number;
    hackathonsAttended: number;
    contributionRole: HackerRoles;
    location: string;
  },
  skills: {
    resume: string; // link to resume (pdf, docx, etc.) stored on firebase
    portfolio: string;
    linkedin: string;
    github: string;
    longAnswers: {
      ["question number"]: string;
    }; // hackers will have either one or two questions depending on their role
  },
  questionnaire: {
    engagementSource: Engagements;
    eventsAttended: string[];
  },
  submission: {
    lastUpdated: timestamp;
    submitted: boolean;
  },
  status: {
    applicationStatus: ApplicationStatus = "applied";
    responded: boolean | false; // using responded and attending to check if they un-RSVPed or if they didn't RSVP at all (no RSVP)
    attending: boolean | false; // false for no-rsvp by default
  }
  team: reference;
}
// Stats are incomplete, I'd like to collect more data but for now this is all I could think of
interface Stats {
  EventStats: {
    ["event name"]: { "relevant-stats" };
  };
}

interface Hackathon {
  id: "lhd"; //(example)
  Applicants: Application[];
  Hackers: Hacker[];
  WebsiteData: WebsiteData;
  Sponsors: Sponsor[];
  Events: Event[];
  DayOf: DayOfEvent[];
  Announcements: Announcement[];
  Quicklinks: Quicklink[];
  Prizes: Prize[];
}

interface Announcement {
  title: string;
  content: string;
  timestamp: number; // ie Date.now()
  priority: string;
  editor: string;
}

interface FAQ {
  question: string;
  answer: string;
  category: string;
  hackathonIDs: string[]; // Must be one of the hackathon IDs
  lastModified: string;
  lastModifiedBy: string;
}

interface CMS {
  offUntilDate: timestamp | boolean;
}

interface InternalWebsites {
  CMS: CMS;
  Livesite: Livesite;
}

interface Root {
  Hackathons: Hackathon[];
  FAQ: FAQ[];
  InternalWebsites: InternalWebsites;
}

interface Livesite {
  imgURL: string; // url to logo image
  activeHackathon: string; // hackathon ID
  judgingOpen: boolean; // particpants can judge other projects
  judgingReleased: boolean; // participants can see their judging results
  submissionsOpen: boolean; // participants can submit projects
  applicationsOpen: boolean; // hackers can start applying
  hackathonStart: string // ISO Date string
  hackathonEnd: string // ISO Date string
  hackingStart: string // ISO Date string
  hackingEnd: string // ISO Date string
}

interface Grade {
  tech: number
  design: number
  functionality: number
  creativity: number
  pitch: number
  notes: string
  submittedBy: string // applicant key / user uid
}

interface Project {
  grades: map // grade objects
  acknowledged: boolean // devpost checkbox for "Has added all teammates to devpost"
  countAssigned: number
  sponsorPrizes: string[]
  teamMembers: string[]
  teamMembersEmails: string[]
  title: string
  description: string
  youtubeUrl: string
  devpostUrl: string
}
