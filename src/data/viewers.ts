export interface Viewer {
  name: string;
  image: string;
  message: string;
  caption: string;
}

// Add or remove entries here — every other component reads from this array.
// `image` can be any path in /public or a full URL.
export const viewers: Viewer[] = [
  {
    name: "Friend 1",
    image: "/images/friend1.svg",
    message: "Oh. You found this too. Please keep your opinions to yourself.",
    caption: "Official apology witness",
  },
  {
    name: "Friend 2",
    image: "/images/friend2.svg",
    message: "Okay, before you judge me, at least read the whole thing.",
    caption: "Jury of one",
  },
  {
    name: "Friend 3",
    image: "/images/friend3.svg",
    message: "Congratulations. You are now an official witness to my apology.",
    caption: "Reluctant witness",
  },
  {
    name: "Friend 4",
    image: "/images/friend4.svg",
    message: "Yes, I know how this looks. No, I will not be taking questions.",
    caption: "Character reference, allegedly",
  },
  {
    name: "Friend 5",
    image: "/images/friend5.svg",
    message: "I built you a whole website. Please clap.",
    caption: "Exhibit A",
  },
];

export const defaultViewerIndex = 0;
