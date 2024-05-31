import {
  blackWallpaperImg,
  blueWallpaperImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteWallpaperImg,
  yellowWallpaperImg,
} from "../utils";

export const navLists = ["Store", "Mac", "iPhone", "Support"];

export const highlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro AI.",
      "Neural processing chip.",
      "Groundbreaking performance.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong.  So light.  So Pro."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 16 Pro Max has the",
      "longest AI powered zoom in",
      "iPhone ever. Far out.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: [
      "All-new AI features powered by Action button.",
      "What will yours do?.",
    ],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 16 Pro AI in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowWallpaperImg,
  },
  {
    id: 2,
    title: "iPhone 16 Pro AI in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueWallpaperImg,
  },
  {
    id: 3,
    title: "iPhone 16 Pro AI in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteWallpaperImg,
  },
  {
    id: 4,
    title: "iPhone 16 Pro AI in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackWallpaperImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];
