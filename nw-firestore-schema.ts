type Tiers = inKind | bronze | silver | gold | platinum 

interface Sponsor {
  name: "apple";
  url: "apple.com";
  imgURL: "link-to-image";
  imgName: "name of image in storage";
  lastmod: Date().toLocaleString();
  lastmodBy: "username";
  teir: Tiers = "platinum";
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
  commonLink: boolean;
}

interface DayOfEvent {
  name: "name";
  type: "meal" | "workshop" | "hacking";
  startTime: "July 8, 2020 at 12:00:00PM UTC-7";
  endTime: "July 8, 2020 at 2:00:00PM UTC-7";
}

interface Application {
  name: "john doe";
  longAnswer: "blablabla";
}

interface Hacker {
  name: "john doe";
  email: "something";
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

interface Root {
  Hackathons: Hackathon[];
  FAQ: FAQ[];
}
