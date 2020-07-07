interface Sponsor {
  name: "apple";
  url: "apple.com";
  imgURL: "link-to-image";
}

interface Event {
  name: "event name";
  description: "this is an event";
  imgURL?: "link-to-event-image";
  order: "ordering of the event";
}

interface WebsiteData {
  Sponsors: Sponsor[];
  Events: Event[];
  Extra: {
    [key]: any;
  };
}

interface DayOfEvent {
  name: "name";
  type: "meal" | "workshop";
  time: "time/day its happening";
}

interface DayOfData {
  Events: DayOfEvent[];
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
  DayOf: DayOfData;
}

interface FAQ {
  question: string;
  answer: string;
  hackathonIDs: string[]; // Must be one of the hackathon IDs
}

interface Root {
  Hackathons: Hackathon[];
  FAQ: FAQ[];
  HackathonIDs: string[]; //List of all the hackathons we have
}
